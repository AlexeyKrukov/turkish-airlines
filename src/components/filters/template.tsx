import * as React from "react";
import Currencies from './_blocks/currencies'
import Transfers from './_blocks/transfers'
import './styles.scss';


export default class LeftBlock extends React.Component {
    public render() {
        return (
            <div className="left-block">
                <span className="left-block__currency-text">ВАЛЮТА</span>
                <Currencies />
                <span className="left-block__transfers-text">КОЛИЧЕСТВО ПЕРЕСАДОК</span>
                <Transfers />
            </div>
        );
    }
}
