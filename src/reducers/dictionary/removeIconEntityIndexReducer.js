const removeIconEntityIndex = (removeIconEntityIndex = null, action) => {
    switch (action.type) {
        case 'SHOW_REMOVE_ICON':
            return removeIconEntityIndex = action.index

        default:
            return state
    }
}

export default removeIconEntityIndex;

