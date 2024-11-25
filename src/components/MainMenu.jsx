import { NavLink } from "react-router-dom";
export default function MainMenu() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/ChiSiamo">Info</NavLink>
            <NavLink to="/ListPOst">List</NavLink>
        </nav>
    )
}