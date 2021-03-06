import React from 'react';
import firebase from './firebase'
const ShowNotes = ({item})=>{
    
    // const DeleteHandler = (item)=>{
    //     firebase.db.collection('todos').onSnapshot(snap=>{
    //         const arr=snap.docs.map(todo=>{
    //             const data=todo.data()
    //             // console.log("id: ",todo.id)
    //             if (data.todo == item){
    //                 return todo.id
    //             }
             
    //         })
    //         console.log(`item id:${arr}` )
               
    //     }
       
    //     )
    
    // }  

    return (
        <div>
        <li>{item} <button onClick={()=>alert(`delete item ${item} `)}>del</button>
        </li>
       </div>
    )

}

export default ShowNotes;