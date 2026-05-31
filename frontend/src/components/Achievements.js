import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Update these 3 with your real achievements ─────────────── */
const achievements = [
  {
    id: 1,
    title: 'Hackathon Winner',
    organization: 'TechCrunch Disrupt',
    date: '2023',
    icon: '🏆',
    description: 'Won first place in a 48-hour hackathon by building a real-time collaborative platform.',
    metric: '500+ Active Users',
    strip: 'linear-gradient(90deg,#fbbf24,#f59e0b)',
    orgColor: '#fbbf24',
    iconBg: 'rgba(251,191,36,0.12)',
    iconBorder: 'rgba(251,191,36,0.22)',
  },
  {
    id: 2,
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: '2022 – Present',
    icon: '💻',
    description: 'Contributed to 10+ open source projects with 50+ merged pull requests.',
    metric: '5,000+ Weekly Downloads',
    strip: 'linear-gradient(90deg,#34d399,#10b981)',
    orgColor: '#34d399',
    iconBg: 'rgba(52,211,153,0.10)',
    iconBorder: 'rgba(52,211,153,0.20)',
  },
  {
    id: 3,
    title: 'Conference Speaker',
    organization: 'React Summit',
    date: '2023',
    icon: '🎤',
    description: 'Spoke about modern state management to 500+ developers at React Summit.',
    metric: '95% Positive Feedback',
    strip: 'linear-gradient(90deg,#818cf8,#c084fc)',
    orgColor: '#818cf8',
    iconBg: 'rgba(129,140,248,0.12)',
    iconBorder: 'rgba(129,140,248,0.22)',
  },
];

/* ── theme tokens ── */
const dark = {
  sectionBg:     '#060912',
  gridLine:      'rgba(99,102,241,0.05)',
  glow1:         'rgba(99,102,241,0.10)',
  glow2:         'rgba(168,85,247,0.08)',
  tagBg:         'rgba(99,102,241,0.10)',
  tagBorder:     'rgba(99,102,241,0.22)',
  tagText:       '#a5b4fc',
  heading:       '#ffffff',
  sub:           '#64748b',
  cardBg:        'rgba(15,23,42,0.9)',
  cardBorder:    'rgba(99,102,241,0.14)',
  cardHover:     'rgba(99,102,241,0.40)',
  titleColor:    '#ffffff',
  descColor:     '#94a3b8',
  dateBg:        'rgba(99,102,241,0.10)',
  dateBorder:    'rgba(99,102,241,0.20)',
  dateText:      '#a5b4fc',
  impactBg:      'rgba(99,102,241,0.07)',
  impactBorder:  'rgba(99,102,241,0.14)',
  impactLbl:     '#475569',
  impactVal:     '#e2e8f0',
  ctaBg:         'linear-gradient(135deg,rgba(30,27,75,0.95) 0%,rgba(45,22,105,0.95) 50%,rgba(20,14,50,0.95) 100%)',
  ctaBorder:     'rgba(99,102,241,0.25)',
  ctaTitle:      '#ffffff',
  ctaText:       '#94a3b8',
};

const light = {
  sectionBg:     '#f5f3ff',
  gridLine:      'rgba(99,102,241,0.05)',
  glow1:         'rgba(99,102,241,0.08)',
  glow2:         'rgba(168,85,247,0.06)',
  tagBg:         'rgba(99,102,241,0.07)',
  tagBorder:     'rgba(99,102,241,0.18)',
  tagText:       '#4338ca',
  heading:       '#1e1b4b',
  sub:           '#64748b',
  cardBg:        '#ffffff',
  cardBorder:    'rgba(99,102,241,0.12)',
  cardHover:     'rgba(99,102,241,0.30)',
  titleColor:    '#1e1b4b',
  descColor:     '#475569',
  dateBg:        'rgba(99,102,241,0.07)',
  dateBorder:    'rgba(99,102,241,0.15)',
  dateText:      '#4338ca',
  impactBg:      'rgba(99,102,241,0.06)',
  impactBorder:  'rgba(99,102,241,0.12)',
  impactLbl:     '#94a3b8',
  impactVal:     '#1e1b4b',
  ctaBg:         'linear-gradient(135deg,#ede9fe 0%,#ddd6fe 50%,#ede9fe 100%)',
  ctaBorder:     'rgba(99,102,241,0.25)',
  ctaTitle:      '#1e1b4b',
  ctaText:       '#475569',
};

