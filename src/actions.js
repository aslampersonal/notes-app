export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';
export const TOGGLE_SORT_DIRECTION = 'TOGGLE_SORT_DIRECTION';

// Action creators
export const addNote = (note) => ({
    type: ADD_NOTE,
    payload: note,
});

export const removeNote = (noteId) => ({
    type: REMOVE_NOTE,
    payload: noteId,
});

export const toggleSortDirection = () => ({
    type: TOGGLE_SORT_DIRECTION,
});
