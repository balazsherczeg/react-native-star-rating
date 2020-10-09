import {useEffect} from 'react';
import {func, node} from 'prop-types';

const MockMeasurer = ({
  onMeasure,
  shape,
}) => {
  useEffect(() => {
    onMeasure({width: 20, height: 20, x: 2, y: 2});
  });

  return shape;
};

MockMeasurer.propTypes = {
  onMeasure: func.isRequired,
  shape: node.isRequired,
};

export default MockMeasurer;
