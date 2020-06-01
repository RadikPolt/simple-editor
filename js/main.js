'use strict';

let div = document.querySelector('.ba-textarea');
let textA = document.querySelector('#textarea');

document.addEventListener('keydown', editorText)

function editorText(event) {
// Ctrl + E
	if ( event.ctrlKey && event.code == 'KeyE') { 
		event.preventDefault();
		textA.value = div.innerHTML;
		div.hidden = true;
		textA.hidden = false;
		textA.focus();
	}
// Ctrl +S
	if (event.ctrlKey && event.code == 'KeyS' && !textA.hidden) { 
		event.preventDefault();
		div.innerHTML = textA.value;
		div.hidden = false;
		textA.hidden = true;
	}
// Esc
	if (event.code == 'Escape') { 
		event.preventDefault();
		div.hidden = false;
		textA.hidden = true; 
	}
}