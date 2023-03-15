export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type StackScreens = {
  Home: undefined;
  Login: undefined;
};

export type ProductProps = {
  id: number;
  imgUrl: string;
  name: string;
  price: number;
  ingredients: string;
  addToCart?: () => void;
};
