const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));
for (let i = 0; i < tooltips.length; i++) {
    const onClick = (e) => {
        let html = `<div class="tooltip">${tooltips[i].title}</div>`;
        tooltips[i].insertAdjacentHTML('afterEnd', html);
        let tips = document.querySelectorAll(".tooltip");
        for (let i = 0; i < tips.length; i++) {
            if (tips[i].classList.contains("tooltip")) {
                tips[i].classList.add("tooltip_active");
            } 
        }
        e.preventDefault();
    }
    tooltips[i].addEventListener('click', onClick);
}

