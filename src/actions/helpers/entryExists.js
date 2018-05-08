const entryExists = (word, translation) => {
    let sameWordsIds = getState().words
    .filter(item => 
        item.word === word
    ).map(i =>
        i.id
    )
                    
    let alreadyExists = getState().translations
    .filter(tr => 
        sameWordsIds.includes(tr.wordId) && tr.translation === translation
    ).length

    if (alreadyExists) {
        dispatch(addError(`Запись: ${word} - ${translation} уже присутствует в словаре`));
        return true
    } else {
        return false 
    }
        
            
}

export default entryExists;