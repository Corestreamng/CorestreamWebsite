export default function White() {
  return (
    <div className="absolute inset-0 w-full h-auto md:min-h-screen bg-white overflow-hidden">
      <svg
        viewBox="0 0 1200 600"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Soft lines – darker and more visible */}
        <g fill="none" stroke="#6366f1" strokeOpacity="0.25" strokeWidth="2">
          <path d="M100 120 C 300 60, 500 180, 700 120" />
          <path d="M150 320 C 400 260, 650 380, 950 300" />
          <path d="M400 50 C 600 150, 800 100, 1050 180" />
        </g>

        {/* UI-style rectangles – slightly darker */}
        <g fill="none" stroke="#94a3b8" strokeOpacity="0.25" strokeWidth="2">
          <rect x="80" y="80" width="200" height="120" rx="14" />
          <rect x="850" y="120" width="220" height="140" rx="14" />
          <rect x="300" y="380" width="260" height="140" rx="14" />
        </g>

        {/* Dots – larger and darker */}
        <g fill="#6366f1" opacity="0.3">
          <circle cx="200" cy="260" r="6" />
          <circle cx="980" cy="420" r="6" />
          <circle cx="620" cy="180" r="6" />
        </g>
      </svg>
    </div>
  );
}
