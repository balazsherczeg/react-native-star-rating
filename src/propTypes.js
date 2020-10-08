import {shape, number} from 'prop-types';

export const dimensionsPropType = shape({
  width: number,
  height: number,
  x: number,
  y: number,
});
