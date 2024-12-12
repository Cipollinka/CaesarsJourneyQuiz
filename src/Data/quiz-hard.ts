// quizQuestions.ts

export interface QuizQuestionHard {
  id: number;
  question: string;
  options: {label: string; isCorrect: boolean}[];
}

export const quizQuestionsHard: QuizQuestionHard[] = [
  {
    id: 1,
    question:
      'In which year did Caesar cross the Rubicon, marking the start of the Roman Civil War?',
    options: [
      {label: '49 BCE', isCorrect: true},
      {label: '52 BCE', isCorrect: false},
      {label: '46 BCE', isCorrect: false},
    ],
  },
  {
    id: 2,
    question:
      'Who wrote The Conspiracy of Catiline, which discusses Caesar’s early political career?',
    options: [
      {label: 'Plutarch', isCorrect: false},
      {label: 'Sallust', isCorrect: true},
      {label: 'Cicero', isCorrect: false},
    ],
  },
  {
    id: 3,
    question:
      'Which battle marked the turning point of the civil war, where Caesar defeated Pompey?',
    options: [
      {label: 'Battle of Dyrrhachium', isCorrect: false},
      {label: 'Battle of Massilia', isCorrect: false},
      {label: 'Battle of Pharsalus', isCorrect: true},
    ],
  },
  {
    id: 4,
    question: 'How many books make up Caesar’s Commentarii de Bello Gallico?',
    options: [
      {label: '6', isCorrect: false},
      {label: '8', isCorrect: true},
      {label: '10', isCorrect: false},
    ],
  },
  {
    id: 5,
    question: 'Who was Caesar’s naval commander during the Siege of Massilia?',
    options: [
      {label: 'Mark Antony', isCorrect: false},
      {label: 'Decimus Brutus', isCorrect: true},
      {label: 'Gaius Trebonius', isCorrect: false},
    ],
  },
  {
    id: 6,
    question:
      'Plutarch’s Life of Caesar is paired with the biography of which famous historical figure?',
    options: [
      {label: 'Alexander the Great', isCorrect: true},
      {label: 'Hannibal', isCorrect: false},
      {label: 'Augustus', isCorrect: false},
    ],
  },
  {
    id: 7,
    question:
      'Which author described Caesar as a tyrant in his epic poem Pharsalia?',
    options: [
      {label: 'Suetonius', isCorrect: false},
      {label: 'Lucan', isCorrect: true},
      {label: 'Appian', isCorrect: false},
    ],
  },
  {
    id: 8,
    question:
      'Which Roman city did Caesar use as his winter quarters during the civil war?',
    options: [
      {label: 'Venusia', isCorrect: true},
      {label: 'Dyrrhachium', isCorrect: false},
      {label: 'Brundisium', isCorrect: false},
    ],
  },
  {
    id: 9,
    question:
      'Who wrote The Lives of the Twelve Caesars, which includes a biography of Caesar?',
    options: [
      {label: 'Dio Cassius', isCorrect: false},
      {label: 'Suetonius', isCorrect: true},
      {label: 'Tacitus', isCorrect: false},
    ],
  },
  {
    id: 10,
    question: "Where did Julius Caesar's assassination take place?",
    options: [
      {label: 'The Senate House (Curia of Pompey)', isCorrect: true},
      {label: 'The Forum', isCorrect: false},
      {label: 'The Theater of Marcellus', isCorrect: false},
    ],
  },
  {
    id: 11,
    question:
      'Which ancient historian reported that Caesar wept upon seeing a statue of Alexander the Great?',
    options: [
      {label: 'Appian', isCorrect: true},
      {label: 'Plutarch', isCorrect: false},
      {label: 'Sallust', isCorrect: false},
    ],
  },
  {
    id: 12,
    question:
      'In which city did Caesar pursue Pompey after the latter’s defeat at Pharsalus?',
    options: [
      {label: 'Alexandria', isCorrect: true},
      {label: 'Massilia', isCorrect: false},
      {label: 'Carthage', isCorrect: false},
    ],
  },
  {
    id: 13,
    question:
      'Which Roman leader did Caesar face during the Battle of Dyrrhachium?',
    options: [
      {label: 'Crassus', isCorrect: false},
      {label: 'Pompey', isCorrect: true},
      {label: 'Cato the Younger', isCorrect: false},
    ],
  },
  {
    id: 14,
    question:
      'According to Suetonius, what did Caesar allegedly say before dying?',
    options: [
      {label: '“Et tu, Brute?”', isCorrect: false},
      {label: 'Nothing', isCorrect: true},
      {label: '“You too, Cassius?”', isCorrect: false},
    ],
  },
  {
    id: 15,
    question:
      'Who likely wrote the eighth book of Commentarii de Bello Gallico after Caesar’s death?',
    options: [
      {label: 'Decimus Brutus', isCorrect: false},
      {label: 'Aulus Hirtius', isCorrect: true},
      {label: 'Mark Antony', isCorrect: false},
    ],
  },
  {
    id: 16,
    question:
      'Which Roman senator wrote extensively about Caesar in his letters, expressing mixed feelings about him?',
    options: [
      {label: 'Sallust', isCorrect: false},
      {label: 'Cicero', isCorrect: true},
      {label: 'Horace', isCorrect: false},
    ],
  },
];
