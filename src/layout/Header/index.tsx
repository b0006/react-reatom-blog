import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Header.module.scss';

const Header: React.FC = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      <header className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <NavLink tabIndex={0} to="/" activeClassName={pathname !== '/' ? '' : styles.active}>
              Main
            </NavLink>
            <NavLink tabIndex={0} to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </div>
          <div className={styles.right}>
            <NavLink tabIndex={0} to="/sign-in" activeClassName={styles.active}>
              Sign in
            </NavLink>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <h1>Header</h1>
        {children}
      </div>
    </>
  );
};

export default Header;
