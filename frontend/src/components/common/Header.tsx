import * as React from 'react';
import styles from './Header.scss';
import { Link } from 'react-router-dom';
import * as classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type Props = {};

class Header extends React.Component<Props> {
  render() {
    return (
      <div className={cx('wrapper')}>
        <Link to={'/'} className={cx('item')}>
          Introduction
        </Link>
        <Link to={'/profile'} className={cx('item')}>
          Profile
        </Link>
        <Link to={'/repos'} className={cx('item')}>
          Repos
        </Link>
      </div>
    );
  }
}

export default Header;
