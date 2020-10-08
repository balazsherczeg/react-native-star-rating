import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import StarRating from '../src/StarRating';

jest.mock('../src/Measurer');
jest.mock('../src/Animatable');

const onPressMock = jest.fn();

const maxRate = 5;
const selectedColor = 'orange';
const baseColor = 'gray';

const props = {
  maxRate,
  selectedColor,
  baseColor,
  onRate: onPressMock,
};

describe('StarRating', () => {
  describe('renders', () => {
    test('the number of stars equals maxRate', async () => {
      const component = (
        <StarRating {...props} />
      );

      const {getAllByRole} = render(component);
      const icons = await getAllByRole('icon');

      expect(icons.length).toBe(maxRate);
    });
  });

  describe('gives visual feedback', () => {
    test.each([
      [1, 1, '10000'],
      [2, 2, '11000'],
      [3, 3, '11100'],
      [4, 4, '11110'],
      [5, 5, '11111'],
    ])('having pressed the %i. star, the first %s stars are selected', async (id, count, expected) => {
      const component = (
        <StarRating {...props} />
      );

      const {getAllByRole} = render(component);
      const buttons = await getAllByRole('button');
      const button = buttons[id - 1];
      fireEvent.press(button);

      const icons = await getAllByRole('icon');
      let string = '';

      icons.forEach(({props: {fill}}) => {
        if (fill === selectedColor) string += '1';
        if (fill === baseColor) string += '0';
      });

      expect(string).toBe(expected);
    });
  });

  describe('sends the rating', () => {
    test.each([
      [1, 1],
      [2, 2],
      [3, 3],
      [4, 4],
      [5, 5],
    ])('having pressed the %i. star, it calls \'onRate\' with %s', async (id, expected) => {
      const component = (
        <StarRating {...props} />
      );

      const {getAllByRole} = render(component);
      const buttons = await getAllByRole('button');
      const button = buttons[id - 1];
      fireEvent.press(button);

      expect(onPressMock).toHaveBeenCalledWith(expected);
    });
  });
});