import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Star from '../src/Star';
import defaultIcon from '../src/defaultIcon';

jest.mock('../src/Animatable');

const onPressMock = jest.fn();

const selectedColor = 'orange';
const baseColor = 'gray';

const props = {
  baseColor,
  dimensions: {width: 20, height: 20, x: 2, y: 2},
  iconScale: 1,
  id: 1,
  onRate: onPressMock,
  rating: 1,
  selectedColor,
  size: 24,
  shape: defaultIcon,
  readOnly: false,
};

describe('Star', () => {
  describe('sends the rating', () => {
    test.each([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ])('having pressed the %i. star, it should calls \'onRate\' with %s', async (id, expected) => {
      const component = (
        <Star
          {...props}
          id={id}
        />
      );
      const {getByRole} = render(component);
      const button = await getByRole('button');
      fireEvent.press(button);
      expect(onPressMock).toHaveBeenCalledWith(expected);
    });
  });

  describe('gives visual feedback', () => {
    test.each([
      [1, 1, selectedColor],
      [2, 1, selectedColor],
      [1, 2, baseColor],
      [4, 5, baseColor],
      [5, 5, selectedColor],
    ])('if the rating is %i, the %i. star is %s', async (rating, id, expected) => {
      const component = (
        <Star
          {...props}
          id={id}
          rating={rating}
        />
      );
      const {getByRole} = render(component);
      const icon = await getByRole('icon');
      expect(icon.props.fill).toBe(expected);
    });
  });
});
