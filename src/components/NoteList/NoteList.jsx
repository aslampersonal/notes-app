import React from 'react';
import { connect } from 'react-redux';
import Note from '../Note/Note';
import './NoteList.css';

function NoteList({ notes, isAscending, toggleSortDirection }) {
    // Sort the notes based on the sorting direction
    const sortedNotes = [...notes].sort((a, b) => {
        return isAscending ? a.timestamp - b.timestamp : b.timestamp - a.timestamp;
    });

    return (
        <div className="note-list">
            {/* Sort button */}
            <button className="sort-button" onClick={toggleSortDirection}>
                Sort by Time: {isAscending ? 'Ascending' : 'Descending'}
            </button>

            {/* Render sorted notes */}
            <div className='sorted-notes'>
                {sortedNotes.map((note, index) => (
                    <Note key={index} note={note} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    notes: state.notes.notes,
    isAscending: state.notes.isAscending,
});

const mapDispatchToProps = (dispatch) => ({
    toggleSortDirection: () => dispatch(toggleSortDirection()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
