import React, { useEffect, useRef } from 'react';
import styles from './photoslist.module.css';
import { PhotosItem } from './PhotosItem';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { photosListRequestAsync, TPhotosListData } from '../../store/photosList/actions';

export function PhotosList() {
  const listPhotos = useSelector<RootState, TPhotosListData>(state => state.photos.photosData);
  const isLoading = useSelector<RootState, boolean>(state => state.photos.isLoading);
  const errorValue = useSelector<RootState, string>(state => state.photos.error);
  const dispatch = useDispatch();

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(photosListRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });
    if (bottomOfList.current && !isLoading && !errorValue) {
      observer.observe(bottomOfList.current);
    }
  }, [bottomOfList.current]);
  return (
    <>
      <ul className={styles.photosList}>
        {listPhotos.map((photo) => (
          <PhotosItem
            id={photo.id}
            image={photo.urls.regular}
            color={photo.color}
            key={photo.id}
          />
        ))}
        <div ref={bottomOfList}></div>
      </ul>
      {isLoading && (
        <div style={{textAlign: 'center', padding: '16px 0'}}>Загрузка...</div>
      )}
    </>
  );
}