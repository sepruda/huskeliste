import React, { Component } from 'react';
import NewTaskInput from '../components/NewTaskInput/NewTaskInput';
import Header from '../components/Header/Header';
import TaskList from '../components/TaskList/TaskList';
import './App.css';
import SimpleStorage from 'react-simple-storage';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todo: []
    }
  }  

  updateList = (taskText) => {
    this.setState(prevState => ({
      todo: [...prevState.todo, {opgavetekst: taskText, opgaveid: Date.now()}]
    }))

  }

  deleteTask = (id) => {
    this.setState(prevState => ({
      todo: prevState.todo.filter(task => task.opgaveid !== id)
    }))
  }
  
  render() {

    return (
      
      <div className='container'>
        <div className="App jumbotron">
            <SimpleStorage parent={this} prefix={ 'Huskeliste'}/>
            <Header />
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
