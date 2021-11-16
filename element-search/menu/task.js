const menuLink = document.querySelectorAll(".menu__link");
//Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link.
for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = function() {
		//Найдите меню рядом со ссылкой (подменю).
		const menu = this.closest(".menu__item");
		const submenu = menu.querySelector(".menu.menu_sub"); 
		//Найдите открытое меню на всей странице.
		const openedSubmenu = document.querySelector(".menu.menu_sub.menu_active");
		if (openedSubmenu === null) { //Если открытого подменю нет
			if(!submenu) { //и если вообще подменю нет, то ничего не делайте.
				return true; //Не отменяйте стандартное действие, а выполните редирект.
			}
			//Если подменю есть, то переключите у него класс menu_active.
			if (submenu.className === "menu menu_sub") {
				submenu.className = "menu menu_sub menu_active";
			} else if (submenu.className === "menu menu_sub menu_active") {
				submenu.className = "menu menu_sub";
			}
			return false; //Запрещайте переход по ссылке.
		}
		if (submenu && submenu === openedSubmenu) { //Если элементы совпадают, то это один элемент и его следует закрыть.
			submenu.className = "menu menu_sub";
			return false; //Запрещайте переход по ссылке.
		} else if (submenu && submenu !== openedSubmenu) { //Если элементы не совпадают, то:
			openedSubmenu.className = "menu menu_sub";
			submenu.className = "menu menu_sub menu_active";
			return false; //Запрещайте переход по ссылке.
		}
	}
}
