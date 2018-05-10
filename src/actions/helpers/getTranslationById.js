import { store } from '../../store/store';

const getTranslationById = id =>
    store.getState().dictionary.translations.entities.filter(entity =>
        entity.wordId === id
    )[0].translation

export default getTranslationById;