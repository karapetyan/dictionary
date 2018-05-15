import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Dictionary from './components/Dictionary/Dictionary';
import Test from './components/Test/Test';

const App = ({showTest}) =>
  showTest ? 
    <Test/> : 
      <Dictionary/>

const mapStateToProps = state =>
    ({
      showTest: Boolean(state.test.pairs.length)
    })

export default connect(
  mapStateToProps,
  null
)(App);
