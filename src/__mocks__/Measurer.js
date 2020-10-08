import {useEffect} from 'react';
import {func, node} from 'prop-types';

const MockMeasurer = ({
  onMeasure,
  svg,
}) => {
  useEffect(() => {
    onMeasure({width: 20, height: 20, x: 2, y: 2});
  });

  return svg;
};

MockMeasurer.propTypes = {
  onMeasure: func.isRequired,
  svg: node.isRequired,
};

export default MockMeasurer;
