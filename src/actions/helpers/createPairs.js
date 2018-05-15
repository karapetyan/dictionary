import { store } from '../../store/store';
import shuffle from './shuffle';
import { v4 } from 'uuid';

const getTranslationOptions = id => {
    let allTranslations = store.getState().dictionary.translations.entities;
    let correctTranslation = allTranslations.filter(entity => 
        entity.wordId === id
    )
    let translationOptions = allTranslations.filter(entity => 
        entity.wordId !== id
    )
    let incorrectTranslations = shuffle(translationOptions).slice(0, 5);
    let validTranslationOptions = shuffle(incorrectTranslations.concat(correctTranslation));
    return validTranslationOptions;
}

const createPairs = () => {
    let result = [];
    store.getState().dictionary.words.entities.forEach(entity => {
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