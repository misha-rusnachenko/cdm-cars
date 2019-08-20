import React, { useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";

const initialState = {
  title: "",
  image: "",
  description: "",
  features: [{ name: "", value: "" }]
};

export const AddFormComponent = ({ onSubmit, initialData }) => {
  const [data, setData] = useState(initialData || { ...initialState });

  const changeDataValue = (name, value) => setData({ ...data, [name]: value });

  const changeFeature = (name, value, index) =>
    setData({
      ...data,
      features: [...data.features].map((feature, featureIndex) => {
        if (index === featureIndex) return { ...feature, [name]: value };
        return feature;
      })
    });

  const addFeature = _ =>
    setData({ ...data, features: [...data.features, { name: "", value: "" }] });

  const submitForm = e => {
    e.preventDefault();
    if (typeof onSubmit === "function") onSubmit(data);
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Field>
        <label>Car Title*</label>
        <input
          name="title"
          placeholder="Title"
          type="text"
          value={data.title}
          onChange={e => changeDataValue(e.target.name, e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Car Image (URL)</label>
        <input
          name="image"
          placeholder="Image (URL)"
          type="url"
          value={data.image}
          onChange={e => changeDataValue(e.target.name, e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <textarea
          name="description"
          placeholder="Description"
          value={data.description}
          onChange={e => changeDataValue(e.target.name, e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Features</label>
      </Form.Field>
      {data.features.map((_, index) => {
        return (
          <Form.Group key={index} widths="equal">
            <Form.Input
              fluid
              name="name"
              label="Name"
              placeholder="Name"
              value={data.features[index].name}
              onChange={e =>
                changeFeature(e.target.name, e.target.value, index)
              }
            />
            <Form.Input
              fluid
              name="value"
              label="Value"
              placeholder="Value"
              value={data.features[index].value}
              onChange={e =>
                changeFeature(e.target.name, e.target.value, index)
              }
            />
          </Form.Group>
        );
      })}
      <Button color="olive" type="submit">
        Save
      </Button>
      <Button color="brown" type="button" onClick={e => addFeature()}>
        Add feature
      </Button>
    </Form>
  );
};
