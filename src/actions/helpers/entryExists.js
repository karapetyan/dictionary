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
        ).length

    if (alreadyExists) {
        store.dispatch(addError(`Запись: ${word} - ${translation} уже присутствует в словаре`));
        return true
    } else {
        return false 
    }
       
}

export default entryExists;