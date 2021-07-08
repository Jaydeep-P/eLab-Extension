// ==UserScript==
// @name         Elab
// @version      1.1
// @description  Turns CK editor off in SRM eLab,
// @author       Jaydeep Patel
// @include      https://care.srmrmp.edu.in/*
// @include      https://care.srmist.edu.in/*
// @icon         https://www.google.com/s2/favicons?domain=srmist.edu.in
// ==/UserScript==

function worker_function() {

//selector for the question text
let ele = document.querySelector('.ck[contenteditable="false"][aria-label="Rich Text Editor, main"]');

//removes the class attribut from question paragraph, this makes the text selectable.
ele.removeAttribute("class");
}

function doc_keyUp(e) {
  //executes only on key press.
  worker_function();
}

document.addEventListener('keyup', doc_keyUp, false);