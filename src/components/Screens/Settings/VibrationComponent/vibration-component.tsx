import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {useHandleBackgroundMusic} from '../../../../user/lib/hooks/music-hook.ts';

export const Vibration = () => {
  const {vibro, setVibro} = useHandleBackgroundMusic();

  const handleChecked = () => {
    if (vibro) {
      setVibro(0);
    } else {
      setVibro(1);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.vibrationBgImage}
        source={require('../../../../assets/images/buttons.png')}
        resizeMode="contain">
        <Text style={styles.vibrationText}>Vibration</Text>
      </ImageBackground>
      <TouchableOpacity onPress={handleChecked}>
        <ImageBackground
          style={styles.btn_mark_image}
          source={require('../../../../assets/images/mark_container.png')}
          resizeMode="contain">
          {vibro ? <Text>✓</Text> : undefined}
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vibrationBgImage: {
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vibrationText: {
    fontSize: 30,
    color: 'white',
  },
  btn_mark_image: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
