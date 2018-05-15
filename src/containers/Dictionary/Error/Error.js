import { connect } from 'react-redux';
import Error from '../../../components/Dictionary/Error/Error';
import { removeError } from '../../../actions/index';

const mapStateToProps = state =>
    ({
        errors: state.errors
    })

const mapDispatchToProps = dispatch =>
    ({
        removeError: (errorId) => dispatch(removeError(errorId))
    })

export default connect(
        mapStateToProps,
        mapDispatchToProps
)(Error)