import { Button, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import firebase from './firebase';
import EditIcon from '@material-ui/icons/Edit';
const ShowNotes = ({todo,id})=>{
    
   const DelHandler = ()=>{
       firebase.db.collection("todos").doc(id).delete()
   }
   const UpdateHandler=()=>{
    firebase.db.collection("todos").doc(id).update({
        todo:"new edited"
    })
   }

    return (
        <div style = {{display:"flex"}}>
        <ListItem button>
            <ListItemText primary= {todo}/>
            
        </ListItem>
        <div style={{maxWidth:"15px", marginTop:"5px"}}>
        <Button variant="contained" size="small" color="secondary"  style={{color:"white"}} onClick={DelHandler}>del</Button>
        <EditIcon onClick={UpdateHandler}  ></EditIcon>

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