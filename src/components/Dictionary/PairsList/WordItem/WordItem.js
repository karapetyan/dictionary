import React from 'react';
import './WordItem.css';
import EditIcon from '../../../../containers/Dictionary/PairsList/EditIcon/EditIcon';

const WordItem = ({i, words, showEditIcon, hideEditIcon, editWord}) => {
    let wordEditInput, wordEditIdInput;

    const submitWord = f => {
        f.preventDefault();
        editWord(wordEditIdInput.value, wordEditInput.value);
    }

    return (
        words.entities[i].id !== words.editingEntityId ?
            <div className="inline-block" onMouseEnter={() => showEditIcon(i, "WORD")} onMouseLeave={() => hideEditIcon("WORD")} >
                <span>{words.entities[i].word}</span>
                <EditIcon i={i} id={words.entities[i].id} type="WORD"/>
            </div> :
                <form className="inline-block" onSubmit={submitWord}>
                    <input name="word" placeholder="Word" defaultValue={words.entities[i].word} type="text" ref={input => wordEditInput = input} pattern="[a-zA-Z- ]+" required />
                    <input name="id" type="hidden" ref={input => wordEditIdInput = input} value={words.entities[i].id} />
                    <button>Изменить</button>
                </form>
    )
}
    
export default WordItem;