import React from 'react';
import { Link } from 'react-router';

import { api, getApiPromise } from '../helpers/api';
import Button from './button';
import Navbar from './navbar';
import TodoForm from './todo-form';
import TodoLink from './todo-link';
import Todos from './todos';
import Sumbar from './sumbar';  //KT: add summary bar

/**
 * TodosPage component
 * @class
 */
class TodosPage extends React.Component {
  /**
   * Base CSS class
   * @static
   */
  static baseCls = 'todos-page'

  /**
   * Prop types
   * @static
   */
  static propTypes = {
    params: React.PropTypes.object,
  };

  /**
   * Constructor
   * @constructor
   *
   * @param  {object} props - Props
   */
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      filterBy: props.params.filter,
    };

    this.addTodo = this.addTodo.bind(this);
    this.postTodo = this.postTodo.bind(this);
    this.setFilterBy = this.setFilterBy.bind(this);
    this.updateTodos = this.updateTodos.bind(this);
    this.onClickComplete = this.onClickComplete.bind(this); /*KT add summary bar*/
    this.updateSingleTodo = this.updateSingleTodo.bind(this) /*KT update PUT response todo*/
  }

  /**
   * Component did mount
   */
  componentDidMount() {
    api('GET', null, this.updateTodos);
  }

  /**
   * Add todo
   *
   * @param  {string} text - Todo text
   */
  addTodo(text) {
    if (!text) {
      return;
    }

    api('POST', { text }, this.postTodo);
  }

  /**
   * Posts new todo to the todos collection
   *
   * @param  {object} json - Resulting JSON from fetch
   */
  postTodo(json) {
    this.setState({
      todos: [...json],
    });
  }

  /**
   * Set filterBy state
   *
   * @param {string} filterBy - filterBy state
   */
  setFilterBy(filterBy) {
    this.setState({ filterBy });
  }

  /**
   * Update todos array state
   *
   * @param  {Array} todos - Array of todo objects
   */
  updateTodos(todos) {
    this.setState({ todos });
  }

  updateSingleTodo(todo){
    let index = this.state.todos.findIndex(el => el.id === todo.id)
    debugger
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        todo,
        ...this.state.todos.slice(index + 1),
      ]
    })
  }

  /*KT Begin: add summary bar*/
  onClickComplete() {
    const updateTodos = [...this.state.todos.filter(todo => todo.status !== 'complete')]
    updateTodos.map(todo => {
      todo.status = 'complete'
      api('PUT', todo, this.updateSingleTodo)
    })
  }
  /*KT End: add summary bar*/

  /**
   * Render
   * @returns {ReactElement}
   */
  render() {
    console.log('todos-page state', this.state) //kt
    return (
      <div className={this.baseCls}>
        <Navbar filterBy={this.state.filterBy} onClickFilter={this.setFilterBy} />

        <Sumbar onClickComplete={this.onClickComplete} active={this.state.todos.filter(todo => todo.status === 'active')}/> {/*KT: add summary bar*/}

        <TodoForm onSubmit={this.addTodo} />

        <Todos
          filterBy={this.state.filterBy}
          todos={this.state.todos}
          updateTodos={this.updateTodos}
        />
      </div>
    );
  }
}

export default TodosPage;
