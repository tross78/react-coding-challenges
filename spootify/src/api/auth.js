// auth.js
import axios from 'axios';
import config from '../config';

export async function getAccessToken() {
  const { authUrl, clientId, clientSecret } = config.api;

  const auth = {
    username: clientId,
    password: clientSecret,
  };

  const response = await axios.post(authUrl, 'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth,
  });

  return response.data.access_token;
}
