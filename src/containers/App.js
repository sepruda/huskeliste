import React, { Component } from 'react';
import NewTaskInput from '../components/NewTaskInput/NewTaskInput';
import Header from '../components/Header/Header';
import TaskList from '../components/TaskList/TaskList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todo: [],
      taskCount: 0
    }
  }

  componentDidMount() {
    this.getStateFromLocalStorage();
    this.setState((prevState) => ({ taskCount: prevState.todo.length }));
  }
  

  getStateFromLocalStorage = () => {
    if (localStorage.hasOwnProperty('todo')) {
      let savedTodo = localStorage.getItem('todo');
      try {
        savedTodo = JSON.parse(savedTodo);
        this.setState({ todo: savedTodo });

      } catch (event) {
        this.setState({ todo: [] });
      }
    }
  }

  updateList = (taskText) => {
    if (taskText) {

      //Add new task to list and save in const newTodo
      const newTodo = [...this.state.todo, {opgavetekst: taskText, opgaveid: Date.now()}];

      //Update state
      this.setState({ todo: newTodo });
      this.setState((prevState) => ({ taskCount: prevState.todo.length }));

      //Update localStorage
      localStorage.setItem("todo", JSON.stringify(newTodo));
    }
  }

  deleteTask = (id) => {
    
    const newTodo = this.state.todo.filter(task => task.opgaveid !== id);
    
    this.setState({ todo: newTodo });
    this.setState((prevState) => ({ taskCount: prevState.todo.length }));

    localStorage.setItem("todo", JSON.stringify(newTodo))
  }
  
  render() {
    return (
      
      <div className='container'>
        <div className="App jumbotron">
            <Header taskCounter={this.state.taskCount}/>
            <NewTaskInput opdaterListe={this.updateList} />
            <TaskList 
              opgaveliste={this.state.todo}
              fjernOpgave={this.deleteTask}
            />
          </div>
      </div>
    );
  }
}

export default App;
