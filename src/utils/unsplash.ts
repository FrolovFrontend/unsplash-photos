import Unsplash from 'unsplash-js';

const KEY_ONE = 'n4za6t_uSAlEkNb98ZfAJBeiuIzgNXFYYYJ3WcBMPgs';
const SECRET_ONE = 'bFUsl1mCb7sISrCohc5Ro7BdfIokxs62TBtikoZpWfw';

// const KEY_TWO = 'taaUgbLbHNSqKLvbiHacy0K2FRLFb1ugm5ufzL1cWyQ';
// const SECRET_TWO = 'YqMZsywzNYUJRLn5pngnQhEc4hYpwdJPnlrEYRlxEn4';

export const unsplash = new Unsplash({
  accessKey: KEY_ONE,
  secret: SECRET_ONE,
  callbackUrl: 'http://localhost:3000/auth',
  timeout: 10000,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);