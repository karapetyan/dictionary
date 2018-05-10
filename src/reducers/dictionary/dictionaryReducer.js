import { combineReducers } from 'redux';
import words from './wordsReducer';
import translations from './translationsReducer';
import removeIconEntityIndex from './removeIconEntityIndexReducer';

let dictionary = combineReducers({
    dictionary: {
        words,
        translations,
        removeIconEntityIndex
    }
})

export default dictionary;