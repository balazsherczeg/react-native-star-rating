import React, {useState, useCallback} from 'react';
import {func, node, number, string} from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Svg} from 'react-native-svg';
import MeasureAndRender from './MeasureAndRender';

import Stars from './Stars';
import defaultIcon from './defaultIcon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
});

const getSvgWidth = ({
  maxRating,
  size,
  gap,
  padding,
}) => maxRating * size + (maxRating - 1) * gap + 2 * padding;

const StarRating = (props) => {
  const {defaultRating, size, onRate, padding, svg} = props;
  const [rating, setRating] = useState(defaultRating);

  const handleRate = useCallback(
    (nextRating) => {
      setRating(nextRating);
      onRate(nextRating);
    },
    [onRate],
  );

  return (
    <View style={styles.container}>
      <Svg
        width={getSvgWidth(props)}
        height={size + (2 * padding)}
      >
        <MeasureAndRender
          svg={svg}
        >
          <Stars
            {...props}
            rating={rating}
            onRate={handleRate}
            dimensions={{width: 20, height: 20, x: 2, y: 2}}
          />
        </MeasureAndRender>
      </Svg>
    </View>
  );
};

StarRating.propTypes = {
  baseColor: string, // TODO
  defaultRating: number,
  gap: number,
  maxRating: number,
  onRate: func.isRequired,
  selectedColor: string, // TODO
  size: number,
  svg: node,
  iconScale: number,
  padding: number,
};

StarRating.defaultProps = {
  baseColor: '#0ff',
  defaultRating: 3,
  gap: 0,
  maxRating: 5,
  selectedColor: '#ff0',
  size: 48,
  svg: defaultIcon,
  iconScale: 1,
  padding: 24,
};

export default StarRating;
