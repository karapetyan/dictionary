import { connect } from 'react-redux';
import { createTest } from '../../../../actions/index';
import StartTest from '../../../../components/Dictionary/PairsList/StartTest/StartTest';

const mapStateToProps = state =>
    ({
        wordsCount: state.dictionary.words.length
    })
    
const mapDispatchToProps = dispatch =>
    ({
        createTest: dispatch(createTest)
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartTest)