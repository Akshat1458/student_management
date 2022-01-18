import axios from 'axios';

const url="http://localhost:5000/user";

export const display=async ()=>{
    return await axios.get(url);
}

export const addstud= async (stud)=>{
    return await axios.post(`${url}/add`,stud);
}
