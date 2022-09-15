const usersContainer = document.getElementById('usersContainer');

let HtmlToRender = [];

// Opté por guardar los datos obtenidos por fetch en cache para evitar rehacer peticiones innecesarias al backend,
// una vez que los datos no cambiam a cada nueva peticion. Al hacer eso, mejoramos el desempeño
// como un todo de la pagina, además de mejorar la experiencia de usuarios con mala conexion a internet.
let usersData = [];

const addEventListenerAll = () => {
  HtmlToRender.forEach((e, i) => {
    document
      .getElementById(i)
      .addEventListener('click', (e) => renderIndividualUser(e.target.id));
  });
};

const renderUsers = () => {
  if (HtmlToRender.length < 1) {
    HtmlToRender = usersData.map(
      (element, i) =>
        `<div class='users__individualUser'><span id='${i}' class='users__name'>${element.name}</span></div>`
    );
  }

  usersContainer.innerHTML = HtmlToRender.join(' ');
  addEventListenerAll();
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

  document.getElementById('backButton').addEventListener('click', renderUsers);
};

const renderError = () => {
  usersContainer.innerHTML =
    "<p class='users__error'>Lo sentimos! Ocurrió un error.</p>";
};

const loadUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const usersList = await response.json();
    usersData = [...usersList];
    renderUsers();
  } catch (error) {
    renderError();
  }
};

document.addEventListener('DOMContentLoaded', loadUsers);
