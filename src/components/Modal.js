import React from 'react'
import { Button, TextField, useThemeProps } from '@mui/material'
import './Modal.css'
import { useState } from 'react'

const ModalComponent = (props) => {

    const [notes, setNotes] = useState(props.data.text);
    const takeNotesHandler = (e) => {
        e.preventDefault();
        props.onGetNotes(notes);
    }


  return (
    <>
    <div className='modal-wrapper' onClick={() => {props.onCloseModal()}}></div>
    <div className='modal'>
        <form onSubmit={takeNotesHandler}>
            <TextField multiline={true} inputProps={{style:{color:'var(--font)'}}} className='modal-text' onChange={(e) => setNotes(e.target.value)} value={notes} id="filled-basic" label="Enter your notes" variant="filled" />
            <Button variant='outlined' type='submit'>submit</Button>
        </form>
        <div>
            <h1 style={{color:'var(--font)'}}>Your Notes :</h1>
            <p className='modal-notes' style={{color:'var(--font)'}}>{props.data.text}</p>
        </div>
    </div>
    </>
  )
}

export default ModalComponent