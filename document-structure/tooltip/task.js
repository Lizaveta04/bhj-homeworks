const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

for (let i = 0; i < hasTooltips.length; i++) {
    const onClick = (e) => {
        e.preventDefault();
        const top = e.target.getBoundingClientRect().top;
        const left = e.target.getBoundingClientRect().left;
        const html = `<div class="tooltip" style="left:${left}px; top:${top}px+20px">${e.target.title}</div>`;
        hasTooltips[i].insertAdjacentHTML('afterEnd', html);
        const tooltip = document.querySelector(".tooltip");
        if (tooltip.innerText === e.target.title) {
            tooltip.classList.toggle("tooltip_active");
        } else {
            tooltip.innerText = e.target.title;
            tooltip.style.top = `${top + 20}px`; 
            tooltip.style.left = `${left}px`;
            tooltip.classList.add("tooltip_active");
        } 
    }
    hasTooltips[i].addEventListener('click', onClick);
}
