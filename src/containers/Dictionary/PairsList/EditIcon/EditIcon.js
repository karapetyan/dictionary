import { connect } from 'react-redux';
import { setEditingEntityId } from '../../../../actions/index';
import EditIcon from '../../../../components/Dictionary/PairsList/EditIcon/EditIcon';

const mapStateToProps = state =>
    ({
        editIconIndex: state.dictionary.editIconIndex
    })

const mapDispatchToProps = dispatch =>
    ({
        setEditingEntityId: dispatch(setEditingEntityId)
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditIcon)