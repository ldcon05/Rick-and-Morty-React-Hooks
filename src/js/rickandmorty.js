import { get } from 'axios'

const baseUrl = 'https://rickandmortyapi.com/api/';

const getCharacters = async (page) => {
    const { data } = await get(`${baseUrl}character/?page=${page}`);
    return await data;
}

export { getCharacters }