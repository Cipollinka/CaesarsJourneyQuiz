import { Image, StyleSheet, Text, View } from "react-native";

interface GameComponentProps {
  isLightning?: boolean;
}

export const GameComponent = ({isLightning}: GameComponentProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/caesars.png')} />
      {isLightning && <Text style={styles.lightning}>⚡</Text>}
    </View>
  );
};
const styles = StyleSheet.create({
  lightning: {
    fontSize: 30,
    color: 'yellow',
    position: 'absolute',
    top: '100%',
  },
  container: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
