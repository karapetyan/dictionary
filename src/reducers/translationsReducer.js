const translations = (state = [], action) => {
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
            return [...state].map(item => 
                item.wordId === action.id ?
                    ({
                        ...item,
                        translation: action.editedTranslation
                    }):
                    item
            )

        case 'DELETE_ENTRY':
            return [...state].filter(item => 
                item.wordId !== action.id
            )

        default:
            return state         
    }
}

export default translations;