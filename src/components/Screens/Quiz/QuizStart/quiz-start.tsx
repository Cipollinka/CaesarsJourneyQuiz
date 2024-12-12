import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ButtonsDifficulty} from './difficulty-level-buttons.tsx';

export const QuizStart = () => {
  return (
    <View>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../../assets/images/background.png')}>
        <View style={styles.container}>
          <Text style={styles.text}>
            CHOOSE THE{'\n'}DIFFICULTY{'\n'}LEVEL OF YOUR QUIZ:
          </Text>
          <ButtonsDifficulty />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    gap: 30,
  },
  text: {
    fontSize: 29,
    color: 'white',
    textAlign: 'center',
  },
});
