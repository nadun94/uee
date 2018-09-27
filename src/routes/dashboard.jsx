import Home from "views/Home/Home.jsx";
import flights from "../views/supervisor-i5/Supervisor_i5";
import stureg from "../views/StudentReg/Studentreg.jsx";

import Vacations from "../views/Vacations/Vactions.jsx";
import Diaryview from "../views/Diaryview/Diaryview.jsx";
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
    component: stureg
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
    component:  Diaryview
  },
  {
    path: "/cars",
    name: "Cars",
    icon: "users_single-02",
    component: Cars
  },
 
  { redirect: true, path: "/", pathTo: "/home", name: "Dashboard" }
];
export default dashRoutes;
