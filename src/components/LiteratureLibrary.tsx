import React, { useState } from 'react';
import { 
  BookMarked, 
  BookOpen, 
  Feather, 
  Compass, 
  Quote, 
  Search, 
  ArrowRight, 
  MapPin, 
  Sparkles,
  Layers,
  FileText
} from 'lucide-react';
import { STATIONS } from '../data/stations';
import { StationData } from '../types/game';
import { sounds } from '../utils/audio';

interface LiteratureLibraryProps {
  onSelectStation: (stationId: string) => void;
  onNavigateToMap: () => void;
}

export const LiteratureLibrary: React.FC<LiteratureLibraryProps> = ({
  onSelectStation,
  onNavigateToMap,
}) => {
  const [selectedStationId, setSelectedStationId] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'works' | 'theory' | 'glossary'>('works');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredStations = selectedStationId === 'all'
    ? STATIONS
    : STATIONS.filter((s) => s.id === selectedStationId);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 border border-[#B45309]/20 rounded text-[#B45309] text-xs font-semibold tracking-wider uppercase">
          Văn Hạc Tuyển Tập
        </div>
        <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
          Tủ Sách Ngữ Văn Thăng Long Tứ Trấn
        </h2>
        <p className="text-sm text-[#78716C] max-w-2xl mx-auto">
          Khám phá kho tàng tác phẩm văn học trung đại, thơ ca, văn bia và tri thức thi pháp học gắn liền với bốn linh tích ngàn năm của kinh thành Hà Nội.
        </p>
      </div>

      {/* Station Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => {
            sounds.playClick();
            setSelectedStationId('all');
          }}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer ${
            selectedStationId === 'all'
              ? 'bg-[#991B1B] text-white border-[#991B1B]'
              : 'bg-[#FAF6EE] text-[#57534E] border-[#E5DECF] hover:border-[#D6CEBE]'
          }`}
        >
          Tất cả Tứ Trấn (4)
        </button>
        {STATIONS.map((st) => (
          <button
            key={st.id}
            onClick={() => {
              sounds.playClick();
              setSelectedStationId(st.id);
            }}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 ${
              selectedStationId === st.id
                ? 'bg-[#991B1B] text-white border-[#991B1B]'
                : 'bg-[#FAF6EE] text-[#57534E] border-[#E5DECF] hover:border-[#D6CEBE]'
            }`}
          >
            <span>{st.name}</span>
            <span className="text-[10px] opacity-80">({st.guardianDirection})</span>
          </button>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center border-b border-[#E5DECF] gap-4 sm:gap-8 text-xs sm:text-sm">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('works');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'works'
              ? 'text-[#991B1B] border-b-2 border-[#991B1B]'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Tác phẩm văn học ({filteredStations.length})</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('theory');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'theory'
              ? 'text-[#991B1B] border-b-2 border-[#991B1B]'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          <Feather className="w-4 h-4" />
          <span>Thể loại & Bút pháp tu từ</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('glossary');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 ${
            activeTab === 'glossary'
              ? 'text-[#991B1B] border-b-2 border-[#991B1B]'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Từ điển thuật ngữ Hán - Việt</span>
        </button>
      </div>

      {/* TAB 1: TÁC PHẨM VĂN HỌC */}
      {activeTab === 'works' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {filteredStations.map((st) => (
              <div
                key={st.id}
                className="bg-[#FCFAF6] border border-[#E5DECF] rounded-xl p-5 sm:p-7 space-y-4 shadow-xs"
              >
                {/* Station Tag & Work Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EBE1] pb-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white bg-[#991B1B]">
                        {st.guardianDirection[0]}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                        {st.name} · Trấn {st.guardianDirection}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-heritage font-bold text-[#1C1917]">
                      {st.literaryWork.title}
                    </h3>
                  </div>

                  <div className="text-xs text-[#78716C] sm:text-right">
                    <div>Tác giả: <strong className="text-[#1C1917]">{st.literaryWork.author}</strong></div>
                    <div className="text-[#991B1B] font-medium">{st.literaryWork.genre}</div>
                  </div>
                </div>

                {/* Famous quote */}
                {st.literaryWork.famousQuote && (
                  <div className="bg-[#FAF6EE] border-l-2 border-[#B45309] p-3 text-xs sm:text-sm font-serif italic text-[#78350F]">
                    {st.literaryWork.famousQuote}
                  </div>
                )}

                {/* Original text & translation */}
                <div className="space-y-3">
                  {st.literaryWork.originalText && (
                    <div className="bg-[#F7F3EB] p-3.5 rounded text-xs text-[#44403C] font-serif leading-relaxed border border-[#EFE9DD]">
                      <div className="text-[10px] font-bold uppercase text-[#78716C] mb-1">Thư tịch nguyên tác:</div>
                      {st.literaryWork.originalText}
                    </div>
                  )}

                  <div className="bg-white p-4 rounded-lg border border-[#E5DECF] space-y-1.5">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#991B1B]">
                      Văn bản trích dịch & thi phẩm:
                    </div>
                    <div className="text-xs sm:text-sm text-[#1C1917] font-serif leading-relaxed whitespace-pre-line">
                      {st.literaryWork.translatedText}
                    </div>
                  </div>
                </div>

                {/* Literary analysis */}
                <div className="bg-[#FAF6EE] p-4 rounded-lg border border-[#EFE9DD] space-y-1.5 text-xs">
                  <div className="font-bold uppercase tracking-wider text-[#78350F]">
                    Bình giảng & Cảm thụ văn học:
                  </div>
                  <p className="text-[#57534E] leading-relaxed">
                    {st.literaryWork.analysis}
                  </p>
                  <div className="text-[11px] text-[#A8A29E] font-mono pt-1">
                    Nguồn tư liệu: {st.literaryWork.source} ({st.literaryWork.period})
                  </div>
                </div>

                {/* Action to explore station */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#78716C]">
                    Khám phá di tích: <strong>{st.name}</strong>
                  </span>
                  <button
                    onClick={() => {
                      sounds.playClick();
                      onSelectStation(st.id);
                    }}
                    className="px-4 py-2 bg-[#991B1B] hover:bg-[#821818] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Vào trải nghiệm trạm này</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: THỂ LOẠI & THI PHÁP HỌC */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredStations.map((st) => (
              <div
                key={st.id}
                className="bg-[#FCFAF6] border border-[#E5DECF] rounded-xl p-5 space-y-4 shadow-xs"
              >
                <div className="space-y-1 border-b border-[#F0EBE1] pb-2.5">
                  <div className="text-[11px] font-bold uppercase text-[#991B1B]">
                    {st.name} · Trấn {st.guardianDirection}
                  </div>
                  <h3 className="text-base sm:text-lg font-heritage font-bold text-[#1C1917]">
                    {st.literatureKnowledge.genreDefinition.genreName}
                  </h3>
                </div>

                <p className="text-xs text-[#57534E] leading-relaxed">
                  {st.literatureKnowledge.genreDefinition.description}
                </p>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase text-[#78350F]">
                    Đặc trưng thi pháp:
                  </span>
                  <ul className="text-xs text-[#44403C] space-y-1 list-disc list-inside">
                    {st.literatureKnowledge.genreDefinition.keyCharacteristics.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#F0EBE1] space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#1C1917]">
                    Bút pháp tu từ tiêu biểu:
                  </span>
                  {st.literatureKnowledge.rhetoricalDevices.map((dev, idx) => (
                    <div key={idx} className="bg-white p-2.5 rounded border border-[#E5DECF] text-xs space-y-1">
                      <div className="font-semibold text-[#991B1B]">{dev.name}</div>
                      <div className="font-serif italic text-[#78350F] text-[11px]">“{dev.example}”</div>
                      <p className="text-[#57534E] text-[11px]">{dev.effect}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: TỪ ĐIỂN THUẬT NGỮ HÁN - VIỆT */}
      {activeTab === 'glossary' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {filteredStations.flatMap((st) => 
              st.literatureKnowledge.glossary.map((g, idx) => ({
                ...g,
                stationName: st.name,
                direction: st.guardianDirection,
                key: `${st.id}-${idx}`,
              }))
            ).map((item) => (
              <div
                key={item.key}
                className="bg-[#FCFAF6] border border-[#E5DECF] rounded-lg p-3.5 space-y-1.5 shadow-2xs hover:border-[#D6CEBE] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#1C1917]">{item.term}</span>
                  {item.hanTu && (
                    <span className="text-xs font-mono text-[#78716C] bg-[#FAF6EE] px-1.5 py-0.5 rounded border border-[#EFE9DD]">
                      {item.hanTu}
                    </span>
                  )}
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">{item.meaning}</p>
                <div className="pt-1.5 border-t border-[#F0EBE1] text-[11px] text-[#78350F] font-serif italic">
                  Gắn với {item.stationName}: {item.literaryContext}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA to return to map */}
      <div className="text-center pt-4">
        <button
          onClick={() => {
            sounds.playClick();
            onNavigateToMap();
          }}
          className="px-6 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 mx-auto cursor-pointer transition-colors"
        >
          <span>Trở về Bản đồ Khám phá</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
