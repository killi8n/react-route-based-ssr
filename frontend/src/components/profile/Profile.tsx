import * as React from 'react';

type Props = {
  thumbnail: string;
};

class Profile extends React.Component<Props> {
  render() {
    const { thumbnail } = this.props;
    return (
      <>
        <div
          style={{
            background: `url(${thumbnail}) no-repeat center`,
            width: '300px',
            height: '300px',
            marginTop: '1rem'
          }}
        />
        <h3>evals4dead</h3>
      </>
    );
  }
}

export default Profile;
