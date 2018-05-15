import { store } from '../../store/store';
import { hideRemoveIcon, setEditingEntityId } from '../../actions/index';

const makeConsistent = index => {
    if (store.getState().dictionary.removeIconEntityIndex === index) store.dispatch(hideRemoveIcon());
    if (store.getState().dictionary.words.editingEntityId === store.getState().dictionary.words.entities[index].id) store.dispatch(setEditingEntityId(null, 'WORD'));
    if (store.getState().dictionary.translations.editingEntityId === store.getState().dictionary.translations.entities[index].id) store.dispatch(setEditingEntityId(null, 'TRANSLATION'));
}

export default makeConsistent;