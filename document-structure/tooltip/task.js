const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
for (let i = 0; i < tooltips.length; i++) {
    const onClick = (e) => {
    	e.preventDefault();
    	const top = e.target.getBoundingClientRect().top;
    	const left = e.target.getBoundingClientRect().left;
        const html = `<div class="tooltip" style="left:${left}px; top:${top}px+20px">${tooltips[i].title}</div>`;
        tooltips[i].insertAdjacentHTML('afterEnd', html);
        const tips = document.querySelectorAll(".tooltip");
        const openTip = document.querySelector(".tooltip.tooltip_active");
        for (let i = 0; i < tips.length; i++) {
        	if (openTip === null) {
        		if(!tips[i]) {
        			return true;
        		}
        		if (tips[i].classList.contains("tooltip_active")) {
        			tips[i].classList.remove("tooltip_active");
        		} else {
        			tips[i].classList.add("tooltip_active");
        		}
        	}
        	if (tips && tips[i] === openTip) {
        		tips[i].classList.remove("tooltip_active");
        	}
        	if (tips && tips[i] !== openTip) {
        		openTip.classList.remove("tooltip_active");
        		tips[i].classList.add("tooltip_active");
        	}
        }
    }
    tooltips[i].addEventListener('click', onClick);
}

