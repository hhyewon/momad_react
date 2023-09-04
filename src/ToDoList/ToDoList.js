import Button from "../component/Button";
import styles from "../App.module.css";
import { useState, useEffect } from "react";


function Hello() {
    function byeFn() {
        console.log("bye");
    }

    function hiFn() {
        console.log("Im here");
        return byeFn;
    }

    useEffect(() => {
        // component 가 생성될 때
        console.log("create");
        // component 가 없어질 때
        return () => console.log("destroyed")
    }, []);

    return <h1>Hello</h1>
}

function ToDoList() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();

        if (!!!toDo) return;

        // 현재 State로 받아와서 새로운 array로 return
        setTodos((currentArray) => [toDo, ...currentArray]); // 초기화 되기 전 값
        // setTodos([toDos, ...toDos]);

        setTodo("");
    };

    return (
        <div>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Write your to do ..."
                    value={toDo}
                    onChange={onChange}
                />
                <button>Add To Do</button>
            </form>
            <hr/>
            <ul>
                {toDos.map((item, index) =>
                    <li key={index}>
                        {item}
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;
