import { connect } from 'react-redux';
import RemoveIcon from '../../../../components/Dictionary/PairsList/RemoveIcon/RemoveIcon';

const mapStateToProps = state =>
    ({
        removeIconEntityIndex: state.dictionary.removeIconEntityIndex
    })

const mapDispatchToProps = dispatch =>
    ({
        removeEntry: dispatch(removeEntry);
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveIcon)