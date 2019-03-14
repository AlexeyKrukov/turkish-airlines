import * as React from "react";
import './styles.scss';

interface IProps {
    ticket: any,
    currency: string
}

interface IState {
    ticket: any
}

export default class Fly extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.getNoun = this.getNoun.bind(this);
        this.getCurrency = this.getCurrency.bind(this);

    }
    public render() {
        const departure_date = (new Date(20 + this.props.ticket.departure_date.split('.')[2], this.props.ticket.departure_date.split('.')[1] - 1, this.props.ticket.departure_date.split('.')[0], 0, 0, 0));
        const arrival_date = (new Date(20 + this.props.ticket.arrival_date.split('.')[2], this.props.ticket.arrival_date.split('.')[1] - 1, this.props.ticket.arrival_date.split('.')[0], 0, 0, 0));
        return (
            <div className="fly">
                <div className="fly__companyAndButton">
                    <img src="Turkish-Airlines-Logo-logotype.png" alt="logo" />
                    <div className="fly__button"><span className="fly__button_text">Купить за {Math.round(this.props.ticket.price)} {this.getCurrency()} </span></div>
                </div>
                <div className="fly__time">
                    <div className="fly__time_departure">{this.props.ticket.departure_time}</div>
                    <div className="fly__time_departure-name">{this.props.ticket.origin.concat(',')}</div>
                    <div className="fly__time_departure-name">{this.props.ticket.origin_name}</div>
                    <div className="fly__time_date">{departure_date.toDateString().split(' ')[2].concat(' ').concat(departure_date.toDateString().split(' ')[1]).concat(' ').concat(departure_date.toDateString().split(' ')[3]).concat(', ').concat(departure_date.toDateString().split(' ')[0])}</div>
                </div>
                <div className="fly__stops">{this.props.ticket.stops.toString().concat(' ').concat(this.getNoun(this.props.ticket.stops, 'ПЕРЕСАДКА', 'ПЕРЕСАДКИ', 'ПЕРЕСАДОК'))}</div>
                <div className="fly__time">
                    <div className="fly__time_arrival">{this.props.ticket.arrival_time}</div>
                    <div className="fly__time_arrival-name">{this.props.ticket.destination_name.concat(',')}</div>
                    <div className="fly__time_arrival-name">{this.props.ticket.carrier}</div>
                    <div className="fly__time_date">{arrival_date.toDateString().split(' ')[2].concat(' ').concat(arrival_date.toDateString().split(' ')[1]).concat(' ').concat(arrival_date.toDateString().split(' ')[3]).concat(', ').concat(arrival_date.toDateString().split(' ')[0])}</div>
                </div>
            </div>
        );
    }
    getNoun(number: number, one: string, two: string, three: string) {
        number = Math.abs(number);
        number %= 100;
        if (number >= 5 && number <= 20) {
            return three;
        }
        number %= 10;
        if (number == 1) {
            return one;
        }
        if (number >= 2 && number <= 4) {
            return two;
        }
        return three;
    }
    getCurrency() {
        if (this.props.currency === 'USD') {
            return this.getNoun(this.props.ticket.price, 'доллар', 'доллара', 'долларов');
        }
        if (this.props.currency === 'EUR') {
            return this.getNoun(this.props.ticket.price, 'евро', 'евро', 'евро');
        }
        if (this.props.currency === 'RUB') {
            return this.getNoun(this.props.ticket.price, 'рубль', 'рубля', 'рублей');
        }
    }
}
