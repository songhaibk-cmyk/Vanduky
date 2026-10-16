import React from 'react';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { Character, CharacterId } from '../types/game';
import { CHARACTERS } from '../data/characters';
import { CharacterPortrait } from './CharacterPortrait';
import { sounds } from '../utils/audio';

interface CharacterSelectProps {
  selectedId: CharacterId;
  onSelectCharacter: (id: CharacterId) => void;
  onConfirm: () => void;
  nickname: string;
}

export const CharacterSelect: React.FC<CharacterSelectProps> = ({
  selectedId,
  onSelectCharacter,
  onConfirm,
  nickname,
}) => {
  const currentCharacter = CHARACTERS.find((c) => c.id === selectedId) || CHARACTERS[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 border border-[#B45309]/30 rounded text-[#B45309] text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bước 2: Chọn Nhân Vật Đồng Hành</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
          Bạn muốn khám phá Thăng Long dưới góc nhìn nào?
        </h2>
        <p className="text-sm text-[#78716C] max-w-xl mx-auto">
          Chào <strong className="text-[#1C1917]">{nickname || 'Lữ khách'}</strong>, nhân vật bạn chọn sẽ đồng hành với diện mạo nghệ thuật và lời dẫn cảm xúc riêng suốt chặng đường. Lựa chọn này không khóa bất kỳ nội dung nào.
        </p>
      </div>

      {/* Character Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CHARACTERS.map((char) => {
          const isSelected = char.id === selectedId;
          return (
            <button
              key={char.id}
              onClick={() => {
                sounds.playClick();
                onSelectCharacter(char.id);
              }}
              className={`relative text-left p-5 sm:p-6 rounded-xl transition-all cursor-pointer flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'bg-white border-2 border-[#991B1B] shadow-xl ring-4 ring-[#991B1B]/15 scale-[1.015]'
                  : 'bg-[#FCFAF6] border border-[#E5DECF] hover:border-[#D6CEBE] hover:bg-white shadow-xs'
              }`}
            >
              {/* Top ambient color bar */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 opacity-90"
                style={{ backgroundColor: char.accentColor }}
              />

              {/* Card Top: Portrait & Role Info */}
              <div className="flex items-start justify-between gap-3 mb-4 pt-1">
                <div className="flex items-center gap-3">
                  <CharacterPortrait characterId={char.id} size="md" showBadge={isSelected} />
                  <div>
                    <h3 className="text-base sm:text-lg font-heritage font-bold text-[#1C1917]">
                      {char.name}
                    </h3>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FAF6EE] border border-[#EFE9DD] text-[#78716C] inline-block mt-0.5">
                      {char.roleTitle}
                    </span>
                  </div>
                </div>

                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center border transition-colors shrink-0 ${
                    isSelected
                      ? 'bg-[#991B1B] border-[#991B1B] text-white'
                      : 'border-[#D6CEBE] bg-transparent text-transparent'
                  }`}
                >
                  <Check className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Middle: Name & Description */}
              <div className="space-y-2 mb-4">
                <h3 className="text-lg font-heritage font-bold text-[#1C1917]">
                  {char.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {char.description}
                </p>
              </div>

              {/* Card Quote */}
              <div className="pt-3 border-t border-[#F0EBE1] text-xs font-serif italic text-[#78350F] leading-snug">
                “{char.quote}”
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Character Guide Preview */}
      <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <CharacterPortrait characterId={currentCharacter.id} size="md" className="shrink-0" />
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
              Lời dẫn của {currentCharacter.name}:
            </div>
            <div className="text-sm text-[#44403C] font-serif italic">
              {currentCharacter.guideGreeting}
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            sounds.playBellSuccess();
            onConfirm();
          }}
          className="w-full sm:w-auto px-6 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-colors"
        >
          <span>Tiến vào Bản đồ Tứ Trấn</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
