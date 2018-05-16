import { connect } from 'react-redux';
import Answers from '../../../components/Test/Answers/Answers';
import { checkPair } from '../../../actions/index';

const mapStateToProps = state => {
    let selectedPairIndex = state.test.pairs.findIndex(pair => 
        pair.pairId === state.test.selectedPair
    )
    return ({
        selectedPairTranslations: state.test.pairs[selectedPairIndex].translations,
        status: state.test.pairs[selectedPairIndex].status,
        pairId: state.test.pairs[selectedPairIndex].pairId
    })
}

const mapDispatchToProps = dispatch =>
    ({
        checkPair: (pairId, wordId) => dispatch(checkPair(pairId, wordId))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Answers)