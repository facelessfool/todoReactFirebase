import React from 'react';
import ShowNotes from "./ShowNotes"

const ViewSpace = ({notes})=>{



return(
   <div>
       <h5>Items in the list: </h5>
      {notes.map((todo)=>(
         <ShowNotes key={Math.floor(Math.random()*1000)+1} item={todo} />
      ))}

      
    </div>
)
}

export default ViewSpace;