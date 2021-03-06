import React from 'react';
import ShowNotes from "./ShowNotes"

const ViewSpace = ({notes})=>{

   // console.log("notes in vs: ", notes)


return(
   <div>
       <h3 style={{color:"#002984" }}>Items in the list: </h3>
      {notes.map((item)=>(
         <ShowNotes key={item.timestamp} todo={item.todo} id={item.id} />
      ))}

      
    </div>
)
}

export default ViewSpace;