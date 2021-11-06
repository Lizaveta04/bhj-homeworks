const tab = Array.from(document.querySelectorAll(".tab"));
const tabContent = document.querySelectorAll(".tab__content");
for (let i = 0; i < tab.length; i++) {
	const onClick = () => {
		//const index = tab.indexOf(tab[i]);
		if (tab[i].className === "tab tab_active") {
			tab[i].className = "tab";
			tabContent[i].className = "tab__content";
		} else if (tab[i].className === "tab") {
			tab[i].className = "tab tab_active";
			tabContent[i].className = "tab__content tab_active";
		}	
	}
	tab[i].addEventListener('click', onClick);
}
