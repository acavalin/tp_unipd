// ==UserScript==
// @name        VerificaTLV enhancements (unipd)
// @namespace   camelsoft
// @description Miglioramenti alla procedura Timesheet Attivita Telelavoro
// @include     https://apps.unipd.it/verificatlv/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX///+bABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABT+/Pz////36uz//v768/TitbvWl594JUBZAAAAD3RSTlMALf3SVOl3rfH+lPvgwffWvIWXAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UBDhEHMCOeET4AAABcSURBVBjTlY/JDoAgDEShIIuKI4r+/6cqJSxHfYem89KkrRCMJCVGNAFTS8Y6ZLyaNQt0lu9ij0A8xolXnPgpUkpN+GyuO9eVhe1rZbnd1WzqN4Ejmf6tVLSF0j53qQiy0JEdaAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xNFQxNjowNzo0OCswMTowME/uB4QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTRUMTY6MDc6NDgrMDE6MDA+s784AAAAAElFTkSuQmCC
// @downloadURL https://github.com/acavalin/tp_unipd/raw/main/verifica-tl.user.js
// @version     2.0.5
// @grant       none
// @license     GPLv3
// ==/UserScript==

// NB: queste due direttive non servono perche' ha gia' jQuery e sembra funzionare senza problemi
// require     http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
//jQuery.noConflict();

String.prototype.vm_expand   = function () { return this.trim().replace(/; /g, "\n") };
String.prototype.vm_collapse = function () { return this.trim().replace(/\n/g, "; ") };

// converte un input tyep=text in textarea
function to_textarea(selector, rows) {
  var val = $(selector).val().trim(),
      el  = $(selector).get(0).outerHTML.replace('<input', '<textarea maxlength="2000" rows="'+rows+'"')+'</textarea>';
  $(selector).replaceWith(el);
  // scompatta su piu' righe all'inizio
  $(selector).val( val.vm_expand() );
  // compatta in una sola riga al submit
  $($(selector).get(0).form).submit(function () {
    var testo = $(selector).val().split("\n").map(function (i) {
      return i.
        replace(/^- +/, ' ').         // trattino iniziale
        replace(/ +\(~.+\) *$/, "").  // commento finale tra tonde
        trim();
    }).join("\n");
    $(selector).val( testo.vm_collapse() );
  });
};//to_textarea

(function ($) { $(function () {
//------------------------------------------------------------------------------
// riquadro credits + links
if ($('#acavalin').length == 0) {
  var links_hp     = '<a style="text-decoration: underline !important;" href="https://acavalin.com/" target="_blank">A.Cavalin</a>',
      links_script = '<a style="text-decoration: underline !important;" href="https://github.com/acavalin/tp_unipd" target="_blank">VTL script</a>',
      links_css    = 'position: fixed; top: 0.5rem; left: 15%; padding: 0.3rem 0.6rem; z-index: 65000;'+
        'background: linear-gradient(to bottom, rgb(249, 249, 249) 0%, rgb(241, 241, 241) 100%);'+
        'border-radius: 0.5rem; border: 1px outset red;';
  $('<div id="acavalin" style="'+links_css+'">'+links_script+' by '+links_hp+'</div>').appendTo('body');
}//if

if (window.location.pathname == '/verificatlv/') {
  setInterval(function () {
    $('#myGrid a:not(.state_link_added):contains("Visualizza")').each(function () {
      var link = $(this).addClass('state_link_added').clone();
      
      var url   = $(this).attr('href'),
          testo = 'xxx';
      
      switch ($('#procureTab a.active').text().trim()) {
        case 'ToDo':
          testo = 'Conferma';
          url   = url.replace('rendicontaGiorno', 'confermaRendiconto');
          break;
        case 'Confermate':
          testo = 'InBozza';
          url   = url.replace('rendicontaGiorno', 'setBozzaRendiconto');
          break;
      }//switch
      
      if (testo != 'xxx')
        link.text(testo).attr('href', url).appendTo($(this).parent()).before(' | ');
    });
  }, 500);
}//if /verificatlv/

if (window.location.pathname.match(/verificatlv.rendicontaGiorno/)) {
  // fai spazio verticale per non scorrere la pagina
  $('div.jumbotron').css('padding-top', 0).css('padding-bottom', 0).find('p, br').hide();
  // apri tutte le attivita
  $('#card-attivita a.card-link').click();
}//if /verificasmart/rendicontaGiorno

if (window.location.pathname.match(/verificatlv.attivita/)) {
  // fai spazio verticale per non scorrere la pagina
  $('div.jumbotron').css('padding-top', 0).css('padding-bottom', 0).find('p, br').hide();
  $('div.form-group.row').css('margin', 0);
  $('#form-controller > br').hide();
  $('#note').attr('rows', 1);
  
  to_textarea('#attivita' , 6);   // Attivita Svolta
  
  $('#ore'   ).val('07');
  $('#minuti').val('12');
  
  $('#note').val('scadenze rispettate; obiettivi conseguiti');
}// if /verificasmart/attivita

if (window.location.pathname.match(/richieste3.index.richiesta/))
  $('[name^="giorni[]"]').prop('checked', true);
//------------------------------------------------------------------------------
});})(jQuery);
