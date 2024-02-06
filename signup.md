---
permalink: /signup
---
<html>
<head>
    <title>Sign Up</title>
    <style>
        body {
            background-color: #f5f5f5; /* Set a light background color */
            font-family: Arial, sans-serif; /* Set a common font family */
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .signup-container {
            width: 300px;
            padding: 20px;
            border-radius: 8px;
            background-color: #ffffff;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Add a subtle shadow effect */
        }
        .signup-container h1 {
            margin-top: 0;
            color: #333333; /* Set a darker text color for the heading */
            text-align: center;
        }
        .signup-container label {
            display: block;
            margin-bottom: 5px;
            color: #666666; /* Set a slightly darker text color for labels */
        }
        .signup-container input[type="text"],
        .signup-container input[type="password"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #cccccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .signup-container button {
            width: 100%;
            padding: 10px;
            background-color: #007bff; /* Set a primary button color */
            border: none;
            color: #ffffff;
            border-radius: 4px;
            cursor: pointer;
        }
        .signup-container button:hover {
            background-color: #0056b3; /* Darken the button color on hover */
        }
        .signup-container .message {
            margin-top: 15px;
            text-align: center;
            color: #ff0000; /* Set a red color for error messages */
        }
        .login-button {
            width: 100%;
            padding: 10px;
            background-color: #f5f5f5; /* Set a light background color */
            border: none;
            color: #007bff; /* Set a primary button color */
            border-radius: 4px;
            cursor: pointer;
            margin-top: 10px;
        }
        .login-button a {
            text-decoration: none; /* Remove underline from the link */
            color: #ffffff;
        }
        .login-button a:hover {
            text-decoration: underline; /* Underline the link on hover */
        }
    </style>
</head>
<body>
<div class="form-container">
    <h2 id="pageTitle">Sign Up</h2>
    <form>
        <input type="text" id="name" class="input" placeholder="Full Name"><br>
        <input type="text" id="user" class="input" placeholder="Username"><br>
        <input type="password" id="pass" class="input" placeholder="Password">
    </form>
    <button class="submit" onclick="signup()">Sign Up</button>
    <p id="error"></p>
    <button onclick="switchToLogin()">Switch to Login</button>
</div>
</body>
<script>
function switchToLogin() {
    window.location.href = "http://127.0.0.1:4200/demonstration_frontend/login";
}
function signup() {
    data = {
        "name": document.getElementById("name").value,
        "uid": document.getElementById("user").value,
        "password": document.getElementById("pass").value,
        }
    let options = {
    method: 'POST',
    headers: {
        'Content-Type':
            'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
}
    let sign_up = fetch('http://127.0.0.1:8086/api/users/', options);
    sign_up.then(response => {
        if (response.status === 200) {
            window.location.href = "http://127.0.0.1:4200/demonstration_frontend/login"
        }
        else if (response.status === 400) {
            document.getElementById("error").innerHTML = "You already have an account! Go to the login page."
        }
    }
        ) 
}
</script>
</html>