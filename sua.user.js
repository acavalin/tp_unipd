// ==UserScript==
// @name        SUA enhancements
// @namespace   camelsoft
// @description Miglioramenti alla scheda SUA del MIUR
// @include     https://ava.mur.gov.it/
// @include     https://off270.mur.gov.it/*
// @icon        data:image/x-icon;base64,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AAAAAAAA6enpFa6traBhX1/6VlRU/2JgYP/CwcH/+vr6/+Pj4//R0ND/+vr6/+Tk5P/v7+////7+////////////////////////////////////////////////////////////////////////////6+zs/9DPz//My8v/09LS/8jHx//z8/P//v7+/9jY2P9vbm7/V1VV/1pYWP2Xlpa53NvbIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8BycjIa3NxcfRXVVX/XVtb/6+urv/7+vr//////+3s7P/FxMT/0M/P/8rKyv/5+fn//////////////////////////////////////////////////////////////////////////////////Pz8//T09P/p6en/ycjI/9fX1//6+vr///////7+/v/Hx8f/ZWNj/1dVVf9lY2P5t7W1ivr6+gMAAAAAAAAAAAAAAAAAAAAAAAAAAP///wHq6uo4iYiI41ZUVP9aWFj/o6Ki//f29v/////////////////w8PD/39/f//f39///////////////////////////////////////////////////////////////////////////////////////////////////////+vr6//7+/v/////////////////7+/v/vby8/19eXv9WVFT/c3Fx8NTT01L///8CAAAAAAAAAAAAAAAAAAAAAP7+/g+2tLSYYF5e+1VTU/94d3f/6enp////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9vb2/5CPj/9UUlL/WlhY/Zybm7Ps6+sZAAAAAAAAAAAAAAAAAAAAANLR0U2Bf3/qV1VV/19dXf/Ly8v///////////////////////7+/v/+/v////////////////////////////////////////////////////////7+/v///////////////////////////////////////////////////////////////////////////////////////v7+/+Dg4P9ubW3/VlRU/29tbfW9vLxqAAAAAAAAAAAAAAAA////Bra1taViYGD+VlRU/42Li//y8vL//////////////////v7//8vT5P+ksdD/2uDs//z9/v/////////////////////////////////y8e//ysW+/7myqP++t67/2NTO//z7+/////////////z9/f/T4tz/7PPw///////////////////////////////////////u9PH/w9fO//L08/+pqKj/WldX/1lXV/+enZ3A////DgAAAAAAAAAA9/f3L4mHh+dWU1P/ZGJi/8zLy//+/v7//////////////////v///9Pa6P+UpMj/bIGz/5OjyP/t8Pb/////////////////+/r6/83HwP+Zj4D/qJ+T/7qzqv+1raP/nZOF/6ackP/j4Nz//v7+//b5+P+Brpv/ydzU///////////////////////////////////////Z5+H/eaiU/+708f/h4eH/cnBw/1RSUv9xcHDz5OPjSP///wH///8E2dnZbGZlZfpVU1P/goGB//Lx8f/////////////////////////////////9/v7/3uPu/4WXwv+Rocn/9vf7///////+/v7/0szF/5qQgf/V0cr/+/v6///+/v/+/v7/9PPx/723rf+ek4X/7Oro//b5+P+Br5z/yd3U///////////////////////////////////////a6OL/fKyX/+708v/8/Pz/nZyc/1VTU/9ZWFj8urm5i/7+/gr7+voUsK6urFdUVP5WVFT/srKy/////////////////////////////////////////////////+/x9/93i77/v8nh//7+/v/s6uf/npOF/93a1f/+/v3///////////////////////n5+P+6s6j/t6+j//X49v+Csp7/yd7V///////////////////////////////////////a6OL/fa+a/+718v//////z8/P/11bW/9TUVH/kpCQw+zr6yHq6uotkY+P0lNRUf9hX1//2tra//////////////////////////////////////////////////////+1wN3/jJ3K//b3+v/OyMD/sKaa//7+/v/////////////////////////////////s6ef/opWG/+jp5v+EtaL/yt/X///////////////////////////////////////b6eP/f7Gc/+/18v//////7u3t/3Nxcf9VU1P/e3p649TU1EXZ2dlTf3196lVTU/91dHT/8PDw///////////////////////////////////////////////////////S2ev/gJPI/+/w9f+9tar/xL2z///////////////////////////////////////7+/r/ppqL/9/f2f+FuaT/yuDX///////////////////////////////////////b6uP/gLSe/+/18///////9/f3/46Njf9XVVX/bWtr+cPCwnbNzc2AcW9v/FdVVf+Ni4v/9/f3///////////////////////////////////////////////////////N1er/gpXL/+/x9f+8sqf/ysK5///////////////////////////////////////8/Pv/qp6P/+Hg2/+Gu6b/y+HY///////////////////////////////////////b6uT/gLag/+/28///////+/v7/6uqqv9ZV1f/ZWNj/7KxsabHx8efamho/1hWVv+gn5//+vr6//////////////////////////////////////////////////7+//+jsdr/navX//b3+P+9tan/y8S6///////////////////////////////////////8/Pv/rKCR/+Hh3P+Hvaj/y+LZ///////////////////////////////////////b6+X/gbii/+/28////////f39/7y7u/9cWlr/Xlxc/52cnMjBwMC3ZWNj/1lXV/+tra3//Pz8/////////////////////////////////////////////Pz+/9DX7f90icr/2+Hx//z7+v+/tan/zMS6///////////////////////////////////////8/Pv/raGS/+Li3P+Hv6r/y+PZ//b29v/49/f//v7+//f29v/8+/v/+fn5//Pz8//a6+T/gbqk/+/28////////v7+/8jIyP9gXl7/W1lZ/42Li92+vb3BYmBg/1pXV/+0s7P//f39////////////////////////////////////////////ydHs/3eLzf+7xub//P3+//z7+//Du67/0Mm////////////////////////////////////////8/Pv/taiZ/+Tk3v+PxrL/vNHJ/8rIyf/Qz8//3t3d/8nIyP/Ozc3/2NnZ/8fGx/+8y8X/i8Ks//D39P///////v7+/8vKyv9iYGD/WlhY/4WEhOO+vb3BY2Fh/1lXV/+zsrL//f39//////////////////r7/f/w8vr/+fr9///////+/v//5+r3/+zv+P/+/v/////////+/v/39fP/+Pf2///////////////////////////////////////+/v7/9PPw//v7+v/q8/D/xcbG/+/u7//4+Pj/y8rK/9nY2P/FxMT/4N/f/8nJyf/Oz87/7fby//3+/v///////v7+/8vKyv9iYGD/WllZ/4aFhePCwsK5ZWRk/1lXV/+sq6v//Pz8////////////+fr9/7C85v+freH/5+r3//////////////////////////////////38/P/Y0cj/4NvU///////////////////////////////////////9/f3/zsW6/+3t6f+x2sv/uMXA/9HP0P/Y2Nj/5eXl/83MzP/CwcH/vr29/8PCwv/b5uL/sNjJ//X6+P///////v7+/8fGxv9gXl7/XFpa/46Ojt7Kycmjamho/1hXV/+dnZ3/+fn5///////7/P7/sLzo/4GT2P/m6vf//f7+//////////////////////////////////z7+//Fu63/0cm9///////////////////////////////////////8/Pv/tqiW/+Tk3v+IyLD/yePZ/+Tj5P/m5ub/+/v7//39/f/29vb/8fHx/+Pi4v/V5+D/hMSr/+/39P///////f39/7u5uf9bWVn/X11d/6GhocvR0NCFcnFx/FdVVf+JiIj/9vb2///////q7fn/fpHb/9PZ8v////////////////////////////////////////////z7+//IvrD/08vA///////////////////////////////////////8/Pv/uqya/+Xl3/+My7T/zuje///////////////////////////////////////d7+n/h8eu//D49f//////+/v7/6inp/9ZV1f/ZWNj/7m4uKrd3d1Zg4GB7VVTU/9zcHD/7u7u///////I0PH/kqHi//P1/P////////////////////////////////////////////z8+//Kv7H/1MzB///////////////////////////////////////8/Pv/vK6c/+bm4P+NzbX/zune///////////////////////////////////////d7+n/iMmw//D49f//////9vb2/4uJif9XVVX/b21t+8nIyH3u7u4yl5WV1lNRUf9fXV3/19bW//////+4wu7/nqzo//r6/v////////////////////////////////////////////z8+//LwbL/1c7B///////////////////////////////////////9/Pz/vrCd/+bm4P+Mzrb/z+rg///////////////////////////////////////e8On/iMuy//D49f//////6+vr/29ubv9VU1P/gH5+59nZ2Uz8/PwXt7a2sllXV/5WU1P/rKys//7+/v/GzfL/lqXo//X2/f////////////////////////////////////////////z8+//Nw7P/18/D///////////////////////////////////////9/Pz/v7Kf/+nn4f+P0bn/x+jb///////////////////////////////////////U7eT/js+3//L69///////ysnJ/1tZWf9UUlL/mpiYyPDw8CT///8F39/fdmtoaPtVU1P/fXx8/+7u7v/n6vv/hZTn/93h+P////////////////////////////////////////////z8+//OxLX/2NHE///////////////////////////////////////9/Pz/wbSh/+zn4f+v383/n9jD//j8+/////////////////////////////////+n3Mj/ptzI//v9/P/7+/v/l5WV/1VTU/9cWlr9wsLClP///wz///8A+fn5OJGPj+xWVFT/YV9f/8fGxv/5+f3/rbfx/5Wi7f/x8v3//f7///////////////////////////////////z8+//Qxrb/2tHF///////////////////////////////////////9/Pz/w7Wi/+zn4f/n9fD/gs6y/8jq3f/8/v3//////////////////P79/9Pu5P+AzrH/3fHq///////c3Nz/bmxs/1VTU/94dnb26urqUv///wEAAAAA////CMHAwLJlY2P+VlVV/4aEhP/w8PD/9PX9/6Ww8f+Jl+3/vcT2/9/j+//6+v7///////////////////////38+//Rxrb/2tLF///////////////////////////////////////9/Pz/w7Wh/+zn4P/9/v7/z+3i/3/Qsv+r4M3/1vDn/+T27//a8un/qeDM/3zOsP/P7OL///////j4+P+hoKD/WFZW/1tZWf+pp6fL////EwAAAAAAAAAAAAAAAN3c3FmJiIjvWFZW/1xaWv/CwsL///////X2/f/Ey/f/l6Px/6Cq8v/u8P3///////////////////////38/P/Xzb//39jM///////////////////////////////////////9/fz/0se3//Ht6P///////P79/9zy6/+c28T/hNO2/4jVuf+D07b/mtvD/9Tw5v/9/v7//////9rZ2f9oZ2f/V1VV/3Z0dPjLy8t5////AQAAAAAAAAAAAAAAAP///xTEw8OmZGJi/FZUVP9yb2//4+Li/////////////v7///n6///+/v/////////////////////////////7+vn//Pz6/////////////////////////////////////////////f38//7+/v/////////////////+//7/9vv5/+349P/0+/j/////////////////8fHx/4eFhf9UU1P/XFpa/quqqr/19PQfAAAAAAAAAAAAAAAAAAAAAP///wHy8fFGlpSU61ZUVP9ZV1f/mJaW//Pz8//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5+fn/srGx/11bW/9WVFT/fHt79OHh4WD///8EAAAAAAAAAAAAAAAAAAAAAAAAAAD///8C2djYf358fPhXVFT/WlhY/6Oiov/4+Pj///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////z8/P+8u7v/X15e/1dVVf9raWn7yMbGnf7+/ggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9PT0HsHAwLNnZWX8VlRU/15cXP+1tLT/+Pf3/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Pz8/8vKyv9oZmb/VlRU/15cXP6qqanJ6enpLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AfX19S21tLTGZWNj/lZUVP9dXFz/pKOj//T09P/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////5+fn/ubi4/2dkZP9XVVX/XFpa/5+entjv7u5A////AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADt7e1Ar66u12RjY/5WVFT/W1lZ/5qZmf/k4+P//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+7u7v+urq7/YF5e/1ZUVP9cW1v/mJeX5OPi4lX///8CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8D7e3tP7a1tchnZWX9V1VV/1lXV/9ycXH/xMTE//Hx8f/+/v7////////////////////////////////////////////////////////////////////////////////////////////29vb/09PT/4B+fv9bWVn/V1VV/19dXf6ioaHY4+PjVPn5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
// @downloadURL https://github.com/acavalin/tp_unipd/raw/main/sua.user.js
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js
// @version     2.0.1
// @grant       GM_xmlhttpRequest
// @connect     self
// @license     GPLv3
// ==/UserScript==

