import './PairsList.css';
import WordItem from './WordItem/WordItem';
import TranslationItem from './TranslationItem/TranslationItem';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import StartTest from './StartTest/StartTest';

const PairsList = ({words, showRemoveIcon, hideRemoveIcon}) => {
    let pairs = [];
    for (let i = 0; i < words.entities.length; i++) {
        pairs.push(
            <div key={i} onMouseOver={() => showRemoveIcon(i)} onMouseOut={() => hideRemoveIcon()}>
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