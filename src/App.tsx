import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageHeader from 'components/morecules/PageHeader';

import * as Pages from 'pages';

import { MemberProvider } from 'contexts/MemberContext';
import { ModalProvider } from 'contexts/ModalContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <MemberProvider>
          <PageHeader />
          <Switch>
            <Route path="/" exact>
              <Pages.InitPage />
            </Route>
            <Route path="/match">
              <Pages.MatchPage />
            </Route>
            <Route>
              <Pages.ErrorPage />
            </Route>
          </Switch>
        </MemberProvider>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
