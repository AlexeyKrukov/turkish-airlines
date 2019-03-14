const recalculatePrices = (choosen_currency: string, currency: string) => ({
    type: 'RECALCULATE_PRICE',
    payload: {
        choosen_currency,
        currency
    }
});
export default recalculatePrices;
