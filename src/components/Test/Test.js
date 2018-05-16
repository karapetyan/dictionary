import React from 'react';
import WordsList from '../../containers/Test/WordsList/WordsList';
import Answers from '../../containers/Test/Anwers/Anwers';
import Counter from '../../containers/Test/Counter/Counter';

const Test = () =>
    <div className="test-container">
        <WordsList />
        <Answers />
        <Counter />
    </div>

export default Test;