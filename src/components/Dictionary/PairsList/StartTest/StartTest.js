const StartTest = ({wordsCount, createTest}) =>
    wordsCount < 20 ?
        <div>
            <button type="button" disabled>Начать тест</button>
            <p>Для тестирования в словаре должно быть не менее 20 слов.</p>
        </div> :
            <div>
                <button type="button" onClick={() => createTest()}>Начать тест</button>
            </div>

export default StartTest;