export const endpoints = {
  login: '/api/auth/callback/credentials?',
  csrf: '/api/auth/csrf',
  session: '/api/auth/session',
  register: '/api/auth/register', // this creates a user, but doesn't log them in, revert to docs for the body of the request
  logout: '/api/auth/signout',
  email: '/api/auth/signin/email', // this sends an email with a signin button, when clicked the user sings in on the browser, however this is used for verifying the email. so after calling register, you need to call this with the user email. and the user clicks on the signin and that will verify their email, after that they can login from the login page
  checkifuserexists: '/api/auth/checkifuserexists',
  houses: 'api/houses',
};
