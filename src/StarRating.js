import React, {useState, useCallback} from 'react';
import {bool, func, node, number} from 'prop-types';
import {StyleSheet, View} from 'react-native';
import {Svg} from 'react-native-svg';
import MeasureAndRender from './MeasureAndRender';

import Stars from './Stars';

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

const getSvgHeight = ({
  size,
  padding,
}) => size + (2 * padding);

const getRatingControlled = ({rating, onRate}) => ({
  rating,
  handleRate: useCallback(
    (nextRating) => {
      onRate(nextRating);
    },
    [onRate],
  ),
});

const getRatingUncontrolled = ({defaultRating, onRate}) => {
  const [rating, setRating] = useState(defaultRating);

  return {
    rating,
    handleRate: useCallback(
      (nextRating) => {
        setRating(nextRating);
        onRate(nextRating);
      },
      [onRate],
    ),
  };
};

const getRating = (props) => {
  const {rating} = props;
  return (rating) // If there is a rating props...
    ? getRatingControlled(props) // ...then it is a controlled component,
    : getRatingUncontrolled(props); // ...otherwise uncontrolled.
};

const StarRating = (props) => {
  const {shape} = props;
  const {rating, handleRate} = getRating(props);

  return (
    <View style={styles.container}>
      <Svg
        width={getSvgWidth(props)}
        height={getSvgHeight(props)}
      >
        <MeasureAndRender
          shape={shape}
        >
          <Stars
            {...props}
            onRate={handleRate}
            rating={rating}
          />
        </MeasureAndRender>
      </Svg>
    </View>
  );
};

StarRating.propTypes = {
  defaultRating: number.isRequired,
  gap: number.isRequired,
  maxRating: number.isRequired,
  onRate: func.isRequired,
  padding: number.isRequired,
  readOnly: bool.isRequired,
  shape: node.isRequired,
  size: number.isRequired,
};

export default StarRating;
