import Unsplash from 'unsplash-js';

export const unsplash = new Unsplash({
  accessKey: 'n4za6t_uSAlEkNb98ZfAJBeiuIzgNXFYYYJ3WcBMPgs',
  secret: 'bFUsl1mCb7sISrCohc5Ro7BdfIokxs62TBtikoZpWfw',
  callbackUrl: 'http://localhost:3000/auth',
  timeout: 10000,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);