import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store/store';

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
       <Provider store={store}>
      <Text>example</Text>
    </Provider>
    </SafeAreaView>
  );
}

export default App;
