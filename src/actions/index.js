import { v4 } from 'uuid';
import shuffe from './helpers/shuffle';

export const addNewEntry = (word, translation) => {
    let sameWordsIds = getState().words
        .filter(item => 
            item.word === word
        ).map(i =>
            i.id
        )
                        
    let alreadyExists = getState().translations
        .filter(tr => 
            sameWordsIds.includes(tr.wordId) && tr.translation === translation
        ).length

    if (alreadyExists) {
        dispatch(addError(`Запись: ${word} - ${translation} уже присутствует в словаре`));
    } else {
        return ({
            type: 'ADD_NEW_ENTRY',
            action: {
                id: v4(),
                word,
                translation
            }
        })
    }
}

export const editWord = (id, editedWord) =>
    ({
        type: 'EDIT_WORD',
        action: {
            id,
            editedWord
        }
    })

export const editTranslation = (id, editedTranslation) =>
    ({
        type: 'EDIT_TRANSLATION',
        action: {
            id,
            editedTranslation
        }
    })

export const deleteEntry = id =>
    ({
        type: 'DELETE_ENTRY',
        action: {
            id
        }
    })

export const createTest = () => {
    if (getState().words.length < 20) {
        dispatch(addError("Для тестирования в словаре должно быть не менее 20 слов"));
    } else {
        let pairs = [];
        getState().words.forEach(wItem => {
            let allTranslations = getState().translations;
            let correctTranslation = allTranslations.filter(tr => 
                tr.wordId === wItem.id
            )
            let translationOptions = allTranslations.filter(tr => 
                tr.wordId !== wItem.id
            )
            translationOptions = shuffle(translationOptions).slice(0, 5);
            translationOptions = shuffle(translationOptions.concat(correctTranslation));
            let pair = {};
            pair.pairId = v4();
            pair.status = {
                result: null,
                chosenTranslationId: null
            },
            pair.quizWord = {
                word: wItem.word,
                id: wItem.id
            };
            pair.translations = correctTranslation;
            pairs.push(...pair);
        });
        return ({
            type: 'CREATE_TEST',
            pairs,
            selectedPair: pairs[0].pairId
        })
    }
}
    
export const checkPair = (pairId, wordId) => {
    let correctAnswer = getState().pairs.filter(pair => 
            pair.pairId === pairId
        )[0].quizWord.id === wordId
    
    if (correctAnswer) {
        return ({
            type: 'CHECK_PAIR',
            pairId,
            status: {
                result: 'succeed',
                chosenTranslationId: wordId
            }
        })
    } else {
        return ({
            type: 'CHECK_PAIR',
            pairId,
            status: {
                result: 'failed',
                chosenTranslationId: wordId
            }
        })
    }
}

export const selectPair = pairId =>
    ({
        type: 'SELECT_PAIR',
        pairId
    })
    

export const addError = text =>
    ({
        type: 'ADD_ERROR',
        errorId: v4(),
        text
    })
    
export const removeError = errorId =>
    ({
        type: 'REMOVE_ERROR',
        errorId
    })