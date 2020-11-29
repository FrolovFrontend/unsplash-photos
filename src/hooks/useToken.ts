import { useEffect, useState } from 'react';
import { toJson } from 'unsplash-js';
import { unsplash } from '../utils/unsplash';

export function useToken() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const code = location.search.split('code=')[1];

    if (code) {
      unsplash.auth
        .userAuthentication(code)
        .then(toJson)
        .then((json: any) => {
          unsplash.auth.setBearerToken(json.access_token);
          setToken(json.access_token);
        })
        .catch((error: Error) => {
          console.log(error);
        });
    }
  }, [token]);

  return [token];
}