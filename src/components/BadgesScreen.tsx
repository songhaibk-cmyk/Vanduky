import React, { useRef } from 'react';
import { Award, CheckCircle2, Lock, Sparkles, Printer, ArrowRight, ShieldCheck } from 'lucide-react';
import { PlayerProgress } from '../types/game';
import { ALL_BADGES, calculatePlayerRank } from '../data/stations';
import { getCharacterById } from '../data/characters';
import { sounds } from '../utils/audio';

interface BadgesScreenProps {
  player: PlayerProgress;
  onNavigateToMap: () => void;
}

export const BadgesScreen: React.FC<BadgesScreenProps> = ({
  player,
  onNavigateToMap,
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);
  const character = getCharacterById(player.characterId);
  const currentRank = calculatePlayerRank(player.points, player.completedStations.length);
  const isMasterUnlocked = player.completedStations.length >= 4;

  const handlePrintCertificate = () => {
    sounds.playClick();
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Page Header */}
      <div className="space-y-2 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#991B1B]/10 border border-[#991B1B]/20 rounded text-[#991B1B] text-xs font-semibold tracking-wider uppercase">
          Kho Di Sản & Danh Hiệu
        </div>
        <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
          Huy hiệu & Ấn tín Thăng Long Tứ Trấn
        </h2>
        <p className="text-sm text-[#78716C] max-w-xl mx-auto">
          Mỗi ngôi đền được giải mã sẽ trao tặng một con dấu linh khí. Hội tụ đủ bốn phương để đón nhận danh hiệu cao quý nhất.
        </p>
      </div>

      {/* Player Status Overview Strip */}
      <div className="bg-[#FCFAF6] border border-[#E5DECF] rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm"
            style={{ backgroundColor: character.accentColor }}
          >
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs text-[#78716C]">Lữ khách hiện tại</div>
            <div className="text-base font-bold text-[#1C1917]">
              {player.nickname || 'Lữ khách ẩn danh'} ({character.name})
            </div>
            <div className="text-xs text-[#991B1B] font-semibold mt-0.5">
              Cấp bậc: {currentRank}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 text-center sm:text-right">
          <div>
            <div className="text-xs text-[#78716C]">Điểm tích lũy</div>
            <div className="text-lg font-bold text-[#1C1917] tabular-nums">
              {player.points} điểm
            </div>
          </div>
          <div className="border-l border-[#EFE9DD] pl-6">
            <div className="text-xs text-[#78716C]">Huy hiệu mở khóa</div>
            <div className="text-lg font-bold text-[#991B1B] tabular-nums">
              {player.unlockedBadges.length}/{ALL_BADGES.length}
            </div>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ALL_BADGES.map((badge) => {
          const isUnlocked = player.unlockedBadges.includes(badge.id) || 
            (badge.isGrandMaster && isMasterUnlocked);

          return (
            <div
              key={badge.id}
              className={`p-5 rounded-lg border transition-all ${
                badge.isGrandMaster
                  ? isUnlocked
                    ? 'md:col-span-2 bg-gradient-to-r from-[#FAF6EE] via-[#FCF9F2] to-[#FAF6EE] border-2 border-[#B45309] shadow-md'
                    : 'md:col-span-2 bg-[#FAF7F0] border border-[#D6CEBE] border-dashed opacity-85'
                  : isUnlocked
                  ? 'bg-white border-[#D6CEBE] shadow-xs'
                  : 'bg-[#F7F3EB]/60 border-[#E5DECF] opacity-75'
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Seal Icon */}
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 border-2 transition-transform ${
                    isUnlocked
                      ? badge.isGrandMaster
                        ? 'border-[#B45309] bg-[#B45309]/10 text-[#B45309]'
                        : 'border-[#991B1B] bg-[#991B1B]/10 text-[#991B1B]'
                      : 'border-[#A8A29E] bg-[#EFE8DC] text-[#A8A29E]'
                  }`}
                >
                  {isUnlocked ? (
                    <Award className="w-7 h-7" />
                  ) : (
                    <Lock className="w-5 h-5" />
                  )}
                </div>

                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold font-mono tracking-widest uppercase text-[#78716C]">
                      {badge.sealText}
                    </span>
                    {isUnlocked ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#15803D]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Đã sở hữu</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#A8A29E] flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        <span>Chưa mở</span>
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-heritage font-bold text-[#1C1917]">
                    {badge.name}
                  </h3>

                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {badge.description}
                  </p>

                  <div className="text-[11px] text-[#78716C] pt-1 border-t border-[#F0EBE1]">
                    <strong>Điều kiện:</strong> {badge.requirement}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Certificate for Master Badge */}
      {isMasterUnlocked && (
        <div className="space-y-4 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-heritage font-bold text-[#1C1917]">
                Chứng Nhận Danh Hiệu Cao Quý
              </h3>
              <p className="text-xs text-[#78716C]">
                Bạn có thể in hoặc lưu lại chứng nhận đã đi trọn bốn phương Thăng Long.
              </p>
            </div>

            <button
              onClick={handlePrintCertificate}
              className="px-4 py-2 bg-[#FAF6EE] hover:bg-[#EFE8DC] text-[#1C1917] border border-[#D6CEBE] text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4 text-[#B45309]" />
              <span>In chứng nhận</span>
            </button>
          </div>

          {/* Certificate Canvas Box */}
          <div
            ref={certificateRef}
            className="bg-[#FCFAF6] border-4 border-double border-[#991B1B] p-8 sm:p-12 rounded-xl text-center space-y-6 shadow-sm relative overflow-hidden"
          >
            {/* Corner traditional patterns */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#991B1B]" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#991B1B]" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#991B1B]" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#991B1B]" />

            <div className="space-y-1">
              <div className="text-xs font-mono tracking-widest uppercase text-[#991B1B]">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM · DI SẢN THĂNG LONG
              </div>
              <h4 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917] tracking-tight">
                CHỨNG NHẬN DANH HIỆU
              </h4>
              <div className="text-sm font-serif italic text-[#78350F]">
                “Người Giữ Chuyện Thăng Long”
              </div>
            </div>

            <div className="max-w-lg mx-auto text-sm text-[#44403C] font-serif leading-relaxed space-y-2">
              <p>Trân trọng chứng nhận lữ khách:</p>
              <p className="text-xl sm:text-2xl font-heritage font-bold text-[#991B1B]">
                {player.nickname || 'Đồng Đạo Văn Du'}
              </p>
              <p className="text-xs text-[#78716C]">
                Đồng hành với vai trò: <strong>{character.name}</strong>
              </p>
              <p className="text-xs sm:text-sm text-[#57534E] pt-2">
                Đã hoàn thành xuất sắc việc chiêm bái, đọc hiểu thư tịch và giải mã toàn bộ bốn ngôi đền trấn giữ kinh kỳ Thăng Long Tứ Trấn: Đền Bạch Mã (Đông), Đền Voi Phục (Tây), Đền Kim Liên (Nam) và Đền Quán Thánh (Bắc).
              </p>
            </div>

            {/* Seals & Date */}
            <div className="flex items-center justify-around pt-6 border-t border-[#F0EBE1] text-xs text-[#78716C]">
              <div>
                <div className="font-mono">Ngày hoàn thành</div>
                <div className="font-semibold text-[#1C1917] mt-0.5">
                  {new Date().toLocaleDateString('vi-VN')}
                </div>
              </div>

              <div className="seal-stamp-round w-16 h-16 text-[10px] p-2 leading-tight">
                THĂNG LONG TỨ TRẤN
              </div>

              <div>
                <div className="font-mono">Tổng điểm di sản</div>
                <div className="font-semibold text-[#991B1B] text-base mt-0.5">
                  {player.points} điểm
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA to return to map */}
      <div className="text-center pt-2">
        <button
          onClick={() => {
            sounds.playClick();
            onNavigateToMap();
          }}
          className="px-6 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 mx-auto cursor-pointer transition-colors"
        >
          <span>Trở về Bản đồ Hành trình</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
