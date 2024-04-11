import { getUser } from "../global/state/globalState";
import {
  Login,
  PrintAhorcado,
  PrintPokemonPage,
  printTemplateDashboard,
} from "../pages";

export const initControler = (pagesRender) => {
  switch (pagesRender) {
    case undefined:
      localStorage.getItem(getUser().name) ? printTemplateDashboard() : Login();
      break;
    case "Pokemon":
      PrintPokemonPage();
      break;
    case "Dashboard":
      printTemplateDashboard();
      break;
    case "Topo":
      "Topo()";
      break;
    case "Login":
      Login();
      break;
    case "ahorcado":
      PrintAhorcado();
      break;
  }
};
