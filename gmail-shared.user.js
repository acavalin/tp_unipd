// ==UserScript==
// @name           shared gmail enhancements
// @namespace      camelsoft
// @description    Miglioramenti alla visualizzazione condivisa di gmail
// @include        https://mail.google.com/mail/u/*
// @icon           https://www.google.com/a/cpanel/unipd.it/images/favicon.ico
// @downloadURL    https://github.com/acavalin/tp_unipd/raw/main/gmail-shared.user.js
// @require        https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @version        1.1.0
// @grant          none
// @license        GPLv3
// ==/UserScript==

(function ($) { $(function () {
// -----------------------------------------------------------------------------
$.app = {
  get_email: function () {
    return String( $('div.gb_xa.gb_pg.gb_p a.gb_e.gb_Za.gb_p').attr('aria-label') ).replace(/.+: /, '');
  },//get_email

  gmail_setup: function () {
    setInterval(function () {
      // pannelli left-right => top-left
      $('.Nr.UI.vy.Nm').toggleClass('Nm Nf');

      // ridimensiona immagini nelle email
      $('.Nu.S3.aZ6 img.CToWUd:not(.moved)').addClass('moved').
        css('max-width', '90%').css('position', 'relative').
        css('opacity', 0.7).
        each(function () { $(this).css('left', -$(this).position().left); });
    }, 1000);
  }//gmail_setup
};

// attendi inizializzazione pagina
var find_email_counter = 0;
var id_interval_setup = setInterval(function () {
  // timeout dopo N tentativi (siamo dentro l'iframe oppure e' una email differente)
  find_email_counter += 1;
  if (find_email_counter > 2)
    return clearInterval(id_interval_setup);

  if ($.app.get_email() != "undefined") {
    $.app.gmail_setup();
    clearInterval(id_interval_setup);
  }//if
}, 2000);
// -----------------------------------------------------------------------------
});})(jQuery.noConflict());
