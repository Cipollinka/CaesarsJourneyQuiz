import AsyncStorage from '@react-native-async-storage/async-storage';

const getRandomScore = () => Math.floor(Math.random() * 100) + 1;

const generateQuizResults = async (score: number | undefined) => {
  const today = new Date().toISOString().split('T')[0]; // Поточна дата у форматі YYYY-MM-DD
  const newScore = score ?? getRandomScore(); // Використовуємо score, якщо він наданий, або генеруємо випадковий

  try {
    // Отримуємо попередні результати з AsyncStorage
    const storedResults = await AsyncStorage.getItem('quizResults');
    const quizResults = storedResults ? JSON.parse(storedResults) : [];

    // Перевіряємо, чи вже є запис для поточного дня
    const existingResult = quizResults.find(
      (result: {date: string}) => result.date === today,
    );

    if (!existingResult) {
      // Додаємо новий запис для поточного дня
      quizResults.push({
        id: quizResults.length.toString(),
        date: today,
        score: newScore,
      });

      // Зберігаємо оновлені результати в AsyncStorage
      await AsyncStorage.setItem('quizResults', JSON.stringify(quizResults));
    }

    return quizResults; // Повертаємо всі результати
  } catch (error) {
    console.error('Error saving quiz results:', error);
    return [];
  }
};

export default generateQuizResults;
