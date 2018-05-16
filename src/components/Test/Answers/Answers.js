import React from 'react';
import './Answers.css';

const Answers = ({selectedPairTranslations, status, pairId, checkPair}) => 
    <div className='column-answers'>
        <h3>Выберите правильный перевод:</h3>
        {
            selectedPairTranslations.map(translation => {
                if (status.result) {
                    return status.chosenTranslationId === translation.wordId ?
                        <div key={translation.wordId} className="answer-option"> 
                            <label><input key={translation.wordId} type="radio" name={translation.wordId} checked disabled />{translation.translation}</label>
                        </div> :
                            <div key={translation.wordId} className="answer-option">
                                <label><input key={translation.wordId} type="radio" name={translation.wordId} disabled />{translation.translation}</label>
                            </div>
                } else {
                    return (
                        <div key={translation.wordId} className="answer-option">
                            <label><input key={translation.wordId} type="radio" name={translation.wordId} onClick={() => checkPair(pairId, translation.wordId)} />{translation.translation}</label>
                        </div>
                    )
                }
            })
        }
    </div>

export default Answers;