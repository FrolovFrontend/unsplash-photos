import React, { useEffect, useState } from 'react';
import styles from './photo.module.css';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

interface IPhotoData {
  urls: {
    regular: string;
  };
  alt_description: string;
  user: {
    first_name: string;
    last_name: string;
    links: {
      html: string;
    };
    profile_image: {
      medium: string;
    };
  }
}

interface IParams {
  id: string;
}

export function Photo() {
  const [photo, setPhoto] = useState<IPhotoData | null>(null);
  const {id} = useParams<IParams>();
  const history = useHistory();

  useEffect(() => {
    async function loadPhoto() {
      try {
        const photoData = await unsplash.photos
          .getPhoto(id).then(toJson);
        setPhoto(photoData);
      } catch (error) {
        console.log(error);
      }
    }

    loadPhoto();
  }, [id]);
  return (
    <div className={styles.photo}>
      <button onClick={history.goBack}>Назад</button>
      <div className={styles.photoContainer}>
        <img src={photo?.urls.regular} alt={photo ? photo.alt_description : ''}/>
      </div>
    </div>
  );
}
