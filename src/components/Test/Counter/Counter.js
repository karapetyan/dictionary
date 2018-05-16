import React from 'react';
import './Counter.css';

const Counter = ({quizzLeft, corectAnwers, removeTest}) =>
    <div className="column-counter">
        <div>
            <p>Осталось заданий:</p>
            <p>{quizzLeft}</p>
        </div>
        <div>
            <p>Правильных ответов:</p>
            <p>{corectAnwers}</p>
        </div>
        <div>
            {
                quizzLeft ?
                    <button type="button" onClick={() => removeTest()}>Отменить тест</button> :
                        <button type="button" onClick={() => removeTest()}>Завершить тест</button>
            }
            
        </div> 
    </div>

export default Counter