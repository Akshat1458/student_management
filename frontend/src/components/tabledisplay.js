import {Link} from "react-router-dom";
function Tabledisplay(props){
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
                props.students.map((s)=>{
                    const image=require("../assets/images/"+s.img);
                    return(<tr key={s._id}>
                        <td>{s.name}</td>
                        <td>{s.roll_no}</td>
                        <td>{s.class}</td>
                        <td><img src={image} alt={"..."} style={{width:"40px", height:"40px"}}/></td>
                        {(()=>{
                            if(props.edit)
                                return (<td><Link to={`/edit/${s._id}`}><button >EDIT</button></Link></td>);
                            })()
                        }   
                    </tr>)
                })
            }
            </tbody>
        </table>
    );
}
export default Tabledisplay;