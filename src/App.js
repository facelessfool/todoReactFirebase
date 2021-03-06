import './App.css';
import Form from './Form';
// import ViewSpace from './ViewSpace';
import firebase from "./firebase"
import { Button } from '@material-ui/core';
function App() {
  return (
    <div style={{ maxWidth:'350px', marginLeft:"20%", display:"flex" ,flexDirection:'column', alignItems : "center", justifyContent: "center" } }>
    {/* <h1 style={{color:"#000051"}}>Todo with Firestore</h1> */}
    <div style={{marginTop:"5%", marginBottom:"3%", fontWeight:"bold" }}>
    <Button variant="outlined" color="primary" >
    Todo with Firestore
      </Button>
      </div>
    <Form/>
    {/* <ViewSpace/> */}
    </div>
  );
}

export default App;
