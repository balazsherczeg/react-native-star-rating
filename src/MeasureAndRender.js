import React, {useState} from 'react';
import {node} from 'prop-types';

import Measurer from './Measurer';

const MeasureAndRender = ({
  children,
  shape,
}) => {
  const [dimensions, setDimenions] = useState({});

  if (dimensions.height) {
    return React.cloneElement(children, {dimensions});
  }

  return (
    <Measurer
      shape={shape}
      onMeasure={setDimenions}
      dimensions={dimensions}
    />
  );
};

MeasureAndRender.propTypes = {
  children: node.isRequired,
  shape: node.isRequired,
};

export default MeasureAndRender;
