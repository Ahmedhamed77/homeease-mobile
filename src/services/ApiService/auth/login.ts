import { axios } from '../axios';
import { endpoints } from '../endpoints';
import { LoginPayload } from './types';

export const loginUser = async (payload: LoginPayload) => {
  //this has to be called before any /api/auth request, and the csrf token must be included in the request body
  const { data } = await axios.get(endpoints.csrf);
  const res = await axios.post(endpoints.login, {
    ...payload,
    //json and csrfToekn are required in the body for any none "GET" request
    json: 'true',
    csrfToken: data.csrfToken,
  });

  // this res is always gonna return appropriate responses when it comes to wrong passwords or emails, such as 401 for wrong passwords or emails,
  // 404 for user not found, and so on. a successful login will return the baseUrl, like this:
  // { url: "https://homeease.vercel.com/" }
  // But if the next-auth library didn't work such that the csrf token was missing,
  // it will return a 200 OK, and the body will be { url: "string" } which is the url of the redirect page
  // so even if it returned 200 it could be unsuccessful
  // so we can check if the url is the same as the baseUrl, if it is, then the login was successful, if not, then it wasn't
  // for eample this is a failed login response:
  // { url: "https://homeease.vercel.com/api/auth/signin?csrf=true" }, this means that the csrf token was missing either in the body or in the cookies
  // this csrf error is the same for all /api/auth requests
  // ik this is complicated and stupid, i didn't make it (:
  console.log(res);
  return res.data;
};
