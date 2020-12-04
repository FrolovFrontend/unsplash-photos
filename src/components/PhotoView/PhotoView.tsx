import React from 'react';
import styles from './photoview.module.css';

interface IPhotoProps {
  url?: string;
  description?: string;
  color?: string;
}

export function PhotoView({url, description, color}: IPhotoProps) {
  return (
    <div className={styles.photoContainer} style={{background: color}}>
      <img
        className={styles.image}
        src={url}
        alt={description ? description : ''}
      />
    </div>
  );
}
