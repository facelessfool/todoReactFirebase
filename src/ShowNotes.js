import React from 'react';
import firebase from './firebase'
const ShowNotes = ({item})=>{
    
   const DelHandler = ()=>{
       firebase.db.collection("todos").doc(item.id).delete()
   }

    return (
        <div>
        <li>{item.todo} <button onClick={DelHandler}>del</button>
        </li>
       </div>
    )

}

export default ShowNotes;