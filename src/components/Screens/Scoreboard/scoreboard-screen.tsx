import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';
import {ScoreboardPanel} from '../../ScoreboardComponents/scoreboard-panel.tsx';

export const ScoreboardScreen = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate(ScreenName.Menu);
  };
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
      }}>
      <ImageBackground
        style={styles.bg_scoreboardImage}
        source={require('../../../assets/images/background.png')}>
        <SafeAreaView style={styles.container}>
          <Text style={{fontSize: 64, color: 'white'}}>Scoreboard</Text>
          <ScoreboardPanel />
          <TouchableOpacity onPress={handleDone} style={{}}>
            <ImageBackground
              style={styles.done_btn}
              source={require('../../../assets/images/reset.png')}
              resizeMode="contain">
              <Text style={{color: 'white', fontSize: 18}}>Done</Text>
            </ImageBackground>
          </TouchableOpacity>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    gap: 30,
    height: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  bg_scoreboardImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  done_btn: {
    width: 200,
    height: 58,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
