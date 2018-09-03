import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const Task = SortableElement(props =>  
        (
            <li className='list-group-item'>
                <span onClick={() => props.taskFinished(props.opgaveid)}>
                    
                {props.completed ? (
                    <del className='text-muted'>{props.tekst}</del>
                ) : (
                    <span>{props.tekst}</span>
                )}
                </span>
                
                <button
                    onClick={() => {props.deleteTask(props.opgaveid)}}
                    className='btn btn-danger float-right'
                >slet</button>
            </li>
        ));

export default Task;