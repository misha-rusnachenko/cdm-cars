export const FETCH_CARS_START = "FETCH_CARS_START";
export const FETCH_CARS_END = "FETCH_CARS_END";

export const ADD_CAR = "ADD_CAR";
export const UPDATE_CAR = "UPDATE_CAR";
export const DELETE_CAR = "DELETE_CAR";

export const fetchStart = () => ({ type: FETCH_CARS_START });
export const fetchEnd = payload => ({ type: FETCH_CARS_END, payload });

export const addCar = payload => ({ type: ADD_CAR, payload });
export const updateCar = payload => ({ type: UPDATE_CAR, payload });
export const deleteCar = payload => ({ type: DELETE_CAR, payload });
