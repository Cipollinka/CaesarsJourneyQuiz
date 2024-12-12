import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import generateQuizResults from './generate-list-score.ts';
import {useUser} from '../../user';

interface QuizResult {
  id: string;
  index: number;
  date: string;
  score: number;
}

export const ScoreboardPanel = () => {
  const {user} = useUser();
  const [quizResults, setQuizResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const fetchQuizResults = async () => {
      const results = generateQuizResults(user?.score); // передаємо поточний бал користувача
      setQuizResults(await results);
    };

    fetchQuizResults();
  }, [user?.score]); // викликається щоразу, коли змінюється user.score

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {quizResults.map((item, index) => (
        <View key={item.id} style={styles.flatList_container}>
          <ImageBackground
            style={styles.item_result}
            source={require('../../assets/images/buttons.png')}
            resizeMode="contain">
            <SafeAreaView style={{flexDirection: 'row'}}>
              <Text style={{color: 'white'}}>{index + 1}.</Text>
              <Text style={{color: 'white'}}>{item.date}</Text>
            </SafeAreaView>
            <Text style={{color: 'white'}}>{item.score}</Text>
          </ImageBackground>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item_result: {
    width: 250,
    paddingRight: 20,
    paddingLeft: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
  },
  flatList_container: {
    alignItems: 'center',
  },
});
