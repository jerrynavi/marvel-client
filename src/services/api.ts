import axios from 'axios';
import { DataContainer } from '../interfaces/data-container';
import { Comic } from '../interfaces/comic';

const API_KEY = '919xxxxxxxxxxxxxxxxxxxxxxxxxx'; // REPLACE THIS WITH YOUR KEY

const api = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use((response) => {
    if (response.status === 200) {
        return response.data.data;
    }
});

export function getComics(): Promise<DataContainer<Comic>> {
    return api.get('/comics', {
        params: {
            apikey: API_KEY,
            limit: 10,
            hasDigitalIssue: true,
        },
    });
}
