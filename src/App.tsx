import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHeader from 'components/morecules/PageHeader';

import InitPage from 'pages/InitPage';
import MatchPage from 'pages/MatchPage';
import ErrorPage from 'pages/ErrorPage';

import { MemberProvider } from 'contexts/MemberContext';
import { ModalProvider } from 'contexts/ModalContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <MemberProvider>
          <PageHeader />
          <Switch>
            <Route path="/" exact><InitPage /></Route>
            <Route path="/match"><MatchPage /></Route>
            <Route><ErrorPage /></Route>
          </Switch>
        </MemberProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
