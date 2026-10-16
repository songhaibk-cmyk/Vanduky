import React, { useState } from 'react';
import { 
  ArrowLeft, 
  BookOpen, 
  Eye, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Award, 
  Info, 
  ChevronRight,
  ShieldCheck,
  RotateCcw,
  Share2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { StationData, PlayerProgress, Character } from '../types/game';
import { getCharacterById } from '../data/characters';
import { sounds } from '../utils/audio';

interface StationModalProps {
  station: StationData;
  player: PlayerProgress;
  onClose: () => void;
  onCompleteStation: (stationId: string, earnedPoints: number) => void;
}

type StationStep = 'overview' | 'read_story' | 'observe' | 'quiz' | 'completed_celebration';

export const StationModal: React.FC<StationModalProps> = ({
  station,
  player,
  onClose,
  onCompleteStation,
}) => {
  const [currentStep, setCurrentStep] = useState<StationStep>('overview');
  
  // Observation state
  const [observeSelectedOption, setObserveSelectedOption] = useState<string | null>(null);
  const [observeSubmitted, setObserveSubmitted] = useState<boolean>(false);

  // Quiz state
  const [currentQuizIndex, setCurrentQuizIndex] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<string, boolean>>({});
  const [tempPointsEarned, setTempPointsEarned] = useState<number>(0);

  const character = getCharacterById(player.characterId);
  const isAlreadyCompleted = player.completedStations.includes(station.id);

  // Trigger celebration effects
  const fireConfetti = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#991B1B', '#B45309', '#14532D', '#D97706'],
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  const handleObserveAnswer = (optionId: string) => {
    setObserveSelectedOption(optionId);
  };

  const submitObserveAnswer = () => {
    if (!observeSelectedOption) return;
    setObserveSubmitted(true);
    const chosen = station.observation.options.find((o) => o.id === observeSelectedOption);
    if (chosen?.isCorrect) {
      sounds.playBellSuccess();
      setTempPointsEarned((prev) => prev + 25);
    } else {
      sounds.playGentlePrompt();
    }
  };

  const handleQuizAnswer = (optionId: string) => {
    const q = station.quiz[currentQuizIndex];
    setQuizAnswers((prev) => ({ ...prev, [q.id]: optionId }));
  };

  const submitQuizAnswer = () => {
    const q = station.quiz[currentQuizIndex];
    const answer = quizAnswers[q.id];
    if (!answer) return;

    setQuizSubmitted((prev) => ({ ...prev, [q.id]: true }));
    const chosen = q.options.find((o) => o.id === answer);
    if (chosen?.isCorrect) {
      sounds.playBellSuccess();
      setTempPointsEarned((prev) => prev + 25);
    } else {
      sounds.playGentlePrompt();
    }
  };

  const handleNextQuizQuestion = () => {
    sounds.playClick();
    if (currentQuizIndex < station.quiz.length - 1) {
      setCurrentQuizIndex((prev) => prev + 1);
    } else {
      // Completed all questions in the station!
      sounds.playTempleGong();
      fireConfetti();
      setCurrentStep('completed_celebration');
      // Total earned: 25 (observe) + 75 (3 quiz questions) + 25 (completion bonus) = 125 pts
      const totalEarned = tempPointsEarned + 25;
      onCompleteStation(station.id, totalEarned);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#FAF7F0] border border-[#D6CEBE] rounded-xl max-w-3xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh] relative">
        {/* Modal Top Banner */}
        <div className="bg-[#F4EDE1] border-b border-[#E5DECF] px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 shrink-0">
          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#57534E] hover:text-[#1C1917] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Quay lại bản đồ</span>
          </button>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
              Trấn {station.guardianDirection}
            </span>
            <span className="text-[#A8A29E]">·</span>
            <span className="text-xs font-serif font-semibold text-[#1C1917] truncate max-w-[150px] sm:max-w-none">
              {station.name}
            </span>
          </div>

          <div className="text-xs font-mono text-[#78716C] bg-[#FAF6EE] px-2.5 py-1 rounded border border-[#E5DECF]">
            {isAlreadyCompleted ? 'Đã hoàn thành' : 'Đang thực hiện'}
          </div>
        </div>

        {/* Step Progression Tabs */}
        <div className="bg-[#FAF6EE] border-b border-[#EFE9DD] px-4 sm:px-6 py-2 flex items-center justify-between text-xs text-[#78716C] overflow-x-auto gap-2 shrink-0">
          <button
            onClick={() => {
              sounds.playClick();
              setCurrentStep('overview');
            }}
            className={`flex items-center gap-1.5 py-1 px-2.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
              currentStep === 'overview'
                ? 'bg-white text-[#991B1B] font-semibold shadow-xs'
                : 'hover:text-[#1C1917]'
            }`}
          >
            <Info className="w-3.5 h-3.5" />
            <span>Tổng quan</span>
          </button>

          <ChevronRight className="w-3 h-3 text-[#D6CEBE] shrink-0" />

          <button
            onClick={() => {
              sounds.playClick();
              setCurrentStep('read_story');
            }}
            className={`flex items-center gap-1.5 py-1 px-2.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
              currentStep === 'read_story'
                ? 'bg-white text-[#991B1B] font-semibold shadow-xs'
                : 'hover:text-[#1C1917]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Đọc chuyện</span>
          </button>

          <ChevronRight className="w-3 h-3 text-[#D6CEBE] shrink-0" />

          <button
            onClick={() => {
              sounds.playClick();
              setCurrentStep('observe');
            }}
            className={`flex items-center gap-1.5 py-1 px-2.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
              currentStep === 'observe'
                ? 'bg-white text-[#991B1B] font-semibold shadow-xs'
                : 'hover:text-[#1C1917]'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>2. Quan sát</span>
          </button>

          <ChevronRight className="w-3 h-3 text-[#D6CEBE] shrink-0" />

          <button
            onClick={() => {
              sounds.playClick();
              setCurrentStep('quiz');
            }}
            className={`flex items-center gap-1.5 py-1 px-2.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
              currentStep === 'quiz'
                ? 'bg-white text-[#991B1B] font-semibold shadow-xs'
                : 'hover:text-[#1C1917]'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>3. Thử tài ({currentQuizIndex + 1}/{station.quiz.length})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* STEP: OVERVIEW */}
          {currentStep === 'overview' && (
            <div className="space-y-6">
              {/* Header Info */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="seal-stamp text-xs px-2 py-0.5">
                    {station.sealName}
                  </span>
                  <span className="text-xs text-[#78716C] font-mono">
                    Hán tự: {station.sealChinese}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
                  {station.name} – Trấn {station.guardianDirection}
                </h2>
                <p className="text-sm text-[#78350F] font-serif italic">
                  Thần chủ phụng thờ: <strong>{station.deity}</strong>
                </p>
              </div>

              {/* Character Motivation Dialogue */}
              <div className="bg-[#FCFAF6] border border-[#E5DECF] rounded-lg p-4 flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0 mt-0.5"
                  style={{ backgroundColor: character.accentColor }}
                >
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#991B1B]">
                    Lời dẫn của {character.name}:
                  </div>
                  <p className="text-xs sm:text-sm text-[#44403C] font-serif leading-relaxed">
                    “Bước chân ta đã dừng trước ngưỡng cửa {station.name}. Nơi đây từng chứng kiến những dấu mốc thiêng liêng gìn giữ cõi bờ kinh kỳ. Bạn hữu hãy đọc kỹ thư tịch và quan sát từng hiện vật cổ kính!”
                  </p>
                </div>
              </div>

              {/* Historical & Architectural summary */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#1C1917] uppercase tracking-wider">
                  Đặc điểm lịch sử & kiến trúc
                </h4>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {station.shortDescription}
                </p>
                <div className="bg-[#FAF6EE] p-3.5 rounded border border-[#EFE9DD] text-xs text-[#57534E] leading-relaxed">
                  <strong>Dấu ấn nghệ thuật:</strong> {station.architecturalFeature}
                </div>
              </div>

              {/* Civil Etiquette Tips (Ứng xử văn minh khi tham quan) */}
              <div className="bg-[#F0FDF4]/60 border border-[#BBF7D0] rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#15803D] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Ứng xử văn minh khi tham quan di tích</span>
                </div>
                <p className="text-xs text-[#166534] leading-relaxed">
                  {station.etiquetteTip}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-3 border-t border-[#F0EBE1]">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setCurrentStep('read_story');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Bắt đầu đọc câu chuyện tích xưa</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 1: READ STORY */}
          {currentStep === 'read_story' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Bước 1: Đọc Chuyện Xưa
                </span>
                <h3 className="text-xl sm:text-2xl font-heritage font-bold text-[#1C1917]">
                  {station.story.title}
                </h3>
                <div className="text-xs text-[#78716C] flex items-center gap-2">
                  <span>Thời đại: {station.story.era}</span>
                  <span>·</span>
                  <span className="italic font-serif">{station.story.authorOrSource}</span>
                </div>
              </div>

              {/* Story Excerpt Card */}
              <div className="bg-[#FCFAF6] border border-[#E5DECF] rounded-lg p-5 sm:p-6 space-y-4 shadow-inner relative">
                <div className="text-sm sm:text-base text-[#292524] font-serif leading-relaxed first-letter:text-4xl first-letter:font-heritage first-letter:font-bold first-letter:float-left first-letter:mr-2.5 first-letter:text-[#991B1B]">
                  {station.story.excerpt}
                </div>

                <div className="pt-3 border-t border-[#EFE9DD] space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#78350F]">
                    Bối cảnh lịch sử xác thực:
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {station.story.historicalContext}
                  </p>
                </div>
              </div>

              {/* Reflection question */}
              <div className="bg-[#FAF6EE] p-4 rounded-lg border border-[#E5DECF] space-y-1">
                <div className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                  Gợi mở suy ngẫm cho người chép sử:
                </div>
                <p className="text-xs sm:text-sm text-[#44403C] font-serif italic">
                  “{station.story.reflectionQuestion}”
                </p>
              </div>

              {/* Step Navigation */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F0EBE1]">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setCurrentStep('overview');
                  }}
                  className="px-4 py-2 text-xs font-medium text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                >
                  Quay lại tổng quan
                </button>

                <button
                  onClick={() => {
                    sounds.playClick();
                    setCurrentStep('observe');
                  }}
                  className="px-5 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>Chuyển sang Bước 2: Quan sát hiện vật</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: OBSERVE */}
          {currentStep === 'observe' && (
            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider">
                  Bước 2: Quan Sát Hiện Vật & Linh Khí
                </span>
                <h3 className="text-xl sm:text-2xl font-heritage font-bold text-[#1C1917]">
                  {station.observation.title}
                </h3>
              </div>

              {/* Observation Clue Box */}
              <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-5 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-[#78350F]">
                  Mục tiêu quan sát: {station.observation.targetArtifact}
                </div>
                <p className="text-sm text-[#44403C] leading-relaxed">
                  {station.observation.prompt}
                </p>
                <div className="bg-white/90 p-3 rounded border border-[#E5DECF] text-xs text-[#57534E] font-serif italic">
                  <strong>Manh mối cổ độ:</strong> “{station.observation.clue}”
                </div>
              </div>

              {/* Observation Challenge Question */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-[#1C1917]">
                  {station.observation.question}
                </h4>

                <div className="space-y-2">
                  {station.observation.options.map((opt) => {
                    const isSelected = observeSelectedOption === opt.id;
                    const isSubmitted = observeSubmitted;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => {
                          if (!observeSubmitted) {
                            sounds.playClick();
                            handleObserveAnswer(opt.id);
                          }
                        }}
                        disabled={observeSubmitted}
                        className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#FCFAF6] border-[#991B1B] text-[#1C1917] font-medium shadow-xs'
                            : 'bg-white border-[#E5DECF] text-[#57534E] hover:border-[#D6CEBE]'
                        } ${
                          isSubmitted && opt.isCorrect
                            ? 'border-[#15803D] bg-[#F0FDF4] text-[#166534]'
                            : ''
                        } ${
                          isSubmitted && isSelected && !opt.isCorrect
                            ? 'border-[#DC2626] bg-[#FEF2F2] text-[#991B1B]'
                            : ''
                        }`}
                      >
                        <span>{opt.text}</span>
                        {isSubmitted && opt.isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                        )}
                        {isSubmitted && isSelected && !opt.isCorrect && (
                          <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Feedback after submission */}
              {observeSubmitted && (
                <div
                  className={`p-4 rounded-lg border text-xs sm:text-sm leading-relaxed space-y-1 ${
                    station.observation.options.find((o) => o.id === observeSelectedOption)?.isCorrect
                      ? 'bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]'
                      : 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                  }`}
                >
                  <div className="font-bold">
                    {station.observation.options.find((o) => o.id === observeSelectedOption)?.isCorrect
                      ? '✓ Lời giải chính xác (+25 điểm kiến thức)'
                      : 'Gợi ý thêm để bạn hiểu rõ hơn:'}
                  </div>
                  <p>
                    {station.observation.options.find((o) => o.id === observeSelectedOption)?.explanation ||
                      station.observation.explanation}
                  </p>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-3 border-t border-[#F0EBE1]">
                <button
                  onClick={() => {
                    sounds.playClick();
                    setCurrentStep('read_story');
                  }}
                  className="px-4 py-2 text-xs font-medium text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                >
                  Quay lại đọc chuyện
                </button>

                {!observeSubmitted ? (
                  <button
                    onClick={submitObserveAnswer}
                    disabled={!observeSelectedOption}
                    className="px-5 py-2.5 bg-[#B45309] hover:bg-[#92400E] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                  >
                    Xác nhận đáp án
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      sounds.playClick();
                      setCurrentStep('quiz');
                    }}
                    className="px-5 py-2.5 bg-[#991B1B] hover:bg-[#821818] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Tiếp tục sang Bước 3: Thử tài</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {/* STEP 3: QUIZ (THỬ TÀI NGƯỜI KỂ CHUYỆN) */}
          {currentStep === 'quiz' && (
            <div className="space-y-6">
              {(() => {
                const q = station.quiz[currentQuizIndex];
                const selectedOptionId = quizAnswers[q.id];
                const isSubmitted = !!quizSubmitted[q.id];
                const chosenOption = q.options.find((o) => o.id === selectedOptionId);

                return (
                  <div className="space-y-5">
                    {/* Header info */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-[#991B1B] uppercase tracking-wider">
                          Bước 3: Thử Tài Người Kể Chuyện
                        </span>
                        <h4 className="text-xs text-[#78716C]">
                          Câu hỏi {currentQuizIndex + 1} trên {station.quiz.length}
                        </h4>
                      </div>
                      <div className="text-xs font-mono font-semibold text-[#B45309] bg-[#FAF6EE] px-2.5 py-1 rounded border border-[#E5DECF]">
                        +25 điểm / câu đúng
                      </div>
                    </div>

                    {/* Question Statement */}
                    <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-5 space-y-2">
                      <p className="text-base sm:text-lg font-heritage font-bold text-[#1C1917] leading-snug">
                        {q.question}
                      </p>
                      <div className="text-[11px] text-[#78716C] font-serif italic">
                        Nguồn xác thực: {q.sourceCitation}
                      </div>
                    </div>

                    {/* Options list */}
                    <div className="space-y-2.5">
                      {q.options.map((opt) => {
                        const isSelected = selectedOptionId === opt.id;
                        return (
                          <button
                            key={opt.id}
                            onClick={() => {
                              if (!isSubmitted) {
                                sounds.playClick();
                                handleQuizAnswer(opt.id);
                              }
                            }}
                            disabled={isSubmitted}
                            className={`w-full text-left p-3.5 rounded-lg border text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between gap-3 ${
                              isSelected
                                ? 'bg-[#FCFAF6] border-[#991B1B] text-[#1C1917] font-medium shadow-xs'
                                : 'bg-white border-[#E5DECF] text-[#57534E] hover:border-[#D6CEBE]'
                            } ${
                              isSubmitted && opt.isCorrect
                                ? 'border-[#15803D] bg-[#F0FDF4] text-[#166534]'
                                : ''
                            } ${
                              isSubmitted && isSelected && !opt.isCorrect
                                ? 'border-[#DC2626] bg-[#FEF2F2] text-[#991B1B]'
                                : ''
                            }`}
                          >
                            <span>{opt.text}</span>
                            {isSubmitted && opt.isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0" />
                            )}
                            {isSubmitted && isSelected && !opt.isCorrect && (
                              <AlertCircle className="w-4 h-4 text-[#DC2626] shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {isSubmitted && (
                      <div
                        className={`p-4 rounded-lg border text-xs sm:text-sm leading-relaxed space-y-1 ${
                          chosenOption?.isCorrect
                            ? 'bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]'
                            : 'bg-[#FFFBEB] border-[#FDE68A] text-[#92400E]'
                        }`}
                      >
                        <div className="font-bold">
                          {chosenOption?.isCorrect
                            ? '✓ Đáp án chuẩn xác! (+25 điểm)'
                            : 'Chưa đúng hoàn toàn, hãy xem lời giải:'}
                        </div>
                        <p>{chosenOption?.explanation}</p>
                      </div>
                    )}

                    {/* Bottom Nav */}
                    <div className="flex items-center justify-between pt-3 border-t border-[#F0EBE1]">
                      <button
                        onClick={() => {
                          sounds.playClick();
                          setCurrentStep('observe');
                        }}
                        className="px-4 py-2 text-xs font-medium text-[#57534E] hover:text-[#1C1917] cursor-pointer"
                      >
                        Xem lại quan sát
                      </button>

                      {!isSubmitted ? (
                        <button
                          onClick={submitQuizAnswer}
                          disabled={!selectedOptionId}
                          className="px-5 py-2.5 bg-[#991B1B] hover:bg-[#821818] disabled:opacity-50 text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                        >
                          Xác nhận câu trả lời
                        </button>
                      ) : (
                        <button
                          onClick={handleNextQuizQuestion}
                          className="px-5 py-2.5 bg-[#15803D] hover:bg-[#166534] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <span>
                            {currentQuizIndex < station.quiz.length - 1
                              ? 'Câu tiếp theo'
                              : 'Hoàn thành trạm này!'}
                          </span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* STEP: CELEBRATION UPON FINISHING THE STATION */}
          {currentStep === 'completed_celebration' && (
            <div className="text-center py-6 px-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#15803D]/10 border-2 border-[#15803D] text-[#15803D] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="seal-stamp text-xs px-3 py-1">
                  ĐÃ KHẮC DẤU ẤN · {station.sealName}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heritage font-bold text-[#1C1917]">
                  Hoàn thành xuất sắc {station.name}!
                </h3>
                <p className="text-sm text-[#57534E] max-w-md mx-auto">
                  Bạn đã giải mã trọn vẹn câu chuyện, tinh thần di sản và thu thập huy hiệu{' '}
                  <strong className="text-[#991B1B]">“{station.badgeName}”</strong>.
                </p>
              </div>

              {/* Badge Preview Card */}
              <div className="bg-[#FAF6EE] border border-[#E5DECF] rounded-lg p-5 max-w-sm mx-auto shadow-xs text-center space-y-3">
                <div className="w-14 h-14 rounded-full border-2 border-[#991B1B] bg-white flex items-center justify-center mx-auto shadow-inner">
                  <Award className="w-7 h-7 text-[#991B1B]" />
                </div>
                <div>
                  <div className="text-sm font-heritage font-bold text-[#1C1917]">
                    {station.badgeName}
                  </div>
                  <div className="text-xs text-[#78716C] mt-1 font-serif">
                    {station.badgeDescription}
                  </div>
                </div>
              </div>

              {/* Dialogue motivation */}
              <div className="bg-[#FCFAF6] border border-[#E5DECF] rounded-lg p-4 text-xs sm:text-sm text-[#44403C] font-serif italic max-w-md mx-auto">
                “{character.guideMotivation}”
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    sounds.playClick();
                    onClose();
                  }}
                  className="px-6 py-3 bg-[#991B1B] hover:bg-[#821818] text-white text-sm font-semibold rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  Trở lại bản đồ và tiếp tục hành trình
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
