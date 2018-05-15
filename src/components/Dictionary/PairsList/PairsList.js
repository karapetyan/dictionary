import React from 'react';
import './PairsList.css';
import WordItem from '../../../containers/Dictionary/PairsList/WordItem/WordItem';
import TranslationItem from '../../../containers/Dictionary/PairsList/TranslationItem/TranslationItem';
import RemoveIcon from '../../../containers/Dictionary/PairsList/RemoveIcon/RemoveIcon';
import StartTest from '../../../containers/Dictionary/PairsList/StartTest/StartTest';

const PairsList = ({words, showRemoveIcon, hideRemoveIcon}) => {
    let pairs = [];
    for (let i = 0; i < words.entities.length; i++) {
        pairs.push(
            <div key={i} onMouseEnter={() => showRemoveIcon(i)} onMouseLeave={() => hideRemoveIcon()}>
                <WordItem i={i} />
                <div className="inline-block">—</div>
                <TranslationItem i={i} />
                <RemoveIcon i={i} />
            </div>
        )
    }
    return (
        <div>
            <h2>Слова:</h2>
            {pairs}
            <StartTest />
        </div>
    )
}

export default PairsList;