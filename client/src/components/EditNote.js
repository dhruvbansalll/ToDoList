//this file is currently useless, as this component is directly written in "NotesContainer.js"
//as setState is not working properly via  props, and i dont know other way around ¯\_(ツ)_/¯

// import React, { useContext, useState } from 'react'
// import noteContext from '../context/note/noteContext';

// const EditNote = (props) => {
//     const context = useContext(noteContext);
//     const { editNote } = context;
//     // const { propsNote, cancel } = props;
//     const { propsNote } = props;

//     const [enote, setNote] = useState({ title: "", description: "", bgColor: "" });
//     const [sBgColor, setsBgColor] = useState(enote.bgColor);

//     const saveNote = (event) => {
//         event.preventDefault(); //to prevent page from reloading
//         console.log("EN : ", propsNote);
//         editNote(propsNote._id, enote, sBgColor);
//     }

//     const onChange = (event) => { setNote({ ...enote, [event.target.name]: event.target.value }); }

//     //to grow size of text area
//     const tx = document.getElementsByTagName("textarea");
//     for (let i = 0; i < tx.length; i++) {
//         tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
//         tx[i].addEventListener("input", OnInput, false);
//     }
//     function OnInput() {
//         this.style.height = "auto";
//         this.style.height = (this.scrollHeight) + "px";
//     }

//     return (
//         <>
//             <div className="addNote modal fade" id="staticBackdrop-edit" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//                 <div className="addNote-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
//                     <div className="addNote-content modal-content">
//                         <div className="addNote-header modal-header">
//                             <input id="title" name="title" placeholder="Title" onChange={onChange} defaultValue={enote.title} />
//                             <button type="button" className="btn btn-primary circleIt" onClick={function () { setsBgColor('primary') }}></button>
//                             <button type="button" className="btn btn-secondary circleIt" onClick={function () { setsBgColor('secondary') }}></button>
//                             <button type="button" className="btn btn-success circleIt" onClick={function () { setsBgColor('success') }}></button>
//                             <button type="button" className="btn btn-danger circleIt" onClick={function () { setsBgColor('danger') }}></button>
//                             <button type="button" className="btn btn-warning circleIt" onClick={function () { setsBgColor('warning') }}></button>
//                             <button type="button" className="btn btn-info circleIt" onClick={function () { setsBgColor('info') }}></button>
//                             <button type="button" className="btn btn-dark circleIt" onClick={function () { setsBgColor('dark') }}></button>
//                         </div>
//                         <div className="addNote-body modal-body">
//                             <textarea id="description" name="description" defaultValue={enote.description} placeholder="Add note.." onChange={onChange} rows="5"></textarea>
//                         </div>
//                         <div className="addNote-footer modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
//                             <button type="button" className="btn btn-dark" onClick={saveNote} data-bs-dismiss="modal">Save</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default EditNote
