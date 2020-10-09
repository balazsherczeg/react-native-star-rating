import React from 'react';
import {bool, func, number} from 'prop-types';
import {Rect} from 'react-native-svg';

const Button = ({
  onRate,
  readOnly,
  size,
}) => {
  if (!readOnly) {
    return (
      <Rect
        onPress={onRate}
        x="0"
        y="0"
        width={size}
        height={size}
        fill="none"
        accessibilityRole="button"
      />
    );
  }

  return null;
};

Button.propTypes = {
  onRate: func.isRequired,
  size: number.isRequired,
  readOnly: bool.isRequired,
};

export default Button;
