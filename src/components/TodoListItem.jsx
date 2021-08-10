import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext'
import { ThemeContext } from "../contexts/ThemeContext"

function TodoListItem({ todo, deleteTodo }) {

    const { user, setUser } = useContext(UserContext);
    const { theme, setTheme } = useContext(ThemeContext)

    const mine = todo.user === user.id;
    return(
        <li className={mine ? theme : "" }>
            {todo.done ? "✓ " : "○ "}
            {todo.text} 
            {mine &&
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
            }
        </li>
    );
}

export default TodoListItem;