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

// Create Store
const store = createStore(counterReducer);

// Scenario 1: Initial State Verification
console.log('Initial State:', store.getState()); // Should log { count: 0 }

// Scenario 2: Incrementing the Counter
store.dispatch(add());
store.dispatch(add());
console.log('After ADD Actions:', store.getState()); // Should log { count: 2 }

// Scenario 3: Decrementing the Counter
store.dispatch(subtract());
console.log('After SUBTRACT Action:', store.getState()); // Should log { count: 1 }

// Scenario 4: Resetting the Counter
store.dispatch(reset());
console.log('After RESET Action:', store.getState()); // Should log { count: 0 }
