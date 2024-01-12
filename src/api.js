const apiUrl = "https://localhost:5126/api/items";

export const fetchItems = () => {
  return fetch(apiUrl)
    .then(response => response.json())
    .catch(error => console.error('Error fetching items:', error));
};