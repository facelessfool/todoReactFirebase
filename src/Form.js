import React, { useEffect } from 'react';
import {useState} from 'react';
import ViewSpace from './ViewSpace';
import firebase from "./firebase"


const Form =()=>{

    
    const [note, setNote] = useState("")
    
   
    const [notes, setNotes]=useState([])


   const SubmitHandler = ()=>{

        firebase.db.collection("todos").add({
            todo: note
        })
       setNotes([...notes, note])
       setNote("")
   }


 
    

  
    useEffect( ()=>
      { firebase.db.collection('todos').onSnapshot(snap=>{
        const arr=snap.docs.map(todo=>{
            const data=todo.data()
         //    console.log("data: ",data.todo)
         return data.todo
        })
   
        setNotes(arr)
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