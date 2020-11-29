import React from 'react';
import styles from './photoslist.module.css';
import { PhotosItem } from './PhotosItem';

interface IPhoto {
  id: string;
  urls: {
    regular: string;
  };
}

interface IPhotosListProps {
  list: Array<IPhoto>;
}

export function PhotosList({list}: IPhotosListProps) {
  return (
    <ul className={styles.photosList}>
      {list.map((photo) => (
        <PhotosItem id={photo.id} image={photo.urls.regular}/>
      ))}
    </ul>
  );
}
