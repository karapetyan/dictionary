const entryExists = (word, translation) => {
    let sameWordsIds = getState().words.entities
    .filter(entity => 
        entity.word === word
    ).map(i =>
        i.id
    )
                    
    let alreadyExists = getState().translations.entities
    .filter(entity => 
        sameWordsIds.includes(entity.wordId) && entity.translation === translation
    ).length

    if (alreadyExists) {
        dispatch(addError(`Запись: ${word} - ${translation} уже присутствует в словаре`));
        return true
    } else {
        return false 
    }
        
            
}

export default entryExists;