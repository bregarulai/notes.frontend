import { ActionCreators } from "../redux/notesReducer";

export const GetNotes = async (dispatch) => {
  try {
    // api get call
    const response = [
      { value: "Exam in three weeks.", id: 1 },
      { value: "Clean my room by Tuesday.", id: 2 },
      { value: "Go Grocery shopping on Monday.", id: 3 },
      { value: "Play basketball tournament.", id: 4 },
    ];
    dispatch(ActionCreators.setNotes(response));
  } catch {
    console.log("Error getting notes");
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    // api get call

    dispatch(ActionCreators.deleteNote(note));
  } catch {
    console.log("Error deleting note");
  }
};

export const NewNote = async (dispatch, note) => {
  try {
    // api get call
    const response = { value: note, id: 4 };

    dispatch(ActionCreators.newNote(response));
  } catch {
    console.log("Error adding new note");
  }
};

export const EditNote = async (dispatch, note) => {
  try {
    // api get call
    const response = { value: note, id: 4 };
    dispatch(ActionCreators.editNote(response));
  } catch {
    console.log("Error editing note");
  }
};
