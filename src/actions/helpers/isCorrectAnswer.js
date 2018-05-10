import { store } from '../../store/store';

const isCorrectAnswer = (pairId, wordId) =>
    store.getState().test.pairs.filter(pair => 
        pair.pairId === pairId
    )[0].quizWord.id === wordId

export default isCorrectAnswer;