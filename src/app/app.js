'use client'
import React from 'react'
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from "@/redux/store";
import Layout from '@/components/layout/Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = ({ children }) => {
  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          {children}
          <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
        </Layout>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
