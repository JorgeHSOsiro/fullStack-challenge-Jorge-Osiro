import React from 'react';
import { Link } from 'react-router-dom';
import { FaSchool } from 'react-icons/fa';

import styles from './styles.module.scss';

export default function Menu() {
  return (
    <div className={styles.headerContainer}>
      <div>
        <Link className={styles.bookIcon} to="/"><FaSchool/></Link>
      </div>
      <div>
        <Link className={styles.link}>Login</Link>
      </div>
    </div>
  );
}
