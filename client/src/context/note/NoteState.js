import NoteContext from "./noteContext";
import { useState } from "react";
import actionCreators from '../../state/actionExport'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

const NoteState = (props) => {
  const dispatch = useDispatch();
  const { showDanger, showSuccess } = bindActionCreators(actionCreators, dispatch);

  const host = "https://typeitapp.herokuapp.com/api/notes";
  const [notes, setNotes] = useState([]);

  const success = (message) => {
    showSuccess({ visible: true, message1: "Note", message2: message, type: "success" });
    setTimeout(() => {
      showSuccess({ visible: false, message1: "", message2: "", type: "" });
    }, 1500);
  }

  const failed = (message) => {
    showDanger({ visible: true, message1: "", message2: message, type: "danger" });
    setTimeout(() => {
      showDanger({ visible: false, message1: "", message2: "", type: "" });
    }, 1500);
  }

  //fetchNotes
  const fetchNotes = async () => {
    const url = host + "/fetchNotes";
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('TypeItToken')
      }
    });
    const apiResponse = await response.json();
    if (apiResponse.success === true) {
      setNotes(apiResponse.notes);
      console.log(apiResponse.notes);
    } else {
      failed("Failed to fetch user Notes.");
    }
  }

  //add a note
  const addNote = async (title, description, tag, bgColor) => {
    const url = host + "/addNote";
    const d = new Date();
    const date = d.toLocaleTimeString() + ", " + d.toDateString();
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'auth-token': localStorage.getItem('TypeItToken') },
      body: JSON.stringify({ title, description, tag, bgColor, date })
    });
    const apiResponse = await response.json();
    console.log("apires : ", apiResponse.newNote);
    if (apiResponse.success === true) {
      if (notes.length > 0)
        setNotes(notes.concat(apiResponse.newNote));
      else
        setNotes(apiResponse.newNote);
      success("Added");
    } else {
      failed("Failed to Add Note.");
    }
  }

  //edit a note
  const editNote = async (id, enote, color) => {
    const url = host + "/updateNote/" + id;
    // console.log(id + color);
    const d = new Date();
    const date = d.toLocaleTimeString() + ", " + d.toDateString();
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('TypeItToken')
      },
      body: JSON.stringify({ title: enote.title, description: enote.description, tag: enote.tag, bgColor: color, date: date })
    });
    //    fetchNotes();
    let newNotee = JSON.parse(JSON.stringify(notes));
    const apiResponse = await response.json();
    if (apiResponse.success === true) {
      for (let i = 0; i < newNotee.length; i++) {
        if (newNotee[i]._id === id) {
          newNotee[i].title = enote.title;
          newNotee[i].description = enote.description;
          newNotee[i].tag = enote.tag;
          newNotee[i].date = date;
          newNotee[i].bgColor = color;
          break;
        }
      }
      setNotes(newNotee);
      success("Updated");
    } else {
      failed("Failed to Edit Note.");
    }
  }

  //delete a note
  const deleteNote = async (id) => {
    const url = host + "/deleteNote/" + id;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('TypeItToken')
      }
    });
    const apiResponse = await response.json();
    if (apiResponse.success === true) {
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
      success("Deleted");
    } else {
      failed("Failed to Delete Note.");
    }
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, fetchNotes }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;