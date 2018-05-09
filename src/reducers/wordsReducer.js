import { combineReducers } from "redux";

const entities = (state = [], aciton) => {
    switch (aciton.type) {
       case 'ADD_NEW_ENTRY':
            return ([
                ...state,
                {
                    id: action.id,
                    word: action.word
                }
            ])
        case 'EDIT_WORD':
            return [...state].map(entity => 
                entity.id === action.id ?
                    ({
                        ...entity,
                        word: action.editedWord
                    }):
                    entity
            )
        case 'REMOVE_ENTRY':
            return [...state].filter(entity => 
                entity.id !== action.id
            )
        default:
            return state
    }
}

const editingEntityId = (state = null, action) => {
    switch (action.type) {
        case 'EDITING_WORD_ENTITY_ID':
            return editingEntityId = action.wordId
        default:
            return state;
    }
}

 let words = combineReducers({
    entities,
    editingEntityId
 })

 export default words;