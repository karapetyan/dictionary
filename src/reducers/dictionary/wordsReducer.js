const initialState = {
    entities: [],
    editingEntityId: null,
    editIconIndex: null,
    removeIconId: null
}

const words = (state = initialState, action) => {
    switch (action.type) {
       case 'ADD_NEW_ENTRY':
            return ({
                ...state,
                entities: [
                    ...state.entities,
                    {
                        id: action.id,
                        word: action.word
                    }
                ]
            })

        case 'SET_EDITING_WORD_ID':
            return ({
                ...state,
                editingEntityId: action.id
            })

        case 'EDIT_WORD':
            return ({
                ...state,
                entities: state.entities.map(entity => 
                    entity.id === action.id ?
                        ({
                            ...entity,
                            word: action.editedWord
                        }) :
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

        case 'SHOW_WORD_EDIT_ICON': 
            return ({
                ...state,
                editIconIndex: action.index
            })

        case 'HIDE_WORD_EDIT_ICON': 
            return ({
                ...state,
                editIconIndex: null
            })

        default:
            return state
    }
}

export default words;