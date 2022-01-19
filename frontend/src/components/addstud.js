import {react,useState} from 'react';
import {addstud} from '../service/api.js';
import {useNavigate, Link} from 'react-router-dom';

const initial={
    name:'',
    roll_no:'',
    cls:'',
    img:''
};

const Addstud=()=>{
    const [stud, setstud] = useState(initial);
    const {name, roll_no, cls}=stud;
    const navigate=useNavigate();
    const onValueChange=(e)=>{
        setstud({...stud,[e.target.name]:e.target.value});
        console.log(stud);
    }
    const onChangeFile=(e)=>{
        setstud({...stud,[e.target.name]:e.target.files[0]});
    }
    const add= async ()=>{
        // navigate(`/all`);
        const formData= new FormData();
        formData.append("name",stud.name);
        formData.append("roll_no",stud.roll_no);
        formData.append("class",stud.class);
        formData.append("img",stud.img);

        addstud(formData);
        navigate(`/all`);
    }
    return (
        <form encType='multipart/form-data'>
            <label>Name:</label>
            <input type='text' name="name" onChange={(e)=>onValueChange(e)}></input>
            <label>Roll_no:</label>
            <input type='text' name="roll_no" onChange={(e)=>onValueChange(e)}></input>
            <label>Class:</label>
            <input type='text' name="class" onChange={(e)=>onValueChange(e)}></input>
            <input type='file' name="img" onChange={(e)=>onChangeFile(e)}></input>
            <button type='button' onClick={()=> add()}>SUBMIT</button>
        </form>
    );
}

export default Addstud;