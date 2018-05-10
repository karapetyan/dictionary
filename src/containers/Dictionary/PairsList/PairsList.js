import { connect } from 'react-redux';
import { showRemoveIcon, hideRemoveIcon } from '../../../actions/index';
import PairsList from '../../../components/Dictionary/PairsList/PairsList';

const mapStateToProps = state =>
    ({
        words: state.dictionary.words
    })

const mapDispatchToProps = dispatch =>
    ({
        showRemoveIcon: dispatch(showRemoveIcon),
        hideRemoveIcon: dispatch(hideRemoveIcon)
    })

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(PairsList)