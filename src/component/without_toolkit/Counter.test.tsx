import counter, { INCREMENT, DECREMENT, INCREMENT_BY } from '../../reduxStore/counter';

describe('counter', () => {
  test('should increment', () => {
    // Given
    const state = { num: 0 };
    const action = {
      type: INCREMENT,
    };

    // When
    const results = counter(state, action);

    // Then
    const expected = { num: 1 };
    expect(results).toEqual(expected);
  });

  test('should decrement', () => {
    // Given
    const state = { num: 1 };
    const action = {
      type: DECREMENT,
    };

    // When
    const results = counter(state, action);

    // Then
    const expected = { num: 0 };
    expect(results).toEqual(expected);
  });

  test('should incrementBy', () => {
    // Given
    const state = { num: 2 };
    const action = {
      type: INCREMENT_BY,
      payload: 3,
    };

    // When
    const results = counter(state, action);

    // Then
    const expected = { num: 5 };
    expect(results).toEqual(expected);
  });
});
