import { display } from "../service/api.js";
import { react, useEffect, useState } from "react";
import Editstud from "./editstud.js";
// import { TableCell, TableHead, TableRow } from "@mui/material";

// let students=[];
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
                students.map((s)=>(
                    <tr>
                        <td>{s.name}</td>
                        <td>{s.roll_no}</td>
                        <td>{s.class}</td>
                        <td><button>EDIT</button></td>
                        <td><button>DELETE</button></td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}
export default Allstud;
