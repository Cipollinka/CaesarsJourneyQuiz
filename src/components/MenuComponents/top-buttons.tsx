import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../user/lib/hooks/use-navigation.tsx';

export const TopButtons = () => {
  const navigation = useNavigation();
  const handleScoreboard = () => {
    navigation.navigate(ScreenName.Scoreboard);
  };
  const handleSettings = () => {
    navigation.navigate(ScreenName.Settings);
  };
  return (
    <SafeAreaView style={styles.btn_container}>
      <TouchableOpacity onPress={handleScoreboard}>
        <ImageBackground
          style={styles.bg_buttons}
          source={require('../../../src/assets//images/top_button.png')} resizeMode="contain">
          <Text style={{color: 'white', fontSize: 18}}>Scoreboard</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSettings}>
        <ImageBackground
          style={styles.bg_buttons}
          source={require('../../../src/assets//images/top_button.png')} resizeMode="contain">
          <Text style={{color: 'white', fontSize: 18}}>Settings</Text>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  btn_container: {
    flexDirection: 'row',
    gap: 80,
  },
  bg_buttons: {
    width: 130,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
