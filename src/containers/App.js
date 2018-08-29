import React, { Component } from 'react';
import NewTaskInput from '../components/NewTaskInput/NewTaskInput';
import Header from '../components/Header/Header';
import TaskList from '../components/TaskList/TaskList';
import './App.css';
import SimpleStorage from 'react-simple-storage';

const LISTE = [
  {opgavetekst: "Fodre grisene", opgaveid: 1},
  {opgavetekst: "Pudse briller", opgaveid: 2},
  {opgavetekst: "Købe mælk", opgaveid: 3},
  {opgavetekst: "Spise flere grøntsager", opgaveid: 4},
  {opgavetekst: "Fodre hunden", opgaveid: 5}
];

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      todo: [...LISTE]
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
