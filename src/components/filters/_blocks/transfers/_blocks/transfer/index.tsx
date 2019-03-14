import { connect } from 'react-redux';
import changeSorting from '../../../../../../actions/transfers'
import Template from './template';

const mapStateToProps = (store: any) => {
    return {
        stops: store.transfers.stops
    }
};

const mapDispatchToProps = (dispatch: any) => ({
    changeSorting(sorting: any) {
        return dispatch(changeSorting(sorting));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
