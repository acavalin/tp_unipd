# tp_unipd

Collezione di scripts [Tampermonkey](http://tampermonkey.net) per gli applicativi
dell'universita' di Padova.

## 1. Vedere il `README.xxx.md` relativo allo script `xxx` desiderato:

### 1.1 Generici

* [OTRS/HelpDesk](README.otrs.md)
* [Planet Time](README.planet-time.md)
* [Rendicontazione lavoro a distanza](README.rend-lav-dist.md)
* [Rubrica](README.rubrica.md)
* [UniPd SSO auto login](https://github.com/acavalin/tp_unipd/raw/refs/heads/main/autologin_sso.user.js) (modifica script x credelenziali)

### 1.2 ADISS
* [EasyStaff](README.easystaff.md)
* [RedMine SCM auto login](https://github.com/acavalin/tp_unipd/raw/refs/heads/main/autologin_redmine.user.js) (modifica script x credelenziali)
* [SUA MIUR](README.sua.md)
* [Shared Gmail](README.gmail-shared.md)
* [Verifica LA/TL](README.verifica.md) **obsoleti**

## 2. Installazione di uno script su Firefox e Chrome

1. Installare l'add-on [Tampermonkey](http://tampermonkey.net/)
2. Cliccare sullo script desiderato presente in questa pagina
3. Premere il pulsante "Raw" sulla destra
4. Accettare l'installazione dello script
5. Una tantum su Chrome nella pagina [gestisci estensioni](chrome://extensions):
   - imposta la [modalità sviluppatore](https://www.tampermonkey.net/faq.php#Q209)
   - dettagli estensione Tampermonkey > attivare "Allow User Scripts"
