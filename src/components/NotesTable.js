import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DeleteNote, EditNote, GetNotes } from "../services/notes";
import { Button } from "react-bootstrap";
import { EditNoteModal } from "./NoteModal";

const NotesTable = () => {
  const notes = useSelector((state) => state.notesReducer.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    GetNotes(dispatch);
  }, []);
  return (
    <table className="table table-dark">
      <tbody>
        {notes.map((note, index) => {
          return (
            <tr key={index}>
              <td style={{ textAlign: "left", paddingLeft: "1rem" }}>
                {note.value}
              </td>
              <td style={{ width: "4rem" }}>
                <Button
                  className="btn btn-danger"
                  onClick={() => DeleteNote(dispatch, note)}
                >
                  Delete
                </Button>
              </td>
              <td style={{ width: "8rem" }}>
                <EditNoteModal note={note} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NotesTable;
