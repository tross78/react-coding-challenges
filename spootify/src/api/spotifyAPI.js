// spotifyAPI.js
import axios from 'axios';
import config from '../config';
import { getAccessToken } from './auth';

let accessToken;

async function ensureToken() {
  if (!accessToken) {
    accessToken = await getAccessToken();
  }
}

export const fetchNewReleases = async () => {
  await ensureToken();
  return axios.get(`${config.api.baseUrl}/browse/new-releases`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    }
  });
}

export const fetchFeaturedPlaylists = async () => {
    await ensureToken();
    return axios.get(`${config.api.baseUrl}/browse/featured-playlists`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
  }

export const fetchCategories = async () => {
    await ensureToken();
    return axios.get(`${config.api.baseUrl}/browse/categories`, {
        headers: {
        'Authorization': `Bearer ${accessToken}`,
        }
    });
}