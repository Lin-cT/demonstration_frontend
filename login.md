---
permalink: /login
---

<html>
<head>
    <title>Login</title>
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
        .login-container {
            width: 300px;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); /* Add a subtle shadow effect */
        }
        .login-container h1 {
            margin-top: 0;
            color: #333333; /* Set a darker text color for the heading */
            text-align: center;
        }
        .login-container label {
            display: block;
            margin-bottom: 5px;
            color: #666666; /* Set a slightly darker text color for labels */
        }
        .login-container input[type="text"],
        .login-container input[type="password"] {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #cccccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        .login-container button {
            width: 100%;
            padding: 10px;
            background-color: #007bff; /* Set a primary button color */
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .login-container button:hover {
            background-color: #0056b3; /* Darken the button color on hover */
        }
        .login-container .message {
            margin-top: 15px;
            text-align: center;
            color: #ff0000; /* Set a red color for error messages */
        }
    </style>
</head>
<div class="form-container">
    <h2 id="pageTitle">Login</h2>
    <form>
        <input type="text" id="name" class="input" placeholder="Full Name"><br>
        <input type="text" id="user" class="input" placeholder="Username"><br>
        <input type="password" id="pass" class="input" placeholder="Password">
    </form>
    <button class="submit" onclick="signup()">Log In</button>
    <p id="error"></p>
    <button onclick="switchToSignup()">Switch to Signup</button>
</div>
<script>
    function switchToSignup() {
        window.location.href = "http://127.0.0.1:4200/demonstration_frontend/signup";
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
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }
        fetch('http://127.0.0.1:8086/api/users/authenticate', options)
        .then(response => {
            if (response.ok) {
                // Handle successful login
                const headers = response.headers;
                const headerEntries = [...headers.entries()]
                console.log('Response Headers:', headerEntries)
                console.log('All Cookies:', document.cookie);
                document.getElementById("error").innerHTML = ""
                const jwtCookie = getCookie('jwt');
                if (jwtCookie) {
                    console.log('JWT Token:', jwtCookie);
                } else {
                    console.log('JWT Token not found');
                }
                // Redirect to the desired page after successful login
                window.location.href = "http://127.0.0.1:4200/demonstration_frontend/CRUD";
            }
            else {
                // Handle incorrect login information
                document.getElementById("error").innerHTML = "Incorrect Login Information";
                // You can also redirect to an error page or display a 403 error here
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
</script>
</html>