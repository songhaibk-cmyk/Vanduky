import React, { useState } from 'react';
import { ArrowRight, Compass, Sparkles, BookOpen, Scroll, MapPin } from 'lucide-react';
import { sounds } from '../utils/audio';

interface WelcomeScreenProps {
  onStartWithNickname: (nickname: string) => void;
  onExploreFirst: () => void;
  existingNickname?: string;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartWithNickname,
  onExploreFirst,
  existingNickname = '',
}) => {
  const [nickname, setNickname] = useState(existingNickname);
  const [inputError, setInputError] = useState('');

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = nickname.trim();
    if (!trimmed) {
      setInputError('Xin bạn vui lòng nhập một biệt danh ngắn hoặc chọn "Khám phá trước"');
      sounds.playGentlePrompt();
      return;
    }
    sounds.playClick();
    onStartWithNickname(trimmed);
  };

  const handleExploreGuest = () => {
    sounds.playClick();
    onExploreFirst();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center py-12 px-4 sm:px-6 relative overflow-hidden bg-parchment">
      {/* Decorative Traditional Corner Motifs */}
      <div className="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-[#B45309]/30 pointer-events-none hidden sm:block" />
      <div className="absolute top-6 right-6 w-20 h-20 border-t-2 border-r-2 border-[#B45309]/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-6 left-6 w-20 h-20 border-b-2 border-l-2 border-[#B45309]/30 pointer-events-none hidden sm:block" />
      <div className="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-[#B45309]/30 pointer-events-none hidden sm:block" />

      <div className="max-w-2xl w-full mx-auto space-y-8 relative z-10 text-center">
        {/* Seal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#991B1B]/8 border border-[#991B1B]/30 rounded text-[#991B1B] text-xs font-semibold tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#991B1B]" />
          <span>Thăng Long Cổ Đô · Di Tích Tứ Trấn</span>
        </div>

        {/* Title & Tagline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heritage font-bold text-[#1C1917] tracking-tight leading-tight">
            Văn Du Kí
          </h1>
          <p className="text-lg sm:text-xl text-[#78350F] font-serif italic max-w-lg mx-auto">
            Mở bản đồ, đọc chuyện xưa, khám phá Hà Nội
          </p>
        </div>

        {/* Fictional Guide Greeting Box */}
        <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-5 sm:p-6 text-left shadow-xs relative">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded bg-[#991B1B] text-[#FAF6EE] flex items-center justify-center shrink-0 border border-[#7F1D1D] shadow-inner">
              <Scroll className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                  Người Dẫn Đường Cổ Đô
                </span>
                <span className="text-xs text-[#78716C] font-mono">Thăng Long Tứ Trấn</span>
              </div>
              <p className="text-sm sm:text-base text-[#44403C] leading-relaxed">
                “Kính chào lữ khách hữu duyên! Bốn phương kinh kỳ Thăng Long từ xưa có bốn ngôi đền linh thiêng trấn giữ: 
                <strong className="text-[#1C1917] font-semibold"> Đông Bạch Mã</strong>, 
                <strong className="text-[#1C1917] font-semibold"> Tây Voi Phục</strong>, 
                <strong className="text-[#1C1917] font-semibold"> Nam Kim Liên</strong> và 
                <strong className="text-[#1C1917] font-semibold"> Bắc Quán Thánh</strong>. 
                Hãy chọn nhân vật, mở bản đồ và thu thập đủ bốn dấu ấn để nhận danh hiệu thiêng liêng!”
              </p>
            </div>
          </div>
        </div>

        {/* Four Temples Micro Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-left">
          <div className="p-3 bg-[#FCFAF6] border border-[#E5DECF] rounded">
            <div className="text-[11px] font-bold text-[#991B1B] uppercase tracking-wider">Trấn Đông</div>
            <div className="text-xs font-semibold text-[#1C1917] truncate">Đền Bạch Mã</div>
            <div className="text-[11px] text-[#78716C] truncate">Hàng Buồm · Thần Long Đỗ</div>
          </div>
          <div className="p-3 bg-[#FCFAF6] border border-[#E5DECF] rounded">
            <div className="text-[11px] font-bold text-[#1E3A8A] uppercase tracking-wider">Trấn Tây</div>
            <div className="text-xs font-semibold text-[#1C1917] truncate">Đền Voi Phục</div>
            <div className="text-[11px] text-[#78716C] truncate">Kim Mã · Hoàng tử Linh Lang</div>
          </div>
          <div className="p-3 bg-[#FCFAF6] border border-[#E5DECF] rounded">
            <div className="text-[11px] font-bold text-[#B45309] uppercase tracking-wider">Trấn Nam</div>
            <div className="text-xs font-semibold text-[#1C1917] truncate">Đền Kim Liên</div>
            <div className="text-[11px] text-[#78716C] truncate">Phương Liên · Cao Sơn Đại Vương</div>
          </div>
          <div className="p-3 bg-[#FCFAF6] border border-[#E5DECF] rounded">
            <div className="text-[11px] font-bold text-[#2D4A3E] uppercase tracking-wider">Trấn Bắc</div>
            <div className="text-xs font-semibold text-[#1C1917] truncate">Đền Quán Thánh</div>
            <div className="text-[11px] text-[#78716C] truncate">Hồ Tây · Huyền Thiên Trấn Vũ</div>
          </div>
        </div>

        {/* Nickname Input & CTA Form */}
        <form onSubmit={handleStart} className="space-y-4 pt-2">
          <div className="max-w-md mx-auto text-left">
            <label htmlFor="nickname" className="block text-xs font-medium text-[#44403C] mb-1.5">
              Tên lữ khách hoặc biệt danh của bạn:
            </label>
            <div className="relative">
              <input
                id="nickname"
                type="text"
                maxLength={30}
                placeholder="Ví dụ: Lữ khách Hà Thành, Bút Hoa, ..."
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                  if (inputError) setInputError('');
                }}
                className="w-full px-4 py-3 bg-white border border-[#D6CEBE] rounded-lg text-sm text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#991B1B]/20 focus:border-[#991B1B] shadow-inner placeholder-[#A8A29E]"
              />
            </div>
            {inputError && (
              <p className="text-xs text-[#991B1B] mt-1.5">{inputError}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-[#991B1B] hover:bg-[#821818] active:bg-[#6D1414] text-white text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Bắt đầu hành trình</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleExploreGuest}
              className="w-full sm:w-auto px-5 py-3 bg-[#FAF6EE] hover:bg-[#EFE8DC] text-[#44403C] hover:text-[#1C1917] text-sm font-medium rounded-lg border border-[#D6CEBE] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Compass className="w-4 h-4 text-[#B45309]" />
              <span>Khám phá trước (Không cần tên)</span>
            </button>
          </div>
        </form>

        {/* Small Notice */}
        <div className="text-xs text-[#78716C] pt-2">
          <span>Tiến trình khám phá được lưu tự động trên thiết bị · Không yêu cầu đăng nhập</span>
        </div>
      </div>
    </div>
  );
};
