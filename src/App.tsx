import React, { useState, useEffect } from 'react';
import { AppView, PlayerProgress, CharacterId } from './types/game';
import { 
  loadPlayerProgress, 
  savePlayerProgress, 
  resetPlayerProgress,
  DEFAULT_PLAYER_PROGRESS 
} from './utils/storage';
import { getStationById, ALL_BADGES } from './data/stations';
import { sounds } from './utils/audio';

import { Navbar } from './components/Navbar';
import { WelcomeScreen } from './components/WelcomeScreen';
import { CharacterSelect } from './components/CharacterSelect';
import { MapScreen } from './components/MapScreen';
import { StationModal } from './components/StationModal';
import { BadgesScreen } from './components/BadgesScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { LiteratureLibrary } from './components/LiteratureLibrary';
import { ResetConfirmModal } from './components/ResetConfirmModal';

export default function App() {
  const [player, setPlayer] = useState<PlayerProgress>(DEFAULT_PLAYER_PROGRESS);
  const [currentView, setCurrentView] = useState<AppView>('welcome');
  const [activeStationId, setActiveStationId] = useState<string | null>(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Initialize from localStorage
  useEffect(() => {
    const saved = loadPlayerProgress();
    setPlayer(saved);
    setIsMuted(sounds.getMuted());
    setIsLoaded(true);

    // If player already has explored stations or entered a nickname, resume at map
    if (saved.nickname || saved.completedStations.length > 0) {
      setCurrentView('map');
    }
  }, []);

  // Save to localStorage on state change
  useEffect(() => {
    if (isLoaded) {
      savePlayerProgress(player);
    }
  }, [player, isLoaded]);

  // Handler: Start with entered nickname
  const handleStartWithNickname = (nickname: string) => {
    setPlayer((prev) => ({
      ...prev,
      nickname,
      isGuest: false,
    }));
    setCurrentView('character_select');
  };

  // Handler: Explore as guest
  const handleExploreFirst = () => {
    setPlayer((prev) => ({
      ...prev,
      nickname: 'Lữ khách ẩn danh',
      isGuest: true,
    }));
    setCurrentView('character_select');
  };

  // Handler: Change character
  const handleSelectCharacter = (characterId: CharacterId) => {
    setPlayer((prev) => ({
      ...prev,
      characterId,
    }));
  };

  // Handler: Finish character selection and move to map
  const handleConfirmCharacter = () => {
    setCurrentView('map');
  };

  // Handler: Open station modal
  const handleOpenStation = (stationId: string) => {
    setActiveStationId(stationId);
    // Mark station in progress if not already completed
    if (!player.completedStations.includes(stationId)) {
      setPlayer((prev) => ({
        ...prev,
        inProgressStations: Array.from(new Set([...prev.inProgressStations, stationId])),
      }));
    }
  };

  // Handler: Complete a station
  const handleCompleteStation = (stationId: string, earnedPoints: number) => {
    const station = getStationById(stationId);
    if (!station) return;

    setPlayer((prev) => {
      const newCompleted = Array.from(new Set([...prev.completedStations, stationId]));
      const newInProgress = prev.inProgressStations.filter((id) => id !== stationId);
      
      const newBadges = new Set(prev.unlockedBadges);
      newBadges.add(station.badgeId);

      // If all 4 stations are completed, award master badge!
      if (newCompleted.length >= 4) {
        newBadges.add('badge_nguoi_giu_chuyen');
      }

      const prevStationScore = prev.stationScores[stationId] || 0;
      const pointDifference = Math.max(0, earnedPoints - prevStationScore);

      return {
        ...prev,
        completedStations: newCompleted,
        inProgressStations: newInProgress,
        unlockedBadges: Array.from(newBadges),
        points: prev.points + pointDifference,
        stationScores: {
          ...prev.stationScores,
          [stationId]: Math.max(prevStationScore, earnedPoints),
        },
      };
    });
  };

  // Handler: Confirm Reset
  const handleConfirmReset = () => {
    const fresh = resetPlayerProgress();
    setPlayer(fresh);
    setIsResetModalOpen(false);
    setActiveStationId(null);
    setCurrentView('welcome');
    sounds.playClick();
  };

  const selectedStationData = activeStationId ? getStationById(activeStationId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#1C1917] selection:bg-[#B45309]/20 selection:text-[#7F1D1D]">
      {/* Top Navigation */}
      {currentView !== 'welcome' && (
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          player={player}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
          onOpenResetModal={() => setIsResetModalOpen(true)}
        />
      )}

      {/* Main View Router */}
      <main className="flex-1">
        {currentView === 'welcome' && (
          <WelcomeScreen
            onStartWithNickname={handleStartWithNickname}
            onExploreFirst={handleExploreFirst}
            existingNickname={player.nickname}
          />
        )}

        {currentView === 'character_select' && (
          <CharacterSelect
            selectedId={player.characterId}
            onSelectCharacter={handleSelectCharacter}
            onConfirm={handleConfirmCharacter}
            nickname={player.nickname}
          />
        )}

        {currentView === 'map' && (
          <MapScreen
            player={player}
            onSelectStation={handleOpenStation}
            onOpenBadges={() => setCurrentView('badges')}
          />
        )}

        {currentView === 'badges' && (
          <BadgesScreen
            player={player}
            onNavigateToMap={() => setCurrentView('map')}
          />
        )}

        {currentView === 'literature' && (
          <LiteratureLibrary
            onSelectStation={handleOpenStation}
            onNavigateToMap={() => setCurrentView('map')}
          />
        )}

        {currentView === 'leaderboard' && (
          <LeaderboardScreen
            player={player}
            onNavigateToMap={() => setCurrentView('map')}
          />
        )}
      </main>

      {/* Station Modal (when station selected) */}
      {selectedStationData && (
        <StationModal
          station={selectedStationData}
          player={player}
          onClose={() => setActiveStationId(null)}
          onCompleteStation={handleCompleteStation}
        />
      )}

      {/* Reset Confirmation Modal */}
      <ResetConfirmModal
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirmReset={handleConfirmReset}
      />

      {/* Footer */}
      <footer className="border-t border-[#E5DECF] py-6 text-center text-xs text-[#78716C] bg-[#FAF7F0] space-y-1">
        <p className="font-serif">
          Văn Du Kí · Trò chơi nhập vai di sản khám phá Thăng Long Tứ Trấn
        </p>
        <p className="text-[11px] text-[#A8A29E]">
          Tư liệu lịch sử trích lục theo Đại Việt Sử ký Toàn thư, Việt điện u linh tập và Thăng Long cổ tích khảo.
        </p>
      </footer>
    </div>
  );
}
