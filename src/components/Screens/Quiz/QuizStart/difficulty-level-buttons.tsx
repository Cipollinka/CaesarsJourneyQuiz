import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../../../user/lib/hooks/use-navigation.tsx';

export const ButtonsDifficulty = () => {
  const navigation = useNavigation();
  const handleEasy = () => {
    navigation.navigate(ScreenName.Easy);
  };
  const handleHard = () => {
    navigation.navigate(ScreenName.Hard);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleEasy}>
        <ImageBackground
          style={styles.bg_image_buttons}
          source={require('../../../../assets/images/difficulty-button.png')}>
          <Text style={styles.btnText}>EASY</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHard}>
        <ImageBackground
          style={styles.bg_image_buttons}
          source={require('../../../../assets/images/difficulty-button.png')}>
          <Text style={styles.btnText}>HARD</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    gap: 30,
  },
  bg_image_buttons: {
    width: 360,
    height: 184,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 64,
    color: 'white',
  },
});
