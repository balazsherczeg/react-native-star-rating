import React, {useState, useCallback} from 'react';
import {func, node, number, string} from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Svg, Polygon} from 'react-native-svg';
import Measurer from './Measurer';

import Stars from './Stars';

const starSvg = <Polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10" />;

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
  const [dimensions, setDimenions] = useState({});

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
        {dimensions.height ? (
          <Stars
            {...props}
            rating={rating}
            onRate={handleRate}
            dimensions={dimensions}
          />
        ) : (
          <Measurer
            svg={svg}
            onMeasure={setDimenions}
            dimensions={dimensions}
          />
        )}
      </Svg>
    </View>
  );
};

StarRating.propTypes = {
  baseColor: string, // TODO
  defaultRating: number,
  gap: number,
  maxRating: number,
  offset: number,
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
  offset: 12,
  selectedColor: '#ff0',
  size: 48,
  svg: starSvg,
  iconScale: 1,
  padding: 24,
};

export default StarRating;
