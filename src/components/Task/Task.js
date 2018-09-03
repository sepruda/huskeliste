import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const Task = SortableElement(props =>  
        (
            <li className='list-group-item'>
                <span>{props.tekst}</span>
                <button
                    onClick={() => {props.deleteTask(props.opgaveid)}}
                    className='btn btn-danger float-right'
                >slet</button>
            </li>
        ));

export default Task;