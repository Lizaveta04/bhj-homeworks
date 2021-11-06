const sliderItem = document.querySelectorAll(".slider__item");
const sliders = Array.from(sliderItem);
const prev = document.querySelector(".slider__arrow.slider__arrow_prev");
const next = document.querySelector(".slider__arrow.slider__arrow_next");
let slidersCount = sliders.length;
let currentSlide = 0;
function findActiveSlider(currentSlide) {
	return document.querySelector(".slider__item.slider__item_active");
}
let sliderActive = sliders.findIndex(findActiveSlider);

prev.onclick = function() {
	if (sliders[sliderActive].className === "slider__item slider__item_active") {
		sliders[sliderActive].className = "slider__item";
		currentSlide --;
	} else {
		sliders[sliderActive].className = "slider__item slider__item_active";
	}
}

next.onclick = function() {
	if (sliders[sliderActive].className === "slider__item slider__item_active") {
		sliders[sliderActive].className = "slider__item";
		currentSlide ++;
	} else {
		sliders[sliderActive].className = "slider__item slider__item_active";
	}
}
