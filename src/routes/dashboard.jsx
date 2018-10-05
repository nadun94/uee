import Home from "views/Home/Home.jsx";
import flights from "../views/Flights/Flights";
import Hotels from "../views/Hotels/Hotels.jsx";

import Vacations from "../views/Vacations/Vactions";
import Cruises from "../views/Cruises/Cruises.jsx";
import Cars from "../views/Cars/Cars";

var dashRoutes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/flights",
    name: "Fights",
    component: flights
  },
  {
    path: "/hotels",
    name: "Hotels",
    icon: "education_paper",
    component: Hotels
  },

  {
    path: "/vacations",
    name: "Vacations",
    icon: "files_paper",
    component: Vacations
  },
  {
    path: "/cruises",
    name: "Cruises",
    icon: "files_paper",
    component: Cruises
  },
  {
    path: "/cars",
    name: "Cars",
    icon: "users_single-02",
    component: Cars
  },

  { redirect: true, path: "/", pathTo: "/home", name: "Home" }
];
export default dashRoutes;
