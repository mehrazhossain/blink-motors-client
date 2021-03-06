import axios from 'axios';

const client = axios.create({ baseURL: 'https://blinkmotors.herokuapp.com' });

export const request = ({ ...options }) => {
  client.defaults.headers.common.authorization = `Bearer ${localStorage.getItem(
    'accessToken'
  )}`;
  const onSuccess = (response) => response;
  const onError = (error) => {
    // optionally catch errors and add additional logging here
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
