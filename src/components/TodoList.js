import { Grid } from "@mui/material";
import React, { Component } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const api_url = "http://127.0.0.1:3000/api/v1/todos";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.updateTodoList = this.updateTodoList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.getTasks();
  }

  getTasks() {
    fetch(api_url)
      .then((response) => response.json())
      .then((response_items) => {
        this.setState({
          items: response_items.reverse(),
        });
      });
  }

  updateTodoList(item) {
    let _items = this.state.items;
    _items.unshift(item);
    this.setState({
      items: _items,
    });
  }

  deleteItem(item) {
    // delete the item remotely
    var deleteUrl = api_url + `/${item.id}`;
    fetch(deleteUrl, {
      method: "DELETE",
    }).then(() => {
      // client side delete
      var _items = this.state.items;
      var index = _items.indexOf(item);
      _items.splice(index, 1);
      this.setState({
        items: _items,
      });
    });
  }

  render() {
    console.log(this.state.items);
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TodoForm api_url={api_url} updateTodoList={this.updateTodoList} />
        </Grid>
        <Grid item xs={12} id="todo_list">
          {this.state.items.map((item) => (
            <TodoItem key={item.id} item={item} deleteItem={this.deleteItem} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default TodoList;
