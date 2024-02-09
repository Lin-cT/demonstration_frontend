---
permalink: /get
---

<html>
<head>
</head>
<body>
    <div>
        <table id="data-table">
            <thead>
                <tr id="header-row"></tr>
            </thead>
            <tbody id="data-body"></tbody>
        </table>
    </div>
    <div class="form-container">
    <p id="data"></p>
    </div>
    <script>
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            credentials: 'include'
        };
        fetch("http://127.0.0.1:8086/api/users/", options)
            .then(response => {
                let access = response.status !== 401 && response.status !== 403;
                return response.json().then(data => ({ data, access }));
            })
            .then(({ data, access }) => {
                console.log(access);
                if (access) {
                    // Get keys from the first object in the data array to use as table headers
                    const headers = Object.keys(data[0]);
                    const headerRow = document.getElementById("header-row");
                    // Create header cells
                    headers.forEach(header => {
                        const th = document.createElement("th");
                        th.textContent = header;
                        headerRow.appendChild(th);
                    });
                    // Populate data rows
                    const dataBody = document.getElementById("data-body");
                    data.forEach(item => {
                        const row = document.createElement("tr");
                        headers.forEach(header => {
                            const cell = document.createElement("td");
                            cell.textContent = item[header];
                            row.appendChild(cell);
                        });
                        dataBody.appendChild(row);
                    });
                } else {
                    document.getElementById("data").textContent = "403 Unauthorized.";
                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    </script>
</body>
</html>
