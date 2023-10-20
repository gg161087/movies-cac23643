import axios from 'axios';

const API = 'https://api.themoviedb.org/3';
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyM2E0MGFmYmUxMTI3NDNiYTczZDk4NTA1MjIzYiIsInN1YiI6IjY1MDFjODk2ZmZjOWRlMGVkZWQ0YjgzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iWePtKz5AYPQEnFo3-YhQ-ZCik2vR0qDW3ZigDUxSbI';

const options = {
    method: 'GET',
    headers: {        
        Authorization: `Bearer ${TOKEN}`,  
        'Content-Type': 'application/json;charset=utf-8',
    }
};

export const getDynamic = async(path) => {
    try {  
        const response = await axios(API + path, options);               
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}