const dropdownValue = document.querySelector(".dropdown__value");
const dropdownList = document.querySelector(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownLink = document.querySelectorAll(".dropdown__link");
dropdownValue.onclick = function() {
	if (dropdownList.className === "dropdown__list") {
		dropdownList.className = "dropdown__list dropdown__list_active";
	} else {
		dropdownList.className = "dropdown__list";
	}
}
for (let i = 0; i < dropdownItem.length; i++) {
	dropdownItem[i].onclick = function() {
		dropdownValue.textContent = dropdownItem[i].textContent;
		dropdownList.className = "dropdown__list";
		return false;
	}
}

