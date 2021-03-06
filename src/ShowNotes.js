import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import firebase from './firebase'
const ShowNotes = ({todo,id})=>{
    
   const DelHandler = ()=>{
       firebase.db.collection("todos").doc(id).delete()
   }

    return (
        <div style = {{display:"flex"}}>
        <ListItem button>
            <ListItemText primary= {todo}/>
            
        </ListItem>
        <div style={{maxWidth:"15px", marginTop:"5px"}}>
        <Button variant="contained" size="small" color="secondary"  style={{color:"white"}} onClick={DelHandler}>del</Button>
        </div>
        {/* <ListItem>
        <ListItemText i primary={` ${todo}`} />
       
        </ListItem>
        <Button onClick={DelHandler}>del</Button>
         */}
       </div>
    )

}

export default ShowNotes;