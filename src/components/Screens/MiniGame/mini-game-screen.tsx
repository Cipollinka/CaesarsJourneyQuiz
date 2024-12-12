import React, {useCallback, useEffect, useState} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from './header-scorbord';
import {GameComponent} from './game-component';
import {
  ScreenName,
  useNavigation,
} from '../../../user/lib/hooks/use-navigation.tsx';
import {useUser} from '../../../user';

type Position = {
  x: number;
  y: number;
};

type EnemyPosition = {
  position: Position;
  isSpearEnemy: boolean;
  isActive: boolean;
} | null;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const MiniGame: React.FC = () => {
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [enemyPosition, setEnemyPosition] = useState<EnemyPosition>(null);
  const [isLightning, setIsLightning] = useState<boolean>(false);
  const {user, saveUser} = useUser();

  const navigation = useNavigation();

  const getRandomPosition = (): Position => {
    const maxHeight = screenHeight - 120;
    const maxWidth = screenWidth - 120;

    const minHeight = screenHeight - screenHeight * (30 / 100);
    const minWidth = screenWidth - screenWidth * (100 / 100);
    const randomYPosition =
      Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight;
    const randomXPosition =
      Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth;
    console.log({
      minHeight: minHeight,
      minWidth,
    });
    console.log({
      x: randomXPosition,
      y: randomYPosition - 250,
    });
    return {
      x: randomXPosition,
      y: randomYPosition - 110,
    };
  };

  const renderHearts = () => {
    const hearts = [];
    for (let i = 0; i < lives; i++) {
      hearts.push(
        <Image
          key={i}
          source={require('../../../assets/images/heart.png')}
          style={styles.heart}
        />,
      );
    }
    return hearts;
  };

  const spawnEnemy = useCallback(() => {
    const isSpearEnemy = Math.random() < 0.3; // 30% шанс, що варвар буде з коп’єм
    const randomPosition = getRandomPosition();
    setEnemyPosition({position: randomPosition, isSpearEnemy, isActive: true});

    // Якщо варвар з коп’єм, то він атакує через 1 секунду
    if (isSpearEnemy) {
      setTimeout(() => {
        setEnemyPosition(prev => {
          // Перевіряємо, чи ворог все ще активний
          if (prev && prev.isSpearEnemy && prev.isActive) {
            setLives(prevLives => prevLives - 1); // Зменшення кількості життів
            return null; // Видаляємо ворога після атаки
          }
          return prev;
        });
      }, 1000);
    }
  }, []);

  const handleEnemyClick = () => {
    setScore(prevScore => prevScore + 5);
    setIsLightning(true); // Активуємо молнію
    setTimeout(() => setIsLightning(false), 500); // Ефект молнії триває 0,5 секунди
    setEnemyPosition(null); // Прибираємо варвара після атаки
  };

  // Спавн варварів з інтервалом, що прискорюється
  useEffect(() => {
    const intervalId = setInterval(
      spawnEnemy,
      Math.max(500, 2000 - score * 10),
    );
    return () => clearInterval(intervalId);
  }, [score, spawnEnemy]);

  // Перевірка, чи всі життя витрачено
  useEffect(() => {
    if (lives <= 0) {
      setIsGameOver(true);
      const totalScore = (user?.score || 0) + score; // Додаємо новий результат до вже наявного
      saveUser({
        ...user,
        score: totalScore, // Зберігаємо загальну кількість монет
      });
      navigation.navigate(ScreenName.Menu);
    }
  }, [lives, navigation, saveUser, score, user]);

  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        style={styles.image_background}
        source={require('../../../assets/images/background.png')}>
        <View style={styles.container}>
          <View style={{alignItems: 'center', gap: 20}}>
            <Header coins={score} />
            <View style={styles.heart_container}>{renderHearts()}</View>
          </View>
          <GameComponent isLightning={isLightning} />
          {enemyPosition && (
            <TouchableOpacity
              style={[
                styles.enemy,
                {
                  left: enemyPosition.position.x,
                  top: enemyPosition.position.y,
                },
              ]}
              onPress={() => {
                handleEnemyClick();
                setEnemyPosition(prev =>
                  prev ? {...prev, isActive: false} : null,
                );
              }}>
              {enemyPosition.isSpearEnemy ? (
                <Image
                  source={require('../../../assets/images/warwar_spear.png')}
                />
              ) : (
                <Image source={require('../../../assets/images/warvar.png')} />
              )}
            </TouchableOpacity>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    position: 'relative',
    flex: 1,
  },
  image_background: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    maxWidth: 400,
    maxHeight: 600,
    gap: 80,
  },
  heart_container: {
    flexDirection: 'row',
    gap: 20,
  },
  heart: {
    width: 40,
    height: 33,
  },
  enemy: {
    position: 'absolute',
    width: 123,
    height: 72,
  },
  enemyImage: {
    width: 123,
    height: 72,
  },
});
