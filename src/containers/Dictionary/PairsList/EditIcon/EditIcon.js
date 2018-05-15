import { connect } from 'react-redux';
import { setEditingEntityId } from '../../../../actions/index';
import EditIcon from '../../../../components/Dictionary/PairsList/EditIcon/EditIcon';

const mapStateToProps = state =>
    ({
        wordEditIconIndex: state.dictionary.words.editIconIndex,
        translationEditIconIndex: state.dictionary.translations.editIconIndex
    })
    
const mapDispatchToProps = dispatch =>
    ({
        setEditingEntityId: (id, entityType) => dispatch(setEditingEntityId(id ,entityType))
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditIcon)