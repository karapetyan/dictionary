import { connect } from 'react-redux';
import WordsList from '../../../components/Test/WordsList/WordsList';
import { selectPair } from '../../../actions/index';

const mapStateToProps = state =>
    ({
        test: state.test
    })

const mapDispatchToProps = dispatch =>
    ({
        selectPair: pairId => dispatch(selectPair(pairId))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordsList)