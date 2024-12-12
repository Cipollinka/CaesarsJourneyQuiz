import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';

interface RenderInformationProps {
  informationBook?: any;
}

export const RenderBooks = ({informationBook}: RenderInformationProps) => {
  const navigation = useNavigation();
  const handleBackLocation = () => {
    navigation.navigate(ScreenName.Menu);
  };
  return (
    <View>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../assets/images/background.png')}>
        <ScrollView>
          <View style={styles.content}>
            <Text style={styles.textH1}>{informationBook.title}</Text>
            <ImageBackground
              style={styles.bg_image_description}
              source={require('../../../assets/images/place_info_window.png')}>
              <View style={styles.description_text}>
                <Text style={styles.text}>{informationBook.description}</Text>
              </View>
            </ImageBackground>
            <TouchableOpacity onPress={handleBackLocation}>
              <ImageBackground
                style={styles.ok_btn}
                source={require('../../../assets/images/reset.png')}
                resizeMode="contain">
                <Text
                  style={{
                    fontSize: 48,
                    color: 'white',
                  }}>
                  OK
                </Text>
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
    marginTop: 20,
    gap: 30,
    alignItems: 'center',
  },
  image: {
    width: 378,
    height: 201,
    borderRadius: 12,
  },
  textH1: {
    fontSize: 29,
    color: 'white',
  },
  bg_image_description: {
    width: 387,
    height: 703,
  },
  description_text: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  ok_btn: {
    width: 200,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
