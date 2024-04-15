import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addNote } from '../../actions';
import './NoteEditor.css';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function NoteEditor({ addNote }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [mediaLink, setMediaLink] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');

    const handleAddNote = () => {
        const newNote = {
            id: Date.now(), // Unique ID for each note
            title,
            description,
            mediaLink,
            backgroundColor,
            timestamp: new Date(),
        };
        addNote(newNote);
        setTitle('');
        setDescription('');
        setMediaLink('');
        setBackgroundColor('#ffffff');
    };

    return (
        <div className="note-editor" style={{ backgroundColor }}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <ReactQuill
                value={description}
                onChange={setDescription}
                placeholder="Description"
            />
            <input
                type="text"
                placeholder="Media Link"
                value={mediaLink}
                onChange={(e) => setMediaLink(e.target.value)}
            />
            <button onClick={handleAddNote}>Add Note</button>
            <div className='color-div'>
                <label htmlFor="color">Note color:</label>
                <input
                    type="color"
                    id='color'
                    name='color'
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                />
            </div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addNote: (note) => dispatch(addNote(note)),
});

export default connect(null, mapDispatchToProps)(NoteEditor);
