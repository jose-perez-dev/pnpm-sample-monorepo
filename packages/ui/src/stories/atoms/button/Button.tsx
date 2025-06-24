import React from 'react';
import clsx from 'clsx';

import IButtonProps from './IButton';
import styles from './Button.module.scss';

/** Primary UI component for user interaction */
function Button ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: IButtonProps): React.JSX.Element {
  return (
    <button
      type="button"
      className={clsx(
        styles['storybook-button'],
        styles[`storybook-button--${size}`],
        {
          [styles['storybook-button--primary']]: primary,
          [styles['storybook-button--secondary']]: !primary,
        },
      )}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;

