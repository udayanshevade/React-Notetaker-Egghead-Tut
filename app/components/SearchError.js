import React from 'react';
import { Modal } from 'react-bootstrap';

const SearchError = ({show, dismiss, username}) => {
  return (
    <Modal show={ show } onHide={ dismiss }>
      <Modal.Header closeButton>
        <Modal.Title id="modal-title">Sorry!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Could not find anyone with the username: { username }
        </p>
        <p>Please try a different search.</p>
      </Modal.Body>
    </Modal>
  );
};

export default SearchError;