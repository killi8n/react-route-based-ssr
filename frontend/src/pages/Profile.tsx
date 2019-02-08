import * as React from 'react';
import ProfileContainer from 'containers/ProfileContainer';
import BaseStructure from 'components/common/BaseStructure';

type Props = {};

class Profile extends React.Component<Props> {
  render() {
    return (
      <BaseStructure>
        <ProfileContainer />
      </BaseStructure>
    );
  }
}

export default Profile;
