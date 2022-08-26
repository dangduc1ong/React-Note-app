import NotesList from './components/NotesList';
import { useState } from 'react';
import {nanoid} from 'nanoid';
//import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            text: "This is my first note!",
            date: "26/08/2022",
        },
        {
            id: nanoid(),
            text: "This is my second note!",
            date: "27/08/2022",
        },
        {
            id: nanoid(),
            text: "This is my third note!",
            date: "28/08/2022",
        },
        {
            id: nanoid(),
            text: "This is my new note!",
            date: "30/08/2022",
        },
]);
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
      
           
    
  );
}

export default App;