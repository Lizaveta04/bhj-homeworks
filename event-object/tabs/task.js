const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__content");
for (let i = 0; i < tab.length; i++) {
	tab[i].onclick = function() {
		tab[i].className = "tab tab_active";
		tabContent[i].className = "tab__content tab__content_active";
	}
}
