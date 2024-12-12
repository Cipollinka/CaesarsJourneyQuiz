import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {historicalSites} from '../../../Data/locations.ts';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';
import {useState} from 'react';
import {RenderInformation} from './render-location-information.tsx';

export const Location = () => {
  const [information, setInformation] = useState(null);
  const navigate = useNavigation();
  const handleBack = () => {
    navigate.navigate(ScreenName.Menu);
  };
  const handleNextInformationLocation = (location: any) => {
    setInformation(location);
  };
  if (information) {
    return <RenderInformation informationLocation={information} />;
  }
  return (
    <View>
      <ImageBackground
        style={styles.bgImage_container}
        source={require('../../../assets/images/background.png')}>
        <ImageBackground
          style={{
            width: 378,
            height: 173,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: 20,
          }}
          source={require('../../../assets/images/julius.png')}>
          <Text
            style={{
              fontSize: 32,
              color: 'white',
            }}>
            Julius Caesar's places
          </Text>
        </ImageBackground>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            {historicalSites.map(item => (
              <TouchableOpacity onPress={() => handleNextInformationLocation(item)} key={item.id}>
                <ImageBackground
                  style={styles.btn_location_image}
                  source={item.image}>
                  <Text style={styles.locationText}>{item.name}</Text>
                </ImageBackground>
              </TouchableOpacity>
            ))}
            <TouchableOpacity onPress={handleBack}>
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
  container: {
    marginTop: 40,
    marginBottom: 40,
    gap: 30,
    alignItems: 'center',
  },
  bgImage_container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_location_image: {
    width: 378,
    height: 89,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 10,
    overflow: 'hidden',
  },
  locationText: {
    fontSize: 24,
    color: 'white',
  },
  ok_btn: {
    width: 200,
    height: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
