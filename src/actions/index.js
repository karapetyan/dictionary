import { v4 } from 'uuid';
import entryExists from './helpers/entryExists';
import getTranslationById from './helpers/getTranslationById';
import getWordById from './helpers/getWordById';
import canCreateTest from './helpers/canCreateTest';
import createPairs from './helpers/createPairs';
import getFirstPairId from './helpers/getFirstPairId';

export const addNewEntry = (word, translation) => {
    if (!(entryExists(word, translation))) {
        return ({
            type: 'ADD_NEW_ENTRY',
            id: v4(),
            word,
            translation
        })
    }
}

export const editWord = (id, editedWord) => {
    if (!(entryExists(editedWord, getTranslationById(id)))) {
        return ({
            type: 'EDIT_WORD',
            id,
            editedWord  
        })
    } 
}
    
export const editTranslation = (wordId, editedTranslation) => {
    if (!(entryExists(getWordById(wordId), editedTranslation))) {
        return ({
            type: 'EDIT_TRANSLATION',
            wordId,
            editedTranslation
        })
    }
}

export const deleteEntry = id =>
    ({
        type: 'DELETE_ENTRY',
        id
    })

export const createTest = () => {
    if (canCreateTest()) {
        return ({
            type: 'CREATE_TEST',
            pairs: createPairs(),
            selectedPair: getFirstPairId()
        })

    }
}
    
export const checkPair = (pairId, wordId) => 
    isCorrectAnswer(pairId, wordId) ?
        ({
            type: 'CHECK_PAIR',
            pairId,
            status: {
                result: 'succeed',
                chosenTranslationId: wordId
            }
        }) :
            ({
                type: 'CHECK_PAIR',
                pairId,
                status: {
                    result: 'failed',
                    chosenTranslationId: wordId
                }
            })

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