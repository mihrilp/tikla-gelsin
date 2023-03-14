import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/store';
import {useAppSelector} from './src/hooks/useStore';

function Bootstrap() {
  const isLogged = useAppSelector(state => state.user.isLogged);

  return <StackNavigator initial={isLogged ? 'Home' : 'Login'} />;
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Bootstrap />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
