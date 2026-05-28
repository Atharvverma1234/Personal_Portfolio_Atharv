import React, { useRef, useEffect } from 'react';

const Hero = () => {
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
      const rotY = -15 + dx * 20;
      const rotX = 8 - dy * 12;
      card.style.animation = 'none';
      card.style.transform = `rotateY(${rotY}deg) rotateX(${rotX}deg)`;
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-[#060912] overflow-hidden relative"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.07) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Ambient glows */}
      <div className="absolute w-[600px] h-[600px] rounded-full -top-24 right-0 opacity-15 blur-[120px] bg-blue-500 pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] rounded-full -bottom-24 left-0 opacity-15 blur-[120px] bg-purple-600 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

          {/* Left — Text */}
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-sm font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
              Available for opportunities
            </span>

            <h1
              className="font-extrabold leading-tight tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(42px, 5vw, 68px)' }}
            >
              <span className="text-white">Hi, I'm </span>
              <span
                className="block"
                style={{
                  background: 'linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Gypsy Danger
              </span>
            </h1>

            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
              Building products that don't apologize for being great. Crafting experiences at the
              intersection of engineering and design.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                className="text-white px-7 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                  boxShadow: '0 0 30px rgba(99,102,241,0.35)',
                }}
              >
                View Projects
              </button>
              <button className="text-slate-400 px-7 py-3 rounded-full text-sm font-medium border border-slate-600/40 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-200">
                Contact Me
              </button>
            </div>

            <div className="flex gap-5 mt-1">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-slate-500 hover:text-indigo-400 text-sm tracking-wide transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Right — 3D Card */}
          <div
            ref={sceneRef}
            className="relative flex items-center justify-center"
            style={{ height: 460, perspective: 900 }}
          >
            {/* Ambient orbs */}
            <div
              className="absolute w-44 h-44 rounded-full top-5 right-5 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', animation: 'orbpulse 4s ease-in-out infinite' }}
            />
            <div
              className="absolute w-28 h-28 rounded-full bottom-10 left-8 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)', animation: 'orbpulse 4s ease-in-out infinite 2s' }}
            />

            {/* 3D Card */}
            <div
              ref={cardRef}
              className="relative cursor-pointer"
              style={{
                width: 260,
                height: 340,
                transformStyle: 'preserve-3d',
                transform: 'rotateY(-15deg) rotateX(8deg)',
                animation: 'float3d 6s ease-in-out infinite',
              }}
            >
              {/* Front face */}
              <div
                className="absolute inset-0 rounded-3xl flex flex-col items-center justify-center gap-4 px-6 py-8"
                style={{
                  background: 'linear-gradient(145deg, #1e1b4b 0%, #0f172a 60%, #1a1035 100%)',
                  border: '1px solid rgba(99,102,241,0.2)',
                  boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset, 0 40px 80px rgba(0,0,0,0.6), 0 0 60px rgba(99,102,241,0.1)',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Avatar */}
                <div
                  className="w-28 h-28 rounded-full p-0.5 flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #6366f1, #c084fc, #f472b6)', animation: 'spinring 8s linear infinite' }}
                >
                  <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center text-4xl">
                    👨‍💻
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                    Gypsy Danger
                  </div>
                  <div className="text-purple-400 text-xs tracking-widest uppercase mt-1">
                    Kaiju Killer
                  </div>
                </div>

                <div className="flex gap-1.5 flex-wrap justify-center">
                  {['React', 'TypeScript', 'Node.js'].map((t) => (
                    <span
                      key={t}
                      className="text-indigo-300 text-xs px-2.5 py-0.5 rounded-full"
                      style={{ border: '1px solid rgba(99,102,241,0.3)', background: 'rgba(99,102,241,0.08)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* 3D edges */}
              <div
                className="absolute rounded-r-lg"
                style={{
                  right: -14, top: 20, bottom: 20, width: 14,
                  background: 'linear-gradient(to right, rgba(30,27,75,0.9), rgba(15,23,42,0.7))',
                  transform: 'translateZ(-1px)',
                  border: '1px solid rgba(99,102,241,0.1)',
                  borderLeft: 'none',
                }}
              />
              <div
                className="absolute rounded-b-lg"
                style={{
                  bottom: -14, left: 20, right: 20, height: 14,
                  background: 'linear-gradient(to bottom, rgba(30,27,75,0.9), rgba(15,23,42,0.4))',
                  transform: 'translateZ(-1px)',
                  borderBottom: '1px solid rgba(99,102,241,0.1)',
                }}
              />
            </div>

            {/* Floating chips */}
            {[
              { label: 'React Dev', icon: '⚛️', cls: 'top-10 -left-16', iconBg: 'rgba(99,102,241,0.15)', delay: '0s' },
              { label: 'Kaiju Killer', icon: '🤖', cls: 'bottom-14 -right-12', iconBg: 'rgba(192,132,252,0.15)', delay: '1.5s' },
              { label: 'Open to work', icon: null, cls: 'top-1/2 -left-20', iconBg: null, delay: '0.8s', dot: true },
            ].map(({ label, icon, cls, iconBg, delay, dot }) => (
              <div
                key={label}
                className={`absolute flex items-center gap-2 px-3 py-2 rounded-xl text-slate-200 text-xs font-medium whitespace-nowrap ${cls}`}
                style={{
                  background: '#0f172a',
                  border: '1px solid rgba(99,102,241,0.25)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                  animation: `chipfloat 5s ease-in-out infinite ${delay}`,
                }}
              >
                {dot ? (
                  <span
                    className="w-2 h-2 rounded-full bg-green-500"
                    style={{ animation: 'pulsegreen 2s infinite' }}
                  />
                ) : (
                  <span
                    className="w-6 h-6 rounded-md flex items-center justify-center text-sm flex-shrink-0"
                    style={{ background: iconBg }}
                  >
                    {icon}
                  </span>
                )}
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');
        @keyframes float3d {
          0%, 100% { transform: rotateY(-15deg) rotateX(8deg) translateY(0px); }
          50% { transform: rotateY(-10deg) rotateX(5deg) translateY(-16px); }
        }
        @keyframes spinring {
          from { filter: hue-rotate(0deg); }
          to { filter: hue-rotate(360deg); }
        }
        @keyframes chipfloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes orbpulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes pulsegreen {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Hero;