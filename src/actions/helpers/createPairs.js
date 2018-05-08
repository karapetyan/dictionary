import shuffe from './shuffle';

const getTranslationOptions = id => {
    let allTranslations = getState().translations;
    let correctTranslation = allTranslations.filter(tr => 
        tr.wordId === id
    )
    let translationOptions = allTranslations.filter(tr => 
        tr.wordId !== id
    )
    incorrectTranslations = shuffle(translationOptions).slice(0, 5);
    validTranslationOptions = shuffle(incorrectTranslations.concat(correctTranslation));
    return validTranslationOptions;
}

const createPairs = () => {
    let result = [];
    getState().words.forEach(item => {
        result.push({
            pairId: v4(),
            status: {
                result: null,
                chosenTranslationId: null
            },
            quizWord: {
                word: item.word,
                id: item.id
            },
            translations: getTranslationOptions(item.id)
        })
    });
    return result;
}

export default createPairs;