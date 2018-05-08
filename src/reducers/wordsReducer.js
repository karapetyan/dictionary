const words = (state = [], aciton) => {
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
            return [...state].map(item => 
                item.id === action.id ?
                    ({
                        ...item,
                        word: action.editedWord
                    }):
                    item
            )
        case 'DELETE_ENTRY':
            return [...state].filter(item => 
                item.id !== action.id
            )
        default:
            return state
    }
}

export default words;