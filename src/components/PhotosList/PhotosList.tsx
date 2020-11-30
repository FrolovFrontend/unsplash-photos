import React, { useEffect, useRef, useState } from 'react';
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
  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let pageCount = 1;

    async function load() {
      setLoading(true);
      try {
        const photos = await unsplash.photos.listPhotos(pageCount, 20, 'latest').then(toJson);
        setListPhotos(prevPhotos => prevPhotos.concat(...photos));
        pageCount++;
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '100px',
    });
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className={styles.photosList}>
      {listPhotos.map((photo) => (
        <PhotosItem id={photo.id} image={photo.urls.regular} key={photo.id}/>
      ))}
      <div ref={bottomOfList}></div>
      {isLoading && (
        <div style={{textAlign: 'center', padding: '16px 0'}}>Загрузка...</div>
      )}
    </ul>
  );
}
