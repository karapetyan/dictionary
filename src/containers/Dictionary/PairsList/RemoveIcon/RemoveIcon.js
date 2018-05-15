import { connect } from 'react-redux';
import RemoveIcon from '../../../../components/Dictionary/PairsList/RemoveIcon/RemoveIcon';
import { removeEntry } from '../../../../actions/index';

const mapStateToProps = state =>
    ({
        removeIconEntityIndex: state.dictionary.removeIconEntityIndex
    })

const mapDispatchToProps = dispatch =>
    ({
        removeEntry: index => dispatch(removeEntry(index))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RemoveIcon)