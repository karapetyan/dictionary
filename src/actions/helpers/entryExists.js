import { store } from '../../store/store';
import { addError } from '../../actions/index';

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
        )

    return (alreadyExists[0]) ?
        alreadyExists[0].wordId :
            null
}

export default entryExists;