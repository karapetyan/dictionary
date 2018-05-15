import React from 'react';
import './EditIcon.css';

const EditIcon = ({i, wordEditIconIndex, translationEditIconIndex, setEditingEntityId, id, type}) => {
    // console.log(wordEditIconIndex);
    // console.log(translationEditIconIndex);
    // console.log(type);

    switch (type) {
        case 'WORD':
            if (i === wordEditIconIndex) {
                console.log('returned WORD');
                return(
                    <div className="edit-icon" onClick={() => setEditingEntityId(id, type)}></div>
                )
            } 
            
        case 'TRANSLATION':
            if (i === translationEditIconIndex) {
                console.log('returned TRANSLATION');
                return(
                    <div className="edit-icon" onClick={() => setEditingEntityId(id, type)}></div>
                )
            }

        default: 
            return null
    }
}
  
export default EditIcon;