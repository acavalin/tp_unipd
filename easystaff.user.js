// ==UserScript==
// @name        EasyStaff applications enhancements (unipd)
// @namespace   camelsoft
// @description Miglioramenti ai software di EasyStaff
// @include     https://gestionedidattica.unipd.it/Aule/index.php*
// @include     https://gestionedidattica.unipd.it/PresenzeStudenti/Corsi.php*
// @icon        data:image/x-icon;base64,R0lGODlhEAAQAMQAAP/////39/f39/fv7+/v7/fe3t7e3ua9vb29va2trdaclJycnISEhHt7e71aSmNjY7VCKVJSUkJCQjo6OjExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAQABAAAAVkICCOZCkeSqoEJulAMFS041vcY0PtUSK+pZ1w94tBAIydD7CgFB1QQIQ4IhRJj90kYa0dR4ghZdJ9QR0DpJgiALxiM4AgkVW2DKQwZdGKNEYJOwh9PBI7EjQJE0MRNCMCBngjIQA7
// @downloadURL https://github.com/acavalin/tp_unipd/raw/main/easystaff.user.js
// @version     1.2.1
// @grant       none
// @license     GPLv3
// ==/UserScript==

// NB: queste due direttive non servono perche' la pagina ha gia' jQuery
// require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
//jQuery.noConflict();

(function ($) { $(function () {
  // riquadro credits + links
  if ($('#acavalin').length == 0) {
    var links_hp     = '<a style="text-decoration: underline !important;" href="https://acavalin.com/" target="_blank">A.Cavalin</a>',
        links_script = '<a style="text-decoration: underline !important;" href="https://github.com/acavalin/tp_unipd" target="_blank">ES script</a>',
        links_css    = 'position: fixed; top: 0.5rem; left: 43%; padding: 0.3rem 0.6rem; z-index: 65000;'+
          'background: linear-gradient(to bottom, rgb(249, 249, 249) 0%, rgb(241, 241, 241) 100%);'+
          'border-radius: 0.5rem; border: 1px outset red;';
    $('<div id="acavalin" style="'+links_css+'">'+links_script+' by '+links_hp+'</div>').appendTo('body');
  }//if
  
  $.er_enh = {}

  // EasyRoom
  if (location.search.includes('content=gestore_scuole')) {
    function get_csv_by_row(image_id) {
      var lbl_scuola = $('img#'+image_id).parent().prev().text().trim(),
          box_id = image_id.replace('parent_', ''),
          csv_text = '';

      $(".infoBox[id='"+box_id+"']").find('p + ul').each(function (ul_idx) {
         var lbl_strutt = $(this).prev().text().replace('Struttura didattica: ', '').trim();
         csv_text += "\n" + $(this).children('li').map(function () {
           return lbl_scuola + "\t" + lbl_strutt + "\t" + $(this).text() + "\t" + $(this).text().substr(-7,6);
         }).get().join("\n");
      });

      return csv_text.trim();
    }//get_csv_by_row

    $.er_enh.copy_csv = function (image_id) {
      navigator.clipboard.writeText( get_csv_by_row(image_id) );
    }//$.er_enh.copy_csv

    $.er_enh.copy_all_csv = function () {
      var csv_text = ''
      $('td img[id^="parent_details_EC_"]').each(function (img_idx) { csv_text += "\n" + get_csv_by_row( $(this).attr('id') ); });
      navigator.clipboard.writeText(csv_text.trim());
    }//$.er_enh.copy_all_csv

    // inserisci pulsante per copiare un CSV del popup con l'elenco dei corsi per ogni struttura
    $('td img[id^="parent_details_EC_"]').each(function (img_idx) {
      $(this).after('<a href="#" onclick="$.er_enh.copy_csv(\''+$(this).attr('id')+'\'); return false" title="copia negli appunti un CSV dei dati mostrati nel popup">CSV</a>');
    });

    // inserisci pulsante per copiare un CSV coi dati da tutti i popup di ogni scuola
    $('table#ScuoleListCheck tr:first th:nth-child(2)').
      after('<a href="#" onclick="$.er_enh.copy_all_csv(); return false" title="copia negli appunti un CSV con tutti i dati nei popup delle scuole">CSV</a>');
  }// EasyRoom -- location includes "content=gestore_scuole"
  
  
  // EasyBadge
  if (location.search.includes('action=FrequenzeLezione') && location.search.includes('id_lezione=')) {
    var posti = $('input.form-control[name="posto"]'),
        tbody = posti.eq(0).parents('tbody:first');
    
    // evidenzia righe con lo stesso codice posto
    for (var i = 0; i < posti.length; i++) {
      if (posti.eq(i).data('doppione') || posti.eq(i).val().toLowerCase() == 'xxx')
        continue;
      
      for (var j = i+1; j < posti.length; j++) {
        if (posti.eq(j).data('doppione') || posti.eq(j).val().toLowerCase() == 'xxx')
          continue;
        
        if (posti.eq(i).val() == posti.eq(j).val())
          posti.eq(i).add( posti.eq(j) ).
            data('doppione', true).
            // evidenzia riga e spostala in testa alla tabella
            parents('tr').css('background-color', 'lightpink').insertBefore(tbody);
      }//for
    }//for
  }// EasyBadge -- location includes "action=FrequenzeLezione"
});})(jQuery);
