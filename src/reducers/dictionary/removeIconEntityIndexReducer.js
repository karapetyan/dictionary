const removeIconEntityIndex = (removeIconEntityIndex = null, action) => {
    switch (action.type) {
        case 'SHOW_REMOVE_ICON':
            return removeIconEntityIndex = action.index
        case 'HIDE_REMOVE_ICON':
            return removeIconEntityIndex = null

        default:
            return removeIconEntityIndex
    }
}

export default removeIconEntityIndex;

