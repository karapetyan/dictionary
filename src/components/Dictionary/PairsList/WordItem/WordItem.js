import './WordItem.css';
import EditIcon from '../EditIcon/EditIcon';

const WordItem = ({i, words, showEditIcon, hideEditIcon, editWord}) => {
    let = wordEditInput, wordEditIdInput;

    const submitWord = f => {
        f.preventDefault();
        editWord(wordEditIdInput.value, wordEditInput.value);
    }

    words.entities[i].id !== words.editingEntityId ?
    <div className="inline-block" onMouseOver={() => showEditIcon(words.entities[i].id, "WORD")} onMouseOut={() => hideEditIcon("WORD")} >
        <span>{words.entities[i].word}</span>
        <EditIcon i={i} id={words.entities[i].id} type="WORD"/>
    </div> :
        <form className="inline-block" onSubmit={submitWord}>
            <input name="word" placeholder="Word" defaultValue={words.entities[i].word} type="text" ref={input => wordEditInput = input} pattern="[a-zA-Z- ]" required />
            <input name="id" type="hidden" ref={input => wordEditIdInput = input} value={words.entities[i].id} />
            <button>Изменить</button>
        </form>
}
    
export default WordItem;