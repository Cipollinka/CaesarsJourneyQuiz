// quizQuestions.ts

export interface QuizQuestionEasy {
  id: number;
  question: string;
  options: {label: string; isCorrect: boolean}[];
}

export const quizQuestionsEasy: QuizQuestionEasy[] = [
  {
    id: 1,
    question:
      'Julius Caesar wrote the Commentarii de Bello Gallico to justify his campaigns in Gaul.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
  {
    id: 2,
    question: 'Caesar crossed the Rubicon in 50 BCE.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 3,
    question:
      'The Battle of Pharsalus was fought between Caesar and Cleopatra.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 4,
    question:
      'Plutarch compared the lives of Julius Caesar and Alexander the Great.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
  {
    id: 5,
    question:
      'The Siege of Alexandria took place in Egypt during Caesar’s campaign against Pompey.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 6,
    question:
      'The city of Massilia (modern-day Marseille) sided with Julius Caesar during the civil war.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 7,
    question: 'Julius Caesar was assassinated on the Ides of March, 44 BCE.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
  {
    id: 8,
    question: 'Caesar was involved in a relationship with Cleopatra of Egypt.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
  {
    id: 9,
    question:
      'Cicero admired Caesar’s actions during the civil war without criticism.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 10,
    question: 'Lucan’s Pharsalia portrayed Caesar as a heroic figure.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 11,
    question:
      'The Commentarii de Bello Civili focused on Caesar’s Gallic campaigns.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 12,
    question:
      'Suetonius’ biography of Julius Caesar is part of The Lives of the Twelve Caesars.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
  {
    id: 13,
    question:
      'Caesar named himself Emperor of Rome after his victory over Pompey.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 14,
    question: 'The Battle of Dyrrhachium was a decisive victory for Caesar.',
    options: [
      {label: 'True', isCorrect: false},
      {label: 'False', isCorrect: true},
    ],
  },
  {
    id: 15,
    question:
      'Dio Cassius wrote that Caesar was offered a diadem during the Lupercalia festival.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
  {
    id: 16,
    question:
      'Appian’s Roman History provides an account of Caesar’s role in the Roman civil war.',
    options: [
      {label: 'True', isCorrect: true},
      {label: 'False', isCorrect: false},
    ],
  },
];
