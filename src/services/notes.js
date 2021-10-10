import { ActionCreators } from "../redux/notesReducer";
import * as axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001/notes",
});

export const GetNotes = async (dispatch) => {
  try {
    // api get call
    const { data } = await axiosInstance.get();

    dispatch(ActionCreators.setNotes(data));
  } catch (err) {
    console.log("Error getting notes");
  }
};

export const DeleteNote = async (dispatch, note) => {
  try {
    // api get call
    await axiosInstance.delete(`/${note.id}`);
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
