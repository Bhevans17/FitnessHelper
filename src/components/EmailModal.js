import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EmailModal = (props) => {
  const {
    buttonLabel,
    className,
    calories,
    protein,
    fats,
    carbs,
    childClick,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{ backgroundColor: "#62CD11" }}
        className='btn btn-block'
        onClick={() => {
          childClick();
          toggle();
        }}
      >
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Your Results</ModalHeader>
        <ModalBody>
          <b>Calories: {calories}</b>
          <br />
          <b>Protein: {protein}</b>
          <br />
          <b>Fats: {fats}</b>
          <br />
          <b>Carbs: {carbs}</b>
          {/*
            calorie
            protein
            carb
            fat
            input with email
            post request to / container object of info use nodemailer to send to recipeient and redirect to success page with link to home
          */}
        </ModalBody>
        <ModalFooter>
          <Button style={{ backgroundColor: "#62CD11" }} onClick={toggle}>
            Send Email
          </Button>{" "}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EmailModal;
