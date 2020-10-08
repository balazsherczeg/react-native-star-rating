import React from 'react';
import {number} from 'prop-types';
import {G} from 'react-native-svg';

import Star from './Star';

const Stars = (props) => {
  const {maxRating, size, gap, padding} = props;
  const stars = [];

  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <G
        x={padding + i * (size + gap)}
        y={padding}
        key={i}
      >
        <Star
          {...props}
          id={i + 1}
        />
      </G>,
    );
  }

  return stars;
};

Stars.propTypes = {
  gap: number.isRequired,
  maxRating: number.isRequired,
  padding: number.isRequired,
  size: number.isRequired,
};

export default Stars;
