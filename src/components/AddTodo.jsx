import { useDispatch } from "react-redux"
import { addTodo } from "../features/todo/todoSlice"
import { useState } from "react";
import Todos from "./Todos";

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="bg-blue-300 p-4 rounded-md">
                <p className="text-center my-2 text-3xl font-medium">AddTodo</p>
                <form onSubmit={addTodoHandler}>
                    <div className="flex justify-between items-center gap-4">
                        <input type="text" placeholder="add todo" className="rounded-md px-2 h-10" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" className="bg-blue-600 text-white px-4 rounded-md capitalize h-10" >add</button>
                    </div>
                </form>
                <Todos />
            </div>
        </div>
    )
}

export default AddTodo