const usersContainer = document.getElementById('usersContainer');

const renderedUsersList = [];
let usersData = [];

const handleBackButtonClick = () => {
  backButton.removeEventListener('click', handleBackButtonClick);
  renderUsers();
};

const renderIndividualUser = (id) => {
  const user = usersData[id];

  usersContainer.innerHTML = `
  <div class='users__userInfo'>
    <button id='backButton' class='users__backButton'> < Volver </button>
    <span class='users__infoField'><b>Nombre</b>: ${user.name}</span>
    <span class='users__infoField'><b>Email:</b> ${user.email}</span>
    <span class='users__infoField'><b>Teléfono:</b> ${user.phone}</span>
    <span class='users__infoField'><b>Sitio web:</b> ${user.website}</span>
    <span class='users__infoField'><b>City:</b> ${user.address.city}</span>
  </div>
  `;

  document
    .getElementById('backButton')
    .addEventListener('click', handleBackButtonClick);
};

const handleUserClick = (e) => {
  renderIndividualUser(e.target.id);
};

const addEventListenerAll = () => {
  renderedUsersList.forEach((e, i) => {
    document
      .getElementById(i)
      .addEventListener('click', (e) => handleUserClick(e));
  });
};

const renderUsers = () => {
  if (usersData.length < 1) {
    loadUsers();
  }

  if (renderedUsersList.length < 1) {
    usersData.forEach((element, i) => {
      renderedUsersList.push(
        `<div class='users__individualUser'><span id='${i}' class='users__name'>${element.name}</span></div>`
      );
    });
  }

  usersContainer.innerHTML = renderedUsersList.join(' ');
  addEventListenerAll();
};

const renderError = () => {
  usersContainer.innerHTML =
    "<span class='users__error'>Lo sentimos! Ocurrió un error.</span>";
};

const loadUsers = async () => {
  console.log('fui executado');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersList = await response.json();
    usersData = [...usersList];
    renderUsers();
  } catch (error) {
    renderError();
  }
};

document.getElementById('root').addEventListener('load', loadUsers());
