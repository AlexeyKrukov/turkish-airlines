import { connect } from 'react-redux';
import Template from './template';

const mapStateToProps = (store: any) => {
   return {
       currency: store.currencies.currency
   }
};

export default connect(
    mapStateToProps,
    null
)(Template);
