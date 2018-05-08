const canCreateTest = () => {
    if (getState().words.length < 20) {
        dispatch(addError("Для тестирования в словаре должно быть не менее 20 слов"));
        return false;
    } else {
        return true;
    }
}


export default canCreateTest;