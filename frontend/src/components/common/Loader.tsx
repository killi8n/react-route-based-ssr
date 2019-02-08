import * as React from 'react';
import LoaderSpinner from 'react-loader-spinner';

class Loader extends React.Component {
  render() {
    return <LoaderSpinner type="Puff" color="#00BFFF" height="100" width="100" />;
  }
}

export default Loader;
