const clickerCounter = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");
image.onclick = function() {
	if (image.width === 200) {
		clickerCounter.textContent ++;
		image.width = 300;
	} else if (image.width === 300) {
		clickerCounter.textContent ++;
		image.width = 200;
	}
}
