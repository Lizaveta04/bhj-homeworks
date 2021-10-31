const sliderItem = document.getElementsByClassName("slider__item");
const sliderArrows = document.getElementsByClassName("slider__arrows");
const sliders = Array.from(sliderArrows);
for (let i = 0; i < sliders.length; i++) {
	sliders[i].onclick = function(){
		sliderItem.className = "slider__item slider__item_active";
	}
}
