import React, { useEffect } from 'react';
import {useState} from 'react';
import ViewSpace from './ViewSpace';
import firebase from "./firebase"


const Form =()=>{

    
    const [note, setNote] = useState("")
    
   
    const [notes, setNotes]=useState([])


   const SubmitHandler = ()=>{

        firebase.db.collection("todos").add({
            todo: note,
            // timestamp: firebase.FieldValue.serverTimestamp()
        })
       setNotes([...notes, note])
       setNote("")
   }


 
    

  
    useEffect( ()=>
      { firebase.db.collection('todos').onSnapshot(snap=>{
        //   console.log(snap.docs)
        setNotes(snap.docs.map((doc)=>({
            id: doc.id,
            todo : doc.data().todo
            // console.log(`data1: ${data1.todo} `)
            // console.log("id: ",todo.id)

        
        })
        ))
        
    })


      },[]  
    )

  
    
    return (

        <div>
            <input type = "text" value={note} onChange={(e)=>setNote(e.target.value)} />
            <button onClick={SubmitHandler} >Submit</button>
           
            <ViewSpace notes={notes}/>
            {/* <button onClick={FetchHandler}>Fetch</button> */}
            
        </div>
    )
}

export default Form;