import { getInfo, initControler } from "../../utils";
import "./Dashboard.css";

const template = () => `
  <div id="containerDashboard">
    <ul>
      <li>
        <figure id="navigatePokemon">
          <img
            src="https://archives.bulbagarden.net/media/upload/9/95/Project_Pok%C3%A9dex_logo.png"
            alt="go to page pokemon"
          />
          <h2>POKEDEX</h2>
        </figure>
      </li>
      <li>
        <figure id=navigatePagina>
          <img
            src="https://res.cloudinary.com/dfmtnqzyl/image/upload/v1712765477/777-removebg-preview_c91oxc.png"
            alt=" go to AHORCADO game"
          />
          <h2>AHORCADO</h2>
        </figure>
      </li>
    </ul>
  </div>
`;

const addEventListeners = () => {
  const navigatePokemon = document.getElementById("navigatePokemon");
  navigatePokemon.addEventListener("click", () => {
    initControler("Pokemon");
  });
  const navigateAhorcado = document.getElementById("navigatePagina");
  navigateAhorcado.addEventListener("click", () => {
    initControler("ahorcado");
  });
};

export const printTemplateDashboard = () => {
  document.querySelector("main").innerHTML = template();

  document.querySelector("nav").style.display = "flex";

  addEventListeners();
  getInfo();
};
