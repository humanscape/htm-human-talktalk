import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHeader from 'components/morecules/PageHeader';

import InitPage from 'pages/InitPage';
import MatchPage from 'pages/MatchPage';
import ErrorPage from 'pages/ErrorPage';

import { MemberProvider } from 'contexts/MemberContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MemberProvider>
        <PageHeader />
        <Switch>
          <Route path="/" exact><InitPage /></Route>
          <Route path="/match"><MatchPage /></Route>
          <Route><ErrorPage /></Route>
        </Switch>
      </MemberProvider>
    </BrowserRouter>
  );
}

export default App;