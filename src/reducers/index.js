import { combineReducers } from 'redux';
import words from './wordsReducer';
import translations from './translationsReducer';
import test from './testReducer';

export default combineReducers({
    words,
    translations,
    test,
    errors
})