// question-card.tsx
import {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {quizQuestionsEasy} from '../../../../Data/quiz-easy.ts';
import {
  ScreenName,
  useNavigation,
} from '../../../../user/lib/hooks/use-navigation.tsx';

interface RenderQuestionCardProps {
  isQuizCompleted?: boolean;
  setIsQuizCompleted: (
    value: ((prevState: boolean) => boolean) | boolean,
  ) => void;
  score: number;
  setScore: (value: ((prevState: number) => number) | number) => void;
  feedbackMessage: string | null;
  setFeedbackMessage: (
    value: ((prevState: string | null) => string | null) | string | null,
  ) => void;
  timeOut: boolean;
  hintActive: boolean;
  setHintActive: (value: ((prevState: boolean) => boolean) | boolean) => void;
  highlightedOption: string | null;
  setHighlightedOption: (
    value: ((prevState: string | null) => string | null) | string | null,
  ) => void;
  setCoins: (value: ((prevState: number) => number) | number) => void;
  coins: number;
}

export const RenderQuestionCard = ({
  isQuizCompleted,
  setIsQuizCompleted,
  score,
  setScore,
  feedbackMessage,
  setFeedbackMessage,
  timeOut,
  hintActive,
  setHintActive,
  highlightedOption,
  setHighlightedOption,
  setCoins,
  coins,
}: RenderQuestionCardProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigation = useNavigation();
  const [hintUsed, setHintUsed] = useState(false);
  const currentQuestion = quizQuestionsEasy[currentQuestionIndex];

  const handleAnswerSelection = (isCorrect: boolean) => {
    if (isQuizCompleted) return;

    setHintActive(false);
    setHighlightedOption(null);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < quizQuestionsEasy.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizCompleted(true);
      setFeedbackMessage(
        `The quiz is complete! Your account: ${score + (isCorrect ? 1 : 0)}`,
      );
    }
  };

  const buyHint = () => {
    if (coins >= 100) {
      // Перевірка на недостатню кількість монет та чи вже використано підказку
      setCoins(prevCoins => prevCoins - 100);
      setHintActive(true);
      const correctAnswer = currentQuestion.options.find(
        option => option.isCorrect,
      );
      setHighlightedOption(correctAnswer?.label ?? null); // Підсвітка правильної відповіді
      setHintUsed(true); // Позначити, що підказка використана
      Alert.alert('You bought a hint!');
    } else {
      Alert.alert('Not enough coins to buy hints!');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg_image}
        source={require('../../../../assets/images/37369526_8512351.png')}>
        <View style={styles.content}>
          <Text style={styles.text}>{currentQuestion.question}</Text>
        </View>
      </ImageBackground>

      <View style={styles.buttons_container}>
        {currentQuestion.options.map(option => (
          <TouchableOpacity
            key={option.label}
            onPress={() => handleAnswerSelection(option.isCorrect)}>
            <ImageBackground
              style={styles.buttons}
              source={require('../../../../assets/images/buttons_true.png')}>
              <Text
                style={[
                  styles.text_buttons,
                  hintActive &&
                    option.label === highlightedOption && // Змінено на порівняння з текстом кнопки
                    styles.highlightedOption,
                ]}>
                {option.label}
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={buyHint} style={styles.buyHintButton}>
        <Text style={styles.buyHintButtonText}>Buy a hint 100</Text>
      </TouchableOpacity>

      {/* Модальне вікно з різними повідомленнями */}
      {feedbackMessage && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={!!feedbackMessage}
          onRequestClose={() => setFeedbackMessage(null)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.feedbackText}>
                {timeOut ? (
                  feedbackMessage
                ) : (
                  <View style={{alignItems: 'center', flexDirection: 'column'}}>
                    <Image
                      style={{width: 50, height: 47}}
                      source={require('../../../../assets/images/trophy-cup.png')}
                    />
                    <Text style={{textAlign: 'center'}}>
                      Congratulations!{'\n'}You passed the quiz!
                    </Text>
                  </View>
                )}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setFeedbackMessage(null);
                  if (isQuizCompleted) {
                    navigation.navigate(ScreenName.Menu);
                  }
                }}
                style={styles.closeButton}>
                <Text style={styles.closeButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: 20,
  },
  bg_image: {
    width: 378,
    height: 242,
    justifyContent: 'flex-end',
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
  buttons_container: {
    gap: 10,
  },
  buttons: {
    width: 288,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_buttons: {
    fontSize: 32,
    color: 'white',
  },
  feedbackText: {
    marginTop: 20,
    fontSize: 20,
    color: 'white', // Зелений для правильних відповідей, можна змінити на червоний для невірних
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // затемнення фону
  },
  modalContent: {
    width: 200,
    padding: 20,
    backgroundColor: 'rgba(164, 27, 50, 1)',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(121, 21, 38, 1)',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  highlightedOption: {
    fontSize: 32,
    color: 'lightgreen', // Виберіть колір для підсвітки
  },
  buyHintButton: {
    width: 250,
    height: 70,
    backgroundColor: 'rgba(164, 27, 50, 1)', // Зелений колір для кнопки
    borderRadius: 10,
    borderEndWidth: 3,
    borderBottomWidth: 3,
    borderBottomColor: 'rgba(121, 21, 38, 1)',
    borderEndColor: 'rgba(121, 21, 38, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyHintButtonText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
});
