const menuLink = document.querySelectorAll(".menu__link");
//Используя цикл зарегистрируйте обработчики события click на элементах с классом menu__link.
for (let i = 0; i < menuLink.length; i++) {
	menuLink[i].onclick = function() {
		//Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active.
		const menu = this.closest(".menu__item");
		const submenu = menu.querySelector(".menu.menu_sub");
		if (submenu && submenu.className === "menu menu_sub") {
			submenu.className = "menu menu_sub menu_active";
		} else if (submenu.className === "menu menu_sub menu_active") {
			submenu.className = "menu menu_sub";
		}
		//Запрещайте переход по ссылке для тех, что имеют вложенное меню. Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы.
		return false;
	}
}

