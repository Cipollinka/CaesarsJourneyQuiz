import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useEffect, useState} from 'react';
import {useUser} from '../../../user';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';

export const Register = () => {
  const {user, saveUser} = useUser();
  const [imageUri, setImageUri] = useState(user?.avatar || '');
  const [valueName, setValueName] = useState(user?.nickname || '');
  const navigation = useNavigation();

  useEffect(() => {
    // Перевірка, чи користувач зареєстрований, якщо так - перенаправлення на меню
    if (user?.nickname !== '') {
      navigation.navigate(ScreenName.Menu);
    }
  }, [user, navigation]);

  useEffect(() => {
    if (user?.avatar) {
      setImageUri(user.avatar);
    }
    if (user?.nickname) {
      setValueName(user.nickname);
    }
  }, [user?.avatar, user?.nickname]);

  const pickImage = async () => {
    try {
      const response = await launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
      });

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        if (!uri) return;
        setImageUri(uri); // Оновлюємо локальну змінну з URI фото
        if (user) {
          console.log('Saving user with new avatar URI:', uri);
          saveUser({...user, avatar: uri}); // Збереження користувача з новим URI аватара
        }
      }
    } catch (error) {
      console.log('Error launching image picker:', error);
    }
  };
  const handleRegister = () => {
    if (!valueName) {
      Alert.alert('Error', 'Please enter a nickname');
      return;
    }
    saveUser({
      ...user,
      avatar: imageUri,
      nickname: valueName,
    });
    navigation.navigate(ScreenName.Menu);
  };
  const handleReset = () => {
    setValueName('');
    setImageUri('');
  };
  return (
    <View>
      <ImageBackground
        style={styles.background_image}
        source={require('../../../assets/images/background.png')}>
        <SafeAreaView style={styles.container}>
          <SafeAreaView style={styles.form_container}>
            <TouchableOpacity onPress={pickImage} style={styles.avatar}>
              {imageUri ? (
                <Image
                  style={{width: 250, height: 250, borderRadius: 300}}
                  source={{uri: imageUri}}
                />
              ) : (
                <Image source={require('../../../assets/images/upload.png')} />
              )}
            </TouchableOpacity>
            <ImageBackground
              style={styles.inputContainer}
              source={require('../../../assets/images/input_nickname.png')}>
              <TextInput
                style={styles.nickname_input}
                value={valueName}
                onChangeText={setValueName}
                placeholder="Nickname"
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
              />
            </ImageBackground>
            <TouchableOpacity onPress={handleReset}>
              <ImageBackground
                style={styles.reset_btn}
                source={require('../../../assets/images/reset.png')}>
                <Text style={{color: 'white', fontSize: 32}}>Reset</Text>
              </ImageBackground>
            </TouchableOpacity>
          </SafeAreaView>
          <TouchableOpacity onPress={handleRegister}>
            <ImageBackground
              style={styles.done_btn}
              source={require('../../../assets/images/reset.png')}>
              <Text style={{color: 'white', fontSize: 32}}>Done</Text>
            </ImageBackground>
          </TouchableOpacity>
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
    alignItems: 'center',
    gap: 40,
  },
  background_image: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form_container: {
    alignItems: 'center',
    gap: 50,
  },
  avatar: {
    width: 296,
    height: 296,
    borderRadius: 200,
    backgroundColor: 'rgba(31, 32, 39, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    alignItems: 'center',
  },
  nickname_input: {
    width: 200,
    textAlign: 'center',
    color: 'white',
  },
  reset_btn: {
    width: 246,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  done_btn: {
    width: 316,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
