'use server';
import axios from 'axios';

const URL = process.env.SERVER_URL;

export const getProductList = async () => {
  return axios.get(`${URL}/api/shop/product/`).then((res) => res.data);
};
