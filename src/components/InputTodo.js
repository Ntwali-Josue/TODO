import React from 'react';

class InputTodo extends React.Component {
  
  state = {
    title: ""
  }

  onChange = e => {
    this.setState({
      title: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add a Task..." value={this.state.title} onChange={this.onChange}/>
        <button>Submit</button>
      </form>
    )
  }
}

export default InputTodo;
