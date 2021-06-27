// action type
export const INCREMENT = 'counter/INCREMENT' as const;
export const DECREMENT = 'counter/DECREMENT' as const;
export const INCREMENT_BY = 'counter/INCREMENT_BY' as const;

// action
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementBy = (diff: number) => ({ type: INCREMENT_BY, payload: diff });

// type of action
type CounterAction = ReturnType<typeof increment> | ReturnType<typeof decrement> | ReturnType<typeof incrementBy>;

// type of state
type CounterState = { num: number };

// initial state
const initialState: CounterState = {
  num: 0,
};

// reducer
export default function counter(state: CounterState = initialState, action: CounterAction): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, num: state.num + 1 };
    case DECREMENT:
      return { ...state, num: state.num - 1 };
    case INCREMENT_BY:
      return { ...state, num: state.num + action.payload };
    default:
      return state;
  }
}
