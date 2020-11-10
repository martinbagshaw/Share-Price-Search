import React, { FC, Fragment } from 'react';
import { hot } from 'react-hot-loader';
declare const module: any;
import Header from './components/Header';
import Main from './components/Main';

const App: FC = (): JSX.Element => (
  <Fragment>
    <Header />
    <Main />
  </Fragment>
);

export default hot(module)(App);
