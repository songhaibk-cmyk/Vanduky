import React from 'react';
import { CharacterId } from '../types/game';

interface CharacterPortraitProps {
  characterId: CharacterId;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBadge?: boolean;
}

export const CharacterPortrait: React.FC<CharacterPortraitProps> = ({
  characterId,
  size = 'md',
  className = '',
  showBadge = false,
}) => {
  const getSizeClass = () => {
    switch (size) {
      case 'sm':
        return 'w-10 h-10';
      case 'lg':
        return 'w-24 h-24 sm:w-28 sm:h-28';
      case 'xl':
        return 'w-32 h-32 sm:w-40 sm:h-40';
      case 'md':
      default:
        return 'w-16 h-16 sm:w-20 sm:h-20';
    }
  };

  const renderArtwork = () => {
    switch (characterId) {
      case 'chep_su':
        // Chronicler (Người chép sử): Indigo blue robes, wooden hair bun pin, parchment scrolls, calligraphy brush with ink droplet
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="csBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E3A8A" />
                <stop offset="60%" stopColor="#172554" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>
              <linearGradient id="csRobe" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#1D4ED8" />
              </linearGradient>
              <linearGradient id="goldAcc" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#D97706" />
              </linearGradient>
            </defs>
            {/* Background Halo */}
            <circle cx="60" cy="60" r="58" fill="url(#csBg)" stroke="#FDE68A" strokeWidth="2" />
            <circle cx="60" cy="60" r="52" stroke="#60A5FA" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            {/* Cloud motifs */}
            <path d="M 20 40 Q 30 32 40 40 Q 50 48 35 50 Z" fill="#93C5FD" opacity="0.25" />
            <path d="M 80 30 Q 95 24 105 32 Q 100 42 85 38 Z" fill="#93C5FD" opacity="0.25" />

            {/* Scholar Head & Traditional Hair Topknot */}
            <path d="M 52 20 Q 60 14 68 20 L 68 28 L 52 28 Z" fill="#0F172A" />
            <line x1="45" y1="23" x2="75" y2="23" stroke="url(#goldAcc)" strokeWidth="2.5" strokeLinecap="round" />
            
            {/* Face */}
            <path d="M 46 32 Q 60 25 74 32 L 72 52 Q 60 62 48 52 Z" fill="#FED7AA" />
            
            {/* Scholar eyes and calm expression */}
            <path d="M 52 42 Q 56 40 60 43" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 68 43 Q 72 40 76 42" stroke="#451A03" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 63 47 L 65 50 L 63 50" stroke="#78350F" strokeWidth="1.2" />
            <path d="M 58 55 Q 64 57 70 55" stroke="#9A3412" strokeWidth="1.2" strokeLinecap="round" />

            {/* Traditional Áo Giao Lĩnh (Robes) */}
            <path d="M 30 110 L 46 62 Q 60 66 74 62 L 90 110 Z" fill="url(#csRobe)" />
            {/* Inner Gold Collar Cross */}
            <path d="M 52 64 L 68 84 L 60 90 L 48 68 Z" fill="url(#goldAcc)" opacity="0.9" />
            <path d="M 68 64 L 54 82 L 60 88 L 72 68 Z" fill="#F8FAFC" />

            {/* Scroll of History in front */}
            <g transform="translate(34, 76)">
              <rect x="0" y="4" width="52" height="30" rx="3" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
              {/* Calligraphy lines */}
              <line x1="8" y1="11" x2="44" y2="11" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="8" y1="18" x2="36" y2="18" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="8" y1="25" x2="42" y2="25" stroke="#92400E" strokeWidth="1.5" strokeLinecap="round" />
              {/* Seal Stamp on Scroll */}
              <rect x="36" y="16" width="8" height="8" rx="1" fill="#DC2626" />
            </g>

            {/* Bamboo Brush held with ink tip */}
            <g transform="translate(76, 56) rotate(35)">
              <rect x="0" y="0" width="4" height="42" rx="1" fill="#92400E" />
              <path d="M 0 42 Q 2 48 2 52 Q 2 48 4 42 Z" fill="#1E293B" />
              <circle cx="2" cy="53" r="1.5" fill="#000000" />
            </g>
          </svg>
        );

      case 'thi_si':
        // Traveling Poet (Thi sĩ du hành): Teal/Cyan scholar robes, bamboo hat/fan, poetic gourd, lotus motif
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="tsBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#042F2E" />
                <stop offset="60%" stopColor="#115E59" />
                <stop offset="100%" stopColor="#0D9488" />
              </linearGradient>
              <linearGradient id="tsRobe" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2DD4BF" />
                <stop offset="100%" stopColor="#0F766E" />
              </linearGradient>
              <linearGradient id="tsFan" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            {/* Background Halo */}
            <circle cx="60" cy="60" r="58" fill="url(#tsBg)" stroke="#2DD4BF" strokeWidth="2" />
            <circle cx="60" cy="60" r="52" stroke="#5EEAD4" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            {/* Willow breeze & swallow */}
            <path d="M 25 35 Q 40 25 50 35" stroke="#A7F3D0" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 30 45 Q 45 35 55 45" stroke="#A7F3D0" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M 85 28 Q 90 22 95 28 Q 100 22 105 28" stroke="#FEF08A" strokeWidth="1.2" fill="none" />

            {/* Head & Poet Scarf (Khăn xếp lụa xanh ngọc) */}
            <path d="M 44 26 Q 60 16 76 26 L 74 34 L 46 34 Z" fill="#0F766E" stroke="#5EEAD4" strokeWidth="1" />
            <path d="M 46 32 Q 60 27 74 32 L 72 52 Q 60 62 48 52 Z" fill="#FED7AA" />
            
            {/* Thoughtful Poet Eyes looking at the sky */}
            <path d="M 52 42 Q 56 39 60 41" stroke="#134E4A" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 68 41 Q 72 39 76 42" stroke="#134E4A" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M 58 54 Q 64 57 70 54" stroke="#0F766E" strokeWidth="1.2" strokeLinecap="round" />

            {/* Poet Flowing Robes */}
            <path d="M 28 110 L 46 62 Q 60 66 74 62 L 92 110 Z" fill="url(#tsRobe)" />
            <path d="M 50 64 L 66 84 L 60 90 L 46 68 Z" fill="#F0FDFA" />

            {/* Silk Calligraphy Fan in Hand */}
            <g transform="translate(68, 68)">
              <path d="M 0 20 Q 20 -5 40 10 L 20 25 Z" fill="url(#tsFan)" stroke="#B45309" strokeWidth="1" />
              {/* Fan ribs */}
              <line x1="20" y1="25" x2="6" y2="12" stroke="#92400E" strokeWidth="1" />
              <line x1="20" y1="25" x2="20" y2="5" stroke="#92400E" strokeWidth="1" />
              <line x1="20" y1="25" x2="32" y2="12" stroke="#92400E" strokeWidth="1" />
            </g>

            {/* Wine Gourd (Hồ lô thơ) with red cord */}
            <g transform="translate(24, 76)">
              <circle cx="8" cy="18" r="8" fill="#B45309" />
              <circle cx="8" cy="8" r="5" fill="#B45309" />
              <rect x="7" y="1" width="2" height="3" fill="#D97706" />
              <path d="M 6 12 Q 12 12 10 16" stroke="#DC2626" strokeWidth="1.5" fill="none" />
            </g>
          </svg>
        );

      case 'su_gia':
        // Envoy (Sứ giả): Imperial Cinnabar Red and Gold, royal crest, ceremonial jade token, mandate scroll
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="sgBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#450A0A" />
                <stop offset="60%" stopColor="#7F1D1D" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
              <linearGradient id="sgRobe" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EF4444" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
              <linearGradient id="sgGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>
            {/* Background Halo */}
            <circle cx="60" cy="60" r="58" fill="url(#sgBg)" stroke="url(#sgGold)" strokeWidth="2.5" />
            <circle cx="60" cy="60" r="52" stroke="#F87171" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            {/* Dragon Scale / Cloud Embellishment */}
            <path d="M 18 30 Q 30 20 40 30" stroke="#FDE68A" strokeWidth="1.5" fill="none" opacity="0.4" />
            <path d="M 80 25 Q 92 18 102 28" stroke="#FDE68A" strokeWidth="1.5" fill="none" opacity="0.4" />

            {/* Official Envoy Hat (Mũ quan cánh chuồn) */}
            <ellipse cx="60" cy="24" rx="16" ry="8" fill="#1C1917" />
            {/* Side Wings (Cánh chuồn) */}
            <path d="M 44 24 L 20 20 Q 22 26 44 26 Z" fill="#292524" stroke="url(#sgGold)" strokeWidth="1" />
            <path d="M 76 24 L 100 20 Q 98 26 76 26 Z" fill="#292524" stroke="url(#sgGold)" strokeWidth="1" />
            {/* Golden front crest */}
            <circle cx="60" cy="22" r="3.5" fill="url(#sgGold)" />

            {/* Face */}
            <path d="M 47 28 Q 60 24 73 28 L 71 49 Q 60 60 49 49 Z" fill="#FED7AA" />
            
            {/* Determined Eyes */}
            <path d="M 53 38 Q 57 36 61 38" stroke="#450A0A" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 67 38 Q 71 36 75 38" stroke="#450A0A" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 58 50 Q 64 53 70 50" stroke="#7F1D1D" strokeWidth="1.5" strokeLinecap="round" />

            {/* Imperial Robes (Áo đại triều đỏ son) */}
            <path d="M 28 110 L 46 60 Q 60 64 74 60 L 92 110 Z" fill="url(#sgRobe)" />
            {/* Golden Cloud Embroidery on Chest */}
            <path d="M 50 64 Q 60 70 70 64 L 66 84 Q 60 88 54 84 Z" fill="url(#sgGold)" />

            {/* Imperial Token / Mandate Tube (Ống lệnh chỉ hoàng gia) */}
            <g transform="translate(48, 74)">
              <rect x="0" y="0" width="24" height="38" rx="4" fill="url(#sgGold)" stroke="#78350F" strokeWidth="1" />
              {/* Imperial Seal Ribbon */}
              <rect x="9" y="0" width="6" height="38" fill="#DC2626" />
              <circle cx="12" cy="18" r="4" fill="#047857" stroke="#FEF08A" strokeWidth="1" />
            </g>
          </svg>
        );

      case 'ke_chuyen':
      default:
        // Storyteller (Người kể chuyện): Warm Earth Bronze, banyan leaves, wooden clappers, warm eyes, storytelling scroll
        return (
          <svg viewBox="0 0 120 120" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="kcBg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#451A03" />
                <stop offset="60%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="kcRobe" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D97706" />
                <stop offset="100%" stopColor="#92400E" />
              </linearGradient>
              <linearGradient id="kcGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF3C7" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
            {/* Background Halo */}
            <circle cx="60" cy="60" r="58" fill="url(#kcBg)" stroke="#F59E0B" strokeWidth="2" />
            <circle cx="60" cy="60" r="52" stroke="#FDE68A" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

            {/* Floating Story Sparks / Star dust */}
            <circle cx="28" cy="34" r="2" fill="#FEF08A" />
            <circle cx="92" cy="36" r="1.5" fill="#FEF08A" />
            <circle cx="36" cy="22" r="1.5" fill="#FEF08A" />
            <circle cx="84" cy="24" r="2.5" fill="#FEF08A" />

            {/* Traditional Headscarf (Khăn vấn nâu ấm cúng) */}
            <path d="M 44 26 Q 60 16 76 26 L 74 34 L 46 34 Z" fill="#78350F" stroke="#FDE68A" strokeWidth="1" />
            
            {/* Friendly smiling face */}
            <path d="M 46 32 Q 60 27 74 32 L 72 52 Q 60 62 48 52 Z" fill="#FED7AA" />
            
            {/* Warm Smiling Eyes */}
            <path d="M 52 41 Q 56 37 60 41" stroke="#451A03" strokeWidth="1.8" strokeLinecap="round" />
            <path d="M 68 41 Q 72 37 76 41" stroke="#451A03" strokeWidth="1.8" strokeLinecap="round" />
            {/* Broad friendly smile */}
            <path d="M 56 51 Q 64 57 72 51" stroke="#9A3412" strokeWidth="1.8" strokeLinecap="round" />

            {/* Traditional Robes (Áo tứ thân nâu gụ viền vàng) */}
            <path d="M 28 110 L 46 62 Q 60 66 74 62 L 92 110 Z" fill="url(#kcRobe)" />
            <path d="M 50 64 L 66 84 L 60 90 L 46 68 Z" fill="url(#kcGold)" />

            {/* Wooden Clappers / Folk Castanets (Phách tre kể chuyện) */}
            <g transform="translate(38, 72) rotate(-15)">
              <rect x="0" y="0" width="8" height="34" rx="2" fill="#B45309" stroke="#78350F" strokeWidth="1" />
              <circle cx="4" cy="6" r="1.5" fill="#FEF08A" />
            </g>
            <g transform="translate(68, 70) rotate(18)">
              <rect x="0" y="0" width="8" height="34" rx="2" fill="#D97706" stroke="#78350F" strokeWidth="1" />
              <circle cx="4" cy="6" r="1.5" fill="#FEF08A" />
            </g>

            {/* Glowing Story Pearl in Center */}
            <circle cx="60" cy="88" r="7" fill="#FEF08A" stroke="#B45309" strokeWidth="1.5" />
            <path d="M 58 84 L 62 92 M 56 88 L 64 88" stroke="#B45309" strokeWidth="1" />
          </svg>
        );
    }
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 rounded-full shadow-md ${getSizeClass()} ${className}`}>
      {renderArtwork()}
      {showBadge && (
        <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#991B1B] text-white flex items-center justify-center text-[10px] font-bold border border-white shadow-xs">
          ★
        </div>
      )}
    </div>
  );
};
