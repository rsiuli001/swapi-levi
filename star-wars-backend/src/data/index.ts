import axios from 'axios';

export const fetchFromUrl = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};
