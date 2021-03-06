import React, { useEffect } from 'react';
import {useState} from 'react';
import ViewSpace from './ViewSpace';
import { Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
// import {db} from './firebase'


let db=firebase.firestore()
const Form =()=>{

    const classes = useStyles();

    const [note, setNote] = useState("")
    
   
    const [notes, setNotes]=useState([])


   const SubmitHandler = ()=>{

        db.collection("todos").add({
            todo: note,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            // timestamp: firebase.FieldValue.serverTimestamp()
        })
  
       setNote("")
   }


 
    

  
    useEffect( ()=>
      { db.collection('todos').onSnapshot(snap=>{
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

        <div >
            <div style={{display: "flex"}}>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="" value={note}  onChange={(e)=> setNote(e.target.value)} />
            
            </form>
            {/* <input type = "text" value={note} onChange={(e)=>setNote(e.target.value)} /> */}
            <div style={{maxWidth:"18px"}}>
            <Button style={{color:"white"}} variant="contained" color="primary" onClick={SubmitHandler} >Submit</Button>
            </div>
            </div>
           
            <ViewSpace notes={notes}/>
            
            
        </div>
    )
}

export default Form;