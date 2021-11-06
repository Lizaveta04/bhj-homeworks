const sliderItem = document.querySelectorAll(".slider__item");
const sliders = Array.from(sliderItem);
const prev = document.querySelector(".slider__arrow.slider__arrow_prev");
const next = document.querySelector(".slider__arrow.slider__arrow_next");
let slidersCount = sliders.length;
let currentSlide = 0;

prev.onclick = function() {
	if (sliders[slidersCount - 1].className === "slider__item slider__item_active") {
		sliders[slidersCount - 1].className = "slider__item";
		slidersCount --;
		if (slidersCount === currentSlide) {
			slidersCount = sliders.length;
		}
		sliders[slidersCount - 1].className = "slider__item slider__item_active";
	} else {
		sliders[slidersCount - 1].className = "slider__item slider__item_active";
	}
}

next.onclick = function() {
	if (sliders[currentSlide].className === "slider__item slider__item_active") {
		sliders[currentSlide].className = "slider__item";
		currentSlide ++;
		if (currentSlide === slidersCount) {
			currentSlide = 0;
		}
		sliders[currentSlide].className = "slider__item slider__item_active";
	} else {
		sliders[currentSlide].className = "slider__item slider__item_active";
	}
}
