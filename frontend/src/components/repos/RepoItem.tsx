import * as React from 'react';
import { RepoType } from 'store/modules/repos';
import styles from './RepoItem.module.scss';

type Props = {
  repo: RepoType;
};

class RepoItem extends React.Component<Props> {
  render() {
    const { repo } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>{repo.title}</div>
        <a href={repo.url} className={styles.url}>
          {repo.url}
        </a>
      </div>
    );
  }
}

export default RepoItem;
