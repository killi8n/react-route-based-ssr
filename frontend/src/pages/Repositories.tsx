import * as React from 'react';
import ReposContainer from 'containers/ReposContainer';
import BaseStructure from 'components/common/BaseStructure';

type Props = {};

class Repositories extends React.Component<Props> {
  render() {
    return (
      <BaseStructure>
        <ReposContainer />
      </BaseStructure>
    );
  }
}

export default Repositories;
