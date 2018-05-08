const getWordById = id =>
    getState().words.filter(word =>
        word.id === id
    )[0].word

export default getWordById;