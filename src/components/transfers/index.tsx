import { connect } from 'react-redux';
import Template from './template';

const mapStateToProps = (store: any) => {
    let newTickets = {};
    Object.assign(newTickets, store.tickets.tickets.tickets);
    newTickets = Object.keys(newTickets).map((key) => {
        return store.tickets.tickets.tickets[key];
    });
    return {
        tickets: newTickets,
        stops: store.transfers.stops,
        begin: store.transfers.begin
    };
};

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
