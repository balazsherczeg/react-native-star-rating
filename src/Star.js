import React, {memo, useCallback, useState, useEffect} from 'react';
import {func, object, node, number, string} from 'prop-types';
import {G, Rect} from 'react-native-svg';

import {dimensionsPropType} from './propTypes';
import Animatable from './Animatable';

const Star = ({
  baseColor,
  dimensions,
  iconScale,
  id,
  onRate,
  rating,
  selectedColor,
  size,
  svg,
}) => {
  const [animation, setAnimation] = useState(false);

  const startAnimation = () => setAnimation(true);
  const endAnimation = () => setAnimation(false);

  const handleRate = useCallback(
    () => {
      onRate(id);
      startAnimation();
    },
    [id],
  );

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
          x={(size - width * iconScale) / 2 - x * iconScale}
          y={(size - height * iconScale) / 2 - y * iconScale}
          scale={iconScale}
        >
          {React.cloneElement(svg, {
            fill: (id > rating ? baseColor : selectedColor),
            accessibilityRole: 'icon',
          })}
        </G>
      </Animatable>

      <Rect
        x="0"
        y="0"
        width={size}
        height={size}
        fill="none"
        onPress={handleRate}
        accessibilityRole="button"
      />
    </G>
  );
};

Star.propTypes = {
  baseColor: string.isRequired,
  dimensions: dimensionsPropType.isRequired,
  iconScale: number.isRequired,
  id: number.isRequired,
  onRate: func.isRequired,
  rating: number.isRequired,
  selectedColor: string.isRequired,
  size: number.isRequired,
  svg: node.isRequired,
};

const shouldStarUpdate = (prevProps, nextProps) => {
  const {id, rating: prevRating} = prevProps;
  const {rating: nextRating} = nextProps;
  return (prevRating < id && nextRating < id) || (prevRating > id && nextRating >= id);
};

export default memo(Star, shouldStarUpdate);
