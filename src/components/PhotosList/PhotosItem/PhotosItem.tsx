import React from 'react';
import styles from './photositem.module.css';

interface IPhotosItemProps {
  id: string;
  image: string;
}

export function PhotosItem({id, image}: IPhotosItemProps) {
  return (
    <li className={styles.photoItem} id={id}>
      <a href="#photo" className={styles.link}>
        <img src={image} alt="" className={styles.image}/>
      </a>
    </li>
  );
}
