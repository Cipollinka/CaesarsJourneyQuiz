import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface TimerProps {
  formatTime: (time: number) => string;
  timerLeft: number;
  coins: number;
  setCoins: (value: ((prevState: number) => number) | number) => void;
  setTimerLeft: (value: ((prevState: number) => number) | number) => void;
}

export const Timer = ({
  formatTime,
  timerLeft,
  coins,
  setCoins,
  setTimerLeft,
}: TimerProps) => {
  const buyTime = () => {
    if (coins >= 125) {
      setCoins(prevCoins => prevCoins - 125);
      setTimerLeft(prevTime => prevTime + 10); // Додати 10 секунд до таймера
    } else {
      Alert.alert('Недостатньо монет для покупки +10 секунд!');
    }
  };

  return (
    <View>
      <ImageBackground
        style={styles.headerBg}
        source={require('../../../../assets/images/header_quiz.png')}>
        <ImageBackground
          style={styles.bgTimer}
          source={require('../../../../assets/images/timer.png')}>
          <Text style={styles.timerText}>{formatTime(timerLeft)}</Text>
        </ImageBackground>
        <TouchableOpacity onPress={buyTime}>
          <View style={styles.scoreBtn}>
            <View />
            <Text style={styles.timerText}>+10 seconds 125</Text>
            <Image
              style={{width: 37, height: 37, marginTop: 4}}
              source={require('../../../../assets/images/coin.png')}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  headerBg: {
    width: 378,
    height: 90,
  },
  bgTimer: {
    alignItems: 'center',
    height: 45,
  },
  timerText: {
    fontSize: 29,
    color: 'white',
  },
  scoreBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});
