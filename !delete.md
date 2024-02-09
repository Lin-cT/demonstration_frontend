---
permalink: /delete
---

<html>
    <div>
        <pre id = "data"></pre>
        <form>
        <input type="text" id = "_uid" class = "input" placeholder = "uid">
        </form>
        <button class = "submit" onclick = "delete()">Delete User</button>
    </div>
</html>
<script>
function delete() {
    data = {
        "uid": document.getElementById("_uid").value,
        "role": "Admin"
    }
    let options = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
    credentials: 'include',
    body: JSON.stringify(data)
}
    fetch("http://127.0.0.1:8086/api/users/", options)
        .then(response => {
            let access = response.status !== 401 && response.status !== 403;
            return response.json().then(data => ({ data, access }));
        })
        .then(({data, access}) => {
            console.log(access)
            if (access){ 
            document.getElementById("data").textContent = "User Successfully Deleted";
            }
            else {
                document.getElementById("data").textContent = "Unauthorized.";
            }
        })
}
</script>