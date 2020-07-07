import React from 'react'

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            task: ''
        }
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input onChange={this.props.handleChange} type='text' name='task' value={this.props.formValues}/>
                <button type='submit'>Add</button>
            </form>
        );
    }
}


export default TodoForm;