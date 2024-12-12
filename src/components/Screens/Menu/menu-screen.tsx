import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {TopButtons} from '../../MenuComponents/top-buttons.tsx';
import {TotalCoins} from '../../MenuComponents/field-current-coins.tsx';
import {NavigationMenu} from '../../MenuComponents/navigation-panel.tsx';
import { useUser } from "../../../user";

export const Menu = () => {
  const {user} = useUser();
  console.log('User', user);
  return (
    <View>
      <ImageBackground
        style={styles.menu_backgroundImage}
        source={require('../../../assets/images/background.png')}>
        <SafeAreaView style={styles.container}>
          <TopButtons />
          <Image
            style={styles.image}
            source={require('../../../assets/images/caesars_image.png')}
            resizeMode="contain"
          />
          <SafeAreaView style={styles.btn_container}>
            <TotalCoins />
            <NavigationMenu />
          </SafeAreaView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    maxWidth: 350,
    maxHeight: 650,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu_backgroundImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_container: {
    alignItems: 'center',
    gap: 30,
  },
  image: {
    width: 325,
    height: 150,
  },
});
