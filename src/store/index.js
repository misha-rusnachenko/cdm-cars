import { createStore } from "redux";
import { carsReducer } from "./reducers/cars";

export const store = createStore(carsReducer);