/* ── Card ── */
const AchievementCard = ({ item, t, isDarkMode }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `perspective(800px) rotateX(${-dy * 6}deg) rotateY(${dx * 6}deg) translateY(-5px) scale(1.02)`;
    el.style.borderColor = t.cardHover;
    el.style.boxShadow = isDarkMode
      ? '0 20px 48px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.08)'
      : '0 8px 32px rgba(99,102,241,0.14)';
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
        borderRadius: 24, padding: 28,
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
      <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:item.strip, borderRadius:'3px 3px 0 0' }} />

      {/* Icon */}
      <div style={{
        width:52, height:52, borderRadius:16, marginBottom:18, marginTop:6,
        background: item.iconBg, border:`1px solid ${item.iconBorder}`,
        display:'flex', alignItems:'center', justifyContent:'center', fontSize:24,
      }}>
        {item.icon}
      </div>

      {/* Title */}
      <div style={{ fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:700, color:t.titleColor, marginBottom:5, lineHeight:1.3, transition:'color 0.3s' }}>
        {item.title}
      </div>

      {/* Organisation */}
      <div style={{ fontSize:13, fontWeight:500, color:item.orgColor, marginBottom:4 }}>
        {item.organization}
      </div>

      {/* Date badge */}
      <div style={{
        display:'inline-flex', alignItems:'center', fontSize:11, fontWeight:500,
        padding:'3px 10px', borderRadius:100, marginBottom:14,
        background:t.dateBg, border:`1px solid ${t.dateBorder}`, color:t.dateText,
        transition:'all 0.3s',
      }}>
        {item.date}
      </div>

      {/* Description */}
      <p style={{ fontSize:13, color:t.descColor, lineHeight:1.65, marginBottom:16, transition:'color 0.3s' }}>
        {item.description}
      </p>

      {/* Impact box */}
      <div style={{
        borderRadius:12, padding:'12px 14px',
        background:t.impactBg, border:`1px solid ${t.impactBorder}`,
        transition:'all 0.3s',
      }}>
        <div style={{ fontSize:11, color:t.impactLbl, letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:3, transition:'color 0.3s' }}>
          Impact
        </div>
        <div style={{ fontSize:13, fontWeight:600, color:t.impactVal, transition:'color 0.3s' }}>
          {item.metric}
        </div>
      </div>
    </div>
  );
};

/* ── Main ── */
const Achievements = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;

  return (
    <section
      id="achievements"
      style={{
        background: t.sectionBg,
        padding: '80px 32px',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden', position: 'relative',
        transition: 'background 0.35s',
      }}
    >
      {/* Grid bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`, backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse 100% 80% at 50% 50%,black 30%,transparent 100%)' }} />
      <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(110px)', pointerEvents:'none', width:380, height:380, top:-80, left:-60, background:t.glow1, transition:'background 0.35s' }} />
      <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(110px)', pointerEvents:'none', width:320, height:320, bottom:-60, right:-40, background:t.glow2, transition:'background 0.35s' }} />

      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:56, position:'relative', zIndex:1 }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:12, fontWeight:500, padding:'5px 14px', borderRadius:100, background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:16, transition:'all 0.3s' }}>
          Achievements
        </span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,4.5vw,50px)', fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1, transition:'color 0.35s' }}>
          <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Achievements
          </span>{' '}& Awards
        </h2>
        <p style={{ fontSize:15, color:t.sub, marginTop:10, transition:'color 0.3s' }}>
          Recognitions and milestones in my professional journey
        </p>
      </div>

      {/* 3-column grid */}
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(3,1fr)',
        gap:24, maxWidth:960, margin:'0 auto', position:'relative', zIndex:1,
      }}>
        {achievements.map((item) => (
          <AchievementCard key={item.id} item={item} t={t} isDarkMode={isDarkMode} />
        ))}
      </div>

      {/* CTA */}
      <div style={{ maxWidth:640, margin:'48px auto 0', borderRadius:24, padding:'36px 32px', textAlign:'center', background:t.ctaBg, border:`1px solid ${t.ctaBorder}`, position:'relative', overflow:'hidden', zIndex:1, transition:'background 0.3s' }}>
        <div style={{ position:'absolute', width:200, height:200, borderRadius:'50%', background:'rgba(99,102,241,0.15)', filter:'blur(50px)', top:-40, right:-40, pointerEvents:'none' }} />
        <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color:t.ctaTitle, marginBottom:10, transition:'color 0.3s' }}>
          Let's Build Something Amazing
        </h3>
        <p style={{ fontSize:14, color:t.ctaText, marginBottom:22, lineHeight:1.7, transition:'color 0.3s' }}>
          Ready to turn your ideas into reality?<br />Let's collaborate on your next project.
        </p>
        <a
          href="#contact"
          style={{
            display:'inline-flex', alignItems:'center', gap:8,
            background:'linear-gradient(135deg,#6366f1,#8b5cf6)',
            color:'#fff', padding:'11px 28px', borderRadius:100,
            fontSize:14, fontWeight:500, textDecoration:'none',
            boxShadow:'0 0 24px rgba(99,102,241,0.35)',
            transition:'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 36px rgba(99,102,241,0.55)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 0 24px rgba(99,102,241,0.35)'; }}
        >
          Start a Project →
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @media(max-width:680px){ .ach-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
};

export default Achievements;