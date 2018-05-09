import shuffe from './shuffle';

const getTranslationOptions = id => {
    let allTranslations = getState().translations.entities;
    let correctTranslation = allTranslations.filter(entity => 
        entity.wordId === id
    )
    let translationOptions = allTranslations.filter(entity => 
        entity.wordId !== id
    )
    incorrectTranslations = shuffle(translationOptions).slice(0, 5);
    validTranslationOptions = shuffle(incorrectTranslations.concat(correctTranslation));
    return validTranslationOptions;
}

const createPairs = () => {
    let result = [];
    getState().words.entities.forEach(entity => {
        result.push({
            pairId: v4(),
            status: {
                result: null,
                chosenTranslationId: null
            },
            quizWord: {
                word: entity.word,
                id: entity.id
            },
            translations: getTranslationOptions(entity.id)
        })
    });
    return result;
}

export default createPairs;