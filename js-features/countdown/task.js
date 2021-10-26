const countDown = function() {
	const timer = document.getElementById("timer");
	
	if (timer.textContent >= '1') {
		timer.textContent --;
	} else if (timer.textContent === '0') {
		alert("Вы победили в конкурсе!");
	}

}
setInterval(countDown, 1000);
