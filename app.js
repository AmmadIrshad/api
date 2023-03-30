// Define the URL for the API
var apiUrl = "https://jsonplaceholder.typicode.com/users";
// Fetch the API data
fetch(apiUrl)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    // Update the table with the API data
    var tableBody = document.querySelector("#dataTable tbody");
    data.forEach(function (item) {
        var row = tableBody.insertRow();
        var idCell = row.insertCell();
        idCell.textContent = item.id.toString();
        var nameCell = row.insertCell();
        nameCell.textContent = item.name;
        var usernameCell = row.insertCell();
        usernameCell.textContent = item.username;
        var emailCell = row.insertCell();
        emailCell.textContent = item.email;
    });
})
    .catch(function (error) {
    console.error(error);
});
