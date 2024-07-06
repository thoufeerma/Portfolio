const form = document.querySelector('#lg-regForm');

form.addEventListener('submit', sendData);

function sendData(e) {
    e.preventDefault();

    if (validateform()) {
        const formData = new FormData(form);

        const params = {
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get('username'),
                password: formData.get('password'),
                cpassword: formData.get('cpassword'),
                email: formData.get('email'),
                phonenum: formData.get('phonenum')
            }),
            method: "POST"
        };

        fetch('/formData', params)
            .then(response => response.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => console.error(err));
    }
}

function validateform() {
    const username = document.getElementById("lg-username").value;
    const password = document.getElementById("lg-password").value;
    const cpassword = document.getElementById("lg-cpassword").value;
    const email = document.getElementById("lg-email").value;
    const phonenum = document.getElementById("lg-phonenum").value;

    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const cpasswordError = document.getElementById("cpassword-error");
    const emailError = document.getElementById("email-error");
    const phonenumError = document.getElementById("phonenum-error");

    usernameError.textContent = "";
    passwordError.textContent = "";
    cpasswordError.textContent = "";
    emailError.textContent = "";
    phonenumError.textContent = "";

    let isValid = true;

    if (username === "" || /\d/.test(username)) {
        usernameError.textContent = "Please enter your name properly.";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent = "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (cpassword === "" || cpassword !== password) {
        cpasswordError.textContent = "Passwords don't match.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Please enter a valid email address.";
        isValid = false;
    }

    if (phonenum === "" || phonenum.length < 10) {
        phonenumError.textContent = "Please enter your phone number.";
        isValid = false;
    }

    return isValid;
}
