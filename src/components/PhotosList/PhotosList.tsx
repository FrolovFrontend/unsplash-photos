import React, { useEffect, useState } from 'react';
import styles from './photoslist.module.css';
import { PhotosItem } from './PhotosItem';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';

interface IPhoto {
  id: string;
  urls: {
    regular: string;
  };
}

type TPhotosListData = Array<IPhoto>;

export function PhotosList() {
  const [listPhotos, setListPhotos] = useState<TPhotosListData>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    unsplash.photos
      .listPhotos(1, 20, 'latest')
      .then(toJson)
      .then((json) => {
        setListPhotos(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <ul className={styles.photosList}>
        {listPhotos.map((photo) => (
          <PhotosItem id={photo.id} image={photo.urls.regular} key={photo.id}/>
        ))}
      </ul>
      {isLoading && (
        <div style={{textAlign: 'center', padding: '16px 0'}}>Загрузка...</div>
      )}
    </div>
  );
}
