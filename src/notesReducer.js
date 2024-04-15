import { ADD_NOTE, REMOVE_NOTE, TOGGLE_SORT_DIRECTION } from './actions';

const initialState = {
    notes: [],
    isAscending: true,
};

function notesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            };

        case REMOVE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
            };

        case TOGGLE_SORT_DIRECTION:
            return {
                ...state,
                isAscending: !state.isAscending,
            };

        default:
            return state;
    }
}

export default notesReducer;
