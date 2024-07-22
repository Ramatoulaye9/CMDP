const userList = document.getElementById("user-list");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.className = "user-container";

      const userName = document.createElement("div");
      userName.className = "user-name";
      userName.innerText = `Nom: ${user.name}`;

      const userUsername = document.createElement("div");
      userUsername.className = "user-username";
      userUsername.innerText = `Nom d'utilisateur: ${user.username}`;

      const userEmail = document.createElement("div");
      userEmail.className = "user-email";
      userEmail.innerText = `Courriel: ${user.email}`;

      userDiv.appendChild(userName);
      userDiv.appendChild(userUsername);
      userDiv.appendChild(userEmail);

      userList.appendChild(userDiv);
    });
  });