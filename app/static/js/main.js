fetch('http://127.0.0.1:8000/api/investors')
    .then(response => response.json())
    .then(data => {
        displayInvestors(data);
    })
    .catch(error => console.error('Error fetching data:', error));

function displayInvestors(investors) {
    const tableBody = document.getElementById('investors-table-body');
    investors.forEach(investor => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><a href="/investors/${investor.firm_id}">${investor.firm_id}</a></td>
            <td>${investor.firm_name}</td>
            <td>${investor.firm_type}</td>
            <td>${investor.date_added}</td>
            <td>${investor.address}</td>
        `;
        tableBody.appendChild(row);
    });
}
