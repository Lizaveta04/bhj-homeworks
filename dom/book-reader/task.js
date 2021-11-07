const fontSize = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");
for (let i = 0; i < fontSize.length; i++) {
	const changeFontSize = (event) => {
		if (fontSize[i].classList.contains("font-size_active")) {
			book.classList.remove("book_fs-small");
			book.classList.remove("book_fs-big");
		} 
		if (fontSize[i].classList.contains("font-size_small")) {
			fontSize[i].classList.add("font-size_active");
			book.classList.remove("book_fs-big");
			book.classList.add("book_fs-small");
		} 
		if (fontSize[i].classList.contains("font-size_big")) {
			fontSize[i].classList.add("font-size_active");
			book.classList.remove("book_fs-small");
			book.classList.add("book_fs-big");
		}
		event.preventDefault();
	}
	fontSize[i].addEventListener('click', changeFontSize);
}
