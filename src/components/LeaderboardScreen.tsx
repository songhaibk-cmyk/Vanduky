import React from 'react';
import { Trophy, Medal, MapPin, Award, Info, ArrowRight, User } from 'lucide-react';
import { PlayerProgress, LeaderboardEntry } from '../types/game';
import { getFullLeaderboard } from '../utils/storage';
import { sounds } from '../utils/audio';

interface LeaderboardScreenProps {
  player: PlayerProgress;
  onNavigateToMap: () => void;
}

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({
  player,
  onNavigateToMap,
}) => {
  const leaderboard = getFullLeaderboard(player);

  const getRankBadge = (rank: number) => {
    switch (rank) {
      case 1:
        return (
          <div className="w-7 h-7 rounded-full bg-[#B45309] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            1
          </div>
        );
      case 2:
        return (
          <div className="w-7 h-7 rounded-full bg-[#78716C] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            2
          </div>
        );
      case 3:
        return (
          <div className="w-7 h-7 rounded-full bg-[#A16207] text-white flex items-center justify-center font-bold text-xs shadow-xs">
            3
          </div>
        );
      default:
        return (
          <span className="w-7 text-center font-mono text-xs font-semibold text-[#78716C]">
            #{rank}
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 border border-[#B45309]/20 rounded text-[#B45309] text-xs font-semibold tracking-wider uppercase">
          Ghi Danh Đồng Đạo
        </div>
        <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
          Bảng Xếp Hạng Lữ Khách Văn Du
        </h2>
        <p className="text-sm text-[#78716C] max-w-lg mx-auto">
          Tôn vinh những người bạn đồng hành tích cực khám phá và lưu giữ vẻ đẹp lịch sử của mảnh đất Thăng Long ngàn năm văn hiến.
        </p>
      </div>

      {/* Mandatory Disclaimer Box */}
      <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-4 flex items-start gap-3 text-xs text-[#57534E]">
        <Info className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Thông báo dữ liệu:</strong> Đây là bảng xếp hạng minh họa kết hợp dữ liệu mẫu và tiến trình thực tế của bạn. Tiến trình của bạn được lưu an toàn trên trình duyệt này bằng <em>localStorage</em>; ứng dụng không yêu cầu đăng nhập, không thu thập danh tính và không yêu cầu cấp quyền vị trí GPS.
        </div>
      </div>

      {/* Leaderboard Table / Cards */}
      <div className="bg-[#FCFAF6] border border-[#E5DECF] rounded-xl overflow-hidden shadow-xs">
        <div className="divide-y divide-[#EFE9DD]">
          {leaderboard.map((entry) => {
            const isMe = entry.isCurrentPlayer;
            return (
              <div
                key={`${entry.rank}-${entry.nickname}`}
                className={`p-4 sm:px-6 flex items-center justify-between gap-4 transition-colors ${
                  isMe
                    ? 'bg-[#FAF0E6]/80 border-l-4 border-[#991B1B]'
                    : 'hover:bg-white'
                }`}
              >
                {/* Left: Rank & Nickname */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="shrink-0">{getRankBadge(entry.rank)}</div>

                  <div className="min-w-0 space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm sm:text-base font-bold truncate ${
                        isMe ? 'text-[#991B1B]' : 'text-[#1C1917]'
                      }`}>
                        {entry.nickname}
                      </span>
                      {isMe && (
                        <span className="px-2 py-0.5 bg-[#991B1B] text-white rounded text-[10px] font-semibold uppercase tracking-wider shrink-0">
                          Bạn
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#78716C] flex items-center gap-2 truncate">
                      <span>{entry.characterName}</span>
                      <span>·</span>
                      <span className="text-[#B45309] font-medium">{entry.title}</span>
                    </div>
                  </div>
                </div>

                {/* Right: Stations and Points */}
                <div className="flex items-center gap-4 sm:gap-6 shrink-0 text-right">
                  <div className="hidden sm:block">
                    <div className="text-[11px] text-[#A8A29E]">Trạm đã qua</div>
                    <div className="text-xs font-semibold text-[#44403C] tabular-nums">
                      {entry.stationsCount}/4 trạm
                    </div>
                  </div>

                  <div>
                    <div className="text-[11px] text-[#A8A29E]">Điểm số</div>
                    <div className="text-sm sm:text-base font-bold text-[#1C1917] tabular-nums">
                      {entry.points} <span className="text-xs font-normal text-[#78716C]">đ</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Return to Map CTA */}
      <div className="text-center pt-2">
        <button
          onClick={() => {
            sounds.playClick();
            onNavigateToMap();
          }}
          className="px-6 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 mx-auto cursor-pointer transition-colors"
        >
          <span>Tiếp tục khám phá trên bản đồ</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
