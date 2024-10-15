// ==UserScript==
// @name        EasyStaff applications enhancements (unipd)
// @namespace   camelsoft
// @description Miglioramenti ai software di EasyStaff
// @include     https://gestionedidattica.unipd.it/MODA/index.php*
// @include     https://gestionedidattica.unipd.it/Aule/index.php*
// @include     https://gestionedidattica.unipd.it/PresenzeStudenti/Corsi.php*
// @icon        data:image/x-icon;base64,R0lGODlhEAAQAMQAAP/////39/f39/fv7+/v7/fe3t7e3ua9vb29va2trdaclJycnISEhHt7e71aSmNjY7VCKVJSUkJCQjo6OjExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAHAP8ALAAAAAAQABAAAAVkICCOZCkeSqoEJulAMFS041vcY0PtUSK+pZ1w94tBAIydD7CgFB1QQIQ4IhRJj90kYa0dR4ghZdJ9QR0DpJgiALxiM4AgkVW2DKQwZdGKNEYJOwh9PBI7EjQJE0MRNCMCBngjIQA7
// @downloadURL https://github.com/acavalin/tp_unipd/raw/main/easystaff.user.js
// @version     1.4.1
// @grant       GM_xmlhttpRequest
// @connect     didattica.unipd.it
// @connect     localhost
// @license     GPLv3
// ==/UserScript==

// https://www.tampermonkey.net/documentation.php?locale=en#api:GM_xmlhttpRequest
// https://www.tampermonkey.net/documentation.php?locale=en#meta:connect

