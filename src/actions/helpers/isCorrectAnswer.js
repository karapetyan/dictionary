const isCorrectAnswer = (pairId, wordId) =>
    getState().test.pairs.filter(pair => 
        pair.pairId === pairId
    )[0].quizWord.id === wordId

export default isCorrectAnswer;