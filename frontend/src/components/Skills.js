import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const row1 = [
  { name: 'React',      icon: '⚛️', cat: 'Frontend',  iconBg: 'rgba(99,102,241,0.15)' },
  { name: 'JavaScript', icon: '🟨', cat: 'Frontend',  iconBg: 'rgba(251,191,36,0.15)' },
  { name: 'TypeScript', icon: '🔷', cat: 'Frontend',  iconBg: 'rgba(56,189,248,0.15)'  },
  { name: 'Next.js',    icon: '⚡', cat: 'Frontend',  iconBg: 'rgba(15,23,42,0.9)'     },
  { name: 'Tailwind',   icon: '💨', cat: 'Frontend',  iconBg: 'rgba(6,182,212,0.12)'   },
  { name: 'Node.js',    icon: '🟢', cat: 'Backend',   iconBg: 'rgba(34,197,94,0.12)'   },
  { name: 'Express',    icon: '🚂', cat: 'Backend',   iconBg: 'rgba(100,116,139,0.15)' },
  { name: 'MongoDB',    icon: '🍃', cat: 'Backend',   iconBg: 'rgba(34,197,94,0.12)'   },
];

const row2 = [
  { name: 'GraphQL',    icon: '📊', cat: 'Backend',   iconBg: 'rgba(236,72,153,0.12)'  },
  { name: 'PostgreSQL', icon: '🐘', cat: 'Backend',   iconBg: 'rgba(56,189,248,0.15)'  },
  { name: 'Git',        icon: '📚', cat: 'Tools',     iconBg: 'rgba(251,146,60,0.12)'  },
  { name: 'Docker',     icon: '🐳', cat: 'Tools',     iconBg: 'rgba(56,189,248,0.15)'  },
  { name: 'AWS',        icon: '☁️', cat: 'Tools',     iconBg: 'rgba(251,191,36,0.12)'  },
  { name: 'Figma',      icon: '🎯', cat: 'Design',    iconBg: 'rgba(168,85,247,0.15)'  },
  { name: 'Jest',       icon: '🧪', cat: 'Testing',   iconBg: 'rgba(234,179,8,0.12)'   },
  { name: 'Redux',      icon: '🔁', cat: 'Frontend',  iconBg: 'rgba(99,102,241,0.15)'  },
];

const categories = [
  { title: 'Frontend', count: '5+', dot: '#818cf8', dotGlow: 'rgba(129,140,248,0.6)', fill: 'linear-gradient(90deg,#6366f1,#818cf8)', pct: '80%' },
  { title: 'Backend',  count: '5+', dot: '#34d399', dotGlow: 'rgba(52,211,153,0.6)',  fill: 'linear-gradient(90deg,#10b981,#34d399)', pct: '80%' },
  { title: 'Tools',    count: '3+', dot: '#c084fc', dotGlow: 'rgba(192,132,252,0.6)', fill: 'linear-gradient(90deg,#8b5cf6,#c084fc)', pct: '55%' },
  { title: 'Others',   count: '2+', dot: '#f472b6', dotGlow: 'rgba(244,114,182,0.6)', fill: 'linear-gradient(90deg,#ec4899,#f472b6)', pct: '35%' },
];

/* ── theme tokens ── */
const dark = {
  sectionBg:   '#060912',
  gridLine:    'rgba(99,102,241,0.05)',
  glow1:       'rgba(99,102,241,0.10)',
  glow2:       'rgba(168,85,247,0.08)',
  fadeLeft:    'linear-gradient(to right,#060912,transparent)',
  fadeRight:   'linear-gradient(to left,#060912,transparent)',
  tagBg:       'rgba(99,102,241,0.10)',
  tagBorder:   'rgba(99,102,241,0.22)',
  tagText:     '#a5b4fc',
  heading:     '#ffffff',
  sub:         '#64748b',
  pillBg:      'rgba(15,23,42,0.8)',
  pillBorder:  'rgba(99,102,241,0.18)',
  pillName:    '#e2e8f0',
  pillCat:     '#64748b',
  pillHoverBorder: 'rgba(99,102,241,0.45)',
  catCardBg:   'rgba(15,23,42,0.85)',
  catCardBorder: 'rgba(99,102,241,0.14)',
  catLabel:    '#94a3b8',
  catSub:      '#475569',
  catBarBg:    'rgba(99,102,241,0.15)',
};

