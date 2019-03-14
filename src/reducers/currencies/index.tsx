const initialState = {
    currency: "RUB"
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'CHANGE_CURRENCY':
            return {
                currency: action.payload
            };
        default:  return state;
    }
};
