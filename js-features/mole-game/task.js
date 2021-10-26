const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
for (let i = 1; i < 10; i++) {
	const mole = document.getElementById(`hole${i}`);
	const result = function(text) {
		alert(text);
		dead.textContent = '0';
		lost.textContent = '0';
	}
	mole.onclick = function() {
		if (mole.className === "hole hole_has-mole") {
			dead.textContent ++;
		} else {
			lost.textContent ++;
		}
		if (dead.textContent === '10') {
			result("Победа!");	
		} else if (lost.textContent === '5') {
			result("Вы проигали...");
		}
	}
}
