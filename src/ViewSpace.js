import React from 'react';
import ShowNotes from "./ShowNotes"

const ViewSpace = ({notes})=>{

   console.log("notes in vs: ", notes)


return(
   <div>
       <h5>Items in the list: </h5>
      {notes.map((item)=>(
         <ShowNotes key={Math.floor(Math.random()*1000)+1} item={item} />
      ))}

      
    </div>
)
}

export default ViewSpace;