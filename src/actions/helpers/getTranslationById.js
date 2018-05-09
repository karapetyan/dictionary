const getTranslationById = id =>
    getState().translations.entities.filter(entity =>
        entity.wordId === id
    )[0].translation

export default getTranslationById;