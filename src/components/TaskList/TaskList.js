import React from 'react';
import Task from '../Task/Task';
import {SortableContainer} from 'react-sortable-hoc';


const TaskList = SortableContainer(props => {
        
        return (
            <ul className='list-group rounded'>
                {props.opgaveliste.map((opgave, index) => (
                    <Task 
                        key={opgave.opgaveid}
                        tekst={opgave.opgavetekst}
                        index={index}
                        opgaveid={opgave.opgaveid}
                        deleteTask={props.fjernOpgave}
                    />
                ))}   
            </ul>
        );
});

export default TaskList;