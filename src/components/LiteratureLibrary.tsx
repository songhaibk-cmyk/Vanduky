import React, { useState } from 'react';
import { 
  BookMarked, 
  BookOpen, 
  Feather, 
  Search, 
  ArrowRight, 
  Sparkles,
  Layers,
  FileText,
  Filter,
  Check
} from 'lucide-react';
import { STATIONS } from '../data/stations';
import { StationData, LiteraryWork } from '../types/game';
import { TempleIllustration } from './TempleIllustration';
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
  const [activeTab, setActiveTab] = useState<'works' | 'theory' | 'deep_analysis' | 'glossary'>('works');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');

  // Flatten all works with their station info
  const allWorksWithStation = STATIONS.flatMap((st) => {
    const list = st.literaryWorks && st.literaryWorks.length > 0 
      ? st.literaryWorks 
      : [st.literaryWork];
    return list.map((work) => ({
      ...work,
      stationId: st.id,
      stationName: st.name,
      guardianDirection: st.guardianDirection,
      deity: st.deity,
    }));
  });

  // Extract unique genres for filter
  const genres = Array.from(new Set(allWorksWithStation.map((w) => w.genre)));

  // Filter works by station, genre, and search query
  const filteredWorks = allWorksWithStation.filter((work) => {
    const matchesStation = selectedStationId === 'all' || work.stationId === selectedStationId;
    const matchesGenre = selectedGenre === 'all' || work.genre === selectedGenre;
    const matchesSearch = searchQuery.trim() === '' || 
      work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.translatedText.toLowerCase().includes(searchQuery.toLowerCase()) ||
      work.analysis.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (work.famousQuote && work.famousQuote.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStation && matchesGenre && matchesSearch;
  });

  const filteredStations = selectedStationId === 'all'
    ? STATIONS
    : STATIONS.filter((s) => s.id === selectedStationId);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#B45309]/10 border border-[#B45309]/30 rounded-full text-[#B45309] text-xs font-semibold tracking-wider uppercase">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Văn Hạc Toàn Thư · Thăng Long Tứ Trấn</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
          Tủ Sách Ngữ Văn & Thi Họa Di Sản
        </h2>
        <p className="text-xs sm:text-sm text-[#78716C] max-w-2xl mx-auto leading-relaxed">
          Kho tàng {allWorksWithStation.length} tác phẩm văn học trung đại, thơ ca, bi ký và tri thức thi pháp học gắn liền với 4 ngôi đền thiêng ngàn năm bảo hộ kinh thành Thăng Long - Hà Nội.
        </p>
      </div>

      {/* Station Selector Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => {
            sounds.playClick();
            setSelectedStationId('all');
          }}
          className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer shadow-2xs ${
            selectedStationId === 'all'
              ? 'bg-[#991B1B] text-white border-[#991B1B] shadow-xs'
              : 'bg-[#FAF6EE] text-[#57534E] border-[#E5DECF] hover:border-[#D6CEBE]'
          }`}
        >
          Tất cả Tứ Trấn ({allWorksWithStation.length} tác phẩm)
        </button>
        {STATIONS.map((st) => (
          <button
            key={st.id}
            onClick={() => {
              sounds.playClick();
              setSelectedStationId(st.id);
            }}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs ${
              selectedStationId === st.id
                ? 'bg-[#991B1B] text-white border-[#991B1B] shadow-xs'
                : 'bg-[#FAF6EE] text-[#57534E] border-[#E5DECF] hover:border-[#D6CEBE]'
            }`}
          >
            <span>{st.name}</span>
            <span className="text-[10px] opacity-80">({st.guardianDirection})</span>
          </button>
        ))}
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center border-b border-[#E5DECF] gap-2 sm:gap-6 text-xs sm:text-sm overflow-x-auto">
        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('works');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'works'
              ? 'text-[#991B1B] border-b-2 border-[#991B1B]'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Tác phẩm văn học ({filteredWorks.length})</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('theory');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'theory'
              ? 'text-[#991B1B] border-b-2 border-[#991B1B]'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          <Feather className="w-4 h-4" />
          <span>Thể loại & Tu từ học</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('deep_analysis');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 shrink-0 ${
            activeTab === 'deep_analysis'
              ? 'text-[#991B1B] border-b-2 border-[#991B1B]'
              : 'text-[#78716C] hover:text-[#1C1917]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Phân tích 3 bình diện</span>
        </button>

        <button
          onClick={() => {
            sounds.playClick();
            setActiveTab('glossary');
          }}
          className={`pb-3 font-semibold transition-colors relative cursor-pointer flex items-center gap-1.5 shrink-0 ${
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
          {/* Search & Genre Filters Bar */}
          <div className="bg-[#FAF6EE] p-3.5 sm:p-4 rounded-xl border border-[#E5DECF] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#78716C]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Tìm tác phẩm, tác giả, câu thơ, từ khóa..."
                className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-[#E5DECF] text-xs sm:text-sm text-[#1C1917] focus:outline-none focus:border-[#991B1B] shadow-2xs"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
              <Filter className="w-3.5 h-3.5 text-[#78716C] shrink-0" />
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="bg-white border border-[#E5DECF] rounded-lg px-2.5 py-2 text-xs text-[#44403C] focus:outline-none focus:border-[#991B1B] shadow-2xs cursor-pointer"
              >
                <option value="all">Tất cả thể loại</option>
                {genres.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Works List */}
          {filteredWorks.length === 0 ? (
            <div className="text-center py-12 bg-[#FAF6EE] rounded-xl border border-[#E5DECF] space-y-2">
              <p className="text-sm text-[#78716C]">Không tìm thấy tác phẩm văn học phù hợp với từ khóa.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGenre('all');
                  setSelectedStationId('all');
                }}
                className="text-xs text-[#991B1B] font-semibold hover:underline cursor-pointer"
              >
                Xóa bộ lọc tìm kiếm
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {filteredWorks.map((work, idx) => (
                <div
                  key={work.id || idx}
                  className="bg-[#FCFAF6] border border-[#E5DECF] rounded-xl p-5 sm:p-7 space-y-4 shadow-xs hover:border-[#D6CEBE] transition-all"
                >
                  {/* Station Tag & Work Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#F0EBE1] pb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold text-white bg-[#991B1B] shadow-2xs">
                          {work.guardianDirection[0]}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                          {work.stationName} · Trấn {work.guardianDirection}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-heritage font-bold text-[#1C1917]">
                        {work.title}
                      </h3>
                    </div>

                    <div className="text-xs text-[#78716C] sm:text-right">
                      <div>Tác giả: <strong className="text-[#1C1917]">{work.author}</strong></div>
                      <div className="text-[#991B1B] font-medium">{work.genre}</div>
                      <div className="italic text-[11px] font-serif">{work.period}</div>
                    </div>
                  </div>

                  {/* Famous quote banner */}
                  {work.famousQuote && (
                    <div className="bg-[#FAF6EE] border-l-3 border-[#B45309] p-3 text-xs sm:text-sm font-serif italic text-[#78350F] rounded-r-lg">
                      {work.famousQuote}
                    </div>
                  )}

                  {/* Han-Nom / Original text & Translation */}
                  <div className="space-y-3">
                    {(work.hanNomText || work.originalText) && (
                      <div className="bg-[#F7F3EB] p-3.5 rounded-lg text-xs text-[#44403C] font-serif leading-relaxed border border-[#EFE9DD] space-y-1">
                        <div className="text-[10px] font-bold uppercase text-[#78716C]">Thư tịch nguyên tác chữ Hán / Nôm:</div>
                        <p className="font-serif sm:text-sm tracking-wide">{work.hanNomText || work.originalText}</p>
                      </div>
                    )}

                    {work.pinyinOrPhienAm && (
                      <div className="bg-[#F8F5EE] p-3 rounded-lg border border-[#EFE9DD] text-xs text-[#57534E] font-serif italic space-y-0.5">
                        <span className="text-[10px] font-bold uppercase text-[#B45309] not-italic block">Phiên âm:</span>
                        <p>{work.pinyinOrPhienAm}</p>
                      </div>
                    )}

                    <div className="bg-white p-4 rounded-lg border border-[#E5DECF] space-y-1.5 shadow-2xs">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-[#991B1B]">
                        Văn bản dịch nghĩa & Diễn giải thơ văn:
                      </div>
                      <div className="text-xs sm:text-sm text-[#1C1917] font-serif leading-relaxed whitespace-pre-line font-normal">
                        {work.translatedText}
                      </div>
                    </div>

                    {work.aestheticHighlight && (
                      <div className="bg-[#FFFDF5] p-3 rounded-lg border border-[#FDE68A] text-xs text-[#92400E] space-y-0.5">
                        <strong className="uppercase tracking-wider text-[10px] block text-[#B45309]">Điểm nhấn thi pháp:</strong>
                        <p className="leading-relaxed font-serif">{work.aestheticHighlight}</p>
                      </div>
                    )}
                  </div>

                  {/* Literary analysis */}
                  <div className="bg-[#FAF6EE] p-4 rounded-lg border border-[#EFE9DD] space-y-1.5 text-xs">
                    <div className="font-bold uppercase tracking-wider text-[#78350F]">
                      Bình giảng & Cảm thụ văn học:
                    </div>
                    <p className="text-[#57534E] leading-relaxed">
                      {work.analysis}
                    </p>
                    <div className="text-[11px] text-[#A8A29E] font-mono pt-1">
                      Nguồn xuất xứ: {work.source}
                    </div>
                  </div>

                  {/* Action to explore station */}
                  <div className="flex items-center justify-between pt-2 border-t border-[#F0EBE1]">
                    <span className="text-xs text-[#78716C]">
                      Linh tích phụng thờ: <strong>{work.stationName}</strong>
                    </span>
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onSelectStation(work.stationId);
                      }}
                      className="px-4 py-2 bg-[#991B1B] hover:bg-[#821818] text-white text-xs font-semibold rounded-lg shadow-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Vào khám phá trạm này</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 2: THỂ LOẠI & THI PHÁP HỌC */}
      {activeTab === 'theory' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredStations.map((st) => (
              <div
                key={st.id}
                className="bg-[#FCFAF6] border border-[#E5DECF] rounded-xl p-5 sm:p-6 space-y-4 shadow-xs"
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
                    Đặc trưng thi pháp then chốt:
                  </span>
                  <ul className="text-xs text-[#44403C] space-y-1 list-disc list-inside">
                    {st.literatureKnowledge.genreDefinition.keyCharacteristics.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-[#F0EBE1] space-y-2">
                  <span className="text-[11px] font-bold uppercase text-[#1C1917]">
                    Biện pháp tu từ & Bút pháp tiêu biểu:
                  </span>
                  {st.literatureKnowledge.rhetoricalDevices.map((dev, idx) => (
                    <div key={idx} className="bg-white p-3 rounded-lg border border-[#E5DECF] text-xs space-y-1 shadow-2xs">
                      <div className="font-semibold text-[#991B1B]">{dev.name}</div>
                      <div className="font-serif italic text-[#78350F] text-[11px] bg-[#FAF6EE] p-1.5 rounded">“{dev.example}”</div>
                      <p className="text-[#57534E] text-[11px] leading-relaxed">
                        <strong>Tác dụng:</strong> {dev.effect}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PHÂN TÍCH 3 BÌNH DIỆN CHUYÊN SÂU */}
      {activeTab === 'deep_analysis' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {filteredStations.map((st) => (
              <div
                key={st.id}
                className="bg-[#FCFAF6] border border-[#E5DECF] rounded-xl p-5 sm:p-6 space-y-4 shadow-xs"
              >
                <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
                  <div>
                    <span className="text-xs font-bold uppercase text-[#991B1B]">
                      Trấn {st.guardianDirection}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heritage font-bold text-[#1C1917]">
                      {st.name} – Phân tích Bình diện Ngữ văn Chuyên sâu
                    </h3>
                  </div>
                  <span className="seal-stamp text-[10px] px-2 py-0.5">{st.sealName}</span>
                </div>

                {st.literatureKnowledge.deepAnalysis ? (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div className="bg-white p-4 rounded-xl border border-[#E5DECF] space-y-1.5 shadow-2xs">
                      <div className="font-bold uppercase text-[#B45309] text-[11px] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>1. Chủ đề tư tưởng:</span>
                      </div>
                      <p className="text-[#57534E] leading-relaxed">
                        {st.literatureKnowledge.deepAnalysis.theme}
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#E5DECF] space-y-1.5 shadow-2xs">
                      <div className="font-bold uppercase text-[#B45309] text-[11px] flex items-center gap-1.5">
                        <Feather className="w-3.5 h-3.5" />
                        <span>2. Cấu trúc nghệ thuật:</span>
                      </div>
                      <p className="text-[#57534E] leading-relaxed">
                        {st.literatureKnowledge.deepAnalysis.artisticStructure}
                      </p>
                    </div>

                    <div className="bg-white p-4 rounded-xl border border-[#E5DECF] space-y-1.5 shadow-2xs">
                      <div className="font-bold uppercase text-[#B45309] text-[11px] flex items-center gap-1.5">
                        <BookMarked className="w-3.5 h-3.5" />
                        <span>3. Hồn cốt dân tộc:</span>
                      </div>
                      <p className="text-[#57534E] leading-relaxed">
                        {st.literatureKnowledge.deepAnalysis.nationalSpirit}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-[#78716C]">Đang cập nhật phân tích chuyên sâu...</p>
                )}

                <div className="bg-[#F0FDF4]/80 border border-[#BBF7D0] rounded-lg p-3.5 text-xs text-[#166534] space-y-1">
                  <strong>Ý nghĩa giáo dục & nhân văn:</strong>
                  <p className="leading-relaxed">{st.literatureKnowledge.pedagogicalTakeaway}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: TỪ ĐIỂN THUẬT NGỮ HÁN - VIỆT */}
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
