const getWordById = id =>
    getState().words.entities.filter(entity =>
        entity.id === id
    )[0].word

export default getWordById;