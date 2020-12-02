import React, { useEffect } from 'react';
import { Content } from '../../components/Content';
import { PhotosList } from '../../components/PhotosList';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';
import { setToken } from '../../store/actions';
import { useDispatch } from 'react-redux';


export function Home() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token || token === 'undefined') {
      const code = window.location.search.split('code=')[1];
      if (code) {
        unsplash.auth
          .userAuthentication(code)
          .then(toJson)
          .then((json: any) => {
            unsplash.auth.setBearerToken(json.access_token);
            dispatch(setToken(json.access_token));
            localStorage.setItem('token', json.access_token);
          })
          .catch((error: Error) => {
            console.log(error);
          });
      }
    }
    if (token) {
      dispatch(setToken(token));
    }
  }, [token, dispatch]);

  return (
    <Content>
      <h1>Лента</h1>
      <PhotosList/>
    </Content>
  );
}
