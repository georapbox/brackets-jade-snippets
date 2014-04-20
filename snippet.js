/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, brackets, window */

define(function (require, exports, module) {
    'use strict';
    
    var snippets = {
        itemt: 'itemtype="http://schema.org/*"',                             // itemtype
        data: 'data-*=""',                                                   // data attribute
        aria: 'aria-*=""',                                                   // aria attribute
        a: 'a(href="")',                                                     // anchor element
        at: 'a(href="", target="_blank")',                                   // anchor element (target="_blank")
        img: 'img(src="", width="", height="", alt="")',                     // image element
        script: 'script(type="text/javascript", src="")',                    // script element
        link: 'link(rel="stylesheet", type="text/css", href="")',            // link element
        form: 'form(id="", name="", action="", method="")',                  // form element
        inp: 'input(type="text", placeholder="")',                           // input element (type="text")
        inpe: 'input(type="email", placeholder="")',                         // input element (type="email")
        inptel: 'input(type="tel", placeholder="")',                         // input element (type="tel")
        inpd: 'input(type="date", placeholder="")',                          // input element (type="date")
        inpdt: 'input(type="datetime", placeholder="")',                     // input element (type="datetime")    
        inpdtl: 'input(type="datetime-local", placeholder="")',              // input element (type="datetime-local")
        inpti: 'input(type="time", placeholder="")',                         // input element (type="time")
        inpdm: 'input(type="month", placeholder="")',                        // input element (type="month")
        inpw: 'input(type="week", placeholder="")',                          // input element (type="week")
        inpc: 'input(type="color", value="")',                               // input element (type="color")
        inpn: 'input(type="number", value="", min="", max="", step="")',     // input element (type="number")  
        inpr: 'input(type="range", value="", min="", max="", step="")',      // input element (type="range")
        inpurl: 'input(type="url", placeholder="")',                         // input element (type="url")
        inps: 'input(type="search", placeholder="")',                        // input element (type="search")
        textarea: 'textarea(placeholder="")',                                // textarea element
        button: 'button(type="button") button',                              // button element 
        submit: 'input(type="submit", value="submit")'                       // input element (type="submit")
    };
    
    // template
    snippets.temp = 'doctype html'
        + '\nhtml'
        + '\n  head(lang="en")'
        + '\n    title Document'
        + '\n    meta(http-equiv="content-type", content="text/html; charset=UTF-8")'
        + '\n    meta(name="description", content="")'
        + '\n    meta(name="keywords", content="")'
        + '\n    link(rel="stylesheet", href="")'
        + '\n  body'
        + '\n    script(src="")';
    
    module.exports = snippets;
});
















    
    
    