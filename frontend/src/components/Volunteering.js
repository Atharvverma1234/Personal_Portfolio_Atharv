import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const volunteerCards = [
  {
    id: 1,
    role: 'Tech Mentor',
    organization: 'Girls Who Code',
    timeframe: '2021 – Present',
    description: 'Mentoring young women in programming and tech careers, guiding 20+ students through real-world projects.',
    icon: '👩‍💻',
    active: true,
    strip: 'linear-gradient(90deg,#818cf8,#c084fc)',
    orgColor: '#818cf8',
    iconBg: 'rgba(129,140,248,0.12)',
    iconBorder: 'rgba(129,140,248,0.20)',
  },
  {
    id: 2,
    role: 'Open Source Contributor',
    organization: 'freeCodeCamp',
    timeframe: '2020 – Present',
    description: 'Contributing to an open-source educational platform helping millions of learners worldwide.',
    icon: '🌐',
    active: true,
    strip: 'linear-gradient(90deg,#34d399,#10b981)',
    orgColor: '#34d399',
    iconBg: 'rgba(52,211,153,0.10)',
    iconBorder: 'rgba(52,211,153,0.18)',
  },
  {
    id: 3,
    role: 'Disaster Relief Developer',
    organization: 'Red Cross',
    timeframe: '2022',
    description: 'Built emergency response tools for disaster coordination, used during three relief operations.',
    icon: '🚨',
    active: false,
    strip: 'linear-gradient(90deg,#f87171,#ef4444)',
    orgColor: '#f87171',
    iconBg: 'rgba(248,113,113,0.10)',
    iconBorder: 'rgba(248,113,113,0.18)',
  },
  {
    id: 4,
    role: 'Youth Coding Instructor',
    organization: 'Community Center',
    timeframe: '2019 – 2021',
    description: 'Taught programming basics to underprivileged youth, running weekly workshops for 30+ students.',
    icon: '🎓',
    active: false,
    strip: 'linear-gradient(90deg,#c084fc,#a855f7)',
    orgColor: '#c084fc',
    iconBg: 'rgba(192,132,252,0.10)',
    iconBorder: 'rgba(192,132,252,0.18)',
  },
];

const stats = [
  { val: '4',   lbl: 'Volunteer roles' },
  { val: '3+',  lbl: 'Years active'    },
  { val: '50+', lbl: 'Students taught' },
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
const VolCard = ({ card, t, isDarkMode }) => {
  const ref = useRef(null);

  const onMove = (e) => {
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
    const el = ref.current; if (!el) return;
    el.style.transform = '';
    el.style.borderColor = t.cardBorder;
    el.style.boxShadow = isDarkMode ? 'none' : '0 2px 10px rgba(99,102,241,0.06)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        borderRadius: 24, padding: 26,
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
      <div style={{
        width:48, height:48, borderRadius:14, marginBottom:16, marginTop:8,
        background: card.iconBg, border:`1px solid ${card.iconBorder}`,
        display:'flex', alignItems:'center', justifyContent:'center', fontSize:22,
        transition:'background 0.3s',
      }}>
        {card.icon}
      </div>

      {/* Role */}
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:15, fontWeight:700, color:t.roleColor, marginBottom:5, lineHeight:1.3, transition:'color 0.3s' }}>
        {card.role}
      </div>

      {/* Organisation */}
      <div style={{ fontSize:13, fontWeight:500, color:card.orgColor, marginBottom:10 }}>
        {card.organization}
      </div>

      {/* Timeframe */}
      <div style={{ fontSize:11, color:t.timeColor, display:'flex', alignItems:'center', gap:5, marginBottom:12, transition:'color 0.3s' }}>
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2}/>
          <path d="M16 2v4M8 2v4M3 10h18" strokeWidth={2}/>
        </svg>
        {card.timeframe}
      </div>

      {/* Description */}
      <p style={{ fontSize:13, color:t.descColor, lineHeight:1.65, transition:'color 0.3s' }}>
        {card.description}
      </p>

      {/* Status badge */}
      <div style={{
        display:'inline-flex', alignItems:'center', gap:5,
        fontSize:11, fontWeight:500, padding:'3px 10px', borderRadius:100, marginTop:14,
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

  return (
    <section
      id="volunteering"
      style={{
        background: 'transparent',
        padding: '80px 32px',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden', position: 'relative',
        transition: 'background 0.35s',
      }}
    >
     
      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:56, position:'relative', zIndex:1 }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:12, fontWeight:500, padding:'5px 14px', borderRadius:100, background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:16, transition:'all 0.3s' }}>
          Volunteering
        </span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,4.5vw,50px)', fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1, transition:'color 0.35s' }}>
          Community{' '}
          <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Service
          </span>
        </h2>
        <p style={{ fontSize:15, color:t.sub, marginTop:10, transition:'color 0.3s' }}>
          Volunteer initiatives and social contributions
        </p>
      </div>

      {/* Cards grid */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(4,1fr)',
        gap:20, maxWidth:1040, margin:'0 auto', position:'relative', zIndex:1,
      }}>
        {volunteerCards.map((card) => (
          <VolCard key={card.id} card={card} t={t} isDarkMode={isDarkMode} />
        ))}
      </div>

      {/* Summary stats */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:24, flexWrap:'wrap', marginTop:48, position:'relative', zIndex:1 }}>
        {stats.map((s, i) => (
          <React.Fragment key={s.lbl}>
            <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:4 }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:28, fontWeight:800, background:'linear-gradient(135deg,#818cf8,#c084fc)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                {s.val}
              </div>
              <div style={{ fontSize:12, color:t.statLbl, letterSpacing:'0.04em', transition:'color 0.3s' }}>
                {s.lbl}
              </div>
            </div>
            {i < stats.length - 1 && (
              <div style={{ width:1, height:40, background:t.divColor, transition:'background 0.3s' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes activeDot { 0%,100%{opacity:1} 50%{opacity:.3} }
        @media(max-width:700px){ .vol-grid { grid-template-columns: 1fr 1fr !important; } }
        @media(max-width:440px){ .vol-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default Volunteering;