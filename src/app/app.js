'use client'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from "@/redux/store";
import Layout from '@/components/layout/Layout';

const App = ({children}) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>{children}</Layout>
      </PersistGate>
    </ReduxProvider>
  )
}

export default App