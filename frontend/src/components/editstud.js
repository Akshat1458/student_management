import {react,useState, useEffect} from 'react';
import {addstud} from '../service/api.js';
import {useNavigate, Link, useParams} from 'react-router-dom';
import { display } from '../service/api.js';
import axios from "axios";

const initial={
    _id:'',
    name:'',
    roll_no:'',
    cls:''
};

const Editstud=()=>{
    const [stud, setstud] = useState(initial);
    const {_id,name, roll_no, cls}=stud;
    const navigate=useNavigate();
    const id=useParams();
    useEffect(() => {
        // console.log(id);
        // loaddata();
        const dis=async ()=>{
            const data= await axios.get(`http://localhost:5000/user/${id}`);
            setstud(data.data);
            console.log(stud);
            console.log(data);
        }
        dis();
            
    },[id]);
    const loaddata=async ()=>{
        const res=await display(id);
         console.log(res.data);
        setstud(res.data);
        console.log(stud);
    }
    const onValueChange=(e)=>{
        setstud({...stud,[e.target.name]:e.target.value});
        // console.log(stud);
    }
    const add= async ()=>{
        // navigate(`/all`);
        addstud(stud);
        navigate(`/all`);
    }
    return (
        <form>
            <label>Name:</label>
            <input type='text' name="name" onChange={(e)=>onValueChange(e)}></input>
            <label>Roll_no:</label>
            <input type='text' name="roll_no" onChange={(e)=>onValueChange(e)}></input>
            <label>Class:</label>
            <input type='text' name="class" onChange={(e)=>onValueChange(e)}></input>
            <button type='button' onClick={()=> add()}>SUBMIT</button>
        </form>
    );
}

export default Editstud;