import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: true,
      todos: [
        {id: "1", text: "hello"},
        {id: "2", text:"hola",},
      ],
      text: "",
    };
  }

  handleClick = () => {
    this.setState({
      isClicked: !this.state.isClicked,
    });
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (this.state.text.length === 0) return;
    this.setState({
      todos: [...this.state.todos, this.state.text],
      text: "",
    });
  };


handleDelete = (id) => {

  let copy = [ ... this.state.todos];
  const index = copy.findIndex(todo => todo.id === id)
  copy.splice(index,1)
  
  
  this.setState({
   
    todos:[... copy], 
  });


  this.setState({
    todos: copy.splice(index, 1),
  });
};



  render() {
    return (
      <>
        <h1 className="title">Todos</h1>
        <input
        className="input"
          type="text"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button className="button" onClick={this.handleAddTodo}>add todo!</button>
        <ul className="list">
          {this.state.todos.map((todo, index) => {
            console.log({todo})
            return ( 
            <li className="list-item">
              <h3>{todo.text}</h3>
              <button onClick={() => this.handleDelete(todo.id)}>X</button>
            </li>
            )
          })}
        </ul>
      </>
    );
  }
}

export default App;
