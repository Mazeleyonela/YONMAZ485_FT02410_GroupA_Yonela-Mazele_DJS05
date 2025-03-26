import { createStore } from 'redux';

// Action Types
const ADD = 'ADD';
const SUBTRACT = 'SUBTRACT';
const RESET = 'RESET';

// Action Creators
const add = () => ({ type: ADD });
const subtract = () => ({ type: SUBTRACT });
const reset = () => ({ type: RESET });

// Initial State
const initialState = { count: 0 };

// Reducer Function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { count: state.count + 1 };
    case SUBTRACT:
      return { count: state.count - 1 };
    case RESET:
      return { count: 0 };
    default:
      return state;
  }
}; 
