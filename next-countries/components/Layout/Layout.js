import NavBar from "../Header/NavBar";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Layout = ({children}) => {
    const {theme} = useContext(ThemeContext)
    return (
        <div>
            <NavBar/>
            {children}
        </div>
    );
}

export default Layout;