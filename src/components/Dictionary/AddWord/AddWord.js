const AddWord = ({addNewEntry}) => {
    let wordInput, translationInput;
    const submit = f => {
        f.preventDefault();
        addNewEntry(wordInput.value, translationInput.value);
        wordInput.value = '';
        translationInput.value = '';
    }
    return (
        <div>
            <h2>Добавление слова:</h2>
            <form onSubmit={submit}>
                <input name="word" type="text" placeholder="Word" ref={input => wordInput = input} pattern="[a-zA-Z- ]" required/>
                <input name="translation" type="text" placeholder="Translation" ref={input => translationInput = input} pattern="[a-zA-Z- ]" required/>
                <button>Добавить</button>
            </form>
        </div>
    )
}

export default AddWord;