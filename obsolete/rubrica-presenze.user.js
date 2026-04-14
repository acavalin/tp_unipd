// ==UserScript==
// @name         rubrica presenze (unipd)
// @namespace    camelsoft
// @description  Aggiunge in rubrica un link all'app delle presenze
// @match        https://www.unipd.it/contatti/rubrica*
// @match        https://apex.cca.unipd.it/pls/apex/f?p=1300:120:*:P120_COD_STR_L1:*
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAARVBMVEX///+bABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABSbABT+/Pz////36uz//v768/TitbvWl594JUBZAAAAD3RSTlMALf3SVOl3rfH+lPvgwffWvIWXAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+UBDhEHMCOeET4AAABcSURBVBjTlY/JDoAgDEShIIuKI4r+/6cqJSxHfYem89KkrRCMJCVGNAFTS8Y6ZLyaNQt0lu9ij0A8xolXnPgpUkpN+GyuO9eVhe1rZbnd1WzqN4Ejmf6tVLSF0j53qQiy0JEdaAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wMS0xNFQxNjowNzo0OCswMTowME/uB4QAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDEtMTRUMTY6MDc6NDgrMDE6MDA+s784AAAAAElFTkSuQmCC
// @downloadURL  https://github.com/acavalin/tp_unipd/raw/main/rubrica-presenze.user.js
// @version      1.0.0
// @grant        none
// @license     GPLv3
// ==/UserScript==

$(function() { // esegui al caricamento della pagina
// -----------------------------------------------------------------------------
if (window.location.pathname.match(/contatti.rubrica/)) {
  const presenze_base_url = "https://apex.cca.unipd.it/pls/apex/f?p=1300:120:::::P120_COD_STR_L1:";

  $('#lista_griglia_rubrica p.dato.struttura').each(function () {
    let link_strutt   = $(this).find('a').attr('href');
    let link_presenze = $('<a target="_blank">👥</a>'); // nuovo link da appendere

    if (link_strutt.lastIndexOf('key=') > 70) {
      let cod_strutt = link_strutt.substring(link_strutt.lastIndexOf('key=') + 4);
      $(this).prepend(' | ');
      link_presenze.attr('href', presenze_base_url + cod_strutt).prependTo(this);
    }//if
  });
}// rubrica

if (window.location.search.match(/p=1300:120.+P120_COD_STR_L1/)) {
  let strutt_menu = $('#P120_COD_STR_L1').val();
  let strutt_url  = window.location.search.replace(/.+P120_COD_STR_L1:(.+)/, '$1');
  console.log([strutt_menu, strutt_url]);
  if (strutt_menu != strutt_url)
    window.location.reload(true);
}//presenze
// -----------------------------------------------------------------------------
});
