import { connect } from 'react-redux';
import { addNewEntry } from '../../../actions/index';
import AddWord from '../../../components/Dictionary/AddWord/AddWord';

const mapDispatchToProps = dispatch =>
    ({
        addNewEntry: (word, translation) => dispatch(addNewEntry(word, translation))
    })

export default connect(
    null,
    mapDispatchToProps
)(AddWord)