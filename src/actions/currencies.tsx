const changeCurrency = (choosen_currency: string) => ({
    type: 'CHANGE_CURRENCY',
    payload: choosen_currency
});
export default changeCurrency;
