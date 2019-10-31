import React from 'react';

import PageTemplate from 'pages/PageTemplate';
import ErrorBox from 'components/morecules/ErrorBox';

import misaeError from 'assets/img/misae-error.png';

const ErrorPage: React.FC = () => {
  return (
    <PageTemplate>
      <ErrorBox image={misaeError} title="404" text="잘못된 경로에요." />
    </PageTemplate>
  );
};

export default ErrorPage;
