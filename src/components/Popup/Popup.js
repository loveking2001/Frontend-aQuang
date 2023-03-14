import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import React from 'react';

const Popup = ({
  type,
  title,
  content,
  isOpen,
  labelOK,
  labelCancel,
  toggle,
  actionOK,
  actionCancel
}) => {
  let buttonActions = (
    <React.Fragment>
      <Button color="secondary" onClick={actionCancel ? actionCancel : toggle}>
        {labelCancel}
      </Button>
      <Button color="primary" onClick={actionOK}>
        {labelOK ? labelOK : 'OK'}
      </Button>{' '}
    </React.Fragment>
  );

  if (type === 'message') {
    buttonActions = (
      <Button color="primary" onClick={actionOK ? actionOK : toggle}>
        {labelOK}
      </Button>
    );
  }

  return (
    <Modal isOpen={isOpen}>
      <ModalHeader toggle={toggle}>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>{buttonActions}</ModalFooter>
    </Modal>
  );
};
Popup.defaultProps = {
  type: 'message',
  title: 'Inform',
  isOpen: false,
  labelOK: 'OK',
  labelCancel: 'Cancel',
  actionOK: null,
  actionCancel: null
};

export default Popup;
