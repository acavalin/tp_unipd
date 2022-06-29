// ==UserScript==
// @name        OTRS enhancements (unipd old)
// @namespace   camelsoft
// @description Miglioramenti ad OTRS
// @include     https://otrs.cca.unipd.it/otrs/index.pl*
// @icon        data:image/png;base64,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
// @downloadURL https://github.com/acavalin/otrs_enhancements/raw/master/helpdesk_old.user.js
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @version     1.0.1
// @grant       none
// ==/UserScript==

// OLD: include     https://otrs.cca.unipd.it/otrs/index.pl?Action=AgentTicketZoom*

jQuery.noConflict();

(function ($) { $(function () {
// -----------------------------------------------------------------------------

function extend_uris () {
  $('a[title]:contains([..])').each(function () {
    $(this).text( $(this).attr('href') );
  });
}//extend_uris

// piccole migliorie per guadagnare spazio
$('#Header').height(20);
$('#Navigation').css('top','2px');
$('#Logo').hide();

// --- visualizzazione ticket --------------------------------------------------
if ($('#ArticleTableBody').length > 0) {
  // piccole migliorie per guadagnare spazio
  $('div.Headline').insertAfter('#DestQueueID').
    css('float', 'right').css('margin', '0 0 0 1em').
    find('h1 span').replaceWith(' -- ');
  
  // nascondi righe di sistema
  $('#ArticleTableBody tbody tr[class*="system-email-"]').hide();

  // ridimensiona lo scroller in modo da mostrare tutte le righe
  var rows = $('#ArticleTableBody tbody tr:visible');
  $('#ArticleTableBody div.Scroller').height(
    rows.length * parseInt(rows.filter(':first').height()) + 2
  );

  // mostra per esteso le email
  $('p.FixedValueSmall:contains(@)').each(function () {
    $(this).text( $(this).attr('title') );
  });

  //$('#ArticleTableBody tbody tr').live('click', function () {
  //  setTimeout(extend_uris, 1000);
  //  setTimeout(extend_uris, 2000);
  //  setTimeout(extend_uris, 3000);
  //});
  setInterval(extend_uris, 1000);

  // visualizza l'ultimo messaggio
  rows.filter(':last').click();
  
  // scambia nome-cognome nella colonna "DA"
  $('#ArticleTableBody tbody tr:visible td.From').each(function () {
    $(this).text(
      $(this).text().trim().replace(/^(\w+)\s([\w\s]+)$/,"$2 $1")
    );
  });
  
  // rendi visibile il telefono
  $('p:contains(049827)').each(function () {
    var tel = $(this).text().trim().replace(/049827(.+)/, '049.827.<b style="font-size: large">$1</b>');
    $(this).html(tel);
  });
  
  // rendi visibile il telefono
  $('p:contains(049821)').each(function () {
    var tel = $(this).text().trim().replace(/049821(.+)/, '049.<b style="font-size: large">821</b>&minus;<b style="font-size: large">$1</b>');
    $(this).html(tel);
  });
  
  // mostra storico sopra alle righe delle note
  var storico = $('<fieldset style="height: 40px; font-size: smaller; padding: 0 2px 6px 2px; border: 1px solid black; overflow-x: hidden; overflow-y: scroll;"><legend style="margin: 0 2em; padding: 0 0.5em">Storico del ticket</legend></fieldset>').
    insertBefore('#ArticleTableBody');
  $.get(
    $('a:contains(Storico)').attr('href'),
    function (resp) {
      $('#ArticleTableBody').css('border', '1px solid green');
      $(resp).find('table.DataTable:first').appendTo(storico);
      storico.find('tr').hide();
      var storico_height = storico.find('tr td:first-child').
        filter(':contains(Move), :contains(OwnerUpdate)').
        parent().show().
        length * 20;
      storico.height(storico_height > 100 ? 100 : storico_height);
    },//success
    'html'
  );
}//if


// --- ticket overview ---------------------------------------------------------
if ($('.OverviewBox h1:contains(Lista Ticket: Le mie Code)').length > 0) {
  // nascondi righe Supporto-call
  $('#OverviewBody tr[id^=TicketID] td:nth-child(9) div:contains(Supporto-call)').
    parent().parent().hide();
  
  // evidenzia righe non nostre
  $('#OverviewBody tr[id^=TicketID] td:nth-child(10) div').not(
    ':contains(Admin OTRS),'+
    ':contains(Minelli),'+
    ':contains(Cavalin)'
  ).parent().parent().
  addClass('di_altri').
  find('td').css('background-color', '#ddd');
  // evidenzia righe non mie
  $('#OverviewBody tr[id^=TicketID]:not(.di_altri) td:nth-child(10) div').not(
    ':contains(Admin OTRS),'+
    ':contains(Cavalin)'
  ).parent().parent().
  addClass('assegnate').
  find('td').css('background-color', '#FCE3FF');
  // sposta righe non mie in basso
  $('#OverviewBody tr.assegnate').appendTo( $('#OverviewBody tbody') );
  // sposta righe non nostre in basso
  $('#OverviewBody tr.di_altri').appendTo( $('#OverviewBody tbody') );
  
  // evidenzia utente e titolo
  $('#OverviewBody tr[id^=TicketID] td:nth-child(6)').each(function () {
    $(this).find('div:first').
      css('font-weight', 'bold').css('float', 'left').css('white-space', 'nowrap').
      css('padding-right', '0.5em');
    var t = $(this).find('div:last').css('white-space', 'wrap');
    t.text( t.attr('title') );
  });
  // unica linea per utente e titolo + stessa larghezza per l'utente
  var utenti   = $('#OverviewBody tr[id^=TicketID] td:nth-child(6) div:nth-child(1)'),
      utenti_w = utenti.map(function () { return $(this).outerWidth() }),
      utente_w = Math.max.apply(null, utenti_w);
  utenti.width(utente_w);
  
  // nascondi ultima colonna
  $('#OverviewBody thead th.Last').hide();
  $('#OverviewBody tr[id^=TicketID] td.Last').hide();
  // imposta larghezza minima per le celle mono-info
  $('#OverviewBody tr[id^=TicketID] td:nth-child(-n+5)').css('white-space','nowrap').attr('width', '1%');
  $('#OverviewBody tr[id^=TicketID] td:nth-child(n+7) ').css('white-space','nowrap').attr('width', '1%');
  // accorcia alcune scritte
  $('#OverviewBody thead tr th.Age a').text('Tempo'); // tempo trascorso
  $('#OverviewBody thead tr th.State a').text('St.'); // stato
  // dai un titolo alla priorita'
  $('#OverviewBody thead tr th:eq(1) a').text('Pr.');
  //rendi leggibile il campo Tempo trascorso
  $('#OverviewBody tr[id^=TicketID] td:nth-child(5)').
    css('font-family', 'monospace').css('font-size', 'small').css('text-align', 'right').
    each(function () {
      var t = $(this).text().trim().
        replace(/ ([dhm])/g, '$1').
        replace(/ ([0-9]{1}[hm])/g, ' 0$1').
        replace(/h /, '.').
        replace(/m/, "'");
      $(this).text(t);
    });
  // eguaglia larghezza TD e TH
  $('#OverviewBody tr[id^=TicketID]:first td').each(function (i) {
    var td_w = $(this);
    $('#OverviewBody thead tr:first th:eq('+i+')').width( $(this).outerWidth() );
  });
  
  // evidenzia area per middle-clic
  $('#OverviewBody tr[id^=TicketID] td:nth-child(4)').css('background-color', 'orange');
  
  // avvisa se ci son tickets
  //if ($('#OverviewBody tr[id^=TicketID]').length > 0)
  //  alert('HD: ' + num_tickets + ' tickets nuovi! :O');
  window.document.title = 'T: ' +
    $('#OverviewBody tr[id^=TicketID]:not(.assegnate):not(.di_altri)').length + '/' +
    $('#OverviewBody tr[id^=TicketID]').length
}//if


// --- cambio proprietario -----------------------------------------------------
var sel_owner = $('#NewOwnerID');
if (sel_owner.length > 0) {
  // nascondi nomi inutili
  sel_owner.find('option').not(
    ':contains(marco.callegaro@unipd.it),'+
    ':contains(sabrina.camporese@unipd.it),'+
    ':contains(caterina.marini@unipd.it),'+
    ':contains(martina.lagreca@unipd.it),'+
    ':contains(monica.perazzolo@unipd.it),'+
    ':contains(tomaso.minelli@unipd.it),'+
    ':contains(alberto.cavalin@unipd.it)'
  ).hide()
  
  // imposta oggetto predefinito
  $('#NewOwnerID, #OldOwnerID').change(function () {
    $('#Subject').val(
      'per ' + $(this).find('option:selected').text().replace(/^(.: )*.+ (\w+) .+/, '$2')
    );
  
    return false;
  });
  
  // seleziona proprietario precedente
  $(':radio[value="Old"]').attr('checked', true);
  $('#OldOwnerID').change();
  
  // testo predefinito
  $('#RichText').val('fatto').focus().select();
}//if

// -----------------------------------------------------------------------------
});})(jQuery);
