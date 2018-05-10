import { connect } from 'react-redux';
import WordItem from '../../../../components/Dictionary/PairsList/WordItem/WordItem';
import { showEditIcon, hideEditIcon, editWord } from '../../../../actions/index';

const mapStateToProps = state =>
    ({
        words: state.dictionary.words,
    })

const mapDispatchToProps = dispatch =>
    ({
        showEditIcon: dispatch(showEditIcon),
        hideEditIcon: dispatch(hideEditIcon),
        editWord: dispatch(editWord)
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordItem)