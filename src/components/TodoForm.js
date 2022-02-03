import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: props.api_url,
      task: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.formSubmit(e.target);
  }

  async formSubmit(formData) {
    var data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => this.props.updateTodoList(response));
  }

  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }

  render() {
    return (
      <div>
        <form id="todo_form" autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            id="task_input"
            type="text"
            name="todo[task]"
            label="Task Description"
            variant="outlined"
            onChange={this.handleChange}
          />
          <Button variant="contained" type="submit" color="primary">
            Add Task
          </Button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
