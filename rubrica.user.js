// ==UserScript==
// @name         rubrica (unipd)
// @namespace    camelsoft
// @description  Aggiunge in rubrica un link all'app delle presenze
// @match        https://www.unipd.it/rubrica*
// @match        https://www.unipd.it/*/rubrica*
// @match        https://www.unipd.it/*contatti/*
// @require      https://code.jquery.com/jquery-4.0.0.min.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX///+bABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABT+/Pz////36uz//v768/TitbvWl594JUBZAAAAD3RSTlMALf3SVOl3rfH+lPvgwffWvIWXAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UBDhEHMCOeET4AAABcSURBVBjTlY/JDoAgDEShIIuKI4r+/6cqJSxHfYem89KkrRCMJCVGNAFTS8Y6ZLyaNQt0lu9ij0A8xolXnPgpUkpN+GyuO9eVhe1rZbnd1WzqN4Ejmf6tVLSF0j53qQiy0JEdaAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xNFQxNjowNzo0OCswMTowME/uB4QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTRUMTY6MDc6NDgrMDE6MDA+s784AAAAAElFTkSuQmCC
// @downloadURL  https://github.com/acavalin/tp_unipd/raw/main/rubrica.user.js
// @version      1.2.0
// @grant        none
// @license      GPLv3
// ==/UserScript==

let $ = jQuery.noConflict();

$(function() { // esegui al caricamento della pagina
// -----------------------------------------------------------------------------
function hideAboveTheFoldContents () {
  $('body > div > header, section.hero_space, section.editorial, #page-footer').hide();
}//hideAboveTheFoldContents

hideAboveTheFoldContents();
setTimeout(hideAboveTheFoldContents, 750);

// pagina dettaglio struttura | https://www.unipd.it/contatti/rubrica?ruolo=2&checkout=cerca&persona=...&key=...
if (window.location.href.match(/unipd.it\/(..\/)*contatti\/rubrica\?ruolo=2.+key=/)) {
  console.log('pagina dettaglio struttura');

  $('section.hero_space, #page-footer').hide();
}// if struttura
// pagina dettaglio persona | https://www.unipd.it/contatti/nome.cognome
else if (window.location.href.match(/unipd.it\/(..\/)*contatti\/.+\..+/)) {
  console.log('pagina dettaglio persona');

  let boxes = $('div[class*=Herospace][role=banner]').next().children().first().children();

  // email cliccabile
  let email = boxes.eq(0).children().last();
  $('<a target="_blank"></a>').text(email.text()).attr('href', `mailto:${email.text()}`).appendTo( email.empty() );

  // tel cliccabile
  let tel = boxes.eq(1).children().last();
  $('<a target="_blank"></a>').text(tel.text()).attr('href', `tel:${tel.text()}`).appendTo( tel.empty() );

  // luogo cliccabile
  let luogo = boxes.eq(2).children().last();
  let url_params = $.param({ruolo: 2, persona: luogo.text().trim()});
  let url = `https://www.unipd.it/contatti/rubrica?${url_params}`
  $('<a target="_blank"></a>').text(luogo.text()).attr('href', url).appendTo( luogo.empty() );
}//if persona

// pagina di ricerca
if (window.location.href.match(/unipd.it\/(..\/)*rubrica/)) {
  console.log('pagina ricerca');

  // progress bar style  --  https://codepen.io/mog13/pen/qBOEaZP
  $(`
  <style type="text/css">
  @keyframes progress_bar {
    from { background-position-x: 0; }
    to { background-position-x: 2000px; }
  }

  #search.pbar {
    box-shadow: 0px 10px 13px -6px rgba(44, 62, 80, 1);
    background-color: #aaa;
    background-image: repeating-linear-gradient(90deg, transparent, transparent 40px, #ccc 40px, #ccc 80px);
    animation: progress_bar 4s linear infinite;
    will-change: background-position;
  }
  </style>
  `).appendTo('head');

  var last_result = 'xxx';
  function removePbar () {
    let cur_result = $('#person-list-title + div[class*=PersonList] > div').get(0)?.textContent || 'xxx';

    if (cur_result == last_result)
      setTimeout(removePbar, 1000);
    else {
      last_result = cur_result;
      $('#search').removeClass('pbar');
    }//if-else
  };

  hideAboveTheFoldContents();

  // autofocus search field + progressbar
  $('#search').attr('autofocus', true);
  setTimeout(() => { $('#search').focus(); }, 750);
  setTimeout(() => {
    hideAboveTheFoldContents();
    $('#search').focus();

    // append UniPD to breadcrumb
    $('nav[aria-label=breadcrumb] span:last-child').append(' UniPD');

    // credits
    if ($('#acavalin').length == 0) {
      var links_hp     = '<a style="text-decoration: underline !important;" href="https://acavalin.com/" target="_blank">A.Cavalin</a>',
          links_script = '<a style="text-decoration: underline !important;" href="https://github.com/acavalin/tp_unipd/blob/main/README.md" target="_blank">script</a>',
          links_css    = 'position: fixed; top: 0.5rem; left: 43%; padding: 0.3rem 0.6rem; z-index: 65000;'+
            'background: linear-gradient(to bottom, rgb(249, 249, 249) 0%, rgb(241, 241, 241) 100%);'+
            'border-radius: 0.5rem; border: 1px outset red;';
      $('<div id="acavalin" style="'+links_css+'">'+links_script+' by '+links_hp+'</div>').appendTo('body');
    }//if

    $('#search').focus();

    // visible feedback on "submit"
    $('#search').on('keydown', (ev) => {
      if (ev.which != 13) return;  // RETURN key
      $('#search').addClass('pbar');
      setTimeout(removePbar, 1000);
    });
  }, 1500);
}//if ricerca
// -----------------------------------------------------------------------------
});
