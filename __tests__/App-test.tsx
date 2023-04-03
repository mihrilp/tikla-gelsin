import {render, waitFor} from '@testing-library/react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from '../src/navigation';
import store, {persistor} from '../src/store';
import {useAppSelector} from '../src/hooks/useStore';

jest.mock('../src/hooks/useStore');

describe('App', () => {
  it('renders the Login screen when the user is not logged in', async () => {
    (useAppSelector as jest.Mock).mockReturnValue(false);

    const {getByTestId} = render(
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StackNavigator initial="Login" />
          </PersistGate>
        </Provider>
      </NavigationContainer>,
    );

    await waitFor(() => expect(getByTestId('LoginScreen')).toBeDefined());
  });

  it('renders the Home screen when the user is logged in', async () => {
    (useAppSelector as jest.Mock).mockReturnValue(true);

    const {getByTestId} = render(
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <StackNavigator initial="Home" />
          </PersistGate>
        </Provider>
      </NavigationContainer>,
    );

    await waitFor(() => expect(getByTestId('HomeScreen')).toBeDefined());
  });
});
