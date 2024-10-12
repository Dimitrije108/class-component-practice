/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: ['Just some demo tasks', 'As an example'],
      inputVal: '',
      editIndex: null,
      editVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditInput = this.handleEditInput.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      todos: state.todos.concat(state.inputVal),
      inputVal: '',
    }));
  }

  handleDel(e) {
    const delItem = e.target.id
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter(item => item !== delItem)
    }));
  }

  handleEdit(e) {
    const selected = e.target.id;
    this.setState((state) => ({
      ...state,
      editIndex: state.todos.indexOf(selected),
      editVal: selected,
    }));
  }

  handleEditInput(e) {
    this.setState((state) => ({
      ...state,
      editVal: e.target.value,
    }));
  }

  handleResubmit(e) {
    e.preventDefault();

    this.setState((state) => {
      const newTodos = [...state.todos]
      newTodos[state.editIndex] = state.editVal;

      return {
        ...state,
        todos: newTodos,
        editIndex: null,
        editVal: '',
      }
    });
  }

  render() {
    return (
      <section>
        {/* eslint-disable-next-line react/prop-types */}
        <h3>{this.props.name}</h3>
        {/* The input field to enter To-Do's */}
        <form onSubmit={this.handleSubmit}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <Count count={this.state.todos.length} />
        {/* The list of all the To-Do's, displayed */}
        <ul>
          {this.state.todos.map((todo) => (
            this.state.todos.indexOf(todo) === this.state.editIndex ? (
              <form key={todo} onSubmit={this.handleResubmit}>
                <input
                  value={this.state.editVal}
                  onChange={this.handleEditInput}
                />
                <button type="submit">Resubmit</button>
              </form>
            ) : (
              <li key={todo}>
                {todo}
                <button id={todo} onClick={this.handleEdit}>Edit</button>
                <button id={todo} onClick={this.handleDel}>X</button>
              </li>
            )
          ))}
        </ul>
      </section>
    );
  }
}

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Count: {this.props.count}</div>
    )
  }
}

export default ClassInput;