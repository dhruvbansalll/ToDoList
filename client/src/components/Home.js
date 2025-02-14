import React from 'react'
import { AddNote } from './AddNote'
import NotesContainer from './NotesContainer'
import { useHistory } from 'react-router-dom'

const Home = () => {
    let history = useHistory();
    if(localStorage.getItem('TypeItLoggedIn') === 'true') ;
    else history.push("/login");

    return (
        <div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Note</button>
            </div>
            <NotesContainer />
            <AddNote />
        </div>
    )
}

export default Home