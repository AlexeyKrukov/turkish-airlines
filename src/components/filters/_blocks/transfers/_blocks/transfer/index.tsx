import { connect } from 'react-redux';
import changeSorting from '../../../../../../actions/transfers'
import Template from './template';

const mapStateToProps = (store: any) => {
    return {
        stops: store.transfers.stops,
        selected: store.transfers.selected
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    changeSorting(type: string, sorting: any) {
        return dispatch(changeSorting(type, sorting));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
