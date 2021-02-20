import React, { useEffect } from 'react';
import {useState} from 'react';
import ViewSpace from './ViewSpace';
import firebase from "./firebase"


const Form =()=>{

    
    const [note, setNote] = useState("")
    
   
    const [notes, setNotes]=useState([])


    

    const ClickHandler=()=>{
            
            setNotes([...notes, note])
            
            setNote("")
            
    }

    useEffect(()=>{
        firebase.db.collection("Ching Notes: ").add({
            list: notes
        }
            )
    }, [notes])



    return (

        <div>
            <input type = "text" value={note} onChange={(e)=>setNote(e.target.value)} />
            <button onClick={ClickHandler}>Submit</button>
            <ViewSpace notes={notes}/>
            
        </div>
    )
}

export default Form;