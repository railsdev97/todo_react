import React, { Component } from "react";
import { Button, Grid, TextField } from "@mui/material";

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
    this.setState({
      task: "",
    });
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
      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={10}>
          <form id="todo_form" autoComplete="off" onSubmit={this.handleSubmit}>
            <Grid container>
              <Grid item xs={10}>
                <TextField
                  id="task_input"
                  type="text"
                  name="todo[task]"
                  label="Task Description"
                  variant="outlined"
                  onChange={this.handleChange}
                  value={this.state.task}
                  // style={{ width: "100%" }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  style={{ height: "100%" }}
                >
                  Add Task
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default TodoForm;
