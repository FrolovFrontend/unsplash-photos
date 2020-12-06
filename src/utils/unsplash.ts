import Unsplash from 'unsplash-js';

const KEY_TWO = 'taaUgbLbHNSqKLvbiHacy0K2FRLFb1ugm5ufzL1cWyQ';
const SECRET_TWO = 'YqMZsywzNYUJRLn5pngnQhEc4hYpwdJPnlrEYRlxEn4';

export const unsplash = new Unsplash({
  accessKey: KEY_TWO,
  secret: SECRET_TWO,
  callbackUrl: 'https://unsplash-photos.vercel.app/auth',
  timeout: 1000,
});

export const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  'public',
  'write_likes',
]);
