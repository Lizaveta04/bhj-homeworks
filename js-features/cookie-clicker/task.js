const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
image.onclick = function() {
	image.width = image.width === 200 ? 300 : 200;
	clickerCounter.textContent ++;
}
