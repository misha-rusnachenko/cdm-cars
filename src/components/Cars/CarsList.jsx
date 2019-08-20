import React from "react";
import { Card, Image } from "semantic-ui-react";
import { CarsItemComponent } from "./CarsItem";

export const CarsListComponent = ({ data, onDelete }) => {
  return (
    <Card.Group>
      {data.map(item => (
        <CarsItemComponent key={item.id} {...item} onDelete={onDelete} />
      ))}
    </Card.Group>
  );
};
