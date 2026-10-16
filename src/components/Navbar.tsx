import React from 'react';
import { Volume2, VolumeX, RotateCcw, Award, Map as MapIcon, Trophy, User } from 'lucide-react';
import { AppView, PlayerProgress } from '../types/game';
import { calculatePlayerRank } from '../data/stations';
import { sounds } from '../utils/audio';

interface NavbarProps {
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  player: PlayerProgress;
  isMuted: boolean;
  setIsMuted: (muted: boolean) => void;
  onOpenResetModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  player,
  isMuted,
  setIsMuted,
  onOpenResetModal,
}) => {
  const currentRank = calculatePlayerRank(player.points, player.completedStations.length);

  const handleToggleSound = () => {
    const muted = sounds.toggleMute();
    setIsMuted(muted);
  };

  const navItems: { view: AppView; label: string; icon: React.ReactNode }[] = [
    { view: 'map', label: 'Bản đồ Tứ Trấn', icon: <MapIcon className="w-4 h-4" /> },
    { view: 'badges', label: 'Kho di sản', icon: <Award className="w-4 h-4" /> },
    { view: 'leaderboard', label: 'Bảng xếp hạng', icon: <Trophy className="w-4 h-4" /> },
    { view: 'character_select', label: 'Nhân vật', icon: <User className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F0]/95 backdrop-blur-md border-b border-[#E5DECF] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Single Wordmark */}
        <button
          onClick={() => {
            sounds.playClick();
            setCurrentView('map');
          }}
          className="flex items-center gap-2.5 text-left cursor-pointer group"
          title="Trở về trang bản đồ"
        >
          <div className="w-8 h-8 rounded border border-[#991B1B] bg-[#991B1B]/10 flex items-center justify-center text-[#991B1B] font-bold text-sm tracking-wider shadow-xs">
            VDK
          </div>
          <div className="flex flex-col">
            <span className="font-title text-lg font-bold tracking-tight text-[#1C1917] group-hover:text-[#991B1B] transition-colors whitespace-nowrap">
              Văn Du Kí
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#57534E]">
          {navItems.map((item) => {
            const isActive = currentView === item.view;
            return (
              <button
                key={item.view}
                onClick={() => {
                  sounds.playClick();
                  setCurrentView(item.view);
                }}
                className={`flex items-center gap-1.5 py-1 transition-colors whitespace-nowrap cursor-pointer relative ${
                  isActive
                    ? 'text-[#991B1B] font-semibold'
                    : 'text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#991B1B] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Player Info & Actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Points & Station count */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-[#F2EDE1] rounded border border-[#E5DECF] text-xs font-medium text-[#44403C]">
            <span className="tabular-nums font-semibold text-[#991B1B]">
              {player.points}
            </span>
            <span className="text-[#A8A29E]">·</span>
            <span className="text-[#78716C]">{currentRank}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleToggleSound}
            aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
            className="w-9 h-9 flex items-center justify-center rounded border border-[#E5DECF] bg-[#FAF7F0] text-[#57534E] hover:text-[#1C1917] hover:bg-[#F2EDE1] transition-colors cursor-pointer"
            title={isMuted ? 'Bật hiệu ứng âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#B45309]" />}
          </button>

          {/* Reset Progress Modal trigger */}
          <button
            onClick={() => {
              sounds.playClick();
              onOpenResetModal();
            }}
            aria-label="Đặt lại hành trình"
            className="w-9 h-9 flex items-center justify-center rounded border border-[#E5DECF] bg-[#FAF7F0] text-[#78716C] hover:text-[#991B1B] hover:bg-[#FBEAE8] transition-colors cursor-pointer"
            title="Đặt lại tiến trình"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mobile Sub-Navigation Bar */}
      <div className="flex md:hidden border-t border-[#EFE9DD] bg-[#F7F3E9] px-2 py-1.5 justify-around items-center text-xs">
        {navItems.map((item) => {
          const isActive = currentView === item.view;
          return (
            <button
              key={item.view}
              onClick={() => {
                sounds.playClick();
                setCurrentView(item.view);
              }}
              className={`flex flex-col items-center gap-0.5 py-1 px-2 rounded transition-colors ${
                isActive ? 'text-[#991B1B] font-semibold' : 'text-[#78716C]'
              }`}
            >
              {item.icon}
              <span className="text-[11px] whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
