import React from 'react';

interface TempleIllustrationProps {
  stationId: string;
  className?: string;
  aspectRatio?: '16:9' | '4:3' | 'square' | 'banner';
  interactive?: boolean;
}

export const TempleIllustration: React.FC<TempleIllustrationProps> = ({
  stationId,
  className = '',
  aspectRatio = '4:3',
  interactive = false,
}) => {
  const getAspectClass = () => {
    switch (aspectRatio) {
      case '16:9':
        return 'aspect-16/9';
      case 'banner':
        return 'h-48 sm:h-64 w-full';
      case 'square':
        return 'aspect-square';
      case '4:3':
      default:
        return 'aspect-4/3';
    }
  };

  switch (stationId) {
    case 'bach_ma':
      return (
        <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-[#881337] via-[#991B1B] to-[#450A0A] ${getAspectClass()} ${className}`}>
          {/* SVG Art: Bach Ma Temple with White Horse, Red Lanterns & Curved Roofs */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 600 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="bmSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4C0519" />
                <stop offset="60%" stopColor="#881337" />
                <stop offset="100%" stopColor="#991B1B" />
              </linearGradient>
              <linearGradient id="bmGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#F59E0B" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="bmHorse" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#F1F5F9" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>
              <radialGradient id="sunGlow" cx="50%" cy="40%" r="50%">
                <stop offset="0%" stopColor="#FDE68A" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#881337" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Sky & Sun Halo */}
            <rect width="600" height="450" fill="url(#bmSky)" />
            <circle cx="300" cy="180" r="160" fill="url(#sunGlow)" />

            {/* Clouds (Mây Ngũ Sắc thời Lý) */}
            <g opacity="0.45" stroke="#FDE68A" strokeWidth="1.5" fill="none">
              <path d="M 50 120 Q 80 100 110 115 T 160 120 Q 180 140 140 150 T 80 140 Z" />
              <path d="M 440 90 Q 480 70 520 85 T 570 100 Q 560 125 510 120 Z" />
              <path d="M 380 160 Q 410 145 440 155 T 480 165" />
            </g>

            {/* Ancient Temple Architecture Silhouette */}
            {/* Upper curved roof */}
            <path
              d="M 120 190 Q 210 150 300 150 Q 390 150 480 190 Q 430 195 300 180 Q 170 195 120 190 Z"
              fill="#262626"
            />
            {/* Dragon finials (Đầu đao mái đình) */}
            <path d="M 120 190 Q 95 175 105 155 Q 115 170 135 185" fill="url(#bmGold)" />
            <path d="M 480 190 Q 505 175 495 155 Q 485 170 465 185" fill="url(#bmGold)" />

            {/* Mid pavilion structure */}
            <rect x="180" y="185" width="240" height="40" fill="#3F0B18" stroke="#F59E0B" strokeWidth="1" />
            {/* Columns */}
            <rect x="200" y="225" width="16" height="150" fill="#781023" />
            <rect x="270" y="225" width="16" height="150" fill="#781023" />
            <rect x="314" y="225" width="16" height="150" fill="#781023" />
            <rect x="384" y="225" width="16" height="150" fill="#781023" />

            {/* Hanging Lanterns */}
            <g fill="#EF4444" stroke="#F59E0B" strokeWidth="1.5">
              <rect x="150" y="210" width="22" height="34" rx="10" />
              <line x1="161" y1="190" x2="161" y2="210" stroke="#FDE68A" />
              <line x1="161" y1="244" x2="161" y2="258" stroke="#FDE68A" strokeWidth="2" />

              <rect x="428" y="210" width="22" height="34" rx="10" />
              <line x1="439" y1="190" x2="439" y2="210" stroke="#FDE68A" />
              <line x1="439" y1="244" x2="439" y2="258" stroke="#FDE68A" strokeWidth="2" />
            </g>

            {/* White Horse (Thần Mã Bạch Mã) Figure in Center */}
            <g transform="translate(230, 230)">
              {/* Golden aura around horse */}
              <circle cx="70" cy="70" r="65" fill="#FDE68A" opacity="0.2" />

              {/* Horse Body, Mane, Tail */}
              <path
                d="M 50 85 Q 40 60 55 45 Q 65 30 85 30 Q 95 30 105 45 Q 120 70 100 85 Q 85 95 65 95 Z"
                fill="url(#bmHorse)"
              />
              {/* Head & Neck */}
              <path
                d="M 85 45 Q 95 20 115 15 Q 125 15 130 25 Q 125 35 110 40 Q 100 45 95 60 Z"
                fill="url(#bmHorse)"
              />
              {/* Ears */}
              <path d="M 112 15 L 116 5 L 120 16 Z" fill="url(#bmHorse)" />
              {/* Flowing Mane in Gold */}
              <path
                d="M 90 25 Q 80 35 75 55 Q 85 50 95 40 Q 90 30 90 25"
                fill="url(#bmGold)"
              />
              {/* Golden Saddle & Harness */}
              <path d="M 65 65 Q 80 60 92 65 L 90 78 Q 78 76 65 78 Z" fill="url(#bmGold)" />
              <line x1="115" y1="28" x2="92" y2="65" stroke="#F59E0B" strokeWidth="1.5" />
              {/* Forelegs */}
              <path d="M 95 85 L 105 135 L 112 135 L 102 85" fill="url(#bmHorse)" />
              <path d="M 85 85 L 75 125 L 82 128 L 92 85" fill="url(#bmHorse)" />
              {/* Hind legs */}
              <path d="M 55 90 L 45 135 L 52 135 L 65 92" fill="url(#bmHorse)" />
              {/* Tail */}
              <path
                d="M 45 75 Q 25 80 20 110 Q 30 115 40 95 Z"
                fill="url(#bmHorse)"
              />
              {/* Golden Hooves with Divine Sparkles */}
              <rect x="105" y="132" width="7" height="5" rx="1" fill="url(#bmGold)" />
              <rect x="75" y="125" width="7" height="5" rx="1" fill="url(#bmGold)" />
              <rect x="45" y="132" width="7" height="5" rx="1" fill="url(#bmGold)" />
            </g>

            {/* Ground / Stone Terrace with Brickwork Texture */}
            <path d="M 0 375 L 600 375 L 600 450 L 0 450 Z" fill="#1C1917" />
            <line x1="0" y1="375" x2="600" y2="375" stroke="#F59E0B" strokeWidth="2" />
            <path
              d="M 0 400 L 600 400 M 0 425 L 600 425 M 60 375 L 60 400 M 180 375 L 180 400 M 300 375 L 300 400 M 420 375 L 420 400 M 540 375 L 540 400"
              stroke="#44403C"
              strokeWidth="1"
            />

            {/* Seal Badge in Top Corner */}
            <g transform="translate(480, 25)">
              <rect width="90" height="90" rx="6" fill="#7F1D1D" stroke="#FDE68A" strokeWidth="2" opacity="0.9" />
              <rect x="5" y="5" width="80" height="80" rx="4" fill="none" stroke="#F59E0B" strokeWidth="1" />
              <text x="45" y="38" textAnchor="middle" fill="#FEF08A" fontSize="13" fontWeight="bold" fontFamily="serif">TRẤN ĐÔNG</text>
              <text x="45" y="58" textAnchor="middle" fill="#FEF08A" fontSize="11" fontFamily="serif">鎮東靈氣</text>
              <text x="45" y="74" textAnchor="middle" fill="#FDE68A" fontSize="9" letterSpacing="1">BẠCH MÃ</text>
            </g>

            {/* Subtle Title Ribbon */}
            <g transform="translate(30, 395)">
              <text x="0" y="24" fill="#FEF3C7" fontSize="20" fontWeight="bold" fontFamily="serif">ĐỀN BẠCH MÃ · TRẤN ĐÔNG</text>
              <text x="0" y="42" fill="#FDE68A" fontSize="11" opacity="0.9">Thần Long Đỗ bảo hộ kinh thành · Vết chân móng ngựa định đô năm 1010</text>
            </g>
          </svg>
        </div>
      );

    case 'voi_phuc':
      return (
        <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-[#064E3B] via-[#14532D] to-[#052E16] ${getAspectClass()} ${className}`}>
          {/* SVG Art: Voi Phuc Temple with Lotus Lake, Banyan Tree & Kneeling Elephants */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 600 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="vpSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#064E3B" />
                <stop offset="60%" stopColor="#14532D" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="vpWater" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0D9488" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#042F2E" />
              </linearGradient>
              <linearGradient id="vpElephant" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="60%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="vpGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
            </defs>

            {/* Sky Background & Morning Sunlight */}
            <rect width="600" height="450" fill="url(#vpSky)" />
            <circle cx="300" cy="130" r="140" fill="#FDE68A" opacity="0.15" />

            {/* Giant Banyan Tree Canopy Foliage */}
            <path
              d="M -50 0 Q 80 50 180 20 Q 250 80 340 30 Q 420 80 520 20 Q 620 50 650 0 Z"
              fill="#064E3B"
              opacity="0.8"
            />
            {/* Hanging Aerial Roots */}
            <g stroke="#78350F" strokeWidth="2" opacity="0.6">
              <path d="M 50 20 Q 70 120 60 220" />
              <path d="M 120 30 Q 110 140 130 200" />
              <path d="M 480 30 Q 490 130 470 210" />
              <path d="M 540 20 Q 530 110 550 230" />
            </g>

            {/* Temple Tam Quan Gate in Center */}
            <path
              d="M 210 160 Q 300 130 390 160 L 370 230 L 230 230 Z"
              fill="#1C1917"
            />
            {/* Curved Roof Eaves */}
            <path
              d="M 190 165 Q 300 135 410 165 Q 395 170 300 155 Q 205 170 190 165 Z"
              fill="url(#vpGold)"
            />
            {/* Gate Pillars & Arch */}
            <rect x="250" y="170" width="100" height="70" fill="#78350F" />
            <path d="M 275 240 L 275 195 Q 300 180 325 195 L 325 240 Z" fill="#FDE68A" opacity="0.9" />

            {/* Stone Steps / Tam Cấp */}
            <rect x="180" y="240" width="240" height="15" fill="#475569" stroke="#94A3B8" />
            <rect x="160" y="255" width="280" height="15" fill="#334155" stroke="#94A3B8" />
            <rect x="140" y="270" width="320" height="15" fill="#1E293B" stroke="#94A3B8" />

            {/* Left Kneeling Stone Elephant (Thớt Voi Quỳ Trái) */}
            <g transform="translate(80, 240)">
              {/* Body */}
              <ellipse cx="65" cy="50" rx="45" ry="30" fill="url(#vpElephant)" />
              {/* Folded Kneeling Legs */}
              <path d="M 30 70 Q 50 82 85 78 Q 100 70 95 65 Z" fill="#475569" />
              {/* Head & Ear */}
              <circle cx="105" cy="40" r="22" fill="url(#vpElephant)" />
              <path d="M 88 35 Q 80 55 98 55 Z" fill="#64748B" />
              {/* Trunk reaching ground */}
              <path d="M 115 42 Q 130 55 125 75 Q 120 85 110 82 Q 115 72 110 55 Z" fill="url(#vpElephant)" />
              {/* White Tusk (Ngà Voi) */}
              <path d="M 112 48 Q 122 55 125 50" stroke="#FFFBEB" strokeWidth="3" strokeLinecap="round" />
              {/* Ornate Saddle Cloth (Bành Voi) */}
              <path d="M 45 35 Q 65 30 85 35 L 82 60 Q 65 58 48 60 Z" fill="#991B1B" stroke="#F59E0B" strokeWidth="1" />
            </g>

            {/* Right Kneeling Stone Elephant (Thớt Voi Quỳ Phải) */}
            <g transform="translate(420, 240) scale(-1, 1)">
              <ellipse cx="65" cy="50" rx="45" ry="30" fill="url(#vpElephant)" />
              <path d="M 30 70 Q 50 82 85 78 Q 100 70 95 65 Z" fill="#475569" />
              <circle cx="105" cy="40" r="22" fill="url(#vpElephant)" />
              <path d="M 88 35 Q 80 55 98 55 Z" fill="#64748B" />
              <path d="M 115 42 Q 130 55 125 75 Q 120 85 110 82 Q 115 72 110 55 Z" fill="url(#vpElephant)" />
              <path d="M 112 48 Q 122 55 125 50" stroke="#FFFBEB" strokeWidth="3" strokeLinecap="round" />
              <path d="M 45 35 Q 65 30 85 35 L 82 60 Q 65 58 48 60 Z" fill="#991B1B" stroke="#F59E0B" strokeWidth="1" />
            </g>

            {/* Lotus Lake (Hồ Thủ Lệ) at bottom */}
            <path d="M 0 330 L 600 330 L 600 450 L 0 450 Z" fill="url(#vpWater)" />
            {/* Water reflections & ripples */}
            <g stroke="#5EEAD4" strokeWidth="1" opacity="0.4">
              <path d="M 50 350 Q 150 355 250 350" />
              <path d="M 320 360 Q 420 365 520 360" />
              <path d="M 120 380 Q 240 385 360 380" />
              <path d="M 280 410 Q 400 415 520 410" />
            </g>
            {/* Lotus Flowers & Pads */}
            <g transform="translate(180, 345)">
              <circle cx="0" cy="0" r="16" fill="#047857" opacity="0.8" />
              <path d="M -8 0 Q 0 -12 8 0 Q 0 -6 -8 0" fill="#F43F5E" />
              <circle cx="0" cy="-3" r="3" fill="#FDE047" />
            </g>
            <g transform="translate(380, 360)">
              <circle cx="0" cy="0" r="22" fill="#047857" opacity="0.8" />
              <path d="M -10 0 Q 0 -15 10 0 Q 0 -8 -10 0" fill="#FB7185" />
              <circle cx="0" cy="-4" r="4" fill="#FDE047" />
            </g>

            {/* Seal Badge in Corner */}
            <g transform="translate(480, 25)">
              <rect width="90" height="90" rx="6" fill="#1E3A8A" stroke="#FDE68A" strokeWidth="2" opacity="0.9" />
              <rect x="5" y="5" width="80" height="80" rx="4" fill="none" stroke="#60A5FA" strokeWidth="1" />
              <text x="45" y="38" textAnchor="middle" fill="#FEF08A" fontSize="13" fontWeight="bold" fontFamily="serif">TRẤN TÂY</text>
              <text x="45" y="58" textAnchor="middle" fill="#FEF08A" fontSize="11" fontFamily="serif">鎮西雄威</text>
              <text x="45" y="74" textAnchor="middle" fill="#93C5FD" fontSize="9" letterSpacing="1">VOI PHỤC</text>
            </g>

            {/* Bottom Title Ribbon */}
            <g transform="translate(30, 400)">
              <text x="0" y="20" fill="#CCFBF1" fontSize="20" fontWeight="bold" fontFamily="serif">ĐỀN VOI PHỤC · TRẤN TÂY</text>
              <text x="0" y="38" fill="#99F6E4" fontSize="11" opacity="0.9">Hoàng tử Linh Lang dẹp giặc Tống · Đôi voi đá quỳ phục bên hồ sen Thủ Lệ</text>
            </g>
          </svg>
        </div>
      );

    case 'kim_lien':
      return (
        <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-[#78350F] via-[#B45309] to-[#451A03] ${getAspectClass()} ${className}`}>
          {/* SVG Art: Kim Lien Temple with Ancient Turtle Stele, Elevated Terrace & Dragon Steps */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 600 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="klSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#451A03" />
                <stop offset="50%" stopColor="#78350F" />
                <stop offset="100%" stopColor="#B45309" />
              </linearGradient>
              <linearGradient id="klStone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#E2E8F0" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="klGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#CA8A04" />
              </linearGradient>
            </defs>

            {/* Sky Background */}
            <rect width="600" height="450" fill="url(#klSky)" />
            <circle cx="300" cy="150" r="150" fill="#FEF08A" opacity="0.2" />

            {/* High Gò Kim Hoa Hill Terrace Contour */}
            <path
              d="M 0 320 Q 150 250 300 240 Q 450 250 600 320 L 600 450 L 0 450 Z"
              fill="#1C1917"
            />
            {/* 9 Stone Steps (Chín Bậc Đá Rồng) */}
            <g stroke="#94A3B8" strokeWidth="1" fill="#334155">
              <rect x="200" y="260" width="200" height="12" />
              <rect x="185" y="272" width="230" height="12" />
              <rect x="170" y="284" width="260" height="12" />
              <rect x="155" y="296" width="290" height="12" />
              <rect x="140" y="308" width="320" height="12" />
            </g>

            {/* Stele Pavilion (Nhà Bia Cổ) Background Silhouette */}
            <path
              d="M 190 140 Q 300 110 410 140 L 390 200 L 210 200 Z"
              fill="#262626"
            />
            <path d="M 180 142 Q 300 112 420 142" stroke="url(#klGold)" strokeWidth="3" />
            {/* Pavilion Columns */}
            <rect x="220" y="145" width="12" height="110" fill="#78350F" />
            <rect x="368" y="145" width="12" height="110" fill="#78350F" />

            {/* Center Masterpiece: Stone Stele on Sacred Turtle (Rùa Đá Đội Bia 1510) */}
            <g transform="translate(230, 130)">
              {/* Stele (Bia Đá Cao Sơn Đại Vương Thần Từ Bi Minh) */}
              <path
                d="M 25 30 Q 70 0 115 30 L 115 140 L 25 140 Z"
                fill="url(#klStone)"
                stroke="#334155"
                strokeWidth="2"
              />
              {/* Dragon Crest on Stele Top (Trán Bia Lưỡng Long Chầu Nguyệt) */}
              <circle cx="70" cy="22" r="8" fill="#FDE047" />
              <path d="M 45 25 Q 70 12 95 25" stroke="#CA8A04" strokeWidth="2" fill="none" />

              {/* Chinese Inscriptions on Stele */}
              <g stroke="#1E293B" strokeWidth="1" opacity="0.75">
                <line x1="42" y1="45" x2="42" y2="125" strokeDasharray="3 3" />
                <line x1="56" y1="45" x2="56" y2="125" strokeDasharray="3 3" />
                <line x1="70" y1="40" x2="70" y2="128" strokeDasharray="4 2" strokeWidth="1.5" />
                <line x1="84" y1="45" x2="84" y2="125" strokeDasharray="3 3" />
                <line x1="98" y1="45" x2="98" y2="125" strokeDasharray="3 3" />
              </g>

              {/* Sacred Turtle Base (Rùa Đá Xanh Nguyên Khối) */}
              {/* Shell */}
              <ellipse cx="70" cy="148" rx="60" ry="18" fill="#475569" stroke="#1E293B" strokeWidth="2" />
              {/* Turtle Head Looking Up Proudly */}
              <path
                d="M 125 145 Q 148 135 152 142 Q 148 152 125 152 Z"
                fill="#475569"
                stroke="#1E293B"
                strokeWidth="1.5"
              />
              <circle cx="144" cy="140" r="2" fill="#FEF08A" />
              {/* Turtle Claws */}
              <ellipse cx="30" cy="155" rx="12" ry="6" fill="#334155" />
              <ellipse cx="110" cy="155" rx="14" ry="6" fill="#334155" />
            </g>

            {/* Sấu Đá thời Lê on step sides */}
            <g transform="translate(130, 280)">
              <rect width="20" height="28" rx="4" fill="#64748B" />
              <circle cx="10" cy="8" r="6" fill="#94A3B8" />
            </g>
            <g transform="translate(450, 280)">
              <rect width="20" height="28" rx="4" fill="#64748B" />
              <circle cx="10" cy="8" r="6" fill="#94A3B8" />
            </g>

            {/* Seal Badge in Corner */}
            <g transform="translate(480, 25)">
              <rect width="90" height="90" rx="6" fill="#78350F" stroke="#FDE68A" strokeWidth="2" opacity="0.9" />
              <rect x="5" y="5" width="80" height="80" rx="4" fill="none" stroke="#CA8A04" strokeWidth="1" />
              <text x="45" y="38" textAnchor="middle" fill="#FEF08A" fontSize="13" fontWeight="bold" fontFamily="serif">TRẤN NAM</text>
              <text x="45" y="58" textAnchor="middle" fill="#FEF08A" fontSize="11" fontFamily="serif">鎮南德化</text>
              <text x="45" y="74" textAnchor="middle" fill="#FDE68A" fontSize="9" letterSpacing="1">KIM LIÊN</text>
            </g>

            {/* Bottom Title Ribbon */}
            <g transform="translate(30, 395)">
              <text x="0" y="20" fill="#FEF3C7" fontSize="20" fontWeight="bold" fontFamily="serif">ĐỀN KIM LIÊN · TRẤN NAM</text>
              <text x="0" y="38" fill="#FDE68A" fontSize="11" opacity="0.9">Thần Cao Sơn bảo trợ non sông · Văn bia kiệt tác Trạng nguyên Lê Tung năm 1510</text>
            </g>
          </svg>
        </div>
      );

    case 'quan_thanh':
    default:
      return (
        <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#020617] ${getAspectClass()} ${className}`}>
          {/* SVG Art: Quan Thanh Temple with Giant Bronze Statue, West Lake Mist & Crescent Moon */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 600 450"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="qtSky" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#020617" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </linearGradient>
              <linearGradient id="qtBronze" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#71717A" />
                <stop offset="40%" stopColor="#3F3F46" />
                <stop offset="80%" stopColor="#27272A" />
                <stop offset="100%" stopColor="#18181B" />
              </linearGradient>
              <linearGradient id="qtGold" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FEF08A" />
                <stop offset="100%" stopColor="#EAB308" />
              </linearGradient>
              <linearGradient id="qtLake" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>
            </defs>

            {/* Night Sky & Moon */}
            <rect width="600" height="450" fill="url(#qtSky)" />
            {/* Luminous Full/Crescent Moon */}
            <circle cx="120" cy="90" r="38" fill="#FEF08A" opacity="0.85" />
            <circle cx="132" cy="85" r="34" fill="#0F172A" />

            {/* Mists of West Lake (Sương Mù Tây Hồ) */}
            <g stroke="#93C5FD" strokeWidth="1" opacity="0.3" fill="none">
              <path d="M 0 160 Q 150 145 300 160 T 600 150" />
              <path d="M 0 200 Q 180 185 360 200 T 600 190" />
              <path d="M 0 240 Q 200 230 400 245 T 600 235" />
            </g>

            {/* Ancient Three-Door Brick Gate (Tam Quan Đền Quán Thánh) on Left */}
            <g transform="translate(40, 150)" opacity="0.85">
              <rect x="0" y="40" width="130" height="120" fill="#1C1917" stroke="#334155" />
              {/* Curved Roof */}
              <path d="M -15 40 Q 65 15 145 40 Z" fill="#475569" stroke="url(#qtGold)" strokeWidth="1.5" />
              {/* Arched Portals */}
              <path d="M 40 160 L 40 100 Q 65 80 90 100 L 90 160 Z" fill="#020617" />
              <path d="M 10 160 L 10 120 Q 22 110 34 120 L 34 160 Z" fill="#020617" />
              <path d="M 96 160 L 96 120 Q 108 110 120 120 L 120 160 Z" fill="#020617" />
            </g>

            {/* Massive Bronze Statue Silhouette of Huyen Thien Tran Vu in Center-Right */}
            <g transform="translate(310, 110)">
              {/* Divine Halo */}
              <circle cx="100" cy="85" r="95" fill="#38BDF8" opacity="0.12" />

              {/* Seated God Figure */}
              {/* Crown / Headdress */}
              <path d="M 85 25 L 115 25 L 110 10 L 90 10 Z" fill="url(#qtGold)" />
              {/* Face & Long Beard */}
              <circle cx="100" cy="45" r="22" fill="url(#qtBronze)" />
              <path d="M 90 55 Q 100 85 102 95 Q 105 85 110 55 Z" fill="#18181B" />

              {/* Majestic Robe & Shoulders */}
              <path
                d="M 50 80 Q 100 65 150 80 L 175 190 L 25 190 Z"
                fill="url(#qtBronze)"
                stroke="#52525B"
                strokeWidth="1.5"
              />

              {/* Sacred Sword (Thanh Gươm Trừ Tà) Pointing Down */}
              <rect x="135" y="90" width="8" height="120" fill="#E2E8F0" />
              <path d="M 139 210 L 134 220 L 144 220 Z" fill="#E2E8F0" />
              {/* Sword Hilt */}
              <rect x="125" y="90" width="28" height="8" rx="2" fill="url(#qtGold)" />

              {/* Coiled Serpent (Rắn Thần Quấn Quanh Lưỡi Kiếm) */}
              <path
                d="M 130 115 Q 148 125 132 145 Q 150 160 134 180 Q 150 195 138 215"
                stroke="#10B981"
                strokeWidth="5"
                strokeLinecap="round"
                fill="none"
              />

              {/* Sacred Tortoise at the base (Thần Quy Dưới Chân Tượng) */}
              <ellipse cx="139" cy="225" rx="35" ry="14" fill="#3F3F46" stroke="#71717A" strokeWidth="1.5" />
              <circle cx="172" cy="223" r="7" fill="#27272A" />
            </g>

            {/* Willow Branches (Liễu Hồ Tây La Đà) drooping on right */}
            <g stroke="#14532D" strokeWidth="1.5" fill="none" opacity="0.75">
              <path d="M 580 0 Q 560 80 570 180" />
              <path d="M 550 0 Q 535 90 540 160" />
              <path d="M 520 0 Q 510 70 515 130" />
            </g>

            {/* West Lake Water (Mặt Gương Tây Hồ) */}
            <path d="M 0 350 L 600 350 L 600 450 L 0 450 Z" fill="url(#qtLake)" />
            <line x1="0" y1="350" x2="600" y2="350" stroke="#38BDF8" strokeWidth="1" opacity="0.4" />
            {/* Soft Ripples */}
            <g stroke="#60A5FA" strokeWidth="1" opacity="0.3">
              <line x1="80" y1="375" x2="220" y2="375" />
              <line x1="280" y1="390" x2="480" y2="390" />
              <line x1="140" y1="415" x2="360" y2="415" />
            </g>

            {/* Seal Badge in Corner */}
            <g transform="translate(480, 25)">
              <rect width="90" height="90" rx="6" fill="#0F172A" stroke="#FDE68A" strokeWidth="2" opacity="0.9" />
              <rect x="5" y="5" width="80" height="80" rx="4" fill="none" stroke="#38BDF8" strokeWidth="1" />
              <text x="45" y="38" textAnchor="middle" fill="#FEF08A" fontSize="13" fontWeight="bold" fontFamily="serif">TRẤN BẮC</text>
              <text x="45" y="58" textAnchor="middle" fill="#FEF08A" fontSize="11" fontFamily="serif">鎮北玄武</text>
              <text x="45" y="74" textAnchor="middle" fill="#7DD3FC" fontSize="9" letterSpacing="1">QUÁN THÁNH</text>
            </g>

            {/* Bottom Title Ribbon */}
            <g transform="translate(30, 395)">
              <text x="0" y="20" fill="#E0F2FE" fontSize="20" fontWeight="bold" fontFamily="serif">ĐỀN QUÁN THÁNH · TRẤN BẮC</text>
              <text x="0" y="38" fill="#BAE6FD" fontSize="11" opacity="0.9">Đại tượng đồng đen Huyền Thiên Trấn Vũ 4 tấn đúc năm 1677 · Tiếng chuông đêm sương Tây Hồ</text>
            </g>
          </svg>
        </div>
      );
  }
};
