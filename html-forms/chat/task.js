const chatWidget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const inputField = document.getElementById("chat-widget__input");

const chatOpening = () => {
	chatWidget.classList.add("chat-widget_active");
}
chatWidget.addEventListener('click', chatOpening);

const currentTime = new Date().toLocaleTimeString("ru-Ru", {
	hour: "2-digit",
	minute: "2-digit",
});

const messageEntering = (e) => {
	let massageText = inputField.value.trim();
	if (e.key === 'Enter' && massageText !== ' ') {
		messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${currentTime}</div>
			<div class="message__text">${massageText}</div>
		</div>
		`;
		massageText = ' ';
		messages.innerHTML += `
		<div class="message">
			<div class="message__time">${currentTime}</div>
			<div class="message__text">${"ответ робота"}</div>
		</div>
		`;
	}
}
inputField.addEventListener('keydown', messageEntering);