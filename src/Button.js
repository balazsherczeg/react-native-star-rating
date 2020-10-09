import React, {useCallback} from 'react';
import {bool, func, number} from 'prop-types';
import {Rect} from 'react-native-svg';

const Button = ({
  id,
  onRate,
  readOnly,
  size,
  startAnimation,
}) => {
  if (!readOnly) {
    const handleRate = useCallback(
      () => {
        onRate(id);
        startAnimation();
      },
      [id],
    );

    return (
      <Rect
        x="0"
        y="0"
        width={size}
        height={size}
        fill="none"
        onPress={handleRate}
        accessibilityRole="button"
      />
    );
  }

  return null;
};

Button.propTypes = {
  id: number.isRequired,
  onRate: func.isRequired,
  size: number.isRequired,
  startAnimation: func.isRequired,
  readOnly: bool.isRequired,
};

export default Button;
