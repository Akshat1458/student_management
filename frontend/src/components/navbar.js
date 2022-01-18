import { NavLink } from "react-router-dom";
function Navbar(){
    return(
        <div>
            <NavLink to="./">Home</NavLink>
            <NavLink to="all">All students</NavLink>
            <NavLink to="add">Add students</NavLink>
            <NavLink to="search">Search</NavLink>

        </div>
        

    );
}

export default Navbar;