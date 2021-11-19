const progress = document.getElementById("progress");
const button = document.getElementById("send");

const onClick = (e) => {
	e.preventDefault();
	const form = document.getElementById("form");
	const formData = new FormData(form);
	const xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	//progress.value = 0.7;
	xhr.send(formData);
}
button.addEventListener('click', onClick);
