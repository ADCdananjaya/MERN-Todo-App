import Todo from "./todo";
import hero from "../images/hero2.png";
import InsertSection from "./insert";

const Todos = (props) => {
    return ( 
        <div className="w-full h-screen flex bg-gray-900 items-center">
            <img src={hero} alt="hero image" className="w-3/5 h-4/5 "/>
            <div className="flex flex-col items-center w-full h-full py-8">
                <p className="text-cyan-400 font-serif text-9xl hover:text-cyan-500">Todo List</p>
                <InsertSection onAdd={props.onAdd} onUpdate={props.onUpdate} setUpdate={props.dos.filter(item => item.isUpdating == true)}/>
                <div className="grid grid-cols-4 gap-3 mt-5">
                    {props.dos.map(dos => <Todo key={dos.id} todo={dos} isDone={props.isDone} onDelete={props.onDelete} getUpdate={props.getUpdate}/>)}
                </div>
            </div>
        </div>
     );
}
 
export default Todos;