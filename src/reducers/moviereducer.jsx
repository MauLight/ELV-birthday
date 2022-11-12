
export const MovieReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_MOVIE':
            return [...state, {
                title: action.movie.title,
                director: action.movie.director,
                id: action.movie.ide
            }];
        
        case 'REMOVE_BOOK':
            return state.filter(movie => movie.id !== action.id);
        default:
            return state;
    }
}