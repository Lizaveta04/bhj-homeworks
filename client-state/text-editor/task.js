const editor = document.getElementById("editor");
const clear = document.getElementById("clear");

editor.addEventListener('input', () => {
	//localStorage.setItem('text', editor.value);
	localStorage.text = editor.value;
});
editor.value = localStorage.getItem('text');
//editor.value = localStorage.text;


clear.addEventListener('click', () => {
	editor.value = '';
	localStorage.clear();
});
