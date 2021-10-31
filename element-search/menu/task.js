const menuLink = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = function() {
		//Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active.
		const menu = menuLink[i].closest(".menu");
		if (menu.className === "menu menu_sub") {
			menu.className = "menu menu_sub menu_active";
		}
		//Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
		const submenu = document.querySelectorAll(".menu.menu_sub");
		if (submenu) {
			return false;
		}
	}
}
