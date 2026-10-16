import React, { useState } from 'react';
import { 
  Compass, 
  MapPin, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  LayoutGrid, 
  Map as MapIcon, 
  ArrowRight,
  ShieldAlert,
  Info,
  Award
} from 'lucide-react';
import { StationData, PlayerProgress, StationStatus } from '../types/game';
import { STATIONS } from '../data/stations';
import { getCharacterById } from '../data/characters';
import { sounds } from '../utils/audio';

interface MapScreenProps {
  player: PlayerProgress;
  onSelectStation: (stationId: string) => void;
  onOpenBadges: () => void;
}

export const MapScreen: React.FC<MapScreenProps> = ({
  player,
  onSelectStation,
  onOpenBadges,
}) => {
  const [viewMode, setViewMode] = useState<'map' | 'cards'>('map');
  const [activeHoverStation, setActiveHoverStation] = useState<string | null>(null);

  const character = getCharacterById(player.characterId);
  const completedCount = player.completedStations.length;
  const totalStations = STATIONS.length;
  const isAllCompleted = completedCount === totalStations;

  const getStationStatus = (id: string): StationStatus => {
    if (player.completedStations.includes(id)) return 'completed';
    if (player.inProgressStations.includes(id)) return 'in_progress';
    return 'unexplored';
  };

  const getStatusBadge = (status: StationStatus) => {
    switch (status) {
      case 'completed':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-[#14532D]/10 text-[#14532D] border border-[#14532D]/20">
            <CheckCircle2 className="w-3 h-3" />
            <span>Đã hoàn thành</span>
          </span>
        );
      case 'in_progress':
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-[#B45309]/10 text-[#B45309] border border-[#B45309]/20">
            <Clock className="w-3 h-3" />
            <span>Đang khám phá</span>
          </span>
        );
      case 'unexplored':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-[#78716C]/10 text-[#57534E] border border-[#E5DECF]">
            <span>Chưa khám phá</span>
          </span>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-6">
      {/* Top Banner: Progress & Character Guide */}
      <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-4 sm:p-5 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Character Dialogue */}
          <div className="flex items-start sm:items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 shadow-xs"
              style={{ backgroundColor: character.accentColor }}
            >
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  {character.name} ({player.nickname || 'Lữ khách'})
                </span>
                <span className="text-xs text-[#78716C]">·</span>
                <span className="text-xs text-[#78716C] font-serif italic">
                  {isAllCompleted ? 'Đã thu thập trọn vẹn Tứ Trấn!' : 'Chọn một đền để bắt đầu'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#44403C] mt-0.5 font-serif">
                “{character.guideMotivation}”
              </p>
            </div>
          </div>

          {/* Progress Tracker */}
          <div className="flex items-center justify-between md:justify-end gap-4 border-t md:border-t-0 pt-3 md:pt-0 border-[#EFE9DD]">
            <div className="text-right">
              <div className="text-xs text-[#78716C]">Tiến trình Tứ Trấn</div>
              <div className="text-sm font-bold text-[#1C1917] tabular-nums">
                {completedCount}/{totalStations} trạm hoàn thành
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-[#EFE8DC] rounded border border-[#D6CEBE]">
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode('map');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  viewMode === 'map'
                    ? 'bg-white text-[#1C1917] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
                title="Xem bản đồ minh họa"
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Bản đồ</span>
              </button>
              <button
                onClick={() => {
                  sounds.playClick();
                  setViewMode('cards');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded transition-colors cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-white text-[#1C1917] shadow-xs'
                    : 'text-[#78716C] hover:text-[#1C1917]'
                }`}
                title="Xem danh sách thẻ"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Danh sách</span>
              </button>
            </div>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="w-full bg-[#EFE8DC] h-2 rounded-full mt-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-[#B45309] to-[#991B1B] h-full transition-all duration-500 rounded-full"
            style={{ width: `${(completedCount / totalStations) * 100}%` }}
          />
        </div>
      </div>

      {/* Completion Banner when all 4 done */}
      {isAllCompleted && (
        <div className="bg-[#FAF7F0] border-2 border-[#B45309] rounded-lg p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded bg-[#B45309] text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Chiến Tích Vang Dội · Hoàn Thành Hành Trình
              </div>
              <h3 className="text-base sm:text-lg font-heritage font-bold text-[#1C1917]">
                Chúc mừng bạn đã đạt danh hiệu “Người giữ chuyện Thăng Long”!
              </h3>
              <p className="text-xs text-[#57534E]">
                Bốn dấu ấn linh khí Đông, Tây, Nam, Bắc đã quy tụ trọn vẹn trong kho di sản của bạn.
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onOpenBadges();
            }}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
          >
            <span>Xem Kho Di Sản & Chứng Nhận</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Map View Mode */}
      {viewMode === 'map' && (
        <div className="space-y-4">
          {/* Interactive Illustrated Heritage Map */}
          <div className="relative bg-[#F5EFEB] border border-[#D6CEBE] rounded-xl overflow-hidden shadow-sm aspect-4/3 sm:aspect-16/10">
            {/* SVG Background Elements: Red River, West Lake, Citadel Center */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none select-none opacity-90"
              viewBox="0 0 1000 650"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="waterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.6" />
                </linearGradient>
                <pattern id="parchmentGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E2D9C8" strokeWidth="0.5" />
                </pattern>
              </defs>

              {/* Grid Lines */}
              <rect width="1000" height="650" fill="url(#parchmentGrid)" />

              {/* Red River (Sông Hồng) curving from Northwest to Southeast */}
              <path
                d="M 680 0 Q 720 120 780 200 T 920 380 Q 980 460 1000 520 L 1000 0 Z"
                fill="url(#waterGrad)"
              />
              <path
                d="M 680 0 Q 720 120 780 200 T 920 380 Q 980 460 1000 520"
                fill="none"
                stroke="#64748B"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
              />
              <text x="830" y="140" fill="#64748B" fontSize="12" fontStyle="italic" opacity="0.8">
                Sông Hồng (Nhị Hà)
              </text>

              {/* West Lake (Hồ Tây) in North/Northwest */}
              <path
                d="M 330 80 Q 420 50 510 90 T 540 180 Q 480 230 400 210 Q 320 200 310 140 Z"
                fill="url(#waterGrad)"
                stroke="#94A3B8"
                strokeWidth="1"
              />
              <text x="400" y="140" fill="#475569" fontSize="13" fontStyle="italic" opacity="0.8">
                Hồ Tây
              </text>

              {/* Truc Bach Lake */}
              <path
                d="M 545 130 Q 580 140 575 190 Q 545 200 535 160 Z"
                fill="url(#waterGrad)"
              />
              <text x="548" y="175" fill="#64748B" fontSize="9" opacity="0.8">
                Hồ Trúc Bạch
              </text>

              {/* Thu Le Lake near Voi Phuc */}
              <path
                d="M 180 300 Q 230 290 235 340 Q 200 360 170 330 Z"
                fill="url(#waterGrad)"
              />
              <text x="180" y="335" fill="#64748B" fontSize="9" opacity="0.8">
                Hồ Thủ Lệ
              </text>

              {/* Hoan Kiem Lake */}
              <path
                d="M 620 380 Q 645 370 655 420 Q 635 450 615 420 Z"
                fill="url(#waterGrad)"
              />
              <text x="625" y="415" fill="#64748B" fontSize="9" opacity="0.8">
                Hồ Hoàn Kiếm
              </text>

              {/* Center Imperial Citadel (Hoàng thành Thăng Long) Outline */}
              <rect
                x="430"
                y="270"
                width="140"
                height="110"
                rx="6"
                fill="#F3EAD8"
                stroke="#B45309"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                opacity="0.7"
              />
              <text
                x="500"
                y="325"
                textAnchor="middle"
                fill="#78350F"
                fontSize="11"
                fontWeight="bold"
                letterSpacing="1"
              >
                HOÀNG THÀNH
              </text>
              <text
                x="500"
                y="342"
                textAnchor="middle"
                fill="#92400E"
                fontSize="9"
                fontStyle="italic"
              >
                (Thăng Long Cổ Đô)
              </text>

              {/* Directional Lines from Citadel */}
              <line x1="500" y1="270" x2="520" y2="210" stroke="#B45309" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <line x1="570" y1="325" x2="690" y2="330" stroke="#B45309" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <line x1="430" y1="325" x2="250" y2="330" stroke="#B45309" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />
              <line x1="500" y1="380" x2="520" y2="480" stroke="#B45309" strokeWidth="1" strokeDasharray="2 2" opacity="0.5" />

              {/* Compass Rose in Corner */}
              <g transform="translate(100, 100)">
                <circle cx="0" cy="0" r="36" fill="#FAF6EE" stroke="#B45309" strokeWidth="1" opacity="0.7" />
                <path d="M 0 -30 L 7 -7 L 30 0 L 7 7 L 0 30 L -7 7 L -30 0 L -7 -7 Z" fill="#991B1B" opacity="0.8" />
                <path d="M 0 -30 L 7 -7 L 0 0 Z" fill="#7F1D1D" />
                <text x="0" y="-35" textAnchor="middle" fill="#991B1B" fontSize="12" fontWeight="bold">BẮC</text>
                <text x="36" y="4" textAnchor="start" fill="#57534E" fontSize="10" fontWeight="bold">ĐÔNG</text>
                <text x="0" y="46" textAnchor="middle" fill="#57534E" fontSize="10" fontWeight="bold">NAM</text>
                <text x="-36" y="4" textAnchor="end" fill="#57534E" fontSize="10" fontWeight="bold">TÂY</text>
              </g>
            </svg>

            {/* Station 4 Markers in 4 Directions */}

            {/* 1. Trấn Bắc: Đền Quán Thánh (Top Center ~52% X, ~25% Y) */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
              style={{ left: '52%', top: '23%' }}
              onMouseEnter={() => setActiveHoverStation('quan_thanh')}
              onMouseLeave={() => setActiveHoverStation(null)}
              onClick={() => {
                sounds.playClick();
                onSelectStation('quan_thanh');
              }}
            >
              <div className="flex flex-col items-center">
                {/* Station Pin */}
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-110 shadow-md ${
                    getStationStatus('quan_thanh') === 'completed'
                      ? 'bg-[#14532D] border-white text-white'
                      : 'bg-[#FAF6EE] border-[#2D4A3E] text-[#2D4A3E]'
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                {/* Station Label */}
                <div className="mt-1 px-2.5 py-1 bg-[#FAF7F0]/95 rounded border border-[#D6CEBE] text-center shadow-xs">
                  <div className="text-[10px] font-bold text-[#2D4A3E] uppercase tracking-wider">Trấn Bắc</div>
                  <div className="text-xs font-bold text-[#1C1917] whitespace-nowrap">Đền Quán Thánh</div>
                </div>
              </div>
            </div>

            {/* 2. Trấn Đông: Đền Bạch Mã (Right ~72% X, ~48% Y) */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
              style={{ left: '72%', top: '48%' }}
              onMouseEnter={() => setActiveHoverStation('bach_ma')}
              onMouseLeave={() => setActiveHoverStation(null)}
              onClick={() => {
                sounds.playClick();
                onSelectStation('bach_ma');
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-110 shadow-md ${
                    getStationStatus('bach_ma') === 'completed'
                      ? 'bg-[#14532D] border-white text-white'
                      : 'bg-[#FAF6EE] border-[#991B1B] text-[#991B1B]'
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-1 px-2.5 py-1 bg-[#FAF7F0]/95 rounded border border-[#D6CEBE] text-center shadow-xs">
                  <div className="text-[10px] font-bold text-[#991B1B] uppercase tracking-wider">Trấn Đông</div>
                  <div className="text-xs font-bold text-[#1C1917] whitespace-nowrap">Đền Bạch Mã</div>
                </div>
              </div>
            </div>

            {/* 3. Trấn Tây: Đền Voi Phục (Left ~25% X, ~50% Y) */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
              style={{ left: '25%', top: '50%' }}
              onMouseEnter={() => setActiveHoverStation('voi_phuc')}
              onMouseLeave={() => setActiveHoverStation(null)}
              onClick={() => {
                sounds.playClick();
                onSelectStation('voi_phuc');
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-110 shadow-md ${
                    getStationStatus('voi_phuc') === 'completed'
                      ? 'bg-[#14532D] border-white text-white'
                      : 'bg-[#FAF6EE] border-[#1E3A8A] text-[#1E3A8A]'
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-1 px-2.5 py-1 bg-[#FAF7F0]/95 rounded border border-[#D6CEBE] text-center shadow-xs">
                  <div className="text-[10px] font-bold text-[#1E3A8A] uppercase tracking-wider">Trấn Tây</div>
                  <div className="text-xs font-bold text-[#1C1917] whitespace-nowrap">Đền Voi Phục</div>
                </div>
              </div>
            </div>

            {/* 4. Trấn Nam: Đền Kim Liên (Bottom Center ~52% X, ~78% Y) */}
            <div
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20 group"
              style={{ left: '52%', top: '78%' }}
              onMouseEnter={() => setActiveHoverStation('kim_lien')}
              onMouseLeave={() => setActiveHoverStation(null)}
              onClick={() => {
                sounds.playClick();
                onSelectStation('kim_lien');
              }}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-transform duration-200 group-hover:scale-110 shadow-md ${
                    getStationStatus('kim_lien') === 'completed'
                      ? 'bg-[#14532D] border-white text-white'
                      : 'bg-[#FAF6EE] border-[#B45309] text-[#B45309]'
                  }`}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="mt-1 px-2.5 py-1 bg-[#FAF7F0]/95 rounded border border-[#D6CEBE] text-center shadow-xs">
                  <div className="text-[10px] font-bold text-[#B45309] uppercase tracking-wider">Trấn Nam</div>
                  <div className="text-xs font-bold text-[#1C1917] whitespace-nowrap">Đền Kim Liên</div>
                </div>
              </div>
            </div>

            {/* Hover Tooltip / Quick preview card */}
            {activeHoverStation && (
              <div className="hidden sm:block absolute bottom-4 left-4 z-30 max-w-xs bg-white/95 backdrop-blur-xs border border-[#D6CEBE] p-3 rounded-lg shadow-lg pointer-events-none">
                {(() => {
                  const st = STATIONS.find((s) => s.id === activeHoverStation);
                  if (!st) return null;
                  return (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#991B1B]">
                          Trấn {st.guardianDirection}
                        </span>
                        {getStatusBadge(getStationStatus(st.id))}
                      </div>
                      <div className="text-sm font-heritage font-bold text-[#1C1917]">
                        {st.name}
                      </div>
                      <div className="text-xs text-[#57534E] line-clamp-2">
                        {st.shortDescription}
                      </div>
                      <div className="text-[11px] text-[#78716C] pt-1 border-t border-[#F0EBE1]">
                        Thờ: {st.deity}
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}
          </div>

          {/* Map Disclaimer / Verification Notice */}
          <div className="flex items-start gap-2 p-3 bg-[#FAF6EE] border border-[#E5DECF] rounded-lg text-xs text-[#78716C]">
            <Info className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Bản đồ minh họa tương tác định hướng:</strong> Vị trí các trạm được thể hiện theo bốn hướng Đông, Tây, Nam, Bắc bao bọc Hoàng thành Thăng Long. Tọa độ thực tế và địa chỉ di tích được ghi nhận chính xác theo hồ sơ Di tích quốc gia đặc biệt để người chơi có thể tra cứu và tham quan thực tế.
            </p>
          </div>
        </div>
      )}

      {/* Cards View Mode or Secondary List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-heritage font-bold text-[#1C1917]">
            Danh sách 4 trạm di tích Thăng Long Tứ Trấn
          </h2>
          <span className="text-xs text-[#78716C]">
            Tự do chọn trạm bất kỳ để bắt đầu
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {STATIONS.map((station) => {
            const status = getStationStatus(station.id);
            return (
              <div
                key={station.id}
                className="bg-[#FCFAF6] border border-[#E5DECF] hover:border-[#D6CEBE] rounded-lg p-5 transition-all shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Card Top: Direction, Status */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white bg-[#991B1B]">
                        {station.guardianDirection[0]}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                        Trấn {station.guardianDirection}
                      </span>
                    </div>
                    {getStatusBadge(status)}
                  </div>

                  {/* Title & Deity */}
                  <div>
                    <h3 className="text-lg font-heritage font-bold text-[#1C1917]">
                      {station.name}
                    </h3>
                    <p className="text-xs text-[#78350F] font-serif italic mt-0.5">
                      Thờ phụng: {station.deity}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-2">
                    {station.shortDescription}
                  </p>

                  {/* Address & Real Coordinates */}
                  <div className="text-[11px] text-[#78716C] bg-[#FAF6EE] p-2 rounded border border-[#EFE9DD] space-y-0.5">
                    <div className="truncate">
                      <strong>Địa chỉ:</strong> {station.address}
                    </div>
                    <div className="font-mono text-[10px] text-[#A8A29E]">
                      Tọa độ: {station.coordinates.lat}° N, {station.coordinates.lng}° E
                    </div>
                  </div>
                </div>

                {/* Card CTA Button */}
                <div className="pt-4 mt-3 border-t border-[#F0EBE1] flex items-center justify-between gap-3">
                  <span className="text-xs font-medium text-[#78716C]">
                    Huy hiệu: <strong className="text-[#1C1917]">{station.badgeName}</strong>
                  </span>

                  <button
                    onClick={() => {
                      sounds.playClick();
                      onSelectStation(station.id);
                    }}
                    className={`px-4 py-2 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer ${
                      status === 'completed'
                        ? 'bg-[#FAF6EE] text-[#14532D] hover:bg-[#EFE8DC] border border-[#D6CEBE]'
                        : 'bg-[#991B1B] text-white hover:bg-[#821818]'
                    }`}
                  >
                    <span>{status === 'completed' ? 'Xem lại trạm' : 'Khám phá ngay'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
