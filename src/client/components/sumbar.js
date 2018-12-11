/*KT Begin: add summary bar*/
import React from 'react';

const noop = () => {};

/**
 * Prop Types
 * @private
 */
const propTypes = {
};

/**
 * Default Props
 * @private
 */
const defaultProps = {
};

/**
 * Navbar component
 * @returns {ReactElement}
 */
const Sumbar = ({active, onClickComplete}) => {
  /**
   * Base CSS class
   */
  const baseCls = 'sumbar'

  return (
    <div className={baseCls}>
      {active.length} tasks remaining
      <a onClick={onClickComplete}>Complete All</a>
    </div>
  );
}

Sumbar.propTypes = propTypes;
Sumbar.defaultProps = defaultProps;

export default Sumbar;
/*KT End: add summary bar*/
