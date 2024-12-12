import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Vibration} from './VibrationComponent/vibration-component.tsx';
import {Volume} from './VolumeComponents/volume-component.tsx';
import {Music} from './MusicComponents/music-component.tsx';

export const SettingsPanel = () => {
  return (
    <View>
      <ImageBackground
        style={styles.container}
        source={require('../../../assets/images/settings_pnel.png')}
        resizeMode="contain">
        <Vibration />
        <Volume />
        <Music />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 357,
    padding: 20,
    gap: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
