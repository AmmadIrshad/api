// Define the interface for the API data
interface ApiData {
  id: number;
  name: string;
  username: string;
  email: string;
}

// Define the URL for the API
const apiUrl = "https://jsonplaceholder.typicode.com/users";

// Fetch the API data
fetch(apiUrl)
  .then((response) => response.json())
  .then((data: ApiData[]) => {
    // Update the table with the API data
    const tableBody: any = document.querySelector("#dataTable tbody");
    data.forEach((item: ApiData) => {
      const row = tableBody.insertRow();
      const idCell = row.insertCell();
      idCell.textContent = item.id.toString();
      const nameCell = row.insertCell();
      nameCell.textContent = item.name;
      const usernameCell = row.insertCell();
      usernameCell.textContent = item.username;
      const emailCell = row.insertCell();
      emailCell.textContent = item.email;
    });
  })
  .catch((error) => {
    console.error(error);
  });
