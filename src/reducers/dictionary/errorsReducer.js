const errors = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return ([
                ...state,
                {
                    errorId: action.errorId,
                    text: action.text
                }
            ])
        
        case 'REMOVE_ERROR':
            return ([
                [...state].filter(e =>
                    e.errorId !== action.errorId  
                )
            ])

        default:
            return state
    }
        
}

export default errors;