// ==UserScript==
// @name        Rendicontazione lavoro a distanza (unipd)
// @namespace   camelsoft
// @description Miglioramenti alla procedura di rendicontazione del lavoro a distanza
// @include     https://apps.unipd.it/lavoroadistanza/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX///+bABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABT+/Pz////36uz//v768/TitbvWl594JUBZAAAAD3RSTlMALf3SVOl3rfH+lPvgwffWvIWXAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UBDhEHMCOeET4AAABcSURBVBjTlY/JDoAgDEShIIuKI4r+/6cqJSxHfYem89KkrRCMJCVGNAFTS8Y6ZLyaNQt0lu9ij0A8xolXnPgpUkpN+GyuO9eVhe1rZbnd1WzqN4Ejmf6tVLSF0j53qQiy0JEdaAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xNFQxNjowNzo0OCswMTowME/uB4QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTRUMTY6MDc6NDgrMDE6MDA+s784AAAAAElFTkSuQmCC
// @downloadURL https://github.com/acavalin/tp_unipd/raw/main/rend-lav-dist.user.js
// @version     1.2.0
// @grant       none
// @license     GPLv3
// ==/UserScript==

(function ($) { $(function () {
//------------------------------------------------------------------------------
// simbolo "home" come titolo
$('#navbarSupportedContent h4').html('<span class="fa fa-home" style="vertical-align:middle;"></span>');

// ridimensiona navbar
$('nav.navbar').css('padding', '0 1rem');
$('.navbar-brand img').css('max-height', '1rem');
$('.navbar-nav.nav-button a').css('border-width', 0);

if (location.pathname.match('/lavoroadistanza/attivita/edit/')) {
  // align-top mese
  $('#AnnoMese').parent().css('margin-top', 0);

  // giorni scrollabili
  $('#listGiorni').
  css('display', 'block').
  css('height', '2rem').
  css('overflow', 'scroll').
  css('border', '1px solid black').
  css('border-radius', '1rem');
  // conta giorni
  let sel_all_gg = $('.dx-list-select-all .dx-list-select-all-label');
  sel_all_gg.text(sel_all_gg.text() + ` (${$('.dx-list-select-all').nextAll().length})`);

  // ingrandisci textarea attivita'
  $('#txtAttivita').css('height', '60vh'  ).attr('placeholder', 'ATTIVITA').prev('label').hide();
  $('#txtNote'    ).css('height', '2.5rem').attr('placeholder', 'NOTE'    ).prev('label').hide();
  $('#txtAttivita, #txtNote').css('border', '2px inset silver');

  // rimpicciolisci nota rossa
  $('#txtNote').parent().next().css('font-size', '0.8rem');

  // colora pulsanti
  $('button[onclick="SaveAttivita(0)"]').addClass('bt-salva').attr('title', 'Ctrl+S').css('background-color', 'lightsalmon');
  $('button[onclick="SaveAttivita(1)"]').addClass('bt-conferma').attr('title', 'Alt+Invio').css('background-color', 'lightgreen');
  $('#esciBtn').addClass('bt-indietro').attr('title', 'Alt+Backspace').css('background-color', 'lightblue');

  $('#txtAttivita').focus();

  // modifica righe del testo
  $('button.bt-salva').click(function () {
    let t = $('#txtAttivita');
    let righe = t.val().split("\n").map(function (i) {
      return i.
      replace(/ +\(~.+\) *$/, "").  // commento finale tra tonde
      trim();
    });
    righe = [...new Set(righe)]; // rimuovi duplicati
    t.val( righe.sort().join("\n").trim() );
  });

  // shortcuts da tastiera
  $('body').on('keydown', function (ev) {
    //console.log([ev.key, ev.ctrlKey, ev.altKey]);

    if ($(document.activeElement).is(':input') && !ev.ctrlKey && !ev.altKey)
      return true;

    if (ev.ctrlKey == true) {
      // ctrl+S = premi pulsante salva
      if (ev.key == 's') { ev.preventDefault(); $('button.bt-salva').click(); }
    }//if

    if (ev.altKey == true) {
      // alt+invio = premi pulsante salva
      if (ev.key == 'Enter') { ev.preventDefault(); $('button.bt-conferma').click(); }
      // alt+backspace = premi pulsante "Torna alle attivita"
      if (ev.key == 'Backspace') { ev.preventDefault(); $('button.bt-indietro').click(); }
    }//if
  });// bind keyboard shortcuts
}//edit
//------------------------------------------------------------------------------
});})(jQuery);
