import { display } from "../service/api.js";
import { react, useEffect, useState } from "react";
import Editstud from "./editstud.js";
import {Link} from 'react-router-dom';
import { Alert } from "bootstrap";
import img from "../assets/images/dp1.jpg";
import Tabledisplay from './tabledisplay.js'
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
        <Tabledisplay students={students} edit={true}/>
    );
}
export default Allstud;
