import React, { useEffect, useState } from 'react';
import styles from './photo.module.css';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { IPhoto } from '../../store/photosList/actions';
import { PhotoView } from '../../components/PhotoView';
import { PhotoMeta } from '../../components/PhotoMeta';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { photoLikeAsync, photoRequestAsync, photoReset } from '../../store/photo/actions';

interface IParams {
  id: string;
}

export function Photo() {
  const dispatch = useDispatch();
  const token = useSelector<RootState, string>(state => state.token);
  const photo = useSelector<RootState, Partial<IPhoto>>(state => state.photo.photo);

  const {id} = useParams<IParams>();
  const history = useHistory();

  useEffect(() => {
    dispatch(photoRequestAsync(id));
  }, [id]);

  const handleBack = () => {
    history.goBack();
    dispatch(photoReset());
  };

  const handleLike = (id: string) => {
    dispatch(photoLikeAsync(id));
  };
  return (
    <div className={styles.photo}>
      <button onClick={handleBack}>Назад</button>

      <div className={styles.container}>
        <PhotoMeta
          avatar={photo.user?.profile_image.small}
          username={photo.user?.username}
          authorLink={photo.user?.links.html}
          hasLike={photo?.liked_by_user}
          likeCount={photo?.likes}
          onclick={() => handleLike(id)}
          hasButton
          onSurface
        />
        <div className={styles.break}></div>
        <PhotoView
          url={photo.urls?.regular}
          description={photo?.alt_description}
          color={photo?.color}
        />
      </div>
    </div>
  );
}
