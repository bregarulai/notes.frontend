import React, { useState, useEffect } from "react";
import { Modal, Button, Form, InputGroup, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NewNote, EditNote } from "../services/notes";

export const NewNoteModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="btn btn-success" onClick={handleShow}>
        New Note
      </Button>
      <NoteModal
        note={null}
        handleFormSubmit={NewNote}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

export const EditNoteModal = ({ note }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button className="btn btn-warning" onClick={handleShow}>
        Edit
      </Button>
      <NoteModal
        note={note}
        handleFormSubmit={EditNote}
        show={show}
        handleClose={handleClose}
      />
    </div>
  );
};

const NoteModal = ({ note, handleFormSubmit, show, handleClose }) => {
  const [modalNote, setModalNote] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    setModalNote(note);
  }, [note]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          handleFormSubmit(dispatch, modalNote);
        }}
      >
        <Modal.Body>
          <InputGroup>
            <FormControl
              value={modalNote === null ? "" : modalNote.value}
              onChange={(event) =>
                setModalNote({ ...note, value: event.target.value })
              }
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
