type Source = {
  id: number;
  title: string;
  dateOfCreation: string;
  description: string;
  interestingFact: string;
};

const sources: Source[] = [
  {
    id: 1,
    title: 'Commentarii de Bello Gallico (The Gallic Wars)',
    dateOfCreation: '58-50 BCE',
    description:
      "Written by Julius Caesar himself, the Commentarii de Bello Gallico is an account of Caesar’s campaigns during the Gallic Wars (58-50 BCE), in which he details his military strategies, battles, and political decisions. The work is composed of eight books, with each book covering a year of the war. The first seven books were written by Caesar, while the eighth was likely written by his lieutenant Aulus Hirtius after Caesar's death. This work is not just a military report but also a carefully constructed piece of propaganda, designed to justify Caesar’s actions and elevate his status in Rome. Caesar portrays himself as a skilled and just leader, a protector of Rome's interests in Gaul, and a commander acting in self-defense against aggressive Gallic tribes. The text is written in clear, concise Latin, making it a favorite for students of the language. It also provides a rare glimpse into Caesar's personality, his view of Roman imperialism, and the political climate of the late Roman Republic.",
    interestingFact:
      'Caesar refers to himself in the third person throughout the text, giving the work a seemingly objective tone, even though it is intended to glorify his achievements.',
  },
  {
    id: 2,
    title: 'Commentarii de Bello Civili (The Civil War)',
    dateOfCreation: '49-48 BCE',
    description:
      'Commentarii de Bello Civili is another autobiographical work by Julius Caesar, detailing the events of the Roman Civil War between himself and Pompey the Great. Like his earlier work on the Gallic Wars, this commentary was designed as political propaganda to justify his actions, particularly his decision to cross the Rubicon and engage in civil war against the Roman Senate. The work is composed of three books, which recount Caesar’s campaigns in Italy, Spain, and Greece, ending just before the decisive Battle of Pharsalus in 48 BCE. The narrative style mirrors that of his Gallic War commentaries, written in the third person and with a straightforward, almost detached tone. Caesar emphasizes his clemency towards his enemies and portrays Pompey and his allies as corrupt and tyrannical, while presenting himself as a defender of the Roman people.',
    interestingFact:
      'The Commentarii de Bello Civili abruptly ends before the conclusion of the civil war, likely because Caesar was still engaged in the conflict at the time of writing.',
  },
  {
    id: 3,
    title: "Plutarch's Life of Caesar",
    dateOfCreation: 'Early 2nd century CE',
    description:
      'Plutarch’s Life of Caesar is part of his Parallel Lives, a series of biographies of famous Greek and Roman men. In this biography, Plutarch examines the life and character of Julius Caesar, focusing on his rise to power, his military campaigns, and his political ambitions. Plutarch, a Greek historian and philosopher, contrasts Caesar’s life with that of Alexander the Great, highlighting their military genius and imperial ambitions. While Plutarch is generally sympathetic to Caesar, he does not shy away from discussing his flaws, including his ambition and his role in the demise of the Roman Republic.',
    interestingFact:
      "Plutarch claims that Caesar was so bold that, during a sea journey, he once told the ship’s captain, 'Fear nothing, you carry Caesar and his fortunes!'",
  },
  {
    id: 4,
    title: "Suetonius' The Lives of the Twelve Caesars",
    dateOfCreation: '121 CE',
    description:
      "Suetonius' The Lives of the Twelve Caesars is one of the most famous sources for the life of Julius Caesar. Written during the reign of Emperor Hadrian, this work provides biographies of the first twelve Roman emperors, beginning with Julius Caesar. Suetonius offers a comprehensive account of Caesar’s life, from his youth to his political career, military conquests, and eventual assassination. His writing style combines historical facts with anecdotes, gossip, and sometimes sensational details about Caesar’s personal life, including his alleged numerous love affairs and his ambition for absolute power.",
    interestingFact:
      "Suetonius claims that when Caesar was assassinated, he did not say the famous line 'Et tu, Brute?' but died in silence.",
  },
  {
    id: 5,
    title: "Appian's Roman History (Civil Wars)",
    dateOfCreation: '2nd century CE',
    description:
      "Appian’s Roman History, particularly the books on the Civil Wars, provides a detailed account of the internal conflicts that plagued Rome in the late Republic, including Julius Caesar's role in the civil war against Pompey. Appian, a Greek historian writing in the Roman Empire, is known for his detailed descriptions of battles and political maneuvering. His account of Caesar’s rise to power and the subsequent civil wars provides an in-depth look at the political complexities of the time.",
    interestingFact:
      'Appian reports that Caesar wept upon seeing a statue of Alexander the Great, lamenting that he had achieved so little by the same age at which Alexander had conquered most of the known world.',
  },
  {
    id: 6,
    title: 'Cicero’s Letters',
    dateOfCreation: '44-43 BCE',
    description:
      'The letters of Marcus Tullius Cicero, one of Rome’s greatest orators and statesmen, provide a personal perspective on Julius Caesar. Cicero, a contemporary and occasional critic of Caesar, wrote extensively to his friends and allies, including many letters to Atticus and others that mention Caesar’s political and military activities. These letters, written during the final years of the Roman Republic, offer insight into the political machinations of the time and Cicero’s complex feelings towards Caesar.',
    interestingFact:
      "Cicero once famously remarked that Caesar had 'all the qualities of a great man, except moderation.'",
  },
  {
    id: 7,
    title: 'Lucan’s Pharsalia',
    dateOfCreation: '61-65 CE',
    description:
      'Pharsalia, written by the Roman poet Lucan, is an epic poem that recounts the civil war between Julius Caesar and Pompey, focusing particularly on the Battle of Pharsalus. Unlike many other sources that depict Caesar in a positive or neutral light, Lucan presents him as a ruthless and ambitious tyrant, whose actions led to the destruction of the Roman Republic.',
    interestingFact:
      'Lucan was a nephew of the philosopher Seneca and became involved in a conspiracy against the Emperor Nero. He was forced to commit suicide in 65 CE, making his critique of power in Pharsalia all the more poignant.',
  },
  {
    id: 8,
    title: "Dio Cassius' Roman History",
    dateOfCreation: 'Early 3rd century CE',
    description:
      'Dio Cassius, a Roman senator and historian of Greek origin, wrote an extensive Roman History covering the period from the founding of Rome to around 229 CE. His account of Julius Caesar’s life and career is among the most detailed and offers a comprehensive view of the political, military, and personal aspects of Caesar’s rise and fall. Dio Cassius provides a balanced narrative, acknowledging both Caesar’s military genius and his role in undermining the Roman Republic.',
    interestingFact:
      'Dio Cassius reports that Caesar was offered a diadem (a symbol of kingship) by Mark Antony during the Lupercalia festival, but he refused it, an event that was seen as a test of his intentions to become king.',
  },
  {
    id: 9,
    title: 'Sallust’s The Conspiracy of Catiline',
    dateOfCreation: '42-40 BCE',
    description:
      'Although Sallust’s The Conspiracy of Catiline primarily focuses on the failed conspiracy of Lucius Sergius Catiline to overthrow the Roman government in 63 BCE, it offers valuable insights into Julius Caesar’s political career during his early years. Caesar’s political maneuvers during the trial of the conspirators reveal his ambition and his desire to position himself as a defender of popular rights.',
    interestingFact:
      'Sallust was himself a supporter of Caesar and was appointed governor of Africa Nova after Caesar’s victory in the civil war.',
  },
  {
    id: 10,
    title: 'Caesar Against Rome: The Great Roman Civil War by Ramon L. Jiménez',
    dateOfCreation: '2000',
    description:
      'Ramon L. Jiménez’s Caesar Against Rome is a modern historical work that explores Julius Caesar’s role in the Roman civil war and the eventual fall of the Republic. The book provides a detailed analysis of Caesar’s campaigns, his political strategies, and his impact on the Roman political system. Jiménez takes a critical look at Caesar’s legacy, questioning the idea of him as a hero and instead examining the destruction he brought upon the Roman Republic.',
    interestingFact:
      'Jiménez argues that Caesar’s ambition for power was not just personal but was also a reflection of the larger systemic problems within the Roman Republic, which made the civil war inevitable.',
  },
];

export default sources;
