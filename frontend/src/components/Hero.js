import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDarkMode } = useTheme();
  const cardRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardRef.current;
    if (!scene || !card) return;

    const handleMouseMove = (e) => {
      const rect = scene.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.animation = 'none';
      card.style.transform = `rotateY(${-15 + dx * 20}deg) rotateX(${8 - dy * 12}deg)`;
    };
    const handleMouseLeave = () => {
      card.style.animation = '';
      card.style.transform = '';
    };

    scene.addEventListener('mousemove', handleMouseMove);
    scene.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      scene.removeEventListener('mousemove', handleMouseMove);
      scene.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // ── theme tokens ──────────────────────────────────────────────
  const t = isDarkMode
    ? {
        sectionBg:      '#060912',
        gridLine:       'rgba(99,102,241,0.07)',
        headingColor:   '#ffffff',
        subText:        '#94a3b8',
        badgeBg:        'rgba(99,102,241,0.10)',
        badgeBorder:    'rgba(99,102,241,0.25)',
        badgeText:      '#a5b4fc',
        btnOutlineBorder: 'rgba(100,116,139,0.4)',
        btnOutlineText: '#94a3b8',
        btnOutlineHoverBorder: 'rgba(99,102,241,0.5)',
        btnOutlineHoverText:   '#a5b4fc',
        socialText:     '#64748b',
        cardBg:         'linear-gradient(145deg,#1e1b4b 0%,#0f172a 60%,#1a1035 100%)',
        cardBorder:     'rgba(99,102,241,0.2)',
        avatarInner:    '#0f172a',
        chipBg:         '#0f172a',
        chipBorder:     'rgba(99,102,241,0.25)',
        chipText:       '#e2e8f0',
        edgeRight:      'linear-gradient(to right,rgba(30,27,75,0.9),rgba(15,23,42,0.7))',
        edgeBottom:     'linear-gradient(to bottom,rgba(30,27,75,0.9),rgba(15,23,42,0.4))',
        edgeBorder:     'rgba(99,102,241,0.1)',
        ambientBlue:    'rgba(59,130,246,0.15)',
        ambientPurple:  'rgba(139,92,246,0.15)',
      }
    : {
        sectionBg:      '#f8f7ff',
        gridLine:       'rgba(99,102,241,0.06)',
        headingColor:   '#1e1b4b',
        subText:        '#475569',
        badgeBg:        'rgba(99,102,241,0.08)',
        badgeBorder:    'rgba(99,102,241,0.2)',
        badgeText:      '#4338ca',
        btnOutlineBorder: 'rgba(100,116,139,0.35)',
        btnOutlineText: '#475569',
        btnOutlineHoverBorder: 'rgba(99,102,241,0.5)',
        btnOutlineHoverText:   '#4338ca',
        socialText:     '#94a3b8',
        cardBg:         'linear-gradient(145deg,#ede9fe 0%,#f5f3ff 60%,#faf5ff 100%)',
        cardBorder:     'rgba(99,102,241,0.25)',
        avatarInner:    '#ede9fe',
        chipBg:         '#ffffff',
        chipBorder:     'rgba(99,102,241,0.2)',
        chipText:       '#3730a3',
        edgeRight:      'linear-gradient(to right,rgba(167,139,250,0.25),transparent)',
        edgeBottom:     'linear-gradient(to bottom,rgba(167,139,250,0.25),transparent)',
        edgeBorder:     'rgba(99,102,241,0.12)',
        ambientBlue:    'rgba(99,102,241,0.08)',
        ambientPurple:  'rgba(192,132,252,0.08)',
      };

  const chips = [
    { label: 'React Dev',    icon: '⚛️', cls: 'top-10 -left-16',  iconBg: isDarkMode ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.1)',  delay: '0s'   },
    { label: 'Kaiju Killer', icon: '🤖', cls: 'bottom-14 -right-12', iconBg: isDarkMode ? 'rgba(192,132,252,0.15)' : 'rgba(192,132,252,0.1)', delay: '1.5s' },
    { label: 'Open to work', icon: null, cls: 'top-1/2 -left-20', iconBg: null, delay: '0.8s', dot: true },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 overflow-hidden relative transition-colors duration-300"
      style={{ background: t.sectionBg }}
    >
      

      {/* Ambient glows */}
      <div className="absolute w-[600px] h-[600px] rounded-full -top-24 right-0 pointer-events-none blur-[120px] transition-all duration-300"
        style={{ background: t.ambientBlue, opacity: isDarkMode ? 0.15 : 0.6 }} />
      <div className="absolute w-[600px] h-[600px] rounded-full -bottom-24 left-0 pointer-events-none blur-[120px] transition-all duration-300"
        style={{ background: t.ambientPurple, opacity: isDarkMode ? 0.15 : 0.5 }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left */}
          <div className="flex flex-col gap-5">
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium w-fit transition-colors duration-300"
              style={{ background: t.badgeBg, border: `1px solid ${t.badgeBorder}`, color: t.badgeText }}
            >
              <span className={`w-2 h-2 rounded-full animate-pulse ${isDarkMode ? 'bg-indigo-500' : 'bg-indigo-600'}`} />
              Available for opportunities
            </span>

            <h1 className="font-extrabold leading-tight tracking-tight transition-colors duration-300"
              style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(42px,5vw,68px)', color: t.headingColor }}
            >
              Hi, I'm{' '}
              <span className="block" style={{
                background: 'linear-gradient(135deg,#818cf8 0%,#c084fc 50%,#f472b6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Gypsy Danger
              </span>
            </h1>

            <p className="text-base leading-relaxed max-w-sm transition-colors duration-300" style={{ color: t.subText }}>
              Building products that don't apologize for being great. Crafting experiences at the
              intersection of engineering and design.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', boxShadow: '0 0 30px rgba(99,102,241,0.35)' }}
              >
                View Projects
              </button>
              <button
                className="px-7 py-3 rounded-full text-sm font-medium transition-all duration-200"
                style={{ border: `1px solid ${t.btnOutlineBorder}`, color: t.btnOutlineText }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = t.btnOutlineHoverBorder; e.currentTarget.style.color = t.btnOutlineHoverText; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = t.btnOutlineBorder; e.currentTarget.style.color = t.btnOutlineText; }}
              >
                Contact Me
              </button>
            </div>

            <div className="flex gap-5 mt-1">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                <a key={s} href="/"
                  className="text-sm tracking-wide transition-colors duration-200 hover:text-indigo-400"
                  style={{ color: t.socialText }}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right — 3D Card */}
          <div ref={sceneRef} className="relative flex items-center justify-center" style={{ height: 460, perspective: 900 }}>
            <div className="absolute w-44 h-44 rounded-full top-5 right-5 pointer-events-none"
              style={{ background: `radial-gradient(circle,${t.ambientBlue} 0%,transparent 70%)`, animation: 'orbpulse 4s ease-in-out infinite' }} />
            <div className="absolute w-28 h-28 rounded-full bottom-10 left-8 pointer-events-none"
              style={{ background: `radial-gradient(circle,${t.ambientPurple} 0%,transparent 70%)`, animation: 'orbpulse 4s ease-in-out infinite 2s' }} />

            {/* 3D Card */}
            <div ref={cardRef} className="relative cursor-pointer" style={{
              width: 260, height: 340,
              transformStyle: 'preserve-3d',
              transform: 'rotateY(-15deg) rotateX(8deg)',
              animation: 'float3d 6s ease-in-out infinite',
            }}>
              <div className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-4 px-6 py-8 transition-all duration-300"
                style={{
                  background: t.cardBg,
                  border: `1px solid ${t.cardBorder}`,
                  boxShadow: isDarkMode
                    ? '0 0 0 1px rgba(255,255,255,0.04) inset,0 40px 80px rgba(0,0,0,0.6),0 0 60px rgba(99,102,241,0.1)'
                    : '0 0 0 1px rgba(255,255,255,0.8) inset,0 20px 60px rgba(99,102,241,0.15)',
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="w-28 h-28 rounded-full p-0.5 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#6366f1,#c084fc,#f472b6)', animation: 'spinring 8s linear infinite' }}>
                  <div className="w-full h-full rounded-full flex items-center justify-center text-4xl transition-colors duration-300"
                    style={{ background: t.avatarInner }}>
                    👨‍💻
                  </div>
                </div>

                <div className="text-center">
                  <div className="font-bold text-lg transition-colors duration-300"
                    style={{ fontFamily: "'Syne',sans-serif", color: isDarkMode ? '#ffffff' : '#1e1b4b' }}>
                    Gypsy Danger
                  </div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: isDarkMode ? '#c084fc' : '#7c3aed' }}>
                    Kaiju Killer
                  </div>
                </div>

                <div className="flex gap-1.5 flex-wrap justify-center">
                  {['React', 'TypeScript', 'Node.js'].map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full transition-colors duration-300"
                      style={{
                        border: `1px solid ${isDarkMode ? 'rgba(99,102,241,0.3)' : 'rgba(99,102,241,0.25)'}`,
                        background: isDarkMode ? 'rgba(99,102,241,0.08)' : 'rgba(99,102,241,0.07)',
                        color: isDarkMode ? '#a5b4fc' : '#4338ca',
                      }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3D edges */}
              <div className="absolute rounded-r-lg" style={{
                right: -14, top: 20, bottom: 20, width: 14,
                background: t.edgeRight,
                transform: 'translateZ(-1px)',
                border: `1px solid ${t.edgeBorder}`,
                borderLeft: 'none',
              }} />
              <div className="absolute rounded-b-lg" style={{
                bottom: -14, left: 20, right: 20, height: 14,
                background: t.edgeBottom,
                transform: 'translateZ(-1px)',
                borderBottom: `1px solid ${t.edgeBorder}`,
              }} />
            </div>

            {/* Floating chips */}
            {chips.map(({ label, icon, cls, iconBg, delay, dot }) => (
              <div key={label}
                className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap ${cls} transition-colors duration-300`}
                style={{
                  background: t.chipBg,
                  border: `1px solid ${t.chipBorder}`,
                  color: t.chipText,
                  boxShadow: isDarkMode ? '0 20px 40px rgba(0,0,0,0.4)' : '0 8px 24px rgba(99,102,241,0.12)',
                  animation: `chipfloat 5s ease-in-out infinite ${delay}`,
                }}
              >
                {dot
                  ? <span className="w-2 h-2 rounded-full bg-green-500" style={{ animation: 'pulsegreen 2s infinite' }} />
                  : <span className="w-6 h-6 rounded-md flex items-center justify-center text-sm flex-shrink-0" style={{ background: iconBg }}>{icon}</span>
                }
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        @keyframes float3d {
          0%,100% { transform: rotateY(-15deg) rotateX(8deg) translateY(0px); }
          50%      { transform: rotateY(-10deg) rotateX(5deg) translateY(-16px); }
        }
        @keyframes spinring {
          from { filter: hue-rotate(0deg); }
          to   { filter: hue-rotate(360deg); }
        }
        @keyframes chipfloat {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes orbpulse {
          0%,100% { transform: scale(1);   opacity: 0.6; }
          50%     { transform: scale(1.2); opacity: 1;   }
        }
        @keyframes pulsegreen {
          0%,100% { opacity: 1;   }
          50%     { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;