import { combineReducers } from 'redux';

const entities = (state = [], action) => {
    switch (action.type) {
        case 'ADD_NEW_ENTRY':
            return ([
                ...state,
                {
                    wordId: action.id,
                    translation: action.translation
                }
            ])
            
        case 'EDIT_TRANSLATION':
            return [...state].map(entity => 
                entity.wordId === action.id ?
                    ({
                        ...entity,
                        translation: action.editedTranslation
                    }):
                    entity
            )

        case 'REMOVE_ENTRY':
            return [...state].filter(entity => 
                entity.wordId !== action.id
            )

        default:
            return state         
    }
}

const editingEntityId = (state = null, action) => {
    switch (action.type) {
        case 'EDITING_TRANSLATIONS_ENTITY_ID':
            return editingEntityId = action.wordId

        default:
            return state;
    }
}

 let translations = combineReducers({
    entities,
    editingEntityId
})

export default translations;