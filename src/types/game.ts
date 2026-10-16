/**
 * Game Types for Văn Du Kí - Thăng Long Tứ Trấn
 */

export type CharacterId = 'chep_su' | 'thi_si' | 'su_gia' | 'ke_chuyen';

export interface Character {
  id: CharacterId;
  name: string;
  roleTitle: string;
  avatarIcon: string;
  quote: string;
  description: string;
  guideGreeting: string;
  guideMotivation: string;
  accentColor: string;
}

export type Direction = 'Đông' | 'Tây' | 'Nam' | 'Bắc';

export type StationStatus = 'unexplored' | 'in_progress' | 'completed';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuestionOption[];
  hint?: string;
  sourceCitation: string;
}

export interface ObservationChallenge {
  title: string;
  prompt: string;
  targetArtifact: string;
  clue: string;
  question: string;
  options: QuestionOption[];
  explanation: string;
}

export interface StoryReading {
  title: string;
  authorOrSource: string;
  era: string;
  excerpt: string;
  historicalContext: string;
  reflectionQuestion: string;
}

export interface LiteraryWork {
  title: string;
  author: string;
  genre: string;
  period: string;
  source: string;
  originalText?: string;
  translatedText: string;
  analysis: string;
  famousQuote?: string;
}

export interface RhetoricalDevice {
  name: string;
  example: string;
  effect: string;
}

export interface LiteraryGlossaryItem {
  term: string;
  hanTu?: string;
  meaning: string;
  literaryContext: string;
}

export interface LiteratureKnowledge {
  genreDefinition: {
    genreName: string;
    description: string;
    keyCharacteristics: string[];
  };
  rhetoricalDevices: RhetoricalDevice[];
  glossary: LiteraryGlossaryItem[];
  pedagogicalTakeaway: string;
}

export interface StationData {
  id: string;
  name: string;
  guardianDirection: Direction;
  deity: string;
  address: string;
  district: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  sealName: string;
  sealChinese: string;
  badgeId: string;
  badgeName: string;
  badgeDescription: string;
  shortDescription: string;
  architecturalFeature: string;
  etiquetteTip: string;
  story: StoryReading;
  literaryWork: LiteraryWork;
  literatureKnowledge: LiteratureKnowledge;
  observation: ObservationChallenge;
  quiz: QuizQuestion[];
  finalChallengePrompt: string;
}

export interface Badge {
  id: string;
  name: string;
  stationId?: string;
  isGrandMaster?: boolean;
  sealText: string;
  description: string;
  requirement: string;
  unlockedAt?: string;
}

export interface PlayerProgress {
  nickname: string;
  isGuest: boolean;
  characterId: CharacterId;
  points: number;
  completedStations: string[];
  inProgressStations: string[];
  unlockedBadges: string[];
  stationScores: Record<string, number>;
  streakDays: number;
  lastActiveDate: string;
  startedAt: string;
}

export type AppView = 
  | 'welcome'
  | 'character_select'
  | 'map'
  | 'station_detail'
  | 'badges'
  | 'leaderboard'
  | 'literature';

export interface LeaderboardEntry {
  rank: number;
  nickname: string;
  characterName: string;
  points: number;
  stationsCount: number;
  isCurrentPlayer?: boolean;
  title: string;
}
