import * as React from "react";
import './styles.scss';

interface IProps {
    current_currency: string,
    currency: string,
    changeCurrency: Function,
    recalculatePrices: Function
}


export default class Currency extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    public render() {
        const { currency } = this.props;
        return (
            <div className={(this.props.current_currency === this.props.currency) ? 'currency_choosen' : 'currency'} onClick={this.onClick}>
                {currency}
            </div>
        );
    }

    onClick() {
        this.props.recalculatePrices(this.props.currency, this.props.current_currency);
        this.props.changeCurrency(this.props.currency)
    }
}
