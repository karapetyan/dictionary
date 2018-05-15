import { connect } from 'react-redux';
import { showEditIcon, hideEditIcon, editWord } from '../../../../actions/index';
import WordItem from '../../../../components/Dictionary/PairsList/WordItem/WordItem';

const mapStateToProps = state =>
    ({
        words: state.dictionary.words,
    })

const mapDispatchToProps = dispatch =>
    ({
        showEditIcon: (index, type) => dispatch(showEditIcon(index, type)),
        hideEditIcon: type => dispatch(hideEditIcon(type)),
        editWord: (id, editedWord) => dispatch(editWord(id, editedWord))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordItem)