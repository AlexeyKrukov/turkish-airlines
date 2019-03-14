const initialState = {
    stops: [null],
    selected: [null]
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_SORTING':
            return {
                stops: action.payload.sorting,
                selected: action.payload.selected
            };
        default:  return state;
    }
};
