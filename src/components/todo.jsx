const Todo = (props) => {
    return ( 
        <div className={!props.todo.isDone ? "w-48 h-32 bg-cyan-300 shadow-md border rounded-md flex flex-col justify-between px-3" : "w-48 h-32 bg-cyan-300 shadow-md border rounded-md flex flex-col justify-between px-3 opacity-30"}> 
            <p className="font-sans text-gray-900 font-semibold text-lg">{props.todo.title.charAt(0).toUpperCase() + props.todo.title.slice(1)}</p>
            <p className="font-sans text-gray-800">{props.todo.description}</p>
            <div className="flex flex-row gap-3">
                <button onClick={() => props.isDone(props.todo.id)}>Done</button>
                <button onClick={() => props.getUpdate(props.todo.id)}>Update</button>
                <button onClick={() => props.onDelete(props.todo.id)}>Delete</button>
            </div>
        </div>
    );
}

export default Todo;