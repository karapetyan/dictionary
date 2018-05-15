import { store } from '../../store/store';

const entryExists = (word, translation) => {
    let sameWordsIds = store.getState().dictionary.words.entities
        .filter(entity => 
            entity.word === word
        ).map(i =>
            i.id
        )
                    
    let alreadyExists = store.getState().dictionary.translations.entities
        .filter(entity => 
            sameWordsIds.includes(entity.wordId) && entity.translation === translation
        ).length

    return Boolean(alreadyExists);
}

export default entryExists;