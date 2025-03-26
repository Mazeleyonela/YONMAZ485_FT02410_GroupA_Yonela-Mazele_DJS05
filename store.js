import { createStore } from 'redux';

// Action Types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Action Creators
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
const reset = () => ({ type: RESET });