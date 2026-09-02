import React, { useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const volunteerCards = [
  {
    id: 1,
    role: 'Website Manager',
    organization: 'Prayasa - A Social Service Society',
    timeframe: 'Nov 2025 – Present',
    description: 'Managing and maintaining the official website of Prayasa, ensuring optimal performance and user experience.',
    icon: '👩‍💻',
    active: true,
    strip: 'linear-gradient(90deg,#818cf8,#c084fc)',
    orgColor: '#818cf8',
    iconBg: 'rgba(129,140,248,0.12)',
    iconBorder: 'rgba(129,140,248,0.20)',
  },
  {
    id: 2,
    role: 'Lead Developer',
    organization: 'EEE Programming Club - DSCE',
    timeframe: 'Aug 2024 – Present',
    description: 'Leading a team of developers to create innovative software solutions for community projects, focusing on efficiency and scalability.',
    icon: '🌐',
    active: true,
    strip: 'linear-gradient(90deg,#34d399,#10b981)',
    orgColor: '#34d399',
    iconBg: 'rgba(52,211,153,0.10)',
    iconBorder: 'rgba(52,211,153,0.18)',
  },
  {
    id: 3,
    role: 'Frontend Developer',
    organization: 'Point Blank',
    timeframe: 'Aug 2024 - Feb 2025',
    description: 'Developed and maintained the frontend of the Point Blank platform, enhancing user interface and experience through responsive design and interactive features.',
    icon: '💻',
    active: false,
    strip: 'linear-gradient(90deg,#f87171,#ef4444)',
    orgColor: '#f87171',
    iconBg: 'rgba(248,113,113,0.10)',
    iconBorder: 'rgba(248,113,113,0.18)',
  },
  {
    id: 4,
    role: 'Core Event Coordinator',
    organization: 'Aryabhatta Club - Department of Mathematics, DSCE',
    timeframe: 'Dec 2023 – Jan 2024',
    description: 'Organized and managed the "SNAPMATH" event for the Aryabhatta Club, overseeing logistics and participant coordination.',
    icon: '📊',
    active: false,
    strip: 'linear-gradient(90deg,#c084fc,#a855f7)',
    orgColor: '#c084fc',
    iconBg: 'rgba(192,132,252,0.10)',
    iconBorder: 'rgba(192,132,252,0.18)',
  },
];

const stats = [
  { val: '4',   lbl: 'Volunteer roles' },
  { val: '3+',  lbl: 'Years of Service' },
  { val: '2',   lbl: 'Events organized' },
  { val: '2',   lbl: 'Active now'      },
];

/* ── theme tokens ── */
const dark = {
  sectionBg:    '#060912',
  gridLine:     'rgba(99,102,241,0.05)',
  glow1:        'rgba(99,102,241,0.09)',
  glow2:        'rgba(168,85,247,0.08)',
  tagBg:        'rgba(99,102,241,0.10)',
  tagBorder:    'rgba(99,102,241,0.22)',
  tagText:      '#a5b4fc',
  heading:      '#ffffff',
  sub:          '#64748b',
  cardBg:       'rgba(15,23,42,0.9)',
  cardBorder:   'rgba(99,102,241,0.14)',
  cardHover:    'rgba(99,102,241,0.40)',
  roleColor:    '#ffffff',
  timeColor:    '#475569',
  descColor:    '#94a3b8',
  activeBg:     'rgba(34,197,94,0.10)',
  activeBorder: 'rgba(34,197,94,0.18)',
  activeText:   '#4ade80',
  doneBg:       'rgba(100,116,139,0.10)',
  doneBorder:   'rgba(100,116,139,0.18)',
  doneText:     '#64748b',
  divColor:     'rgba(99,102,241,0.20)',
  statLbl:      '#64748b',
};

const light = {
  sectionBg:    '#f5f3ff',
  gridLine:     'rgba(99,102,241,0.05)',
  glow1:        'rgba(99,102,241,0.08)',
  glow2:        'rgba(168,85,247,0.06)',
  tagBg:        'rgba(99,102,241,0.07)',
  tagBorder:    'rgba(99,102,241,0.18)',
  tagText:      '#4338ca',
  heading:      '#1e1b4b',
  sub:          '#64748b',
  cardBg:       '#ffffff',
  cardBorder:   'rgba(99,102,241,0.12)',
  cardHover:    'rgba(99,102,241,0.30)',
  roleColor:    '#1e1b4b',
  timeColor:    '#94a3b8',
  descColor:    '#475569',
  activeBg:     'rgba(34,197,94,0.08)',
  activeBorder: 'rgba(34,197,94,0.18)',
  activeText:   '#15803d',
  doneBg:       'rgba(100,116,139,0.07)',
  doneBorder:   'rgba(100,116,139,0.15)',
  doneText:     '#94a3b8',
  divColor:     'rgba(99,102,241,0.15)',
  statLbl:      '#94a3b8',
};

/* ── Card ── */
const VolCard = ({ card, t, isDarkMode, isTouch }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    if (isTouch) return;
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `perspective(700px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) translateY(-4px) scale(1.02)`;
    el.style.borderColor = t.cardHover;
    el.style.boxShadow = isDarkMode
      ? '0 16px 40px rgba(0,0,0,0.45), 0 0 32px rgba(99,102,241,0.07)'
      : '0 8px 28px rgba(99,102,241,0.14)';
  };
  const onLeave = () => {
    if (isTouch) return;
    const el = ref.current; if (!el) return;
    el.style.transform = '';
    el.style.borderColor = t.cardBorder;
    el.style.boxShadow = isDarkMode ? 'none' : '0 2px 10px rgba(99,102,241,0.06)';
  };

  return (
    <div
      ref={ref}
      className="vol-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        borderRadius: 24,
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.35s cubic-bezier(.22,.68,0,1.2), border-color 0.25s, box-shadow 0.3s, background 0.3s',
        cursor: 'default',
        boxShadow: isDarkMode ? 'none' : '0 2px 10px rgba(99,102,241,0.06)',
      }}
    >
      {/* Shine overlay */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.03),transparent)', pointerEvents:'none', borderRadius:24 }} />

      {/* Coloured top strip */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:card.strip, borderRadius:'3px 3px 0 0' }} />

      {/* Icon */}
      <div className="vol-icon" style={{
        borderRadius:14,
        background: card.iconBg, border:`1px solid ${card.iconBorder}`,
        display:'flex', alignItems:'center', justifyContent:'center',
        transition:'background 0.3s',
      }}>
        {card.icon}
      </div>

      {/* Role */}
      <div className="vol-role" style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, color:t.roleColor, lineHeight:1.3, transition:'color 0.3s' }}>
        {card.role}
      </div>

      {/* Organisation */}
      <div className="vol-org" style={{ fontWeight:500, color:card.orgColor }}>
        {card.organization}
      </div>

      {/* Timeframe */}
      <div className="vol-time" style={{ color:t.timeColor, display:'flex', alignItems:'center', gap:5, transition:'color 0.3s' }}>
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2}/>
          <path d="M16 2v4M8 2v4M3 10h18" strokeWidth={2}/>
        </svg>
        {card.timeframe}
      </div>

      {/* Description */}
      <p className="vol-desc" style={{ color:t.descColor, lineHeight:1.65, transition:'color 0.3s' }}>
        {card.description}
      </p>

      {/* Status badge */}
      <div className="vol-status" style={{
        display:'inline-flex', alignItems:'center', gap:5,
        fontWeight:500, borderRadius:100,
        background:    card.active ? t.activeBg    : t.doneBg,
        border:       `1px solid ${card.active ? t.activeBorder : t.doneBorder}`,
        color:         card.active ? t.activeText   : t.doneText,
        transition:'all 0.3s',
      }}>
        {card.active && (
          <span style={{
            width:5, height:5, borderRadius:'50%', background:'#22c55e',
            display:'inline-block', animation:'activeDot 2s ease-in-out infinite',
          }} />
        )}
        {card.active ? 'Active' : 'Completed'}
      </div>
    </div>
  );
};

