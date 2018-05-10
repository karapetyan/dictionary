const initialState = {
    entities: [],
    editingEntityId: null,
    editIconId: null,
    removeIconId: null
}

const words = (state = initialState, aciton) => {
    switch (aciton.type) {
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
                editingEntityId: state.editingEntityId === state.entities[action.index].id ?
                    null : 
                        state.editingEntityId,
                entities: [...state].entities.splice(action.index, 1)
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