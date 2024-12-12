import {
  Alert,
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
import {SettingsPanel} from './settings-panel.tsx';
import {useUser} from '../../../user';

export const SettingsScreen = () => {
  const {user, saveUser, clearUser} = useUser();

  const navigation = useNavigation();
  const handleOk = () => {
    navigation.navigate(ScreenName.Menu);
  };

  const clearUserData = async () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to reset all data?',
      [
        {text: 'Cancel', style: 'cancel'},
        {
          text: 'Yes',
          onPress: async () => {
            try {
              // Очищення користувацьких даних через кастомний хук
              await clearUser();
              navigation.navigate(ScreenName.Registration);
            } catch (e) {
              console.log('Error clearing data:', e);
            }
          },
        },
      ],
      {cancelable: true},
    );
  };

  return (
    <View>
      <ImageBackground
        style={styles.bg_settingsImage}
        source={require('../../../assets/images/background.png')}>
        <SafeAreaView style={styles.container}>
          <Text style={styles.settings_text}>Settings</Text>
          <SettingsPanel />
          <SafeAreaView style={styles.btn_container}>
            <TouchableOpacity onPress={clearUserData}>
              <ImageBackground
                style={styles.ok_btn}
                source={require('../../../assets/images/reset.png')}
                resizeMode="contain">
                <Text style={{color: 'white', fontSize: 18}}>
                  Reset progress
                </Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleOk}>
              <ImageBackground
                style={styles.ok_btn}
                source={require('../../../assets/images/reset.png')}
                resizeMode="contain">
                <Text style={{color: 'white', fontSize: 26}}>OK</Text>
              </ImageBackground>
            </TouchableOpacity>
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
    gap: 30,
    alignItems: 'center',
  },
  bg_settingsImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings_text: {
    fontSize: 64,
    color: 'white',
  },
  ok_btn: {
    width: 200,
    height: 58,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_container: {
    gap: 20,
  },
});
