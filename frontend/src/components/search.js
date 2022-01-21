import { react, useState } from "react";
import { search } from "../service/api.js";
import Tabledisplay from "./tabledisplay.js";

function Search() {
    const [str, setstr] = useState("");
    const [result, setresult] = useState([]);
    const onValueChange = (e) => {
        setstr(e.target.value);
        // console.log(str);
    }
    const display = async () => {
        const find = {
            "str": str
        };
        const res = await search(find);
        setresult(res.data);
        console.log(result);

    }
    return (
        <form>
            <input type="text" placeholder="search..." onChange={(e) => onValueChange(e)}></input>
            <button type='button' onClick={() => display()}>SEARCH</button>
            <button type='button'>SORT</button>
            {(()=>{
                if(result.length)
                    return (<Tabledisplay students={result} edit={false}/>)
                })()
            }
        </form>
    );
}
export default Search;