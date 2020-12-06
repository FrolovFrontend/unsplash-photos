import Unsplash from 'unsplash-js';

// const KEY_ONE = 'n4za6t_uSAlEkNb98ZfAJBeiuIzgNXFYYYJ3WcBMPgs';
// const SECRET_ONE = 'bFUsl1mCb7sISrCohc5Ro7BdfIokxs62TBtikoZpWfw';

const KEY_TWO = 'taaUgbLbHNSqKLvbiHacy0K2FRLFb1ugm5ufzL1cWyQ';
const SECRET_TWO = 'YqMZsywzNYUJRLn5pngnQhEc4hYpwdJPnlrEYRlxEn4';

export const unsplash = new Unsplash({
  accessKey: KEY_TWO,
  secret: SECRET_TWO,
  callbackUrl: 'https://unsplash-photos-3dza2ptx8.vercel.app/auth',
  timeout: 1000,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);
