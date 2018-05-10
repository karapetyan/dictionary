import { connect } from 'react-redux';
import { showEditIcon, hideEditIcon, editTranslation } from '../../../../actions/index';
import TranslationItem from '../../../../components/Dictionary/PairsList/TranslationItem/TranslationItem';

const mapStateToProps = state =>
    ({
        translations: state.dictionary.translations
    })

const mapDispatchToProps = dispatch =>
    ({
        showEditIcon: dispatch(showEditIcon),
        hideEditIcon: dispatch(hideEditIcon),
        editTranslation: dispatch(editTranslation)
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TranslationItem)