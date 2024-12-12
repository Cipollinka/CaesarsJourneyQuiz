import React, {useState} from 'react';
import {View, Text, StyleSheet, PanResponder} from 'react-native';
import {useHandleBackgroundMusic} from '../../../../user/lib/hooks/music-hook.ts';

export const Volume = () => {
  const {volume, onVolumeChange} = useHandleBackgroundMusic();

  const handleMove = (_: any, gestureState: {dx: number}) => {
    const sliderWidth = 200; // Ширина слайдера (в пікселях)
    let newValue = (gestureState.dx / sliderWidth) * 100 + volume * 100;
    newValue = Math.max(0, Math.min(100, newValue)); // Обмеження значення від 0 до 100
    onVolumeChange(newValue / 100);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: handleMove,
    onPanResponderRelease: () => {},
  });

  return (
    <View style={styles.container}>
      <Text style={styles.volumeText}>Music volume</Text>
      <View style={styles.slider}>
        <View style={[styles.sliderTrack, {width: `${volume * 100}%`}]} />
        <View
          style={[styles.thumb, {left: `${volume * 100}%`}]}
          {...panResponder.panHandlers}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 15,
  },
  volumeText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
  },
  slider: {
    width: 300,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#500000', // Задній фон слайдера
    position: 'relative',
    overflow: 'visible',
  },
  sliderTrack: {
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#ff6666', // Колір заповненої частини слайдера
  },
  thumb: {
    position: 'absolute',
    top: -5,
    marginLeft: -10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white', // Колір повзунка
  },
});
