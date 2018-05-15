import { store } from '../store/store';
import { v4 } from 'uuid';
import entryExists from './helpers/entryExists';
import getTranslationById from './helpers/getTranslationById';
import getWordById from './helpers/getWordById';
import canCreateTest from './helpers/canCreateTest';
import createPairs from './helpers/createPairs';
import getFirstPairId from './helpers/getFirstPairId';
import isCorrectAnswer from './helpers/isCorrectAnswer';
import makeConsistent from './helpers/makeConsistent';

export const addNewEntry = (word, translation) => 
    entryExists(word, translation) ?
        store.dispatch(addError(`Запись: ${word} - ${translation} уже есть в словаре`)) :
            ({
                type: 'ADD_NEW_ENTRY',
                id: v4(),
                word,
                translation
            })

export const setEditingEntityId = (id, entityType) => {
    return ({
        type: `SET_EDITING_${entityType}_ID`,
        id
    })
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

export const removeEntry = index => {
    makeConsistent(index);
    return ({
        type: 'REMOVE_ENTRY',
        index
    })
}

export const createTest = () => {
    if (canCreateTest()) {
        return ({
            type: 'CREATE_TEST',
            pairs: createPairs(),
            selectedPairId: getFirstPairId()
        })
    }
}
    
export const checkPair = (pairId, wordId) => 
    ({
        type: 'CHECK_PAIR',
        pairId,
        status: {
            result: isCorrectAnswer(pairId, wordId) ? 'succeed' : 'failed',
            chosenTranslationId: wordId
        }
    })

export const selectPair = pairId =>
    ({
        type: 'SELECT_PAIR',
        pairId
    })
    
export const addError = text =>  {
    console.log('called AddError action:');
    return ({
        type: 'ADD_ERROR',
        errorId: v4(),
        text
    })
}
    

export const removeError = errorId =>
    ({
        type: 'REMOVE_ERROR',
        errorId
    })

export const showEditIcon = (index, type) => 
    ({
        type: `SHOW_${type}_EDIT_ICON`,
        index
    })

export const hideEditIcon = type => 
    ({
        type: `HIDE_${type}_EDIT_ICON`
    })

export const showRemoveIcon = index =>
    ({
        type: 'SHOW_REMOVE_ICON',
        index
    })

export const hideRemoveIcon = () => 
    ({
        type: 'HIDE_REMOVE_ICON',
    })