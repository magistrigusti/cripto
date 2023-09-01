
import axios from 'axios';

const url = import.meta.env.VITE_URL_API;
const key = import.meta.env.VITE_KEY_API;

export const getCoins = async () => {
  const options = {
    headers: {
      'Component-Type': 'appication/json',
      'x-access-token': key,
    },
  };
  
  try {
    const response = await axios.get(url + '/coins', options);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
}