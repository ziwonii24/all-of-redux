import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../reduxStore';
import { getAppleProductThunk } from '../../reduxStore/shop';

const Shop: React.FC = () => {
  const { loading, error, data } = useSelector((state: RootState) => state.shop.product);
  const dispatch = useDispatch();

  const handleClickLoad = () => {
    dispatch(getAppleProductThunk());
  };

  console.log(loading, error, data);

  return (
    <div>
      <h1>apple shop</h1>
      <button onClick={handleClickLoad}>load</button>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data && (
        <div>
          {data.map((i, idx) => (
            <div key={idx}>
              <b>{i.product}</b>&nbsp;{i.price}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
