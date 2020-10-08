import React from 'react';
import {
  bool,
  number,
  string,
  func,
  node,
} from 'prop-types';

import StarRating from './StarRating';
import defaultIcon from './defaultIcon';

const Component = ({
  baseColor,
  defaultRating,
  gap,
  scale,
  maxRating,
  onRate,
  padding,
  readOnly,
  selectedColor,
  shape,
  size,
}) => (
  <StarRating
    {...{
      baseColor,
      defaultRating,
      gap,
      scale,
      maxRating,
      onRate,
      padding,
      readOnly,
      selectedColor,
      shape,
      size,
    }}
  />
);

Component.propTypes = {
  baseColor: string, // TODO
  defaultRating: number,
  gap: number,
  scale: number,
  maxRating: number,
  onRate: func,
  padding: number,
  readOnly: bool,
  selectedColor: string, // TODO
  shape: node,
  size: number,
};

Component.defaultProps = {
  baseColor: 'gray',
  defaultRating: 5,
  gap: 0,
  scale: 1,
  maxRating: 5,
  onRate: () => true,
  padding: 24,
  readOnly: false,
  selectedColor: 'orange',
  shape: defaultIcon,
  size: 48,
};

export default Component;
