import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { ThemeContext } from "../contexts/ThemeContext"

export default function Heading() {
    const { user } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <div className="heading">
            <p>
                Welcome, {user.name}, &nbsp;
                <a href="#" onClick={() => { setUser(null) }}>Log out</a>
            </p>
            <hr/>
            <p>Switch theme here</p>
            <select onChange={(e) => {
                setTheme(e.target.value)
            }}>
                <option value="light">Light blue</option>
                <option value="dark">Dark green</option>
            </select>
            <hr/>
        </div>
    );
}