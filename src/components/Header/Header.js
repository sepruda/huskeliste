import React from 'react';

const Header = (props) => (
<header className='header'>
    <h1 className='display-4'>Huskeliste</h1>
    <h2>opgaver: {props.taskCounter}</h2>
</header>
)


export default Header;