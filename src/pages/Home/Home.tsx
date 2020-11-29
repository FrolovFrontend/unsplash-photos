import React from 'react';
import styles from './home.module.css';
import { Content } from '../../components/Content';
import { usePhotosList } from '../../hooks/usePhotosList';
import { PhotosList } from '../../components/PhotosList';

export function Home() {
  const [photos] = usePhotosList();

  return (
      <Content>
        <h1>Лента</h1>
        <PhotosList list={photos}/>
      </Content>
  );
}
