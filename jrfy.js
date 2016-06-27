// ==UserScript==
// @name        JRFY
// @namespace   http://siexop-jirat:8080
// @description JRFY - Jira Remove Fluorescent Yellow
// @include     http://siexop-jirat:8080/
// @author      Nicolas Borboën
// @match       http://siexop-jirat:8080/*
// @version     0.1
// @downloadURL https://raw.githubusercontent.com/ponsfrilus/jrfy/master/jrfy.js
// @updateURL   https://raw.githubusercontent.com/ponsfrilus/jrfy/master/jrfy.js
// @grant       none
// ==/UserScript==
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

(function() {
    'use strict';
     addGlobalStyle('.aui-header { background: #205081;}');
})();
