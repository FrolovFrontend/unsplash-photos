import React from 'react';
import styles from './photositem.module.css';
import { Link } from 'react-router-dom';
import { PhotoMeta } from '../../PhotoMeta';

interface IPhotosItemProps {
  id: string;
  image: string;
  color: string;
  username: string;
  avatar: string;
  authorLink: string
}

export function PhotosItem(props: IPhotosItemProps) {
  const {
    id,
    image,
    color,
    username,
    avatar,
    authorLink,
  } = props;

  return (
    <li className={styles.photoItem} style={{background: color}} id={id}>
      <div className={styles.meta}>
        <PhotoMeta
          authorLink={authorLink}
          avatar={avatar}
          username={username}
        />
      </div>
      <Link to={`/photo/${id}`} className={styles.link}>
        <img src={image} alt="" className={styles.image}/>
      </Link>
    </li>
  );
}
