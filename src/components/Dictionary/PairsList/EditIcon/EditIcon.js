import './EditIcon.css';

const EditIcon = ({i, editIconIndex, setEditingEntityId, id, type}) => 
    i === editIconIndex ?
    <div className="edit-icon" onClick={() => setEditingEntityId(id, type)}></div> :
        null

export default EditIcon;