import './TranslationItem.css';
import EditIcon from '../EditIcon/EditIcon';

const TranslationItem = ({i, translations, showEditIcon, hideEditIcon, editTranslation}) => {
    let = translationEditInput, translationEditIdInput;

    const submitTranslation = f => {
        f.preventDefault();
        editTranslation(translationEditIdInput.value, translationEditInput.value);
    }

    translations.entities[i].wordId !== translations.editingEntityId ?
        <div className="inline-block" onMouseOver={() => showEditIcon(translation.entities[i].id, "TRANSLATION")} onMouseOut={() => hideEditIcon("TRANSLATION")} >
            <span>{translations.entities[i].translation}</span>
            <EditIcon i={i} id={translations.entities[i].id} type="TRANSLATION"/>
        </div> :
            <form className="inline-block" onSubmit={submitTranslation}>
                <input name="translation" placeholder="Translation" defaultValue={translations.entities[i].translation} type="text" ref={input => translationEditInput = input} pattern="[a-zA-Z- ]" required />
                <input name="id" type="hidden" ref={input => translationEditIdInput = input} value={translations.entities[i].id} />
                <button>Изменить</button>
            </form>
}

export default TranslationItem;