// ==UserScript==
// @name        RedMine SCM auto login (unipd)
// @namespace   camelsoft
// @description Inserisce le credenziali automaticamente
// @include     https://scm.csia.unipd.it/redmine/login*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABsFBMVEUAAADnAADfAADdAADkAAvjAAzjAAzjAA3iAAzkAAviAAu/AAD/AADiAAziAAvfAADWAADcCwDcCwDlAADjAAvmAAjZBgDdCwDdCQDcBgDcCgDdCwD/AADUAADiAAziAAvUAADdCwDdCwD/AADdCgDbCQDiAAvfAAa/AADbCwDdCgDbCgDbBwDMAADaAADiAADeCQDQAADcCgDdBwAAAADdCgDcCwDbCgDCAADbCgDcCwDZCADeCgDbCwDfBwC/AADKAADMAADLAADUAADdCQDcCgDJAADJAADLAADKAADTAADLAADLAADKAADaAADIAADLAADMAADLAADKAADNAADLAADNAADLAADKAADOAADLAADLAADKAADEAADLAADMAADKAADMAADMAADKAADLAACjAACUAABVAADKAADNAADLAADLAAB/AACZAAChAAChAAChAAChAACpAACZAACpAACmAACgAAChAACfAAChAACcAACiAAChAACcAACeAAChAAChAACgAACiAACiAACgAACdAACiAAChAACgAAChAAChAADdDADdCwDMAACiAAD///8voekJAAAAi3RSTlMACwgPhrjT1c2sbQQEzrYQE87fCtUfKfigJe3HAwbRwhLyxgHspJYoCOe8vUAFDgluC7JEAZD+ZBVd/T6V7iAQuPaZGGyjGM38ax3++aUHHNr91ZZt5D7vHU+t5eAatA+9eez4gRwMA4Q0hUoGCm3+rj8SBQkXYdHOtDTk+SdF+N95FqLGFcNMp36IxVriGQAAAAFiS0dEj/UCg/kAAAAHdElNRQfhBBMJDygbHLOMAAABTklEQVQ4y91RVzsDQRS9CNGD6BJCdKL3XiNE770nakQJgugtjMlvtnNH2ez4PHpwHuaetne/nQX4cwQE/hIGqYJD1OrQsPCf4wiIjFIjogE0QhwTG6cFFebxCZCYlKzIU1IJSdPp01khAwyZhGQZ5bkhm0jIgVy2IC+/gKlCeaGIIIpNJaVazYd6K5MVyiuYVVnFlalaEjW13++o0wHUN5DGL8PYRJpbAFo/dVt7hx46u2QbTd2BYO6x9HLVZ6W0f2DQ/7OGhkcoHeV8jDKM+xcm0JxEPoV82r8wg+Yso+Y5RucVN7fATOsiF0vLFrqivPtVuraOxGbfkM7NLWVhe0c6dh0Aez7n/sHhkfh3Xccnpz43wJkP4VLm52g7HXCBxCMsuOQPXsE1zhuhYOOFW3DidAuFO164Bw/OB6HwyAtP8OxleBEKdvS9r/Av8A7XNnVIGTSfgQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0wNC0xOVQxMToxNToyOSswMjowMLafD6IAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTctMDQtMTlUMTE6MTU6MjkrMDI6MDDHwrceAAAAAElFTkSuQmCC
// @version     1.0.3
// @grant       none
// ==/UserScript==

jQuery.noConflict();

(function ($) { $(function () {
// -----------------------------------------------------------------------------
$('#username').val('username');
$('#password').val('password');
$('#autologin').prop('checked', true);
$('#password').parents('form:first').submit();
// -----------------------------------------------------------------------------
});})(jQuery);
