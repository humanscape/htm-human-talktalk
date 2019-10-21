import React from 'react';
import InitPage from 'pages/InitPage';
import { MemberProvider } from 'contexts/MemberContext';

const App = () => {
  return (
    <MemberProvider>
      <InitPage />
    </MemberProvider>
  );
}

export default App;
