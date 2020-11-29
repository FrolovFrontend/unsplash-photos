import { useEffect, useState } from 'react';
import { unsplash } from '../utils/unsplash';
// @ts-ignore
import { toJson } from 'unsplash-js';

export function usePhotosList() {
  const [listPhotos, setListPhotos] = useState([]);

  useEffect(() => {
    unsplash.photos
      .listPhotos(1, 10, 'latest')
      .then(toJson)
      .then((json: any) => {
        setListPhotos(json);
      });
  }, [listPhotos]);

  return [listPhotos];
}