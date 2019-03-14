import tickets from './tickets'
const initialState = {
    tickets
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'RECALCULATE_PRICE':
            if (action.payload.choosen_currency === "USD") {
                if (action.payload.currency === "RUB") {
                    for (let i = 0; i < tickets.tickets.length; i++) {
                        tickets.tickets[i].price = tickets.tickets[i].price / 65;
                    }
                }
            }
            if (action.payload.choosen_currency === "EUR") {
                if (action.payload.currency === "RUB") {
                    for (let i = 0; i < tickets.tickets.length; i++) {
                        tickets.tickets[i].price = tickets.tickets[i].price / 74;
                    }
                }
            }
            if (action.payload.choosen_currency === "RUB") {
                if (action.payload.currency === "USD") {
                    for (let i = 0; i < tickets.tickets.length; i++) {
                        tickets.tickets[i].price = tickets.tickets[i].price * 65;
                    }
                }
            }
            if (action.payload.choosen_currency === "EUR") {
                if (action.payload.currency === "USD") {
                    for (let i = 0; i < tickets.tickets.length; i++) {
                        tickets.tickets[i].price = tickets.tickets[i].price * 0.88;
                    }
                }
            }
            if (action.payload.choosen_currency === "USD") {
                if (action.payload.currency === "EUR") {
                    for (let i = 0; i < tickets.tickets.length; i++) {
                        tickets.tickets[i].price = tickets.tickets[i].price * 1.13;
                    }
                }
            }
            if (action.payload.choosen_currency === "RUB") {
                if (action.payload.currency === "EUR") {
                    for (let i = 0; i < tickets.tickets.length; i++) {
                        tickets.tickets[i].price = tickets.tickets[i].price * 74;
                    }
                }
            }
            return {
                tickets
            };
        default:  return state;
    }
};
