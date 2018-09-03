import React from 'react';
import Task from '../Task/Task';
import {SortableContainer} from 'react-sortable-hoc';


const TaskList = SortableContainer(props => {
        
        return (
            <ul className='list-group rounded'>
                {props.opgaveliste.map((opgave, index) => (
                    <Task 
                        key={opgave.opgaveid}
                        completed={opgave.completed}
                        tekst={opgave.opgavetekst}
                        index={index}
                        opgaveid={opgave.opgaveid}
                        deleteTask={props.fjernOpgave}
                        taskFinished={props.taskFinished}
                    />
                ))}   
            </ul>
        );
});

export default TaskList;