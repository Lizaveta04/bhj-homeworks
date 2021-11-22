const signin = document.getElementById("signin");
const signinBtn = document.getElementById("signin__btn");
const welcome = document.getElementById("welcome");
const userIdSpan = document.getElementById("user_id");
const logoutBtn = document.getElementById("logout__btn");

signinBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const signinForm = document.getElementById("signin__form");
    const formData = new FormData(signinForm);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            const success = JSON.parse(xhr.responseText).success;
            if (success === true) {
                const userId = JSON.parse(xhr.responseText).user_id;
                localStorage.id = userId;
                userIdSpan.innerText = userId;
                signin.classList.remove("signin_active");
                welcome.classList.add("welcome_active");
            } else {
                alert('Неверный логин/пароль.')
                signinForm.reset();
            }
        }
    });    
});

logoutBtn.addEventListener('click', () => {
    welcome.classList.remove("welcome_active");
    signin.classList.add("signin_active");
    signinForm.reset();
});
