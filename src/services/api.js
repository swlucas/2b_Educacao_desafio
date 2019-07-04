import axios from 'axios';
import md5 from 'crypto-js/md5';

const PUBLIC_KEY = 'cacbd73e61134d2e2e15577ecb1599f7';
const PRIVATE_KEY = '4928a5e4354deee8c7704a3a4758e2fba4e9642a';
const timestamp = Number(new Date());
const hash = md5(timestamp + PRIVATE_KEY + PUBLIC_KEY);
const limit = 30;

const api = axios.create({
  baseURL: `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&limit=${limit}&apikey=${PUBLIC_KEY}&hash=${hash}`,
});

export default api;
