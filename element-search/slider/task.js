const sliderItem = document.querySelectorAll(".slider__item");
const sliders = Array.from(sliderItem);
const prev = document.querySelector(".slider__arrow.slider__arrow_prev");
const next = document.querySelector(".slider__arrow.slider__arrow_next");

let positionOfActiveSlide = sliders.findIndex((item, idx) => {
	return item.className = "slider__item slider__item_active";
})

prev.onclick = function() {
	sliders[positionOfActiveSlide].className = "slider__item";
	positionOfActiveSlide < sliders.length-1 ? positionOfActiveSlide++ : positionOfActiveSlide = 0;
	sliders[positionOfActiveSlide].className = "slider__item slider__item_active";
}

next.onclick = function() {
	sliders[positionOfActiveSlide].className = "slider__item";
	positionOfActiveSlide < sliders.length-1 ? positionOfActiveSlide++ : positionOfActiveSlide = 0;
	sliders[positionOfActiveSlide].className = "slider__item slider__item_active";
}
