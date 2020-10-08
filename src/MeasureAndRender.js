import React, {useState} from 'react';
import {node} from 'prop-types';

import Measurer from './Measurer';

const MeasureAndRender = ({
  children,
  svg,
}) => {
  const [dimensions, setDimenions] = useState({});

  if (dimensions.height) {
    return React.cloneElement(children, {dimensions});
  }

  return (
    <Measurer
      svg={svg}
      onMeasure={setDimenions}
      dimensions={dimensions}
    />
  );
};

MeasureAndRender.propTypes = {
  children: node.isRequired,
  svg: node.isRequired,
};

export default MeasureAndRender;
