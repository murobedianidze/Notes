
import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from '../header/Header.module.css';

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <h1 className={styles.header_text}>უჩვეულო ჩანახატი</h1>
        <nav className={styles.navbar}>
          <ul className={styles.ul}>
            <li>
              <Link className={styles.li} to="/Notes">Home</Link>
            </li>
            <li>
              <Link className={styles.li} to="/about">About</Link>
            </li>
            <li >
              <Link className={styles.li} to="/friends">Friends</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