// https://www.tampermonkey.net/documentation.php?locale=en#api:GM_xmlhttpRequest
// https://www.tampermonkey.net/documentation.php?locale=en#meta:connect

(function ($) { $(function () {
// -----------------------------------------------------------------------------
const tp = {
  ajax: opts => {
    opts.beforeSend?.();

    let method = opts.method || 'GET';
    let params = new URLSearchParams(opts.data || {});
    GM_xmlhttpRequest({
      method:       method,
      responseType: opts.dataType,
      url:          method == 'GET' ? `${opts.url}?${params.toString()}` : opts.url,
      data:         method == 'GET' ? null : new URLSearchParams(opts.data),
      user:         opts.user,
      password:     opts.password,
      nocache:      opts.cache == null ? null : !opts.cache,
      timeout:      opts.timeout,
      onload:    function(resp){ opts.success?.(resp.response||resp.responseText, resp, opts.error); opts.complete?.(resp); },
      onerror:   function(resp){ opts.error?.('error'  , resp); opts.complete?.(resp); },
      ontimeout: function(resp){ opts.error?.('timeout', resp); opts.complete?.(resp); },
      onabort:   function(resp){ opts.error?.('abort'  , resp); opts.complete?.(resp); }
    });
  },//ajax

  dl_link: (label, fname, content) => {
    var el = document.createElement('a');
    el.setAttribute('href', 'data:application/octet-stream;charset=UTF-8,' + encodeURIComponent(content));
    return $(el).attr('download', fname).text(label);
  },//dl_link

  ts: (datetime) => {
    let [dt, tm] = (datetime || new Date()).toISOString().split('T');
    tm = tm.slice(0, 8).replaceAll(':', '-');
    return `${dt}_${tm}`;
  },//ts
};

// autofill login form in homepage
if (window.location == 'https://ava.mur.gov.it/') {
  $('select[name="ateneo"]').val(19); // Univ. di PADOVA
  $('input[name="username"]').val('lauree_19');
  $('input[name="password"]').focus().get(0).select();
  //$('input[name="password"]').val('xxx').get(0).form.submit();
}//if

// SUA-CdS 20XX > Visualizza Schede
// es: https://off270.mur.gov.it/off270/sua25/elenco_classi.php?parte=2&anno=2025&vis_pdf=&user=ATElauree_19
if (window.location.toString().match(/https:\/\/off270.mur.gov.it\/off270\/sua\d\d\/elenco_classi.php\?parte=2&.+/)) {
  class SuaCdsScraper {
    constructor (cds_node, callback) {
      this.ajax_timeout = 20000;

      this.on_complete = callback || function (data) { return null; };

      this.data = {
        anno: 2000 + parseInt(window.location.pathname.replace(/.+\/sua(\d{2})\/.+/, '$1')),
        pds: [], classi: [], sedi: [],
      };

      this.data.descr = cds_node.
        find('div.titolo').contents().
        filter((i, el) => { return el.nodeType == 3; }).first().text().trim();

      console.info(`SCRAPING: ${this.data.descr}`);

      // estrai i 3 ID, es: "(ID SUA=1610825 - ID RAD=1388185 - CODICIONE=0280107301800003)"
      cds_node.find('div.titolo p').text().trim().replace(/[()]/g, '').split(' - ').forEach(pair => {
        let [k, v] = pair.toLowerCase().replaceAll(' ', '_').split('=');
        this.data[k.trim()] = v.trim();
      });
      console.debug(`  - ${this.data.id_sua} | ${this.data.id_rad} | ${this.data.codicione}`);

      // estrai le classi ministeriali, es "LM-17 R Fisica & LM-58 Scienze dell'universo"
      cds_node.find('div.titolo-corso').text().trim().split('&').map((s) => {
        let [sigla, descr] = s.trim().replace(' R ', ' ').split(/\s+(.+)/);
        this.data.classi.push({ sigla: sigla, descr: descr });
        console.debug(`  - classe: ${sigla} | ${descr}`);
      });

      this.scrape_cod_interno();
    }//constructor

    // Compila scheda > Amministrazione > Altre Informazioni > Altre Informazioni - Codice interno
    // es. https://off270.mur.gov.it/off270/sua25/riepilogo.php?ID_RAD=1610802&sezione_aq=A&vis_quadro=I&user=ATElauree_19
    scrape_cod_interno () {
      const self = this;
      $.ajax({
        url: `https://off270.mur.gov.it/off270/sua${self.data.anno - 2000}/riepilogo.php?ID_RAD=${self.data.id_sua}&sezione_aq=A&vis_quadro=I&user=ATElauree_19`,
        dataType: 'html', cache: false, timeout: self.ajax_timeout,
        success: (data, status, xhr) => {
          if (data.match(/ACCESSO NEGATO/i)) {
            console.log(`ERR ID_SUA=${self.data.id_sua} scrape_cod_interno - Accesso negato`);
            return;
          }//if

          if (!data.match(/Codice interno all'ateneo del corso/i))  {
            console.log(`ERR ID_SUA=${self.data.id_sua} scrape_cod_interno - Codice interno non trovato`);
            return;
          }//if

          self.data.codice_interno = $(data).find('div#TI1T strong:contains("Codice interno")').parent().next().text().trim();
          console.debug(`  - cod int: ${self.data.codice_interno}`);
        },//success
        error: (xhr, status, err) => {
          console.log([`ERR ID_SUA=${self.data.id_sua} scrape_cod_interno (${status} | ${err})`, xhr]);
        },//error
        complete: () => { self.scrape_pds() }
      });
    }//scrape_cod_interno

    // Compila scheda > Amministrazione > Cruscotto controlli - Eventuali curriculum
    // es. https://off270.mur.gov.it/off270/sua25/riepilogo.php?ID_RAD=1610802&vis_quadro=&sezione_aq=A&user=ATElauree_19
    scrape_pds () {
      const self = this;
      $.ajax({
        url: `https://off270.mur.gov.it/off270/sua${self.data.anno - 2000}/riepilogo.php?ID_RAD=${self.data.id_sua}&vis_quadro=&sezione_aq=A&user=ATElauree_19`,
        dataType: 'html', cache: false, timeout: self.ajax_timeout,
        success: (data, status, xhr) => {
          if (data.match(/ACCESSO NEGATO/i)) {
            console.log(`ERR ID_SUA=${self.data.id_sua} scrape_pds - Accesso negato`);
            return;
          }//if

          if (data.match(/Non sono previsti curricula/i)) return;

          let doc = $(data).find('div#TSC10T table');
          doc.find('tr').map((i, tr) => {
            let info = $(tr).find('td').map((j, td) => { return $(td).text(); });
            let sigla = info[1].toString().match(/(.+)\^(.+)\^(.+)\^(.+)/)?.[3] || '--';
            self.data.pds.push({ descr: info[0], cod: info[1], sigla: sigla });
            console.debug(`  - pds: ${sigla} | ${info[1]} | ${info[0]}`);
          });
        },//success
        error: (xhr, status, err) => {
          console.log([`ERR ID_SUA=${self.data.id_sua} scrape_pds (${status} | ${err})`, xhr]);
        },//error
        complete: () => { self.scrape_sedi(); }
      });
    }//scrape_pds

    // Compila scheda > Amministrazione > Cruscotto controlli - Sede
    // https://off270.mur.gov.it/off270/sua25/cruscotto_controlli.php?ID_RAD=1610802&parte=1&vis_pdf=&user=ATElauree_19
    scrape_sedi () {
      const self = this;
      $.ajax({
        url: `https://off270.mur.gov.it/off270/sua${self.data.anno - 2000}/cruscotto_controlli.php?ID_RAD=${self.data.id_sua}&parte=1&vis_pdf=&user=ATElauree_19`,
        dataType: 'html', cache: false, timeout: self.ajax_timeout,
        success: (data, status, xhr) => {
          if (data.match(/ACCESSO NEGATO/i)) {
            console.log(`ERR ID_SUA=${self.data.id_sua} scrape_sede - Accesso negato`);
            return;
          }//if

          if (!data.match(/Controlli su Sedi - Repliche/i))  {
            console.log(`ERR ID_SUA=${self.data.id_sua} scrape_sede - Sedi non trovate`);
            return;
          }//if

          // Il Corso ha sede nel seguente comune: 028060 - PADOVA (PD)
          // Il Corso ha sedi nei seguenti 8 comuni: 025021 - FELTRE (BL), 028055 - MONSELICE (PD), ...
          let testo_sedi = $(data).
            find('div#content-tabs-blu td:contains("Controlli su Sedi")+td li').
            filter((i, el) => { return $(el).text().trim().match(/il corso ha sed[ei] ne[li] seguent[ei].+comun[ei]/i); }).
            text().trim().split(': ')?.[1] || '';
          testo_sedi.split(', ').map((el, i) => {
            let [cod, descr] = el.split(' - ') || ['--', ''];
            self.data.sedi.push({ cod: cod?.trim(), descr: descr?.trim() });
            console.debug(`  - sede: ${cod} | ${descr}`);
          });
        },//success
        error: (xhr, status, err) => {
          console.log([`ERR ID_SUA=${self.data.id_sua} scrape_sede (${status} | ${err})`, xhr]);
        },//error
        complete: () => { self.on_complete(self.data); }
      });
    }//scrape_sedi
  }//class SuaCdsScraper

  let csv = [
    'ANNO', 'RAD', 'SUA', 'CODICIONE', 'CODICE', 'DESCR',
    'SEDI_CODICE', 'SEDI_DESCR',
    'PDS_SIGLA', 'PDS_CODICE', 'PDS_DESCR',
    'CLASSI_SIGLA', 'CLASSI_DESCR'
  ].join("\t");

  $('<div id="tp_bts" style="text-align: right"></div>').prependTo('#scelta');
  $('<button type="button" id="bt_scrape">⛏️ Recupera dati CdS</button>').appendTo('#tp_bts').click((ev) => {
    ev.preventDefault();
    $(ev.target).attr('disabled', true);

    (function scrape_next_node () {
      let node = $('div.corso:not(.scraped):first').addClass('scraped');

      // abbiamo terminato lo scrape di tutti i cds
      if (node.length == 0) {
        let anno = 2000 + parseInt(window.location.pathname.replace(/.+\/sua(\d{2})\/.+/, '$1'));
        tp.dl_link('💾 Scarica TSV', `cds_${anno}__${tp.ts()}.csv`, csv).
          appendTo( $('#tp_bts').append('&nbsp;') ).
          get(0).click();
        return;
      }//if

      // update counter
      let [n, tot] = [$('div.corso.scraped').length, $('div.corso').length];
      $('#bt_scrape').text( $('#bt_scrape').text().replace(/\[.+\]/, '') + ` [${n}/${tot}]`);

      // mark cds as WIP
      node.find('#descorso-int').css('border-left', '1rem solid coral');
      node.find('.titolo').prepend('<span class="scrape-icon">⏳</span>');

      new SuaCdsScraper(node, (data) => {
        node.attr('data-info', JSON.stringify(data));

        // mark cds as DONE
        node.find('#descorso-int').css('border-left', '1rem solid lightgreen');
        node.find('.scrape-icon').text('✅');

        console.debug(data);

        csv += "\n" + [
          data.anno          ?.toString() || '--',
          data.id_rad        ?.toString() || '--',
          data.id_sua        ?.toString() || '--',
          data.codicione     ?.toString() || '--',
          data.codice_interno?.toString() || '--',
          data.descr         ?.toString() || '--',
          data.sedi  .map((el, i) => { return el.cod;   })?.join('; ') || '--',
          data.sedi  .map((el, i) => { return el.descr; })?.join('; ') || '--',
          data.pds   .map((el, i) => { return el.sigla; })?.join('; ') || '--',
          data.pds   .map((el, i) => { return el.cod;   })?.join('; ') || '--',
          data.pds   .map((el, i) => { return el.descr; })?.join('; ') || '--',
          data.classi.map((el, i) => { return el.sigla; })?.join('; ') || '--',
          data.classi.map((el, i) => { return el.descr; })?.join('; ') || '--',
        ].join("\t")

        scrape_next_node();
      });
    })();
  });
}//if - SUA-CdS 20XX > Visualizza Schede
// -----------------------------------------------------------------------------
});})(jQuery.noConflict());