/* ── Main ── */
const Volunteering = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;
  const [isTouch] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(hover: none), (max-width: 768px)').matches
  );

  return (
    <section
      id="volunteering"
      className="vol-section"
      style={{
        background: 'transparent',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden', position: 'relative',
        transition: 'background 0.35s',
      }}
    >

      {/* Header */}
      <div className="vol-header" style={{ textAlign:'center', position:'relative', zIndex:1 }}>
        <span className="vol-tag" style={{ display:'inline-flex', alignItems:'center', gap:8, fontWeight:500, borderRadius:100, background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText, letterSpacing:'0.08em', textTransform:'uppercase', transition:'all 0.3s' }}>
          Volunteering
        </span>
        <h2 className="vol-heading" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1, transition:'color 0.35s' }}>
          Leadership &{' '}
          <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Volunteering
          </span>
        </h2>
        <p className="vol-sub" style={{ color:t.sub, transition:'color 0.3s' }}>
          Volunteer initiatives and social contributions
        </p>
      </div>

      {/* Cards grid */}
      <div className="vol-grid" style={{
        display:'grid', margin:'0 auto', position:'relative', zIndex:1,
      }}>
        {volunteerCards.map((card) => (
          <VolCard key={card.id} card={card} t={t} isDarkMode={isDarkMode} isTouch={isTouch} />
        ))}
      </div>

      {/* Summary stats */}
      <div className="vol-stats" style={{ position:'relative', zIndex:1 }}>
        {stats.map((s, i) => (
          <React.Fragment key={s.lbl}>
            <div className="vol-stat-item" style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
              <div className="vol-stat-val" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, background:'linear-gradient(135deg,#818cf8,#c084fc)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                {s.val}
              </div>
              <div className="vol-stat-lbl" style={{ color:t.statLbl, letterSpacing:'0.04em', transition:'color 0.3s' }}>
                {s.lbl}
              </div>
            </div>
            {i < stats.length - 1 && (
              <div className="vol-divider" style={{ background:t.divColor, transition:'background 0.3s' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes activeDot { 0%,100%{opacity:1} 50%{opacity:.3} }

        .vol-section { padding: 80px 32px; }

        .vol-header { margin-bottom: 56px; }
        .vol-tag { font-size: 12px; padding: 5px 14px; margin-bottom: 16px; }
        .vol-heading { font-size: clamp(30px, 6vw, 50px); }
        .vol-sub { font-size: 15px; margin-top: 10px; }

        .vol-grid { grid-template-columns: repeat(4,1fr); gap: 20px; max-width: 1040px; }
        .vol-card { padding: 26px; }
        .vol-icon { width: 48px; height: 48px; font-size: 22px; margin-bottom: 16px; margin-top: 8px; }
        .vol-role { font-size: 15px; margin-bottom: 5px; }
        .vol-org { font-size: 13px; margin-bottom: 10px; }
        .vol-time { font-size: 11px; margin-bottom: 12px; }
        .vol-desc { font-size: 13px; }
        .vol-status { font-size: 11px; padding: 3px 10px; margin-top: 14px; }

        .vol-stats { display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap: 24px; margin-top: 48px; }
        .vol-stat-val { font-size: 28px; }
        .vol-stat-lbl { font-size: 12px; margin-top: 4px; }
        .vol-divider { width: 1px; height: 40px; }

        /* Touch devices get a tap-scale instead of the mouse-tracking tilt */
        @media (hover: none), (pointer: coarse) {
          .vol-card:active { transform: scale(0.98) !important; transition: transform 0.15s; }
        }

        @media (max-width: 900px) {
          .vol-section { padding: 64px 24px; }
          .vol-header { margin-bottom: 40px; }
        }

        @media (max-width: 700px) {
          .vol-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
        }

        @media (max-width: 480px) {
          .vol-header { margin-bottom: 32px; }
          .vol-tag { font-size: 11px; padding: 4px 12px; margin-bottom: 12px; }
          .vol-sub { font-size: 13.5px; padding: 0 8px; }

          .vol-card { padding: 18px; border-radius: 20px; }
          .vol-icon { width: 40px; height: 40px; font-size: 18px; margin-bottom: 12px; margin-top: 6px; border-radius: 12px; }
          .vol-role { font-size: 13.5px; }
          .vol-org { font-size: 12px; margin-bottom: 8px; }
          .vol-time { font-size: 10.5px; margin-bottom: 10px; }
          .vol-desc { font-size: 12px; line-height: 1.55; }
          .vol-status { font-size: 10.5px; padding: 3px 9px; margin-top: 12px; }

          /* Stats become a clean 2x2 grid — dividers don't wrap gracefully so we drop them here */
          .vol-stats { display:grid; grid-template-columns:repeat(2,1fr); gap: 20px 12px; margin-top: 32px; }
          .vol-divider { display: none; }
          .vol-stat-val { font-size: 24px; }
          .vol-stat-lbl { font-size: 11px; }
        }

        @media (max-width: 440px) {
          .vol-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Volunteering;