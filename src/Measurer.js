import React, {useRef, useEffect} from 'react';
import {func, node} from 'prop-types';

import {dimensionsPropType} from './propTypes';

const Measurer = ({
  dimensions,
  onMeasure,
  shape,
}) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef && iconRef.current && !dimensions.height) {
      const boundingBox = iconRef.current.getBBox();
      onMeasure(boundingBox);
    }
  });

  return React.cloneElement(shape, {ref: iconRef});
};

Measurer.propTypes = {
  dimensions: dimensionsPropType.isRequired,
  onMeasure: func.isRequired,
  shape: node.isRequired,
};

export default Measurer;
