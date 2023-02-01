import { useState } from "react";

const InsertSection = (props) => {
  const [ inputs, setInputs ] = useState({
    title: "",
    description: ""
  })

  var handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    inputs.title = "";
    inputs.description = "";
    props.setUpdate.length != 0 ? props.onUpdate(props.setUpdate[0].id, data): props.onAdd(data)
  }

  var handleInputTitle = () => {
    if (props.setUpdate.length === 0)
      return inputs.title;
    else
      return props.setUpdate[0].title + inputs.title;
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="w-full rounded-md h-24 bg-cyan-300 mt-4 flex justify-center items-center p-10 gap-5 shadow-sm shadow-cyan-100">
      <div className="flex flex-col">
        <input
          type="text"
          name="title"
          className="bg-slate-100 border text-gray-900 text-md rounded-lg focus:ring-blue-500 block p-2.5 shadow-md"
          placeholder="Title"
          value={props.setUpdate.length === 0 ? inputs.title : props.setUpdate[0].title + inputs.title}
          onChange={e=>setInputs({[e.target.name]: e.target.value})}
          required
        />
      </div>
      <div className="flex flex-col">
        <input
          type="text"
          name="description"
          className="bg-slate-100 border text-gray-900 text-md rounded-lg focus:ring-cyan-700 focus:border-cyan-700 block p-2.5 w-80 shadow-md"
          placeholder="Description"
          value={props.setUpdate.length === 0 ? inputs.description : props.setUpdate[0].description}
          onChange={e=>setInputs({[e.target.name]: e.target.value})}
          required
        />
      </div>
      <button
        className="h-10 px-5 bg-cyan-700 hover:bg-cyan-800 text-white rounded-md shadow-md"
        type="Submit"
      >
        {props.setUpdate.length == 0 ? "Add": "Update"}
      </button>
    </div>
    </form>
  );
};

export default InsertSection;