// NB: queste due direttive non servono perche' la pagina ha gia' jQuery
// require     https://code.jquery.com/jquery-3.7.1.min.js
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

  $.easy_enh = {
    serialize_inputs: function (inputs) {
      var params = {};
      $.map(inputs.serializeArray(), function(p,i) { params[p.name] = p.value; });
      return params;
    },//serialize_inputs

    add_error: function (msg, target, options) {
      options ||= {}
      var div = $('<div style="font-weight: bold; background-color: '+(options.color || 'yellow')+'; padding: 0.2rem 0.4rem; margin-bottom: 0.2rem; border: 2px solid red; text-align: left; white-space: pre-wrap;"></div>');
      if (options.ttip) div.attr('title', options.ttip);
      options.html ? div.html(msg) : div.text(msg);
      div.insertBefore(target);
    },//add_error
    
    er: {
      cerca_assegnazioni_su_ufficio: function (mappa) {
        $('table#confirmReservationsListCheck tr:gt(0)').each(function (i, el) {
          var tr = $(el);
          var giorno  = tr.find('td:eq(2)').text().trim().substr(0,2);
          var [da, a] = tr.find('td:eq(3)').text().trim().split("\n")[0].substr(12).split(' - ');
          
          // inserisci mailto link
          var td_mail = tr.find('td:eq(7)');
          var [user, mail] = tr.find('td:eq(7)').text().trim().replace(/(.+) \((.+)\)/, "$1\t$2").split("\t");
          if (mail)
            $(`<a href="mailto:${mail}" target="_blank" title="invia email a\n${mail}">@${user}</a>`).appendTo( td_mail.empty() );
          else
            mail = tr.find('td:eq(7)').text().trim();
          
          var strutt_utente = mappa.utenti[mail] || [];
          td_mail.append('<br>').append( $('<i/>').text(strutt_utente.join(', ')) );
          
          // incapsula data richiesta per aggiungere i box
          var td_dr = tr.find('td:eq(9)').css('white-space', 'nowrap').find('br').replaceWith(' ').end();
          var msg = $('<div></div>').text( td_dr.text() ).appendTo( td_dr.empty() );
          
          // parsing colonna Aula ("aula [sede]")
          tr.find('td:eq(6)').text().trim().split(', ').map(function (i) {
            var [aula, sede] = i.replace(/(.+) \[(.+)\]/, "$1\t$2").split("\t");
            var fasce        = ((mappa.ass[sede] || {})[aula] || {})[giorno] || [];
            
            // prenotazione.inizio < fascia.fine && prenotazione.fine > fascia.inizio
            var num_strutt_non_proprie = 0;
            var strutture = fasce.
              filter(function (f, i) { return f.da < a && f.a > da; }).
              map(function(el,i){
                if (!strutt_utente.includes(el.s))
                  num_strutt_non_proprie += 1;
                return `${el.s} (${el.da}~${el.a})`;
              }).join("\n")
            
            if (strutture != '')
              $.easy_enh.add_error(strutture, msg, {ttip: i, color: num_strutt_non_proprie == 0 ? 'lightgreen' : 'orange'});
            
            //console.log([tr.find('td:eq(0)').text().trim(), aula, sede, fasce, giorno, da, a, strutture]);
          });

          // colonna aula: mostra una riga per elemento e nascondi ", "
          tr.find('td:eq(6)').contents().filter(function() { return this.nodeType == 3; /* #text */ }).remove();
          tr.find('td:eq(6) a').css('display', 'block');
          tr.find('td:eq(6)').css('white-space', 'nowrap');
        });
      }//cerca_assegnazioni_su_ufficio
    }//$.easy_enh.er
  };//$.easy_enh


  // --- EasyRoom --------------------------------------------------------------
  if (location.pathname == '/Aule/index.php') {
    // riabilita F5 per ricaricare la pagina
    if (typeof disable_f5 == 'function')
      $(document).off("keydown", disable_f5);

    if (location.search.includes('content=gestore_conferma_prenotazioni')) {
      var msg_app_uff = 'Errore lettura assegnazioni dall\'app <a href="https://ufficio.didattica.unipd.it" target="_blank">ufficio</a>! (Hai fatto il login?)';
      
      // allinea celle a sx
      $('table#confirmReservationsListCheck tr:gt(0) td').
        css('text-align', 'left').css('border-left', '1px dotted silver');
      
      // carica assegnazioni dall'app ufficio.didattica.unipd.it
      GM_xmlhttpRequest({
        method: 'GET',
        url: 'https://ufficio.didattica.unipd.it/er/bacheca/mappa_assegnazioni.json',
        nocache: true,
        responseType: 'json',
        onload:  function (resp) {
          if (resp.status == 200) {
            $.easy_enh.mappa = resp.response;
            $.easy_enh.er.cerca_assegnazioni_su_ufficio(resp.response);
            console.log("TP: mappa assegnazioni salvate in $.easy_enh.mappa");
          } else
            $.easy_enh.add_error(msg_app_uff, 'table#confirmReservationsListCheck', {html: true});
        },//onload
        onerror: function () { $.easy_enh.add_error(msg_app_uff, 'table#confirmReservationsListCheck', {html: true}); },
        onabort: function () { $.easy_enh.add_error(msg_app_uff, 'table#confirmReservationsListCheck', {html: true}); },
      });
    }// EasyRoom -- location includes "content=gestore_scuole"

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

      $.easy_enh.copy_csv = function (image_id) {
        navigator.clipboard.writeText( get_csv_by_row(image_id) );
      }//$.easy_enh.copy_csv

      $.easy_enh.copy_all_csv = function () {
        var csv_text = ''
        $('td img[id^="parent_details_EC_"]').each(function (img_idx) { csv_text += "\n" + get_csv_by_row( $(this).attr('id') ); });
        navigator.clipboard.writeText(csv_text.trim());
      }//$.easy_enh.copy_all_csv

      // inserisci pulsante per copiare un CSV del popup con l'elenco dei corsi per ogni struttura
      $('td img[id^="parent_details_EC_"]').each(function (img_idx) {
        $(this).after('<a href="#" onclick="$.easy_enh.copy_csv(\''+$(this).attr('id')+'\'); return false" title="copia negli appunti un CSV dei dati mostrati nel popup">CSV</a>');
      });

      // inserisci pulsante per copiare un CSV coi dati da tutti i popup di ogni scuola
      $('table#ScuoleListCheck tr:first th:nth-child(2)').
        after('<a href="#" onclick="$.easy_enh.copy_all_csv(); return false" title="copia negli appunti un CSV con tutti i dati nei popup delle scuole">CSV</a>');
    }// EasyRoom -- location includes "content=gestore_scuole"
  }// EasyRoom


  // --- MODA ------------------------------------------------------------------
  if (location.pathname.includes('/MODA/') && location.search.includes('content=gestore_ugov_import_launch')) {
    // nascondi pulsanti distruttivi mai usati, e aggiungi link per il loro toggle
    $(':submit').filter('[name="_qf_importUGOVForm_import_singolo"], [name="_qf_importUGOVForm_import_new_singolo"]').addClass('bt-import').hide();
    $('table#structuresTable tr:first th:nth-child(6)').
      append('<a href="#" onclick="jQuery(\':submit.bt-import\').toggle(); return false">👀<br>toggle</a>');

    //// sincronizza tutto in sequenza
    //$.easy_enh.sync_next = function () {
    //  var data = $.easy_enh.serialize_inputs($('#importUGOVForm input:not(:submit)'));
    //  var bt = $(':input[name="_qf_importUGOVForm_update_singolo"]:not(.sync-done):first');
    //
    //  var cur_data = $.extend({}, data); // clona dati di partenza
    //  cur_data.objectID = bt.attr('onclick').replace(/.+, *([0-9]+)\).*/, '$1');
    //  cur_data._qf_importUGOVForm_update_singolo = bt.val();
    //
    //  var tot  = $(':input[name="_qf_importUGOVForm_update_singolo"]').length;
    //  var done = $(':input[name="_qf_importUGOVForm_update_singolo"].sync-done').length + 1;
    //  $('#syncall-counter').text(' '+done+'/'+tot);
    //
    //  console.log(bt.parents('tr:first').find('td:first').text());
    //  console.log(cur_data);
    //
    //  GM_xmlhttpRequest({
    //    method: 'POST',
    //    data: cur_data,
    //    url: $('#importUGOVForm').attr('action'),
    //    onload:  $.easy_enh.sync_next,
    //    onerror: function () { alert('ERRORE: alla riga '+bt.parents('tr:first').find('td:first').text()); },
    //    onabort: function () { alert('ERRORE: alla riga '+bt.parents('tr:first').find('td:first').text()); }
    //  });
    //}//$.easy_enh.sync_all
    //
    //if (location.search.includes('sync_all=1')) $.easy_enh.sync_next();
  }// MODA -- content=gestore_ugov_import_launch


  // --- EasyBadge -------------------------------------------------------------
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
