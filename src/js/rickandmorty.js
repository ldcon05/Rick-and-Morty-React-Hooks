const baseUrl = 'https://rickandmortyapi.com/api/';

const getCharacters = async (page) => {
    const response = await fetch(`${baseUrl}character/?page=${page}`);
    return await response.json();
}

export { getCharacters }

