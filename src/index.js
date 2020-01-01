import React from 'react';
import Routes from './routes';
import './config/reactotron';

const App = () => <Routes />;

const OverlayApp = __DEV__ ? console.tron.overlay(App) : App;
export default OverlayApp;
