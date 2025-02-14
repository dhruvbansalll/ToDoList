import React, { useContext, useEffect, useState } from 'react';
import Note from './Note';
import contextValue from '../context/note/noteContext';

function NotesContainer() {
    const context = useContext(contextValue);
    const { notes, fetchNotes, editNote } = context;
    const [enote, setEnote] = useState({ title: "", description: "", tag: "", bgColor: "" })
    const [sBgColor, setsBgColor] = useState(enote.bgColor);

    useEffect(() => {
        fetchNotes();
        //eslint-disabled-next-line
    }, []);
    //if we call it directly, then it will call infinite times, and rerenders the comps;

    const onChange = (event) => { setEnote({ ...enote, [event.target.name]: event.target.value }); }

    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
    }

    function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    }

    const updateNote = (currentNote) => {
        setEnote(currentNote);
        setsBgColor(currentNote.bgColor);
    }

    const saveNote = (event) => {
        event.preventDefault(); //to prevent page from reloading
        editNote(enote._id, enote, sBgColor);
        setEnote({ title: "", description: "", tag: "", bgColor: "" })
    }

    return (
        <>
            {/* {<Loading />} */}
            {notes.length > 0 &&
                <div className="row">
                    {
                        notes.map((note) => {
                            return <Note key={note._id} updateNote={updateNote} note={note} />
                        })
                    }
                </div>
            }
            <div className="addNote modal fade" id="staticBackdrop-edit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="addNote-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="addNote-content modal-content">
                        <div className="addNote-header modal-header">
                            <input id="title" name="title" placeholder="Title" onChange={onChange} value={enote.title} />
                            <button type="button" className="btn btn-primary circleIt" onClick={function () { setsBgColor('primary') }}></button>
                            <button type="button" className="btn btn-secondary circleIt" onClick={function () { setsBgColor('secondary') }}></button>
                            <button type="button" className="btn btn-success circleIt" onClick={function () { setsBgColor('success') }}></button>
                            <button type="button" className="btn btn-danger circleIt" onClick={function () { setsBgColor('danger') }}></button>
                            <button type="button" className="btn btn-warning circleIt" onClick={function () { setsBgColor('warning') }}></button>
                            <button type="button" className="btn btn-info circleIt" onClick={function () { setsBgColor('info') }}></button>
                            <button type="button" className="btn btn-dark circleIt" onClick={function () { setsBgColor('dark') }}></button>
                        </div>
                        <div className="addNote-body modal-body">
                            <textarea id="description" name="description" value={enote.description} placeholder="Add note.." onChange={onChange} rows="5"></textarea>
                        </div>
                        <div className="addNote-footer modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button disabled={enote.title.length === 0 || enote.description.length === 0} type="button" className="btn btn-dark" onClick={saveNote} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NotesContainer