const light = {
  sectionBg:   '#f5f3ff',
  gridLine:    'rgba(99,102,241,0.05)',
  glow1:       'rgba(99,102,241,0.08)',
  glow2:       'rgba(168,85,247,0.06)',
  fadeLeft:    'linear-gradient(to right,#f5f3ff,transparent)',
  fadeRight:   'linear-gradient(to left,#f5f3ff,transparent)',
  tagBg:       'rgba(99,102,241,0.07)',
  tagBorder:   'rgba(99,102,241,0.18)',
  tagText:     '#4338ca',
  heading:     '#1e1b4b',
  sub:         '#64748b',
  pillBg:      '#ffffff',
  pillBorder:  'rgba(99,102,241,0.18)',
  pillName:    '#1e1b4b',
  pillCat:     '#94a3b8',
  pillHoverBorder: 'rgba(99,102,241,0.40)',
  catCardBg:   '#ffffff',
  catCardBorder: 'rgba(99,102,241,0.15)',
  catLabel:    '#64748b',
  catSub:      '#94a3b8',
  catBarBg:    'rgba(99,102,241,0.10)',
};

/* ── Pill ── */
const Pill = ({ skill, t }) => (
  <div
    style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '12px 20px', borderRadius: 100,
      border: `1px solid ${t.pillBorder}`,
      background: t.pillBg,
      flexShrink: 0, whiteSpace: 'nowrap',
      transition: 'transform 0.3s cubic-bezier(.22,.68,0,1.2), border-color 0.2s, box-shadow 0.2s',
      cursor: 'default',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px) scale(1.06)';
      e.currentTarget.style.borderColor = t.pillHoverBorder;
      e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.3), 0 0 20px rgba(99,102,241,0.10)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.borderColor = t.pillBorder;
      e.currentTarget.style.boxShadow = '';
    }}
  >
    <div style={{
      width: 32, height: 32, borderRadius: '50%',
      background: skill.iconBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 17, flexShrink: 0,
    }}>
      {skill.icon}
    </div>
    <div>
      <div style={{ fontSize: 14, fontWeight: 500, color: t.pillName, transition: 'color 0.3s' }}>
        {skill.name}
      </div>
      <div style={{ fontSize: 10, color: t.pillCat, letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'color 0.3s' }}>
        {skill.cat}
      </div>
    </div>
  </div>
);

/* ── Carousel row ── */
const CarouselRow = ({ skills, reverse, t, sectionBg }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let pos = reverse ? -(el.scrollWidth / 2) : 0;
    const speed = reverse ? -0.6 : 0.7;
    let raf;
    let paused = false;

    const step = () => {
      if (!paused) {
        pos -= speed;
        const half = el.scrollWidth / 2;
        if (pos <= -half) pos = 0;
        if (pos > 0) pos = -half;
        el.style.transform = `translateX(${pos}px)`;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const wrap = el.parentElement?.parentElement;
    const pause = () => { paused = true; };
    const resume = () => { paused = false; };
    wrap?.addEventListener('mouseenter', pause);
    wrap?.addEventListener('mouseleave', resume);

    return () => {
      cancelAnimationFrame(raf);
      wrap?.removeEventListener('mouseenter', pause);
      wrap?.removeEventListener('mouseleave', resume);
    };
  }, [reverse]);

  const doubled = [...skills, ...skills];

  return (
    <div style={{ position: 'relative', marginBottom: 16, overflow: 'hidden', padding: '20px 0' }}>
      {/* Fade overlays */}
      <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 140, background: t.fadeLeft, zIndex: 10, pointerEvents: 'none', transition: 'background 0.3s' }} />
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 140, background: t.fadeRight, zIndex: 10, pointerEvents: 'none', transition: 'background 0.3s' }} />
      <div
        ref={ref}
        style={{ display: 'flex', gap: 16, width: 'max-content', willChange: 'transform' }}
      >
        {doubled.map((skill, i) => (
          <Pill key={i} skill={skill} t={t} />
        ))}
      </div>
    </div>
  );
};

