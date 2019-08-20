import React, { useState } from "react";
import { Redirect } from "react-router";
import { Card, Image, Button } from "semantic-ui-react";

export const CarsItemComponent = ({
  id,
  image,
  title,
  description,
  onDelete
}) => {
  const [redirect, toggleRedirect] = useState(false);

  const handleDelete = () =>
    typeof onDelete === "function" ? onDelete(id) : null;

  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button onClick={_ => toggleRedirect(true)} basic color="blue">
            Full
          </Button>
          <Button onClick={_ => handleDelete()} basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
      {redirect && <Redirect to={`/cars/${id}`} />}
    </Card>
  );
};
