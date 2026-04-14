// ==UserScript==
// @name         rubrica (unipd)
// @namespace    camelsoft
// @description  Aggiunge in rubrica un link all'app delle presenze
// @match        https://www.unipd.it/rubrica*
// @match        https://www.unipd.it/en/rubrica*
// @require      https://code.jquery.com/jquery-4.0.0.min.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX///+bABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABT+/Pz////36uz//v768/TitbvWl594JUBZAAAAD3RSTlMALf3SVOl3rfH+lPvgwffWvIWXAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UBDhEHMCOeET4AAABcSURBVBjTlY/JDoAgDEShIIuKI4r+/6cqJSxHfYem89KkrRCMJCVGNAFTS8Y6ZLyaNQt0lu9ij0A8xolXnPgpUkpN+GyuO9eVhe1rZbnd1WzqN4Ejmf6tVLSF0j53qQiy0JEdaAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xNFQxNjowNzo0OCswMTowME/uB4QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTRUMTY6MDc6NDgrMDE6MDA+s784AAAAAElFTkSuQmCC
// @downloadURL  https://github.com/acavalin/tp_unipd/raw/main/rubrica.user.js
// @version      1.0.0
// @grant        none
// @license      GPLv3
// ==/UserScript==

let $ = jQuery.noConflict();

$(function() { // esegui al caricamento della pagina
// -----------------------------------------------------------------------------
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

function hideAboveTheFoldContents () {
  $('body > div > header, nav[aria-label=breadcrumb], section.hero_space, section.editorial, #page-footer').hide();
}//hideAboveTheFoldContents

hideAboveTheFoldContents();

// autofocus search field + progressbar
$('#search').attr('autofocus', true);
setTimeout(() => {
  $('#search').focus();
  hideAboveTheFoldContents();
}, 750);
setTimeout(() => {
  hideAboveTheFoldContents();

  $('#search').focus();

  // visible feedback on "submit"
  $('#search').on('keydown', (ev) => {
    if (ev.which != 13) return;  // RETURN key
    $('#search').addClass('pbar');
    setTimeout(removePbar, 1000);
  });
}, 1500);
// -----------------------------------------------------------------------------
});
