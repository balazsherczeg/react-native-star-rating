import React, {useRef, useEffect} from 'react';
import {func, node, number, shape} from 'prop-types';

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
  dimensions: shape({
    width: number,
    height: number,
    x: number,
    y: number,
  }).isRequired,
  onMeasure: func.isRequired,
  svg: node.isRequired,
};

export default Measurer;
