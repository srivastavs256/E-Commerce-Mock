// Write your code below:
function fetchusers() {
    axios.get('https://crudcrud.com/api/32fc2221c4d4464bba2e9e543a093a54')
        .then(response => {
            const user = response.data;
            const userList = document.querySelector('ul');
            userList.innerHTML = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `${user.username}-${user.email}-${user.phone}`;
                userList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
    
}

function handleFormSubmit(event) {
  
}

// Do not touch the code below
module.exports = handleFormSubmit;
 