import { connect } from 'react-redux';
import { removeTest } from '../../../actions/index';
import Counter from '../../../components/Test/Counter/Counter';

const mapStateToProps = state => {
    let quizzLeft = state.test.pairs.length - state.test.pairs.filter(pair => pair.status.result).length;
    let corectAnwers = state.test.pairs.filter(pair =>
        pair.status.result == 'succeed'
    ).length
    return ({
        quizzLeft,
        corectAnwers
    })
}
    
const mapDispatchToProps = dispatch =>
    ({
        removeTest: () => dispatch(removeTest())
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)