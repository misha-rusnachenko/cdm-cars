import { HomeView } from "../views/Home/Home";
import { SingleView } from "../views/Single/Single";

export const routes = [
  {
    path: "/",
    component: HomeView,
    exact: true
  },
  {
    path: "/cars/:id",
    component: SingleView
  }
];
