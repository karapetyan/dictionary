let initialState = {
    pairs: [],
    selectedPair: null
}

const test = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TEST':
            return ({
                pairs: action.pairs,
                selectedPair: action.selectedPair
            })

        case 'CHECK_PAIR':
            return ({
                ...state,
                pairs: state.pairs.map(pair =>
                    pairId === action.pairId ?
                        ({
                            ...pair,
                            status: action.status
                        }) :
                    pair 
                )
            })
            
        case 'SELECT_PAIR':
            return ({
                ...state,
                selectedPair: aciton.pairId
            })

        default: 
            return state
    }
}

export default test;