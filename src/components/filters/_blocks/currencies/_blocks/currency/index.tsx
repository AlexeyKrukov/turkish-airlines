import { connect } from 'react-redux';
import changeCurrency from '../../../../../../actions/currencies'
import recalculatePrices from '../../../../../../actions/tickets'
import Template from './template';

const mapStateToProps = (store: any) => {
    const currency = store.currencies.currency;
    return {
        current_currency: currency
    };
};

const mapDispatchToProps = (dispatch: any) => ({
    recalculatePrices(current_currency: string, currency: string) {
        return dispatch(recalculatePrices(current_currency, currency));
    },
    changeCurrency(currency: string) {
        return dispatch(changeCurrency(currency));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
