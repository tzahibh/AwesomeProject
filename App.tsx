import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from './store/store';
import { Counter } from './features/counter/counter';
import { ENV_TYPE } from "./env.json";

const queryClient = new QueryClient()

function App(): React.JSX.Element {

  return (
    <SafeAreaView>
       <Provider store={store}>
        <QueryClientProvider client={queryClient}>
      <Text>env : {ENV_TYPE}</Text>
      </QueryClientProvider>
      <Counter/>
    </Provider>
    </SafeAreaView>
  );
}

export default App;
