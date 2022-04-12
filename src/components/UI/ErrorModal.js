import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.dismiss} className={classes.backdrop} />;
};

const ModalContent = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button type="button" onClickbtn={props.dismiss}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  // const dismiss = () => {
  //     props.close()
  // }
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop dismiss={props.close} />,
        document.getElementById("backDrop")
      )}
      {ReactDOM.createPortal(
        <ModalContent
          title={props.title}
          message={props.message}
          dismiss={props.close}
        />,
        document.getElementById("modalContent")
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
