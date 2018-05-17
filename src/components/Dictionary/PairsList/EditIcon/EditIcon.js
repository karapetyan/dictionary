import React from 'react';
import './EditIcon.css';

const EditIcon = ({i, wordEditIconIndex, translationEditIconIndex, setEditingEntityId, id, type}) => {
    if (type === 'WORD' && i === wordEditIconIndex ) return <div className="edit-icon" onClick={() => setEditingEntityId(id, type)}></div>
    if (type === 'TRANSLATION' && i === translationEditIconIndex ) return <div className="edit-icon" onClick={() => setEditingEntityId(id, type)}></div>
    return null
}
  
export default EditIcon;