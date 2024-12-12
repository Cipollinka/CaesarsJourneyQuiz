// Easy.tsx
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Timer} from './timer-header.tsx';
import {RenderQuestionCard} from './question-card.tsx';
import {useEffect, useState} from 'react';

export const Hard = () => {
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [timerLeft, setTimerLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [hintActive, setHintActive] = useState(false);
  const [highlightedOption, setHighlightedOption] = useState<string | null>(
    null,
  );
  const [timeOut, setTimeOut] = useState(false); // новий стан для контролю закінчення часу
  const [coins, setCoins] = useState(300); // Додайте цю строку
  // useEffect(() => {
  //   if (timerLeft <= 0) {
  //     setTimeOut(true); // встановлюємо timeOut в true, коли таймер закінчується
  //     setIsQuizCompleted(true); // завершуємо вікторину
  //     setFeedbackMessage(`Time is up!${score}`); // повідомлення для закінчення часу
  //     return;
  //   }
  //
  //   const timer = setInterval(() => {
  //     setTimerLeft(prevTime => prevTime - 1);
  //   }, 1000);
  //
  //   return () => clearInterval(timer);
  // }, [timerLeft, score]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <View>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../../../assets/images/background.png')}>
        <View style={styles.container}>
          <Timer
            coins={coins}
            setCoins={setCoins}
            formatTime={formatTime}
            timerLeft={timerLeft}
            setTimerLeft={setTimerLeft}
          />
          <RenderQuestionCard
            setCoins={setCoins}
            coins={coins}
            hintActive={hintActive}
            setHintActive={setHintActive}
            highlightedOption={highlightedOption}
            setHighlightedOption={setHighlightedOption}
            score={score}
            setScore={setScore}
            isQuizCompleted={isQuizCompleted}
            feedbackMessage={feedbackMessage}
            setFeedbackMessage={setFeedbackMessage}
            setIsQuizCompleted={setIsQuizCompleted}
            timeOut={timeOut} // передаємо новий стан до RenderQuestionCard
          />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    gap: 20,
  },
});
