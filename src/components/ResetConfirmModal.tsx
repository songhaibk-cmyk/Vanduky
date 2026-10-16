import React from 'react';
import { AlertTriangle, RotateCcw, X } from 'lucide-react';
import { sounds } from '../utils/audio';

interface ResetConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirmReset: () => void;
}

export const ResetConfirmModal: React.FC<ResetConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirmReset,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-[#FAF7F0] border border-[#D6CEBE] rounded-xl max-w-md w-full shadow-2xl p-6 space-y-5 relative">
        <button
          onClick={() => {
            sounds.playClick();
            onClose();
          }}
          className="absolute top-4 right-4 text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-heritage font-bold text-[#1C1917]">
              Xác nhận đặt lại hành trình?
            </h3>
            <span className="text-xs text-[#78716C]">Thao tác này không thể hoàn tác</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
          Toàn bộ điểm tích lũy, các trạm đã giải mã và huy hiệu đã thu thập trong phiên chơi này trên thiết bị sẽ được xóa và đưa về điểm xuất phát ban đầu. Bạn có chắc chắn muốn bắt đầu lại một chuyến đi mới?
        </p>

        <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#F0EBE1]">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="px-4 py-2 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            Giữ lại tiến trình
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              onConfirmReset();
            }}
            className="px-4 py-2 bg-[#991B1B] hover:bg-[#821818] text-white text-xs font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Xác nhận xóa & Bắt đầu lại</span>
          </button>
        </div>
      </div>
    </div>
  );
};
