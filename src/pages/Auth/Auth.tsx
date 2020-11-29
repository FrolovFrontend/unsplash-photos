import React, { useEffect } from 'react';
// import styles from './auth.module.css';
import { Content } from '../../components/Content';
import { authenticationUrl } from '../../utils/unsplash';

export function Auth() {
  useEffect(() => {
    window.location.assign(authenticationUrl);
  }, []);
  return (
    <Content>
      <h1>Авторизация</h1>
    </Content>
  );
}
