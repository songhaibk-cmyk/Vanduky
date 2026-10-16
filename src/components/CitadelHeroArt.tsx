import React from 'react';

export const CitadelHeroArt: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-xl border border-[#D6CEBE] shadow-md bg-gradient-to-br from-[#1C1917] via-[#292524] to-[#450A0A] ${className}`}>
      {/* Grand Illustrated Panorama of Imperial Citadel & Four Sacred Directions */}
      <svg
        className="w-full h-full object-cover"
        viewBox="0 0 1000 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="heroSky" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#2E0812" />
            <stop offset="40%" stopColor="#671026" />
            <stop offset="75%" stopColor="#991B1B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="goldRoof" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <linearGradient id="riverGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0EA5E9" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="sunDawn" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.6" />
            <stop offset="40%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#991B1B" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Sky Background & Morning Sun */}
        <rect width="1000" height="420" fill="url(#heroSky)" />
        <circle cx="500" cy="180" r="160" fill="url(#sunDawn)" />

        {/* Flying Swallows (Đàn Én Mùa Xuân) */}
        <g stroke="#FEF08A" strokeWidth="1.5" fill="none" opacity="0.7">
          <path d="M 280 80 Q 290 70 300 80 Q 310 70 320 80" />
          <path d="M 320 60 Q 328 52 336 60 Q 344 52 352 60" />
          <path d="M 680 90 Q 690 82 700 90 Q 710 82 720 90" />
        </g>

        {/* Traditional Cloud Scrolls (Mây Cuộn Thần Thoại) */}
        <g stroke="#FDE68A" strokeWidth="1.2" opacity="0.35" fill="none">
          <path d="M 50 80 Q 90 60 130 80 T 190 85 Q 180 110 140 105" />
          <path d="M 820 60 Q 860 40 900 65 T 960 70 Q 950 95 910 90" />
        </g>

        {/* Red River Wave Bands at Base (Sóng Thủy Ba Thời Lý - Trần) */}
        <g opacity="0.25">
          <path
            d="M 0 350 Q 50 330 100 350 T 200 350 T 300 350 T 400 350 T 500 350 T 600 350 T 700 350 T 800 350 T 900 350 T 1000 350 L 1000 420 L 0 420 Z"
            fill="#0284C7"
          />
          <path
            d="M 0 370 Q 50 355 100 370 T 200 370 T 300 370 T 400 370 T 500 370 T 600 370 T 700 370 T 800 370 T 900 370 T 1000 370"
            stroke="#BAE6FD"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M 0 395 Q 50 380 100 395 T 200 395 T 300 395 T 400 395 T 500 395 T 600 395 T 700 395 T 800 395 T 900 395 T 1000 395"
            stroke="#E0F2FE"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* Ancient Citadel Gate (Đoan Môn - Hoàng Thành Thăng Long) in Center */}
        <g transform="translate(360, 100)">
          {/* Main Upper Roof with Dragon Finials */}
          <path
            d="M 10 90 Q 140 40 270 90 Q 230 96 140 85 Q 50 96 10 90 Z"
            fill="url(#goldRoof)"
          />
          {/* Dragon Heads at Roof Edges */}
          <path d="M 10 90 Q -10 75 0 55 Q 10 70 25 85" fill="#FEF08A" />
          <path d="M 270 90 Q 290 75 280 55 Q 270 70 255 85" fill="#FEF08A" />

          {/* Pavilion Second Tier */}
          <rect x="50" y="85" width="180" height="40" fill="#781023" stroke="#F59E0B" />
          {/* Middle Eaves */}
          <path d="M 25 125 Q 140 100 255 125 Z" fill="url(#goldRoof)" />

          {/* Massive Brick Citadel Wall (Tường Thành Cổ) */}
          <rect x="35" y="125" width="210" height="150" fill="#292524" stroke="#44403C" />
          <path
            d="M 35 150 L 245 150 M 35 175 L 245 175 M 35 200 L 245 200 M 35 225 L 245 225 M 35 250 L 245 250"
            stroke="#1C1917"
            strokeWidth="1.5"
          />

          {/* Central Main Arched Portal (Cửa Vòm Chính) */}
          <path
            d="M 110 275 L 110 200 Q 140 180 170 200 L 170 275 Z"
            fill="#0C0A09"
            stroke="#B45309"
            strokeWidth="2"
          />
          {/* Golden Interior Light */}
          <ellipse cx="140" cy="240" rx="18" ry="30" fill="#FEF08A" opacity="0.3" />

          {/* Side Arched Portals */}
          <path d="M 60 275 L 60 220 Q 75 208 90 220 L 90 275 Z" fill="#0C0A09" />
          <path d="M 190 275 L 190 220 Q 205 208 220 220 L 220 275 Z" fill="#0C0A09" />
        </g>

        {/* Left Guardian Silhouette (Đông Bạch Mã & Nam Kim Liên) */}
        <g transform="translate(100, 180)">
          {/* Temple Eaves */}
          <path d="M 20 60 Q 90 30 160 60 Z" fill="#78350F" />
          <path d="M 10 65 Q 90 35 170 65" stroke="url(#goldRoof)" strokeWidth="2" />
          {/* Galloping White Horse Silhouette */}
          <ellipse cx="90" cy="115" rx="28" ry="16" fill="#F8FAFC" opacity="0.9" />
          <circle cx="115" cy="100" r="12" fill="#F8FAFC" opacity="0.9" />
          <path d="M 110 95 L 126 88 L 120 105" fill="#F8FAFC" opacity="0.9" />
          <text x="90" y="150" textAnchor="middle" fill="#FEF08A" fontSize="11" fontWeight="bold" fontFamily="serif">TRẤN ĐÔNG · BẠCH MÃ</text>
        </g>

        {/* Right Guardian Silhouette (Tây Voi Phục & Bắc Quán Thánh) */}
        <g transform="translate(730, 180)">
          <path d="M 20 60 Q 90 30 160 60 Z" fill="#064E3B" />
          <path d="M 10 65 Q 90 35 170 65" stroke="url(#goldRoof)" strokeWidth="2" />
          {/* Kneeling Elephant & Bell Tower Silhouette */}
          <ellipse cx="90" cy="118" rx="30" ry="16" fill="#94A3B8" opacity="0.9" />
          <circle cx="65" cy="112" r="12" fill="#94A3B8" opacity="0.9" />
          <path d="M 60 115 Q 50 125 55 135" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <text x="90" y="150" textAnchor="middle" fill="#FEF08A" fontSize="11" fontWeight="bold" fontFamily="serif">TRẤN TÂY · VOI PHỤC</text>
        </g>

        {/* Central Title Inscription on Citadel Wall */}
        <g transform="translate(500, 375)">
          <rect x="-190" y="-30" width="380" height="42" rx="6" fill="#1C1917" stroke="#F59E0B" strokeWidth="1.5" />
          <text x="0" y="-4" textAnchor="middle" fill="#FEF08A" fontSize="16" fontWeight="bold" fontFamily="serif" letterSpacing="2">
            THĂNG LONG TỨ TRẤN · ĐỊA LINH NHÂN KIỆT
          </text>
          <text x="0" y="16" textAnchor="middle" fill="#FDE68A" fontSize="10" opacity="0.9" letterSpacing="1">
            ĐÔNG BẠCH MÃ · TÂY VOI PHỤC · NAM KIM LIÊN · BẮC QUÁN THÁNH
          </text>
        </g>
      </svg>
    </div>
  );
};
