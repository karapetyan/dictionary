const getTranslationById = id =>
    getState().translations.filter(translation =>
        translation.wordId === id
    )[0].translation

export default getTranslationById;