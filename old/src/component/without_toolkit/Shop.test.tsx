import { GET_PRODUCT_LIST, GET_PRODUCT_LIST_ERROR, GET_PRODUCT_LIST_SUCCESS } from '../../reduxStore/shop/actions';
import shop, { initialState } from '../../reduxStore/shop/reducer';

describe('shop', () => {
  test('should return list', () => {
    // Given
    const state = initialState;
    const action = {
      type: GET_PRODUCT_LIST,
    };

    // When
    const results = shop(state, action);

    // Then
    const expected = {
      product: {
        loading: true,
        error: null,
        data: null,
      },
    };

    expect(results).toEqual(expected);
  });

  test('should return list success', () => {
    // Given
    const state = initialState;
    const action = {
      type: GET_PRODUCT_LIST_SUCCESS,
      payload: [],
    };

    // When
    const results = shop(state, action);

    // Then
    const expected = {
      product: {
        loading: false,
        error: null,
        data: [],
      },
    };

    expect(results).toEqual(expected);
  });

  test('should return list error', () => {
    // Given
    const state = initialState;
    const action = {
      type: GET_PRODUCT_LIST_ERROR,
      payload: { error: 'error' as unknown as Error },
    };

    // When
    const results = shop(state, action);

    // Then
    const expected = {
      product: {
        loading: false,
        error: { error: 'error' as unknown as Error },
        data: null,
      },
    };

    expect(results).toEqual(expected);
  });
});
