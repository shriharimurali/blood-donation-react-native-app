import { API_HOST } from '@env'; // eslint-disable-line

// console.log({ API_HOST });

export const HOST = API_HOST || 'http://localhost:3000';

export const API_BASE_V1 = `${HOST}/api`;

export const LOGIN = `${API_BASE_V1}/login`;
export const REGISTER = `${API_BASE_V1}/register`;
