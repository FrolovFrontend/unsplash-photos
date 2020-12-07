import Unsplash from 'unsplash-js';

// const KEY_LOCAL = 'n4za6t_uSAlEkNb98ZfAJBeiuIzgNXFYYYJ3WcBMPgs';
// const SECRET_LOCAL = 'bFUsl1mCb7sISrCohc5Ro7BdfIokxs62TBtikoZpWfw';

const KEY_PROD = 'taaUgbLbHNSqKLvbiHacy0K2FRLFb1ugm5ufzL1cWyQ';
const SECRET_PROD = 'YqMZsywzNYUJRLn5pngnQhEc4hYpwdJPnlrEYRlxEn4';

export const unsplash = new Unsplash({
  accessKey: KEY_PROD,
  secret: SECRET_PROD,
  callbackUrl: 'https://unsplash-photos.vercel.app/auth', // PROD
  // callbackUrl: 'http://localhost:3000/auth', // LOCAL
  timeout: 1000,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);
