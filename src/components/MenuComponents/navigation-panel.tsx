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

export const NavigationMenu = () => {
  const navigation = useNavigation();
  const handleLocation = () => {
    navigation.navigate(ScreenName.Location);
  };
  const handleBooks = () => {
    navigation.navigate(ScreenName.Books);
  };
  const handleStartQuiz = () => {
    navigation.navigate(ScreenName.Start);
  };
  const handleMiniGame = () => {
    navigation.navigate(ScreenName.Game);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={handleMiniGame}>
        <ImageBackground
          style={styles.mini_game_image_bg}
          source={require('../../assets/images/mini_game_btn.png')}
          resizeMode="contain">
          <Text style={styles.mini_game_text}>Mini{'\n'}Game</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLocation}>
        <ImageBackground
          style={styles.btn_image_bg}
          source={require('../../assets/images/buttons.png')}
          resizeMode="contain">
          <Text style={styles.btn_text}>Locations</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBooks}>
        <ImageBackground
          style={styles.btn_image_bg}
          source={require('../../assets/images/buttons.png')}
          resizeMode="contain">
          <Text style={styles.btn_text}>Books</Text>
        </ImageBackground>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleStartQuiz}>
        <ImageBackground
          style={styles.btn_image_bg}
          source={require('../../assets/images/buttons.png')}
          resizeMode="contain">
          <Text style={styles.btn_text}>START QUIZ</Text>
        </ImageBackground>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 30,
  },
  mini_game_image_bg: {
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mini_game_text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
  },
  btn_image_bg: {
    width: 300,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_text: {
    fontSize: 20,
    color: 'white',
  },
});
