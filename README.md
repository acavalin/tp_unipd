# tp_unipd

Collezione di scripts [Tampermonkey](http://tampermonkey.net) per gli applicativi
dell'universita' di Padova.

Vedere il `README.xxx.md` relativo allo script `xxx` desiderato:

* [OTRS](README.otrs.md)
* [verifica LA/TL](README.verifica.md)
* [EasyStaff](README.easystaff.md)
* [SUA MIUR](README.sua.md)
* [Planet Time](README.planet-time.md)
* [Shared Gmail](README.gmail-shared.md)

Modificare lo script dopo l'installazione inserendo le credenziali:

* [UniPd SSO auto login](https://github.com/acavalin/tp_unipd/raw/refs/heads/main/autologin_sso.user.js)
* [RedMine SCM auto login](https://github.com/acavalin/tp_unipd/raw/refs/heads/main/autologin_redmine.user.js)

## Installazione di uno script su Firefox e Chrome

1. Installare l'add-on [Tampermonkey](http://tampermonkey.net/)
2. Cliccare sullo script desiderato presente in questa pagina
3. Premere il pulsante "Raw" sulla destra
4. Accettare l'installazione dello script
5. Una tantum su Chrome: imposta la [modalità sviluppatore](https://www.tampermonkey.net/faq.php#Q209)
   nella pagina [gestisci estensioni](chrome://extensions)