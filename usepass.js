// Function to retrieve JWT token from cookie
function getJwtToken() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'jwtToken') {
            return value;
        }
    }
    return null;
}

// Function to attach JWT token to requests
function attachJwtTokenToRequests() {
    const jwtToken = getJwtToken();
    if (jwtToken) {
        // Attach JWT token to request headers
        fetchOptions.headers.Authorization = `Bearer ${jwtToken}`;
    } else {
        // Redirect to login page if JWT token is missing
        window.location.href = "https://lin-ct.github.io/demonstration_frontend/login.html";
    }
}