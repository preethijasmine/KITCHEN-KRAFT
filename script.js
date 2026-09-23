function goToHome() {

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let terms = document.getElementById("terms").checked;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (email === "") {
        alert("Please enter your email");
        return;
    }

    if (password === "") {
        alert("Please enter a password");
        return;
    }

    if (password.length < 6) {
        alert("Password must have at least 6 characters");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    if (!terms) {
        alert("Please agree to Terms & Conditions");
        return;
    }

    // SAVE ACCOUNT
    let user = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem(
        "kitchenKraftUser",
        JSON.stringify(user)
    );

    alert("Account created successfully!");

    // GO TO LOGIN
    window.location.href = "index.html";
}


function loginUser() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let savedUser = localStorage.getItem("kitchenKraftUser");

    if (savedUser === null) {
        alert("No account found. Please Sign Up first.");
        return;
    }

    let user = JSON.parse(savedUser);

    if (email !== user.email) {
        alert("Incorrect email");
        return;
    }

    if (password !== user.password) {
        alert("Incorrect password");
        return;
    }

    alert("Login successful!");

    window.location.href = "home.html";
}


function logoutUser() {

    localStorage.removeItem("kitchenKraftLoggedIn");

    window.location.href = "index.html";
}