import React, { useContext, useState } from 'react'
import noteContext from '../context/note/noteContext';

export const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [sBgColor, setsBgColor] = useState("light");
    const [note, setNote] = useState({ title: "", description: "", tag: "default", bgColor: sBgColor });

    const saveNote = (event) => {
        event.preventDefault(); //to prevent page from reloading
        addNote(note.title, note.description, note.tag, sBgColor);
        setNote({ title: "", description: "", tag: "default", bgColor: "light"});
        setsBgColor('light');
    }

    const onChange = (event) => {
        setNote({ ...note, [event.target.name]: event.target.value });
    }

    //to grow size of text area
    const tx = document.getElementsByTagName("textarea");
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
        tx[i].addEventListener("input", OnInput, false);
    }
    function OnInput() {
        this.style.height = "auto";
        this.style.height = (this.scrollHeight) + "px";
    }


    return (
        <>
            <div className="addNote modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="addNote-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="addNote-content modal-content">
                        <div className="addNote-header modal-header">
                            <input id="title" name="title" value={note.title} placeholder="Title" onChange={onChange} />
                            <button type="button" className="btn btn-primary circleIt" onClick={function () { setsBgColor('primary') }}></button>
                            <button type="button" className="btn btn-secondary circleIt" onClick={function () { setsBgColor('secondary') }}></button>
                            <button type="button" className="btn btn-success circleIt" onClick={function () { setsBgColor('success') }}></button>
                            <button type="button" className="btn btn-danger circleIt" onClick={function () { setsBgColor('danger') }}></button>
                            <button type="button" className="btn btn-warning circleIt" onClick={function () { setsBgColor('warning') }}></button>
                            <button type="button" className="btn btn-info circleIt" onClick={function () { setsBgColor('info') }}></button>
                            <button type="button" className="btn btn-dark circleIt" onClick={function () { setsBgColor('dark') }}></button>

                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        {/* <div id="description" name="description" className="addNote-body modal-body" data-text="Add Note" contenteditable="true" role="textbox" onChange={onChange}></div> */}
                        <div className="addNote-body modal-body">
                            <textarea id="description" name="description" value={note.description} placeholder="Add note.." onChange={onChange} rows="4"></textarea>
                        </div>
                        <div className="addNote-footer modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                            <button disabled={note.title.length === 0 || note.description.length === 0}
                                type="button" className="btn btn-dark" onClick={saveNote} data-bs-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
