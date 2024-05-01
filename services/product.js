import http from './http/http';
const BASE_ENDPOINT = '/products';

export const getAllProducts = (params) => {

	return http.get(`${BASE_ENDPOINT}/getJson`,{params});
};

export const getFilters = () => {

	return http.get(`${BASE_ENDPOINT}/filters`);
};