import axios from 'axios';

const url="http://localhost:5000/user";

export const display=async (id)=>{
    id=id || '';
    return await axios.get(`${url}/${id}`);
}

export const addstud= async (stud)=>{
    return await axios.post(`${url}/add`,stud);
}

export const search = async (s)=>{
    return await axios.post(`${url}/search`,s);
}
