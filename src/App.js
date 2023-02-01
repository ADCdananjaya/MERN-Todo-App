import React, { Component } from "react";
import Todos from "./components/todos";

class App extends Component {
  state = { 
    dos: [
      {
        id: 0,
        title: "chamod dananjaya",
        description: "i'm from kaduwela. this is the description..",
        isDone: false,
        isUpdating: false,
      },
      {
        id: 1,
        title: "luifer devon",
        description: "i'm from kaduwela. this is the description..",
        isDone: false,
        isUpdating: false,
      },
      {
        id: 2,
        title: "tharushika kitulagoda",
        description: "i'm from kaduwela. this is the description..",
        isDone: false,
        isUpdating: false,
      },
      {
        id: 3,
        title: "john hammed",
        description: "i'm from kaduwela. this is the description..",
        isDone: false,
        isUpdating: false,
      },
      {
        id: 4,
        title: "network chuck",
        description: "none",
        isDone: false,
        isUpdating: false,
      },
      {
        id: 5,
        title: "beast meats food",
        description: "none",
        isDone: false,
        isUpdating: false,
      },
      {
        id: 6,
        title: "Kasun",
        description: "none",
        isDone: false,
        isUpdating: false,
      },
    ] 
  } 
  render() { 
    return (
      <div>
        <Todos dos={this.state.dos} isDone={this.checkItsDone} onDelete={this.handleDelete} onAdd={this.handleAdd} onUpdate={this.setUpdate} getUpdate={this.getUpdate}/>
      </div>
    );
  }

  checkItsDone = id => {
    const dos = this.state.dos.map(d => {
      if (d.id === id) { 
        d.isDone = true;
      }
      return d;
    });

    this.setState({ dos });
  }

  handleDelete = id => {
    const dos = this.state.dos.filter(d => !(d.id === id));
    this.setState({ dos });
  }

  handleAdd = (data) => {
    const obj = Object.fromEntries(data.entries());
    const dos = [...this.state.dos];

    dos.push({
      id: dos.length,
      title: obj.title,
      description: obj.description,
      isDone: false,
      isUpdating: false,
    })

    this.setState({ dos });
  }

  setUpdate = (id, data) => {
    const obj = Object.fromEntries(data.entries());

    const dos = this.state.dos.map( item => {
      if (item.id === id) {
        item.title = obj.title;
        item.description = obj.description;
      }
      return item;
    });

    this.setState({ dos });
  }

  getUpdate = id => {
    const dos = this.state.dos.map( item => {
      if (item.id === id) 
        item.isUpdating = true;
      else 
        item.isUpdating = false

      return item;
    });

    this.setState({ dos })
    console.log(this.state.dos)
  }

}

export default App;