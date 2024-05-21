import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './store/store';
import { Counter } from './features/counter/counter';


function App(): React.JSX.Element {

  return (
    <SafeAreaView>
       <Provider store={store}>
      <Text>example</Text>
      <Counter/>
    </Provider>
    </SafeAreaView>
  );
}

export default App;
