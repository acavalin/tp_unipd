// ==UserScript==
// @name        UniPd SSO auto login (unipd)
// @namespace   camelsoft
// @description Inserisce le credenziali automaticamente
// @include     https://shibidp.cca.unipd.it/*
// @include     https://sso.cca.unipd.it/*
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAM1BMVEVrGhQTDQVLDwA8Kwa7JQCFPgBbVjZvVgX8NwDIfAD6gAC8mAmhnVn5pgD20Rnv4GHt6JOekpO9AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALhgAAC4YASqqJyAAAAAHdElNRQfhBBMJDTA6RklYAAABP0lEQVQ4y5WTi24EIQhFBxTxAY7//7UFd5tUZtukZDIP7/HiIF7XP6P8Mg7vuAZ8j4SJstayG0x+KSlYwVp2GVV0f/OAYAHF9FtEyN6TKktc3Lrve3KnDkUqjhEMLnF95N5JbmYliRlMnpNrpXUTZpocDJIbmEPliQStxQQXz2EOE9Agzml8ACxUJyuzrfShu4NZqP0fAjV+AmkYoaq9UULqLZbpgtmGDu29NbtZxCzQ1A3U1RcSiUS+uh1jY/1psYdzJ/sbq3jNkaA9PZMDSrnWE6AKhrSOjdiAFoG0iwvK3lYJFOtPYMmcyV8G78TeVgdQREwv8GoCsV0DS1kfXSl7j4t1hj3xBIo7lFefpuTpsOZj+owbnM8M0DqdVTkNvAz51OtjOxH/1Pey3oOQK8LHA4rZwzobfj3blihO/gIvEw2PIesy/wAAAABJRU5ErkJggg==
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @version     1.0.3
// @grant       none
// ==/UserScript==

jQuery.noConflict();

(function ($) { $(function () {
// -----------------------------------------------------------------------------
setTimeout(function () {
  $(':text').val('nome.cognome');
  $(':password').val("password");
  if ($('div:contains(La password immessa non è corretta.)').length == 0)
    $('#login_button_js').click();
}, 1000);
// -----------------------------------------------------------------------------
});})(jQuery);
