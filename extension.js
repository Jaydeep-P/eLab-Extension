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
  let textBox = document.querySelector('.ck[aria-label="Rich Text Editor, main"]');
  if(textBox){
    console.log(textBox);
    //removes the class attribute from question paragraph, this makes the text selectable.
    textBox.removeAttribute("class"); 
  }
}


document.onclick = (event) => {
  worker_function();
}