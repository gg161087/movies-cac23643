const API = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyM2E0MGFmYmUxMTI3NDNiYTczZDk4NTA1MjIzYiIsInN1YiI6IjY1MDFjODk2ZmZjOWRlMGVkZWQ0YjgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWePtKz5AYPQEnFo3-YhQ-ZCik2vR0qDW3ZigDUxSbI';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
    }
};

export const getDynamic = async(path) => {
    try {
        const response = await fetch(API + path, options);
        const data = await response.json();              
        return data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}