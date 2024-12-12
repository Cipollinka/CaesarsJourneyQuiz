import {StyleSheet, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {Register} from '../Screens/Registration/registration-screen.tsx';
import {Menu} from '../Screens/Menu/menu-screen.tsx';
import {SettingsScreen} from '../Screens/Settings/settings-screen.tsx';
import {ScoreboardScreen} from '../Screens/Scoreboard/scoreboard-screen.tsx';
import {Location} from '../Screens/Locations/location-screen.tsx';
import {Books} from '../Screens/Books/books-screen.tsx';
import {QuizStart} from '../Screens/Quiz/QuizStart/quiz-start.tsx';
import {Easy} from '../Screens/Quiz/EasyQuiz/easy-quiz-component.tsx';
import {Hard} from '../Screens/Quiz/HardQuiz/hard-quiz-component.tsx';
import {MiniGame} from '../Screens/MiniGame/mini-game-screen.tsx';
import {
  BackgroundMusicContext,
  useBackgroundMusic,
} from '../../user/lib/hooks/music-hook.ts';

const Stack = createStackNavigator();

export const MainScreen = () => {
  const musicManager = useBackgroundMusic();
  return (
    <BackgroundMusicContext.Provider value={musicManager}>
      <View style={styles.container}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Registration" component={Register} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Scoreboard" component={ScoreboardScreen} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="Books" component={Books} />
          <Stack.Screen name="Start" component={QuizStart} />
          <Stack.Screen name="Easy" component={Easy} />
          <Stack.Screen name="Hard" component={Hard} />
          <Stack.Screen name="Game" component={MiniGame} />
        </Stack.Navigator>
      </View>
    </BackgroundMusicContext.Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
