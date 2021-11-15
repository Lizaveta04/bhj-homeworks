const chatWidget = document.querySelector(".chat-widget");
const messages = document.getElementById("chat-widget__messages");
const inputField = document.getElementById("chat-widget__input");

const chatOpening = () => {
    chatWidget.classList.add("chat-widget_active");
}
chatWidget.addEventListener('click', chatOpening);

const currentTime = () => { 
    return new Date().toLocaleTimeString("ru-Ru", {
        hour: "2-digit",
        minute: "2-digit",
    });
}

const answers = [
    'Хаю хай, с вами Иван Гай!',
    'Чао-какао!',
    'Пока ква-ква.',
    'Здрасьте забор покрасьте.',
    'Я для тебя что, шутка какая-то?',
    'Какое такое плохое зло я тебе сделал?',
    'Загугли.',
];

const messageEntering = (e) => {
    let massageText = inputField.value.trim();
    let index = Math.floor(Math.random() * answers.length);
    if (e.key === 'Enter' && massageText !== '') {
        messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">${massageText}</div>
        </div>
        `;
        inputField.value = '';
        messages.innerHTML += `
        <div class="message">
            <div class="message__time">${currentTime()}</div>
            <div class="message__text">${answers[index]}</div>
        </div>
        `;
    }
}
inputField.addEventListener('keydown', messageEntering);