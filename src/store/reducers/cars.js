import {
  FETCH_CARS_START,
  FETCH_CARS_END,
  ADD_CAR,
  DELETE_CAR,
  UPDATE_CAR
} from "../actions/cars";

const initialState = {
  fetching: false,
  data: []
};

export function carsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_CARS_START: {
      return { ...state, fetching: true };
    }
    case FETCH_CARS_END: {
      console.log(payload)
      return { ...state, fetching: false, data: payload };
    }
    case ADD_CAR: {
      return { ...state, data: [...state.data, payload] };
    }
    case UPDATE_CAR: {
      return {
        ...state,
        data: [...state.data].map(item => {
          if (item.id === payload.id) item = payload;
          return item;
        })
      };
    }
    case DELETE_CAR: {
      return {
        ...state,
        data: [...state.data].filter(item => item.id !== payload)
      };
    }
    default: {
      return { ...state };
    }
  }
}
