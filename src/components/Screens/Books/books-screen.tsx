import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import books from '../../../Data/books.ts';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';
import {useState} from 'react';
import {RenderBooks} from './render-information-books.tsx';

export const Books = () => {
  const [information, setInformation] = useState(null);
  const navigation = useNavigation();
  const handleOk = () => {
    navigation.navigate(ScreenName.Menu);
  };
  const handleInformationBook = (information: any) => {
    setInformation(information);
  };
  if (information) {
    return <RenderBooks informationBook={information} />;
  }
  return (
    <View>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/images/background.png')}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Text style={styles.textH1}>Books</Text>
            {books.map(item => (
              <TouchableOpacity onPress={() => handleInformationBook(item)}>
                <ImageBackground
                  style={styles.imageBackgroundBtn}
                  source={require('../../../assets/images/books_button.png')}>
                  <View style={styles.content_btn}>
                    <Text style={styles.text_buttons}>{item.title}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={handleOk}>
              <ImageBackground
                style={styles.ok_btn}
                source={require('../../../assets/images/reset.png')}
                resizeMode="contain">
                <Text style={{color: 'white', fontSize: 26}}>OK</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  content: {
    gap: 20,
    alignItems: 'center',
  },
  textH1: {
    fontSize: 32,
    color: 'white',
  },
  imageBackgroundBtn: {
    width: 305,
    height: 66,
    justifyContent: 'center',
  },
  content_btn: {
    alignItems: 'center',
  },
  text_buttons: {
    color: 'white',
    textAlign: 'center',
  },
  ok_btn: {
    width: 200,
    height: 58,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
