import React from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';

const Task = (props) => (
            <li className='list-group-item'>
                {props.tekst}       
                <button
                    onClick={() => {props.deleteTask(props.opgaveid)}}
                    className='btn btn-danger float-right'
                >slet</button>
            </li>
        );

export default Task;