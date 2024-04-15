import React, { useState } from 'react';
import NoteList from './components/NoteList/NoteList';
import NoteEditor from './components/NoteEditor/NoteEditor';
import SearchBar from './components/SearchBar/SearchBar';
import FloatingButton from './components/FloatingButton/FloatingButton';

function NoteTakingApp() {
    const [notes, setNotes] = useState([]);
    const [showEditor, setShowEditor] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const addNote = (newNote) => {
        setNotes([newNote, ...notes]);
    };

    const toggleEditor = () => {
        setShowEditor(!showEditor);
    };

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return (
        <div className="app">
            <h1>Notes</h1>
            <SearchBar onSearch={handleSearch} />
            {showEditor && <NoteEditor onAddNote={addNote} />}
            <NoteList notes={filteredNotes} />
            <FloatingButton onClick={toggleEditor} />
        </div>
    );
}

export default NoteTakingApp;
