import React, { useContext } from 'react'
import noteContext from '../context/note/noteContext';

function Note(props) {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    var textColor;
    if (note.bgColor === "warning" || note.bgColor === "info" || note.bgColor === "light")
        textColor = 'text-dark';
    else
        textColor = 'text-white';

    return (
        <div className={`card ${textColor} bg-${note.bgColor} mb-3`} style={{ width: '250px', margin: '15px' }}>
            <div className="card-header card-title">{note.title}</div>
            <div className="card-body">
                <p id="card-desc" className="card-text">{note.description}</p>
                <p className="card-text"><small className="text">{note.date}</small></p>
            </div>
            <div className="card-footer d-flex">
                <i className="far fa-edit" data-bs-toggle="modal" data-bs-target="#staticBackdrop-edit" onClick={() => { updateNote(note) }}></i>
                <i className="far fa-trash-alt" onClick={() => { deleteNote(note._id) }}></i>
            </div>
        </div>
    )
}

export default Note