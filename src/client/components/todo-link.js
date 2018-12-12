import React from 'react';

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
const TodoLink = ({ text, onClick, status }) => {
  /**
   * Base CSS class
   */
  const baseCls = 'todo-link';

  const todoCls = baseCls
    + (status === 'complete' ? ' todo-link--status-complete' : '')

  return (
    <div className={todoCls} onClick={onClick}>
      {text}
    </div>
  );
};

TodoLink.propTypes = propTypes;
TodoLink.defaultProps = defaultProps;

export default TodoLink;
