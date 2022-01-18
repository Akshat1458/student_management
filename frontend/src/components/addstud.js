import {react,useState} from 'react';
import {addstud} from '../service/api.js';
import {useNavigate, Link} from 'react-router-dom';

const initial={
    name:'',
    roll_no:'',
    cls:''
};

const Addstud=()=>{
    const [stud, setstud] = useState(initial);
    const {name, roll_no, cls}=stud;
    const navigate=useNavigate();
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

export default Addstud;