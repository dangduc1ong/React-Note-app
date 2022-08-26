import { useState } from 'react';

const AddNote = () => {
    const [nodeText,setNoteText] = useState('');
    
    const handleChange = (event) => {
        setNoteText(event.target.value);
    };
    return (
    <div className="note new">
        <textarea
            rows='8'
            cols='10'
            placeholder='Type to add a note...'  
            value={nodeText}
            onChange={handleChange}    
            ></textarea>
        <div className="node-footer">
            <small>200 Remaining</small>
            <button className="save">Save</button>
        </div>
    </div>
    );
};
export default AddNote;