const changeSorting = (type: string, sorting: any) => ({
    type: 'CHANGE_SORTING',
    payload: {
        type,
        sorting
    }
});
export default changeSorting;
