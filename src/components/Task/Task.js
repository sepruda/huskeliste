import React from 'react';
import {SortableElement} from 'react-sortable-hoc';

const Task = SortableElement(({tekst, deleteTask, opgaveid }) => { 
        return (
            <li className='list-group-item'>
                {tekst}       
                <button
                    onClick={() => {deleteTask(opgaveid)}}
                    className='btn btn-danger float-right'
                >slet</button>
            </li>
        )});

export default Task;