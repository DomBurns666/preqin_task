document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('investment-type').addEventListener('change', function() {
        var assetClass = this.value;

        var investorId = document.getElementById('firm-id').innerText;
        var apiUrl = 'http://127.0.0.1:8000/api/investor/commitment/' + assetClass + '/' + investorId;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                var tableBody = document.getElementById('commitment-table-body');
                tableBody.innerHTML = '';

                data.forEach(entry => {
                    var row = '<tr>';
                    row += '<td>' + entry.currency + '</td>';
                    row += '<td>' + entry.amount + '</td>';
                    row += '</tr>';
                    tableBody.innerHTML += row;
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    });
});
