import { useDispatch, useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice"

const Todos = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const removeTodoHandler = (id) => {
        dispatch(removeTodo(id));
    }
    return (
        <div className="bg-blue-200 my-2  py-2 rounded-md">
            <div id="listOfTodo" className="max-h-60 overflow-hidden overflow-y-scroll">
                {todos.map((d) => {
                    return (
                        <div key={d?.id} className="flex flex-row justify-between items-center bg-blue-400 my-1 mx-2 px-2 py-1 rounded-md capitalize">
                            <p className="text-white font-medium">{d?.text}</p>
                            <button onClick={() => { removeTodoHandler(d?.id) }} className="bg-red-600 text-white text-sm py-1 px-3 rounded-md capitalize" >x</button>
                        </div>
                    )
                })}
            </div>
            {todos.length === 0 && <div>
                <p className="text-center my-2 text-sm font-medium">List is Empty</p>
            </div>}
        </div>
    )
}

export default Todos