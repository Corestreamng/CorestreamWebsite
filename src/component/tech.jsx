const TechBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      <svg
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Dark green gradient */}
          <linearGradient id="darkGreen" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#020617" />
            <stop offset="40%" stopColor="#022c22" />
            <stop offset="70%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#021f1a" />
          </linearGradient>

          {/* Animations */}
          <style>
            {`
              .float { animation: float 18s ease-in-out infinite; }
              .float2 { animation: float 22s ease-in-out infinite reverse; }
              .rocket { animation: rocket 14s ease-in-out infinite; }
              .particle { animation: particle 2s ease-in-out infinite; }

              @keyframes float {
                0% { transform: translateY(0); }
                50% { transform: translateY(-25px); }
                100% { transform: translateY(0); }
              }

              @keyframes rocket {
                0% { transform: translateY(40px); opacity: 0.8; }
                50% { transform: translateY(-60px); opacity: 1; }
                100% { transform: translateY(40px); opacity: 0.8; }
              }

              @keyframes particle {
                0% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(30px); }
              }
            `}
          </style>
        </defs>

        {/* Background */}
        <rect width="1440" height="600" fill="url(#darkGreen)" />

        {/* Stars */}
        <g fill="white" opacity="0.15">
          <circle cx="200" cy="120" r="1.5" />
          <circle cx="600" cy="80" r="1" />
          <circle cx="900" cy="160" r="1.2" />
          <circle cx="1200" cy="100" r="1.4" />
          <circle cx="300" cy="300" r="1" />
          <circle cx="800" cy="260" r="1.3" />
        </g>

        {/* Dotted world map feel */}
        <g fill="white" opacity="0.05">
          <circle cx="300" cy="250" r="2" />
          <circle cx="340" cy="270" r="2" />
          <circle cx="380" cy="240" r="2" />
          <circle cx="600" cy="260" r="2" />
          <circle cx="640" cy="280" r="2" />
          <circle cx="900" cy="260" r="2" />
          <circle cx="940" cy="280" r="2" />
        </g>

        {/* Tech icons */}
        <g stroke="white" strokeWidth="3" fill="none" opacity="0.12">
          {/* Code */}
          <g className="float">
            <path d="M260 220 L220 260 L260 300" />
            <path d="M320 220 L360 260 L320 300" />
          </g>

          {/* Chip */}
          <g className="float2">
            <rect x="620" y="210" width="90" height="90" rx="14" />
            <rect x="650" y="240" width="30" height="30" rx="6" />
          </g>

          {/* Network */}
          <g className="float">
            <circle cx="520" cy="420" r="6" />
            <circle cx="560" cy="460" r="6" />
            <circle cx="600" cy="420" r="6" />
            <line x1="520" y1="420" x2="560" y2="460" />
            <line x1="560" y1="460" x2="600" y2="420" />
          </g>
        </g>

        {/* 🚀 Rocket */}
        <g className="rocket" transform="translate(900,300)" fill="white" opacity="0.9">
          {/* Body */}
          <path d="M0 -80 C20 -40 20 20 0 60 C-20 20 -20 -40 0 -80 Z" />
          {/* Window */}
          <circle cx="0" cy="-30" r="6" />
          {/* Flame */}
          <path d="M-8 60 C0 90 8 90 16 60 Z" opacity="0.8" />

          {/* Particle trail */}
          <circle className="particle" cx="0" cy="80" r="2" />
          <circle className="particle" cx="-6" cy="90" r="1.5" />
          <circle className="particle" cx="6" cy="95" r="1.5" />
        </g>
      </svg>
    </div>
  );
};

export default TechBackground;
