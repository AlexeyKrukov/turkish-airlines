import * as React from "react";
import { Fly } from './_blocks'
import './styles.scss';

interface IProps {
    tickets: any,
    stops: any,
    begin: any
}


export default class Transfers extends React.Component<IProps> {
    public render() {
        let { tickets } = this.props;
        for (let i = 0, endI = tickets.length - 1; i < endI; i++) {
            for (let j = 0, endJ = endI - i; j < endJ; j++) {
                if (tickets[j].price > tickets[j + 1].price) {
                    let swap = tickets[j];
                    tickets[j] = tickets[j + 1];
                    tickets[j + 1] = swap;
                }
            }
        }
        if (this.props.stops.length > 1) {
            tickets = tickets.filter((ticket: any) => {
                for (let i = 0; i < this.props.stops.length; i++) {
                    if (ticket.stops === this.props.stops[i]) {
                        return ticket;
                    }
                }
            });
        }
        if (this.props.stops[0] !== null && this.props.stops.length === 1 && !this.props.begin) {
            tickets = tickets.filter((ticket: any) => {
                if (ticket.stops === this.props.stops[0]) {
                    return ticket;
                }
            });
        }
        return (
            <div className='flies'>
                {
                    tickets.map((ticket: any) => {
                        return <Fly ticket={Object.assign({}, ticket)}/>
                    })
                }
            </div>
        );
    }
}
