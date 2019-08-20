import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import { AddFormComponent } from "../AddForm/AddForm";
import { addCar } from "../../store/actions/cars";
import { v4 } from "uuid";
import { addToLocalStorage } from "../../utils/storage";

export const AddModalComponent = ({
  dispatch,
  initialData,
  onSubmit,
  label,
  header
}) => {
  const [isOpened, setIsOpened] = useState(false);

  const addCarHandler = data => {
    const payload = { ...data, id: v4() };
    addToLocalStorage(payload);
    dispatch(addCar(payload));
  };

  const handleSubmit = data => {
    if (typeof onSubmit === "function") {
      onSubmit(data);
    } else {
      addCarHandler(data);
    }
    setIsOpened(false);
  };

  return (
    <Modal
      trigger={
        <Button color="green" onClick={_ => setIsOpened(true)}>
          {label || "Add car +"}
        </Button>
      }
      open={isOpened}
      onClose={_ => setIsOpened(false)}
    >
      <Modal.Header>{header || "Add a car"}</Modal.Header>
      <Modal.Content>
        <AddFormComponent initialData={initialData} onSubmit={handleSubmit} />
      </Modal.Content>
    </Modal>
  );
};

export const AddModalComponentConnected = connect(state => {
  return { ...state };
})(AddModalComponent);
