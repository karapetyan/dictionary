import { combineReducers } from 'redux';
import dictionary from './dictionary/dictionaryReducer';
import test from './testReducer';
import errors from './errorsReducer';

export default combineReducers({
    dictionary,
    test,
    errors
})