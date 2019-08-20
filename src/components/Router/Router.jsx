import React, { useState } from "react";

import { Button } from "semantic-ui-react";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch, Redirect } from "react-router";
import { AddModalComponentConnected } from "../AddModal/AddModal";

export const RouterComponent = ({ routes }) => {
  const [redirect, setRedirect] = useState(false);

  const handleRedirect = _ => {
    setRedirect(true);
    setTimeout(() => setRedirect(false), 1);
  };

  return (
    <BrowserRouter>
      <br />
      <header>
        <Button onClick={_ => handleRedirect()} color="brown">
          To home
        </Button>
        <AddModalComponentConnected />
      </header>
      <hr />
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
        {redirect && <Redirect to="/" />}
    </BrowserRouter>
  );
};
