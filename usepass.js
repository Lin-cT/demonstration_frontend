function login(){
    // Set Authenticate endpoint
    const url = 'http://127.0.0.1:8086/api/users/authenticate';

    // Set the body of the request to include login data from the DOM
    const body = {
        uid: document.getElementById("uid").value,
        password: document.getElementById("password").value,
    };

    // Change options according to Authentication requirements
    const authOptions = {
        mode: 'cors', // no-cors, *cors, same-origin
        credentials: 'include', // include, same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST', // Override the method property
        cache: 'no-cache', // Set the cache property
        body: JSON.stringify(body)
    };

    // Fetch JWT
    fetch(url, authOptions)
    .then(response => {
        // handle error response from Web API
        if (!response.ok) {
            const errorMsg = 'Login error: ' + response.status;
            console.log(errorMsg);
            alert("Failed Authentication: Credentials Incorrect")
            return;
        }
        // Success!!!
        // Redirect to the database page
        window.location.href = "https://lin-ct.github.io/demonstration_frontend/CRUD.html";
    })
    // catch fetch errors (ie ACCESS to server blocked)
    .catch(err => {
        console.error(err);
    });
}

// Attach login_user to the window object, allowing access to form action
window.login_user = login_user;

