import React from 'react';
import Button from './button';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
  onClick: React.PropTypes.func,
  text: React.PropTypes.string,
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
  onClick: noop,
  text: '',
};

/**
 * Link component
 * @returns {ReactElement}
 */
const TodoLink = ({ text, onClickTodo, onClickArchive, status, archive }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo-link';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo-link--status-complete' : '')

  return (
    <div className={baseCls}>
      <span className={todoCls} onClick={archive === false ? onClickTodo : null}>{text}</span>
      {status === 'complete' && archive === false ? <Button text="Archive" onClick={onClickArchive}/> : null }
      {archive === true ? <button className="archived" disabled>Archived</button> : null }
    </div>
  );
};

TodoLink.propTypes = propTypes;
TodoLink.defaultProps = defaultProps;

export default TodoLink;
