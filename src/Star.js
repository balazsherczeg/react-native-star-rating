import React, {memo, useState, useEffect} from 'react';
import {bool, func, node, number, string} from 'prop-types';
import {G} from 'react-native-svg';

import {dimensionsPropType} from './propTypes';
import Animatable from './Animatable';
import Button from './Button';

const Star = ({
  baseColor,
  dimensions,
  scale,
  id,
  onRate,
  rating,
  readOnly,
  selectedColor,
  size,
  shape,
}) => {
  const [animation, setAnimation] = useState(false);

  const startAnimation = () => setAnimation(true);
  const endAnimation = () => setAnimation(false);

  // We triggered animation in animatable,
  // the next moment we can turn it off again.

  useEffect(() => {
    animation && endAnimation();
  }, [animation]);

  const {width, height, x, y} = dimensions;

  return (
    <G>
      <Animatable
        start={animation}
        size={size}
      >
        <G
          x={(size - width * scale) / 2 - x * scale}
          y={(size - height * scale) / 2 - y * scale}
          scale={scale}
        >
          {React.cloneElement(shape, {
            fill: (id > rating ? baseColor : selectedColor),
            accessibilityRole: 'icon',
          })}
        </G>
      </Animatable>

      <Button
        id={id}
        onRate={onRate}
        readOnly={readOnly}
        size={size}
        startAnimation={startAnimation}
      />
    </G>
  );
};

Star.propTypes = {
  baseColor: string.isRequired,
  dimensions: dimensionsPropType.isRequired,
  scale: number.isRequired,
  id: number.isRequired,
  onRate: func.isRequired,
  rating: number.isRequired,
  readOnly: bool.isRequired,
  selectedColor: string.isRequired,
  size: number.isRequired,
  shape: node.isRequired,
};

const shouldStarUpdate = (prevProps, nextProps) => {
  const {id, rating: prevRating} = prevProps;
  const {rating: nextRating} = nextProps;
  return (prevRating < id && nextRating < id) || (prevRating > id && nextRating >= id);
};

export default memo(Star, shouldStarUpdate);
