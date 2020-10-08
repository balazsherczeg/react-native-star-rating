import React, {useCallback} from 'react';
import {bool, func, number} from 'prop-types';
import {Rect} from 'react-native-svg';

import {dimensionsPropType} from './propTypes';

const Button = ({
  id,
  onRate,
  readOnly,
  size,
  startAnimation,
}) => {
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
      {...(!readOnly ? {
        onPress: handleRate,
        accessibilityRole: 'button',
      } : {})}
    />
  );
};

Button.propTypes = {
  dimensions: dimensionsPropType.isRequired,
  id: number.isRequired,
  onRate: func.isRequired,
  size: number.isRequired,
  startAnimation: func.isRequired,
  readOnly: bool.isRequired,
};

export default Button;
