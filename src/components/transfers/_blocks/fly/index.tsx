import { connect } from 'react-redux';
import Template from './template';

const mapStateToProps = (store: any) => {
   return {
       currency: store.currencies.currency
   }
};

const mapDispatchToProps = () => ({
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Template);
