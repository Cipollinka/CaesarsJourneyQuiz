import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useHandleBackgroundMusic} from '../../../../user/lib/hooks/music-hook.ts';
// import Sound from 'react-native-sound';

export const Music = () => {
  const {volume, onVolumeChange} = useHandleBackgroundMusic();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.vibrationBgImage}
        source={require('../../../../assets/images/buttons.png')}
        resizeMode="contain">
        <Text style={styles.vibrationText}>Music</Text>
      </ImageBackground>
      <TouchableOpacity
        onPress={() => {
          if (volume) {
            onVolumeChange(0);
          } else {
            onVolumeChange(1);
          }
        }}>
        <ImageBackground
          style={styles.btn_mark_image}
          source={require('../../../../assets/images/mark_container.png')}
          resizeMode="contain">
          {volume > 0 && <Text>✓</Text>}
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
