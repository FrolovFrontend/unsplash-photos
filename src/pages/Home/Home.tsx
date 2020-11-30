import React, { useEffect } from 'react';
import { Content } from '../../components/Content';
import { PhotosList } from '../../components/PhotosList';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { unsplash } from '../../utils/unsplash';
import { toJson } from 'unsplash-js';
import { setToken } from '../../store/actions';

export function Home() {
  const token = useSelector<RootState, string>(state => state.token);
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
          })
          .catch((error: Error) => {
            console.log(error);
          });
      }
    }
  }, [token]);

  return (
    <Content>
      <h1>Лента</h1>
      <PhotosList/>
    </Content>
  );
}
