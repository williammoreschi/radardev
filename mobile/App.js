import React from 'react';
import Routes from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar backgroundColor="#7d40e7" barStyle="light-content" />
    <Routes />
    </>
  );
}