import React, { Component } from 'react';
import Task from '../Task/Task';


class TaskList extends Component {
    
    render () {
        return (
            
            <ul className='list-group'>
                {this.props.opgaveliste.map((opgave, index) => (
                    <Task 
                        key={opgave.opgaveid}
                        tekst={opgave.opgavetekst}
                        opgaveid={opgave.opgaveid}
                        deleteTask={this.props.fjernOpgave}
                    />
                    ))
                }   
            </ul>
        )
    }
}

export default TaskList;