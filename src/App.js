import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHeader from 'components/morecules/PageHeader';

import InitPage from 'pages/InitPage';
import MatchPage from 'pages/MatchPage';

import { MemberProvider } from 'contexts/MemberContext';

const App = () => {
  return (
    <BrowserRouter>
      <MemberProvider>
        <PageHeader />
        <Switch>
          <Route path="/" exact><InitPage /></Route>
          <Route path="/match"><MatchPage /></Route>
        </Switch>
      </MemberProvider>
    </BrowserRouter>
  );
}

export default App;