/* ── Category card ── */
const CatCard = ({ cat, t }) => (
  <div
    style={{
      borderRadius: 20, padding: '22px 20px',
      background: t.catCardBg,
      border: `1px solid ${t.catCardBorder}`,
      position: 'relative', overflow: 'hidden',
      transition: 'transform 0.3s cubic-bezier(.22,.68,0,1.2), border-color 0.2s, background 0.3s',
      cursor: 'default',
      boxShadow: 'none',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'perspective(600px) rotateX(6deg) rotateY(-5deg) translateZ(8px) scale(1.03)';
      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.35)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = '';
      e.currentTarget.style.borderColor = t.catCardBorder;
    }}
  >
    {/* Subtle inner shine */}
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,0.03),transparent)', borderRadius: 20, pointerEvents: 'none' }} />

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
      <span style={{ fontSize: 13, fontWeight: 500, color: t.catLabel, transition: 'color 0.3s' }}>
        {cat.title}
      </span>
      <span style={{
        width: 8, height: 8, borderRadius: '50%',
        background: cat.dot,
        boxShadow: `0 0 8px ${cat.dotGlow}`,
        display: 'inline-block',
      }} />
    </div>

    <div style={{
      fontFamily: "'Syne', sans-serif", fontSize: 30, fontWeight: 800,
      background: 'linear-gradient(135deg,#818cf8,#c084fc)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      lineHeight: 1,
    }}>
      {cat.count}
    </div>
    <div style={{ fontSize: 11, color: t.catSub, marginTop: 4, letterSpacing: '0.04em', transition: 'color 0.3s' }}>
      Technologies
    </div>

    {/* Progress bar */}
    <div style={{ height: 3, borderRadius: 100, marginTop: 14, background: t.catBarBg, overflow: 'hidden', transition: 'background 0.3s' }}>
      <div style={{ height: '100%', borderRadius: 100, width: cat.pct, background: cat.fill }} />
    </div>
  </div>
);

/* ── Main ── */
const Skills = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;

  return (
    <section
      id="skills"
      style={{
        background: t.sectionBg,
        padding: '80px 0 72px',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden',
        position: 'relative',
        transition: 'background 0.35s',
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 100% 70% at 50% 50%,black 20%,transparent 100%)',
      }} />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', width: 400, height: 400, top: -100, right: -80, background: t.glow1, transition: 'background 0.35s' }} />
      <div style={{ position: 'absolute', borderRadius: '50%', filter: 'blur(100px)', pointerEvents: 'none', width: 340, height: 340, bottom: -80, left: -60, background: t.glow2, transition: 'background 0.35s' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: 56, position: 'relative', zIndex: 1, padding: '0 32px' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 12, fontWeight: 500, padding: '5px 14px',
          borderRadius: 100, marginBottom: 16,
          background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.tagText,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          transition: 'all 0.3s',
        }}>
          Skills
        </span>
        <h2 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(32px,4.5vw,50px)',
          fontWeight: 800, color: t.heading,
          letterSpacing: '-0.02em', lineHeight: 1.1,
          transition: 'color 0.35s',
        }}>
          Tech{' '}
          <span style={{
            background: 'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Stack
          </span>
        </h2>
        <p style={{ fontSize: 15, color: t.sub, marginTop: 10, transition: 'color 0.3s' }}>
          Technologies I use to bring ideas to life
        </p>
      </div>

      {/* Carousels */}
      <CarouselRow skills={row1} reverse={false} t={t} sectionBg={t.sectionBg} />
      <CarouselRow skills={row2} reverse={true}  t={t} sectionBg={t.sectionBg} />

      {/* Category cards */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)',
        gap: 16, maxWidth: 900, margin: '48px auto 0', padding: '0 32px',
        position: 'relative', zIndex: 1,
      }}>
        {categories.map((cat) => (
          <CatCard key={cat.title} cat={cat} t={t} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;