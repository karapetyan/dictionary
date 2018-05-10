import { connect } from 'react-redux';
import { addNewEntry } from '../../../actions/index';
import AddWord from '../../../components/Dictionary/AddWord/AddWord';

const mapDispatchToProps = dispatch =>
    ({
        addNewEntry: dispatch(addNewEntry)
    })


export default connect(
    null,
    mapDispatchToProps
)(AddWord)