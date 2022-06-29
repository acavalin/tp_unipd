// ==UserScript==
// @name        EasyStaff applications enhancements
// @namespace   camelsoft
// @description Miglioramenti ai software di EasyStaff
// @include     https://gestionedidattica.unipd.it/Aule/index.php*
// @icon        data:image/x-icon;base64,R0lGODlhEAAQAMQAAP/////39/f39/fv7+/v7/fe3t7e3ua9vb29va2trdaclJycnISEhHt7e71aSmNjY7VCKVJSUkJCQjo6OjExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAQABAAAAVkICCOZCkeSqoEJulAMFS041vcY0PtUSK+pZ1w94tBAIydD7CgFB1QQIQ4IhRJj90kYa0dR4ghZdJ9QR0DpJgiALxiM4AgkVW2DKQwZdGKNEYJOwh9PBI7EjQJE0MRNCMCBngjIQA7
// @version     1.0.0
// @grant       none
// ==/UserScript==

// NB: queste due direttive non servono perche' la pagina ha gia' jQuery
// require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
//jQuery.noConflict();

(function ($) { $(function () {
  $.er_enh = {}

  // EasyRoom
  if (location.search.includes('content=gestore_scuole')) {
    function get_csv_by_row(image_id) {
      var lbl_scuola = $('img#'+image_id).parent().prev().text().trim(),
          box_id = image_id.replace('parent_', ''),
          csv_text = '';

      $(".infoBox[id='"+box_id+"']").find('p + ul').each(function (ul_idx) {
         var lbl_strutt = $(this).prev().text().replace('Struttura didattica: ', '').trim();
         csv_text += "\n" + $(this).children('li').map(function () { return lbl_scuola + "\t" + lbl_strutt + "\t" + $(this).text() }).get().join("\n");
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
});})(jQuery);

