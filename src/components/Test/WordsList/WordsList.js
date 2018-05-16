import React from 'react';
import './WordsList.css' 

const WordsList = ({test, selectPair}) =>
    <div className="column-wordlist">
        <h2>Тестирование</h2>
        { 
            test.pairs.map(pair => {
                let classes = 'word-item';
                if (test.selectedPair === pair.pairId) classes += ' selected';
                if (pair.status.result) classes += ` ${pair.status.result}`;
                if (test.selectedPair !== pair.pairId) {
                    classes += ' pointer';
                    return <div key={pair.pairId} className={classes} onClick={() => selectPair(pair.pairId)}>{pair.quizWord.word}</div>
                } else {
                    return <div key={pair.pairId} className={classes}>{pair.quizWord.word}</div>
                }   
            })
        }
    </div>

export default WordsList;