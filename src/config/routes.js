import {
  HOME_PAGE,
  FRIEND,
  ABOUTME
} from "../constants/routes";
import Home from "../pages/Home/Home";
import AboutMe from "../pages/aboutme/AboutMe";
import Friends from "../pages/friends/Friends";
const routes = [
  {
    path: HOME_PAGE,
    Component: Home,
  },

  {
    path: FRIEND,
    Component: Friends,
  },
  {
    path: ABOUTME,
    Component: AboutMe,
  },

];

export default routes;
