import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";
import Color from "../HOC/Color";
class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing Bugs" },
    ],
    edittodo: {},
  };
  addNewTodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodos;
    currentTodos = currentTodos.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: currentTodos,
    });
    toast.error("Xóa Thành Công");
  };
  handleEditTodo = (todo) => {
    let { edittodo, listTodos } = this.state;

    let isEmptObj = Object.keys(edittodo).length === 0;

    if (isEmptObj === false && edittodo.id === todo.id) {
      let listTodosCopy = [...listTodos];

      let objIndex = listTodosCopy.findIndex((item) => item.id === todo.id);

      listTodosCopy[objIndex].title = edittodo.title;

      this.setState({
        listTodos: listTodosCopy,
        edittodo: {},
      });

      toast.success("Cập NhậtThành Công");
      return;
    }
    this.setState({
      edittodo: todo,
    });
  };
  handleOnChangeEditTodo = (event) => {
    let editTodoscopy = { ...this.state.edittodo };
    editTodoscopy.title = event.target.value;
    this.setState({
      edittodo: editTodoscopy,
    });
  };
  render() {
    let { listTodos, edittodo } = this.state;
    let isEmptObj = Object.keys(edittodo).length === 0;

    return (
      <>
        <p> Simple Todo Apps From React With( Kiều &amps Anh Đức)</p>
        <div className="list-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {edittodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={edittodo.title}
                              onChange={(event) => {
                                this.handleOnChangeEditTodo(event);
                              }}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => {
                        this.handleEditTodo(item);
                      }}
                    >
                      {isEmptObj === false && edittodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>

                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      Delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default Color(ListTodo);
