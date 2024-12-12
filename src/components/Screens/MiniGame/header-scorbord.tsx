import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  coins?: number;
}

export const Header = ({coins}: HeaderProps) => {
  return (
    <View>
      <ImageBackground
        style={styles.coins_background}
        source={require('../../../assets/images/header_coins.png')}>
        <View style={styles.coins_container}>
          <Text style={styles.coinsText}>{coins}</Text>
          <Image source={require('../../../assets/images/coin.png')} />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  coins_background: {
    width: 208,
    height: 65.5,
    justifyContent: 'center',
  },
  coins_container: {
    gap: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinsText: {
    fontSize: 32,
    color: 'white',
  },
  coin_image: {
    width: 40,
    height: 40,
  },
});
