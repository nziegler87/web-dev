import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({_id:'', do:'', done: false});
    const dispatch = useDispatch();

    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }

    const deleteTodoClickHandler = (todo) =>{
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);
    }

    const createTodoClickHandler = () => {
        const action = {
            type: 'create-todo',
            todo
        };
        dispatch(action);
    }

    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do:doValue
        };
        setTodo(newTodo);
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className={"d-flex"}>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        placeholder={"To add a todo, type here"}
                        className="form-control me-5"/>
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary text-nowrap">
                        Create New Todo
                    </button>
                    </div>
                </li>
                {
                    todos.map(todo =>
                        <li className="list-group-item">
                            <input checked={todo.done}
                                   onChange={(event) =>
                                       updateTodoClickHandler({...todo, done: event.target.checked})}
                                   type={"checkbox"}
                                   className={"me-2"}
                            />
                            {todo.do}
                            <button onClick={() => deleteTodoClickHandler(todo)}
                                    className={"btn btn-danger float-end"}>
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    );
};

export default Todos;