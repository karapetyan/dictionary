import { connect } from 'react-redux';
import { showEditIcon, hideEditIcon, editTranslation } from '../../../../actions/index';
import TranslationItem from '../../../../components/Dictionary/PairsList/TranslationItem/TranslationItem';

const mapStateToProps = state =>
    ({
        translations: state.dictionary.translations
    })

const mapDispatchToProps = dispatch =>
    ({
        showEditIcon: (index, type) => dispatch(showEditIcon(index, type)),
        hideEditIcon: type => dispatch(hideEditIcon(type)),
        editTranslation: (wordId, editedTranslation) => dispatch(editTranslation((wordId, editedTranslation)))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationItem)