import { store } from '../../store/store';
import { addError } from '../../actions/index';

const canCreateTest = () => {
    if (store.getState().dictionary.words.entities.length < 20) {
        store.dispatch(addError("Для тестирования в словаре должно быть не менее 20 слов"));
        return false;
    } else {
        return true;
    }
}

export default canCreateTest;