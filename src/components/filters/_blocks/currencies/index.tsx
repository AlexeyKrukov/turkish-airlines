import * as React from "react";
import Currency from './_blocks/currency'
import './styles.scss';


export default class Currencies extends React.Component {
    public render() {
        const currencies = [ 'RUB', 'USD', 'EUR' ];
        return (
            <div className="currencies">
                {
                    currencies.map(currency => <Currency currency={currency} />)
                }
            </div>
        );
    }
}
