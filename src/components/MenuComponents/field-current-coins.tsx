import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useUser} from '../../user';

export const TotalCoins = () => {
  const {user} = useUser();
  return (
    <SafeAreaView>
      <ImageBackground
        style={styles.bg_image_coins}
        source={require('../../assets/images/input_nickname.png')}
        resizeMode="contain">
        <View style={{width: 32, height: 32}} />
        <Text style={styles.coinsText}>{user?.score}</Text>
        <Image
          style={styles.coinIcon}
          source={require('../../assets/images/coin.png')}
          resizeMode="contain"
        />
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bg_image_coins: {
    width: 240,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  coinsText: {
    fontSize: 26,
    color: 'white',
  },
  coinIcon: {
    width: 32,
    height: 32,
  },
});
