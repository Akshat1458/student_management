import { display } from "../service/api.js";
import { react, useEffect, useState } from "react";
import Editstud from "./editstud.js";
import {Link} from 'react-router-dom';
import { Alert } from "bootstrap";
import img from "../assets/images/dp1.jpg";
// import { TableCell, TableHead, TableRow } from "@mui/material";

function Allstud(){
    const [students, setstudents] = useState([]);
    useEffect(() => {
        getstud();
    }, []);
    const getstud=async ()=>{
        const response =await display();
        // console.log('ajs');
        // console.log(response.data);
        setstudents(response.data);
    };
    const img="dp1.jpg";
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>roll no</th>
                <th>class</th>
            </tr>
            </thead>
            <tbody>
            {   
                
                students.map((s)=>{
                    const image=require("../assets/images/"+s.img);
                    return(<tr key={s._id}>
                        <td>{s.name}</td>
                        <td>{s.roll_no}</td>
                        <td>{s.class}</td>
                        <td><img src={image} alt={"..."} style={{width:"40px", height:"40px"}}/></td>
                        <td><Link to={`/edit/${s._id}`}><button >EDIT</button></Link></td>
                        
                    </tr>)
                    
                })
            }
            </tbody>
        </table>
    );
}
export default Allstud;
