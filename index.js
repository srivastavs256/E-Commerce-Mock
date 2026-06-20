window.addEventListener("DOMContentLoaded",(event)=>{
    event.preventDefault();
    axios.get("https://crudcrud.com/api/a835855807374a128e6c0beb2666015a/test").
    then((res)=>{
        for(let i=0; i<res.data.length;i++){
            displayUserOnScreen(res.data[i])
        }

    }).catch((rej)=>{
        console.log(rej)
    })
})
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
      username: event.target.username.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };
    axios
      .post(
        "https://crudcrud.com/api/a835855807374a128e6c0beb2666015a/test",
        userDetails
      )
      .then((response) => displayUserOnScreen(response.data))
      .catch((error) => console.log(error));
  
    // Clearing the input fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  }
  
  function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${userDetails.username} - ${userDetails.email} - ${userDetails.phone}`
      )
    );
  
    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    userItem.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    userItem.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    deleteBtn.addEventListener("click", function (event) {
        axios.delete(`https://crudcrud.com/api/a835855807374a128e6c0beb2666015a/test/${userDetails._id}`)
        
        userList.removeChild(event.target.parentElement);
        localStorage.removeItem(userDetails.email);
    });
  
    editBtn.addEventListener("click", function (event) {
      userList.removeChild(event.target.parentElement);
      localStorage.removeItem(userDetails.email);
      document.getElementById("username").value = userDetails.username;
      document.getElementById("email").value = userDetails.email;
      document.getElementById("phone").value = userDetails.phone;
      axios.delete(`https://crudcrud.com/api/a835855807374a128e6c0beb2666015a/test/${userDetails._id}`)
      
    });
}

// Do not touch the code below
module.exports = handleFormSubmit;



window.addEventListener("DOMContentLoader", (event) => {
    event.preventDefault();
    axios.get("https://crudcrud.com/api/5e29bf689e7f4217b0c93fd6ac664ecd/test")
        .then((res) => {
            for(let i = 0; i < res.data.length; i++){
                displayUserOnScreen(res.data[i])
            }
        }).catch((rej) => {
        console.log(rej)
    })
})
function handleFormSubmit(event) {
    event.preventDefault();
    const userDetails = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    axios.post("https://crudcrud.com/api/5e29bf689e7f4217b0c93fd6ac664ecd/test",userDetails)
        .then((response) => displayUserOnScreen(response.data))
        .catch((error) => console.log(error));

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value;

}

function displayUserOnScreen(userDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
        document.createTextNode(
            `${userDetails.username}-${userDetails.phone}- ${userDetails.email}`
        )
    );

    const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createtextNode("Delete"));
    userItem.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createtextNode("Edit"));
    userItem.appendChild(editBtn);

    const userlist = document.querSelector("ul");
    userlist.appendChild(userItem);
    deleteBtn.addEventListener("click", function (event) {
        axios.delete(`https://crudcrud.com/api/5e29bf689e7f4217b0c664ecd/test/${userDetails.id}`)
        
    })

    userlist.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
};

editBtn.addEventListener("click", function (event) {
    userlist.removeChild(event.target.parentElement);
    localStorage.removeItem(userDetails.email);
    document.getElementById("username").value = userDetails.username;
    document.getElementById("email").value = userDetails.email;
    document.getElementById("phone").value = userDetails.phone;

    axios(`https://crudcrud.com/api/5e29bf689e7f4217b0c93fd6ac664ecd/test /${userDetails.id}`)
});


module.exports = handleFormSubmit;