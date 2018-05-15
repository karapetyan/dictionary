import React from 'react';
import './TranslationItem.css';
import EditIcon from '../../../../containers/Dictionary/PairsList/EditIcon/EditIcon';

const TranslationItem = ({i, translations, showEditIcon, hideEditIcon, editTranslation}) => {
    let translationEditInput, translationEditIdInput;

    const submitTranslation = f => {
        f.preventDefault();
        editTranslation(translationEditIdInput.value, translationEditInput.value);
    }

    return (translations.entities[i].wordId !== translations.editingEntityId ?
        <div className="inline-block" onMouseEnter={() => showEditIcon(i, "TRANSLATION")} onMouseLeave={() => hideEditIcon("TRANSLATION")} >
            <span>{translations.entities[i].translation}</span>
            <EditIcon i={i} id={translations.entities[i].wordId} type="TRANSLATION"/>
        </div> :
            <form className="inline-block" onSubmit={submitTranslation}>
                <input name="translation" placeholder="Translation" defaultValue={translations.entities[i].translation} type="text" ref={input => translationEditInput = input} pattern="[а-яА-Я- ]+" required />
                <input name="id" type="hidden" ref={input => translationEditIdInput = input} value={translations.entities[i].wordId} />
                <button>Изменить</button>
            </form>
    )
}  

export default TranslationItem;