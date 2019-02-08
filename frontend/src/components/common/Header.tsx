import * as React from 'react';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

type Props = {};

class Header extends React.Component<Props> {
  render() {
    return (
      <div className={styles.wrapper}>
        <Link to={'/'} className={styles.item}>
          Introduction
        </Link>
        <Link to={'/profile'} className={styles.item}>
          Profile
        </Link>
        <Link to={'/repos'} className={styles.item}>
          Repos
        </Link>
      </div>
    );
  }
}

export default Header;
