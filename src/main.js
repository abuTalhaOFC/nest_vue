import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faHouse,
  faCaretDown,
  faCaretUp,
  faBagShopping,
  faBarsStaggered,
  faCartShopping,
  faShop,
  faSquarePlus,
  faSackDollar,
  faUser,
  faMessage,
  faStar,
  faChartPie,
  faGear,
  faTag,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import store from "@/store";
import router from './router'

/* add icons to the library */
library.add(
  faHouse,
  faCaretDown,
  faCaretUp,
  faBagShopping,
  faBarsStaggered,
  faCartShopping,
  faShop,
  faSquarePlus,
  faSackDollar,
  faUser,
  faMessage,
  faStar,
  faChartPie,
  faGear,
  faTag,
  faMagnifyingGlass
);

createApp(App).use(router)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
