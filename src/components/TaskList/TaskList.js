import React from 'react';
import Task from '../Task/Task';
import {SortableContainer} from 'react-sortable-hoc';


const TaskList = SortableContainer(({opgaveliste, fjernOpgave})=> {
        
        return (
            <ul className='list-group'>
                {opgaveliste.map((opgave, index) => (
                    <Task 
                        key={opgave.opgaveid}
                        tekst={opgave.opgavetekst}
                        index={index}
                        opgaveid={opgave.opgaveid}
                        deleteTask={fjernOpgave}
                    />
                    ))
                }   
            </ul>
        )
});

export default TaskList;