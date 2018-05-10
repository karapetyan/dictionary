import { store } from '../../store/store';

const getWordById = id =>
    store.getState().dictionary.words.entities.filter(entity =>
        entity.id === id
    )[0].word

export default getWordById;