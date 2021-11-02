const modalMain = document.getElementById("modal_main");
const modalClose = document.getElementsByClassName("modal__close");
const showSuccess = document.getElementsByClassName("show-success");
const modalSuccess = document.getElementById("modal_success");

modalMain.className = "modal modal_active";
modalClose.item(0).onclick = function() {
	return modalMain.className = "modal modal__close";
}
showSuccess.item(0).onclick = function() {
	modalMain.className = "modal modal__close";
	return modalSuccess.className = "modal modal_active";
}
