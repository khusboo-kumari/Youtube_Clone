document.addEventListener('DOMContentLoaded', function() {
    const userList = document.getElementById('userList');
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    fetch(apiUrl)
        .then(response => response.json()) 
        .then(data => {
            data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>Email: ${user.email}</p>
                    <p>Phone: ${user.phone}</p>
                `;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error:', error));
});
