import 'react-native-gesture-handler';
import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import AppNavigator from './src/navigators/appNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Store from './src/Store';

let { store } = Store;

export default function Main() {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <PaperProvider>
                <AppNavigator />
            </PaperProvider>
        </NavigationContainer>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
