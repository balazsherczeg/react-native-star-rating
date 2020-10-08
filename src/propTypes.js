import {shape, number} from 'prop-types';

export const dimensionPropType = shape({
  width: number,
  height: number,
  x: number,
  y: number,
});
