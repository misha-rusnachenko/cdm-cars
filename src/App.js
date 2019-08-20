import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterComponent } from "./components/Router/Router";
import { routes } from "./const/routes";
import { Container } from "semantic-ui-react";
import { fetchStart, fetchEnd } from "./store/actions/cars";
import { getFromLocalStorage } from "./utils/storage";

function App() {
  useEffect(() => {
    store.dispatch(fetchStart());
    store.dispatch(fetchEnd(getFromLocalStorage()));
    return () => {};
  });

  return (
    <Provider store={store}>
      <Container className="App">
        <RouterComponent routes={routes} />
      </Container>
    </Provider>
  );
}

export default App;
