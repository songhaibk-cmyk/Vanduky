import { PlayerProgress, LeaderboardEntry, CharacterId } from '../types/game';
import { CHARACTERS } from '../data/characters';
import { calculatePlayerRank } from '../data/stations';

const STORAGE_KEY = 'van_du_ki_progress_v1';

export const DEFAULT_PLAYER_PROGRESS: PlayerProgress = {
  nickname: '',
  isGuest: false,
  characterId: 'ke_chuyen',
  points: 0,
  completedStations: [],
  inProgressStations: [],
  unlockedBadges: [],
  stationScores: {},
  streakDays: 1,
  lastActiveDate: new Date().toISOString().split('T')[0],
  startedAt: new Date().toISOString(),
};

export function loadPlayerProgress(): PlayerProgress {
  if (typeof window === 'undefined') return DEFAULT_PLAYER_PROGRESS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PLAYER_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PLAYER_PROGRESS,
      ...parsed,
    };
  } catch (err) {
    console.error('Error loading progress from storage:', err);
    return DEFAULT_PLAYER_PROGRESS;
  }
}

export function savePlayerProgress(progress: PlayerProgress): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Error saving progress to storage:', err);
  }
}

export function resetPlayerProgress(): PlayerProgress {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
  return { ...DEFAULT_PLAYER_PROGRESS };
}

/**
 * Sample Leaderboard with realistic fellow heritage explorers
 * Dynamically computes player position
 */
export const SAMPLE_EXPLORERS: Omit<LeaderboardEntry, 'isCurrentPlayer'>[] = [
  {
    rank: 1,
    nickname: 'Thăng Long Ký Sự',
    characterName: 'Người chép sử',
    points: 480,
    stationsCount: 4,
    title: 'Người giữ chuyện Thăng Long',
  },
  {
    rank: 2,
    nickname: 'Hương Trầm Phố Cổ',
    characterName: 'Thi sĩ du hành',
    points: 440,
    stationsCount: 4,
    title: 'Người giữ chuyện Thăng Long',
  },
  {
    rank: 3,
    nickname: 'Gió Hồ Tây',
    characterName: 'Người kể chuyện',
    points: 390,
    stationsCount: 4,
    title: 'Người giữ chuyện Thăng Long',
  },
  {
    rank: 4,
    nickname: 'Bút Nghiên Cổ Đô',
    characterName: 'Sứ giả',
    points: 320,
    stationsCount: 3,
    title: 'Người khám phá di sản',
  },
  {
    rank: 5,
    nickname: 'Lữ Khách Đan Phượng',
    characterName: 'Người chép sử',
    points: 260,
    stationsCount: 3,
    title: 'Người khám phá di sản',
  },
  {
    rank: 6,
    nickname: 'Bạch Vân Cư Sĩ',
    characterName: 'Thi sĩ du hành',
    points: 190,
    stationsCount: 2,
    title: 'Người đọc chuyện',
  },
  {
    rank: 7,
    nickname: 'Hà Thành Mộng Lục',
    characterName: 'Người kể chuyện',
    points: 120,
    stationsCount: 1,
    title: 'Người đọc chuyện',
  },
];

export function getFullLeaderboard(currentPlayer: PlayerProgress): LeaderboardEntry[] {
  const currentCharacter = CHARACTERS.find((c) => c.id === (currentPlayer.characterId as CharacterId));
  const currentTitle = calculatePlayerRank(currentPlayer.points, currentPlayer.completedStations.length);

  const playerEntry: LeaderboardEntry = {
    rank: 0,
    nickname: currentPlayer.nickname.trim() ? currentPlayer.nickname : 'Bạn (Lữ khách hiện tại)',
    characterName: currentCharacter ? currentCharacter.name : 'Người kể chuyện',
    points: currentPlayer.points,
    stationsCount: currentPlayer.completedStations.length,
    isCurrentPlayer: true,
    title: currentTitle,
  };

  const combined = [...SAMPLE_EXPLORERS, playerEntry];
  // Sort descending by points, then stations
  combined.sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    return b.stationsCount - a.stationsCount;
  });

  return combined.map((entry, index) => ({
    ...entry,
    rank: index + 1,
  }));
}
