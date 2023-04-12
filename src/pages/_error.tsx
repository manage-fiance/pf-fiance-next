import React from 'react';

function Error() {
  return <div>Not found page</div>;
}

Error.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 200;
  return { statusCode };
};

export default Error;
