import * as React from 'react';
import BaseStructure from 'components/common/BaseStructure';

type Props = {};

class Introduction extends React.Component<Props> {
  render() {
    return (
      <BaseStructure>
        <h1>Introduction</h1>
        <h3>Sample project for react route-based server side rendering</h3>
      </BaseStructure>
    );
  }
}

export default Introduction;
