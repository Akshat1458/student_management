import { react, useState, useEffect } from "react";
import { search } from "../service/api.js";
import Tabledisplay from "./tabledisplay.js";

function Search() {
    const [str, setstr] = useState("");
    const [result, setresult] = useState([]);
    const onValueChange = (e) => {
        setstr(e.target.value);
    }
    
    const display = async () => {
        const find = {
            "str": str
        };
        const res = await search(find);
        setresult(res.data);
    }
    const sortbyname=()=>{
        let res=[...result].sort((a,b)=>{
            let fa=a.name.toLowerCase(),
                fb=b.name.toLowerCase();
            if(fa<fb)
                return -1;
            if(fa>fb)
                return 1;
            return 0;
        });
        setresult(res);
        console.log(result);
    }
    const sortbyroll=()=>{
        let res=[...result].sort((a,b)=>{
            return a.roll_no-b.roll_no;
        });
        setresult(res);  
    }
    return (
        <form>
            <input type="text" placeholder="search..." onChange={(e) => onValueChange(e)}></input>
            <button type='button' onClick={() => display()}>SEARCH</button>
            <button type='button' onClick={()=>sortbyname()}>SORT by name</button>
            <button type='button' onClick={sortbyroll}>SORT by roll no</button>
            <Tabledisplay students={result} edit={false}/>
        </form>
    );
}
export default Search;