import React from 'react';
import Button from './button';
import TodoLink from './todo-link';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  filtered: React.PropTypes.bool,
  onClickDelete: React.PropTypes.func,
  onClickTodo: React.PropTypes.func,
  status: React.PropTypes.string,
  text: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  filtered: false,
  onClickDelete: noop,
  onClickTodo: noop,
  status: '',
  text: '',
};

/**
 * Todo component
 * @returns {ReactElement}
 */
const Todo = ({ filtered, onClickDelete, onClickTodo, onClickArchive, archive, status, text }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo--status-complete' : '')
    + (filtered ? ' todo--filtered' : '');

  const checked = () => (status === 'complete' ? true : false)

  // return (
  //   <div className={todoCls}>
  //   <div className="checkbox">
  //     <input type="checkbox" checked={checked()} onChange={onClickTodo}/>
  //     <span className="checkmark"/>
  //   </div>
  //     <TodoLink text={text} status={status} onClick={onClickTodo}/>
  //     <span className="close hairline"/>
  //   </div>
  // );

  return (
    <div className={todoCls}>
      <input type="checkbox" checked={checked()} onChange={onClickTodo}/>
      <TodoLink text={text} status={status} archive={archive} onClickTodo={onClickTodo} onClickArchive={onClickArchive}/>
      <Button text="Delete" onClick={onClickDelete} />
    </div>
  );
}

Todo.propTypes = propTypes;
Todo.defaultProps = defaultProps;

export default Todo;
