import React, {useRef} from 'react';
import {Animated} from 'react-native';
import {bool, node, number} from 'prop-types';
import {G} from 'react-native-svg';

const AnimatedG = Animated.createAnimatedComponent(G);

const animate = (animationValue, handleAnimationEnd) => {
  animationValue.setValue(1.5);

  Animated.spring(
    animationValue, {
      toValue: 1,
      friction: 1,
      useNativeDriver: false,
    },
  ).start(handleAnimationEnd);
};

const Animatable = ({
  size,
  start,
  children,
}) => {
  const animationValue = useRef(new Animated.Value(1)).current;
  const animatableRef = useRef(null);

  animationValue.addListener((f) => {
    if (animatableRef) {
      animatableRef.current.setNativeProps({
        scale: f.value.toString(),
        origin: `${size / 2}, ${size / 2}`,
      });
    }
  });

  if (start) animate(animationValue);

  return (
    <AnimatedG
      scale={1}
      origin={`${size / 2}, ${size / 2}`}
      ref={animatableRef}
    >
      {children}
    </AnimatedG>
  );
};

Animatable.propTypes = {
  children: node.isRequired,
  size: number.isRequired,
  start: bool.isRequired,
};

export default Animatable;
