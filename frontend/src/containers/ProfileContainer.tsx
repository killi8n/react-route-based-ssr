import * as React from 'react';
import { connect } from 'react-redux';
import { State } from 'store/modules';
import { profileActions } from 'store/modules/profile';
import { bindActionCreators } from 'redux';
import Profile from 'components/profile/Profile';
import Loader from 'components/common/Loader';
import shouldCancel from 'lib/shouldCancel';

type Props = {
  thumbnail: string;
  loading: boolean;
  ProfileActions: typeof profileActions;
};

class ProfileContainer extends React.Component<Props> {
  componentDidMount() {
    if (shouldCancel()) return;
    this.getThumbnail();
  }

  getThumbnail = async () => {
    const { ProfileActions } = this.props;
    try {
      await ProfileActions.getThumbnail();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { thumbnail, loading } = this.props;
    if (loading) {
      return <Loader />;
    }
    return (
      <>
        <Profile thumbnail={thumbnail} />
      </>
    );
  }
}

export default connect(
  ({ profile }: State) => ({
    thumbnail: profile.thumbnail,
    loading: profile.loading
  }),
  (dispatch: any) => ({
    ProfileActions: bindActionCreators(profileActions, dispatch)
  })
)(ProfileContainer);
