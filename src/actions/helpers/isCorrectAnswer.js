const isCorrectAnswer = (pairId, wordId) =>
    getState().pairs.filter(pair => 
        pair.pairId === pairId
    )[0].quizWord.id === wordId

export default isCorrectAnswer;