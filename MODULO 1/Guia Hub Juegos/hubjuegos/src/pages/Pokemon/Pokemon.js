import { PrintButton } from "../../components";
import { PrintTemplateSpinner } from "../../components/spinner/Spinner";
import { PrintSpinner } from "../../components/spinner/SpinnerButton";
import { getData } from "../../global/state/globalState";
import { Paginacion, filterPokemon } from "../../utils";
import "./Pokemon.css";

const template = () => `
  <div id="pokemon">
    <div id="containerFilter">
      <div id="spinnerButtonFilter"></div>
      <div id="filterButton"></div>
      <input
        type="text"
        id="inputPokemon"
        placeholder="Busca tu pokemon favorito"
      />
    </div>
    <div id="paginacion"></div>
    <div id="spinner"></div>
    <div id="galleryPokemon"></div>
  </div>
`;

const dataService = async () => {
  const getDataPokemon = getData("Pokemon");

  const { pokemonData, type } = getDataPokemon;
  document.getElementById("spinner").innerHTML = "";
  PrintButton(type);
  document.getElementById("spinnerButtonFilter").innerHTML = "";
  addListeners();
  Paginacion(pokemonData, 25);
};
const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    /** este evento lo unico que hace es mandar el valor del input y el tipo de filtro que tiene que
     
hacer a la funcion que se encarga de filtrar.*
Recordar este funcion nos sirve gracias al switch
para el filtrado por name como para el filtrado por
button con los tipos de pokemons
*/
    filterPokemon(e.target.value, "name");
  });
};

export const PrintPokemonPage = () => {
  document.querySelector("main").innerHTML = template();
  PrintTemplateSpinner();
  PrintSpinner();
  dataService();
};