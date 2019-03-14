import { combineReducers } from 'redux';
import tickets from './tickets'
import currencies from './currencies'
import transfers from './transfers'

export default combineReducers({
    tickets,
    currencies,
    transfers
});
