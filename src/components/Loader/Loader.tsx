import React from 'react';
import styles from './loader.module.css';

export function Loader() {
  return (
    <div className={styles.preloader}>
      <div className={styles.loader}></div>
    </div>
  );
}
