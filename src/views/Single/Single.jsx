import React, { useState } from "react";
import { connect } from "react-redux";
import { Grid, Image, Table } from "semantic-ui-react";
import { AddModalComponentConnected } from "../../components/AddModal/AddModal";
import { updateCar } from "../../store/actions/cars";
import { updateLocalStorageById } from "../../utils/storage";

export const SingleViewComponent = ({ match, data, dispatch }) => {
  const { id } = match.params,
    [item, setItem] = useState(null);

  const onUpdate = data => {
    setItem(data);
    dispatch(updateCar(data));
    updateLocalStorageById(data);
  };

  if (data.length && !item) {
    setItem(data.filter(x => x.id === id)[0]);
  }

  return (
    item && (
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Image src={item.image} />
          </Grid.Column>
          <Grid.Column width={10}>
            <h2>
              {item.title}
              &nbsp;
              <AddModalComponentConnected
                onSubmit={onUpdate}
                label="Update car"
                header="Update car"
                initialData={item}
              />{" "}
            </h2>
            <p>{item.description}</p>
            <h4>Features</h4>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Value</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {item.features.map((feature, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>{feature.name}</Table.Cell>
                      <Table.Cell>{feature.value}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  );
};

export const SingleView = connect(state => ({ ...state }))(SingleViewComponent);
