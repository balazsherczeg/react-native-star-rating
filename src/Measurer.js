import React, {useRef, useEffect} from 'react';
import {func, node, number, shape} from 'prop-types';

import {dimensionsPropType} from './propTypes';

const Measurer = ({
  dimensions,
  onMeasure,
  svg,
}) => {
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef && iconRef.current && !dimensions.height) {
      const boundingBox = iconRef.current.getBBox();
      onMeasure(boundingBox);
    }
  });

  return React.cloneElement(svg, {ref: iconRef});
};

Measurer.propTypes = {
  dimensions: dimensionsPropType.isRequired,
  onMeasure: func.isRequired,
  svg: node.isRequired,
};

export default Measurer;
