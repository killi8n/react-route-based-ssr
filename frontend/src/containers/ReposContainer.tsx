import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { State } from 'store/modules';
import { reposActions, RepoType } from 'store/modules/repos';
import Loader from 'components/common/Loader';
import RepoItem from 'components/repos/RepoItem';
import shouldCancel from 'lib/shouldCancel';

type Props = {
  repos: RepoType[];
  loading: boolean;
  ReposActions: typeof reposActions;
};

class ReposContainer extends React.Component<Props> {
  componentDidMount() {
    if (shouldCancel()) return;
    this.getRepos();
  }

  getRepos = async () => {
    const { ReposActions } = this.props;
    try {
      await ReposActions.getRepos();
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { loading, repos } = this.props;
    if (loading || repos.length === 0) return <Loader />;
    return (
      <>
        {repos.map(repo => (
          <RepoItem key={repo.url} repo={repo} />
        ))}
      </>
    );
  }
}

export default connect(
  ({ repos }: State) => ({
    repos: repos.repos,
    loading: repos.loading
  }),
  (dispatch: any) => ({
    ReposActions: bindActionCreators(reposActions, dispatch)
  })
)(ReposContainer);
