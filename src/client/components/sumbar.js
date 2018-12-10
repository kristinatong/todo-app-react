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
const Sumbar = () => {
  /**
   * Base CSS class
   */
  const baseCls = 'sumbar'

  return (
    <div className={baseCls}>
    summary bar
    </div>
  );
}

Sumbar.propTypes = propTypes;
Sumbar.defaultProps = defaultProps;

export default Sumbar;
