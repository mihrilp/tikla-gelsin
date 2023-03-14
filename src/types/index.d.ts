declare global {
  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;

  type StackScreens = {
    Home: undefined;
    Login: undefined;
  };
}
