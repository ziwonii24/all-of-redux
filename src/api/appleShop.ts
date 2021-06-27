export type TProduct = {
  product: string;
  price: number;
};

export type TApiError = {
  error: Error;
};

// FIXME: setTimeout
const fakeApi = () => {
  let res: TProduct[] = [];
  // setTimeout(() => {
  res = [
    {
      product: 'macbook',
      price: 250,
    },
    {
      product: 'airpod pro',
      price: 30,
    },
    {
      product: 'iPhone12',
      price: 99,
    },
  ];
  // }, 3000);
  return res;
};

export const getProductList = async () => {
  const res = await fakeApi();
  return res;
};
