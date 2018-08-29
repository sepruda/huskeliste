import React, { Component } from 'react';

class NewTaskInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input_text: ''
        }
        
    }

    handleChange = (event) => {
        this.setState({input_text: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.opdaterListe(data.get('taskText'));
        this.setState({input_text: ''});
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit} className='mb-4'>
                    <div className='row'>
                        <div className='col-8'>
                            <input 
                            type="text"
                            name='taskText'
                            placeholder='skriv ny opgave'
                            value={this.state.input_text}
                            onChange={this.handleChange}
                            className='form-control form-control-lg'
                            />
                        </div>
                        <div className='col-4'>
                            <button
                                className='btn btn-outline-primary btn-block btn-lg'> 
                                tilføj 
                            </button>  
                        
                        </div>
                    </div>
                </form>

        )
    }
}

export default NewTaskInput;