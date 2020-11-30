import React from 'react';
import styles from './photositem.module.css';
import { Link } from 'react-router-dom';

interface IPhotosItemProps {
  id: string;
  image: string;
  color: string;
}

export function PhotosItem({id, image, color}: IPhotosItemProps) {
  return (
    <li className={styles.photoItem} style={{background: color}} id={id}>
      <Link to={`/photo/${id}`} className={styles.link}>
        <img src={image} alt="" className={styles.image}/>
      </Link>
    </li>
  );
}
