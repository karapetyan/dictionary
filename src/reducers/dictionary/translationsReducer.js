const initialState = {
    entities: [],
    editingEntityId: null,
    editIconIndex: null,
    removeIconId: null
}

const translations = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_ENTRY':
            return ({
                ...state,
                entities: [
                    ...state.entities,
                    {
                        wordId: action.id,
                        translation: action.translation
                    }
                ]
            })

        case 'SET_EDITING_TRANSLATION_ID':
            return ({
                ...state,
                editingEntityId: action.id
            })
            
        case 'EDIT_TRANSLATION':
            return ({
                ...state,
                entities: state.entities.map(entity => 
                    entity.wordId === action.id ?
                        ({
                            ...entity,
                            translation: action.editedTranslation
                        }):
                        entity
                ),
                editingEntityId: null
            })
            
        case 'REMOVE_ENTRY':
            return ({
                ...state,
                entities: state.entities.filter((entity, index) => 
                    index !== action.index
                )
            })

        case 'SHOW_TRANSLATION_EDIT_ICON': 
            return ({
                ...state,
                editIconIndex: action.index
            })

        case 'HIDE_TRANSLATION_EDIT_ICON': 
            return ({
                ...state,
                editIconIndex: null
            })

        default:
            return state
    }
}

export default translations;