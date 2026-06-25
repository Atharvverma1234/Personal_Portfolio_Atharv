import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const blocks = [
  {
    type: 'college',
    typeLabel: '🎓 College',
    icon: '🏛️',
    institution: 'Dayananda Sagar College of Engineering',
    location: 'Bangalore, Karnataka, India',
    degree: 'Bachelore of Technology (B.Tech)',
    subDegree: 'Electrical & Electronics Engineering',
    grade: 'CGPA 9 / 10',
    duration: '2023 – 2027',
    description:
      'Currently pursuing a B.Tech in Electrical & Electronics Engineering with a focus on AI and Machine Learning. Engaged in various research projects and actively participating in tech symposiums and hackathons.',
    tags: ['AI / ML', 'IOT', 'Programming', 'Distributed Systems'],
  },
  {
    type: 'school',
    typeLabel: '📚 School',
    icon: '🏫',
    institution: 'St. Francis College',
    location: 'Lucknow, Uttar Pradesh, India',
    degree: 'Higher Secondary Education',
    subDegree: 'Science & Mathematics Stream',
    grade: '92%',
    duration: '2021 – 2022',
    description:
      'Completed higher secondary education with a focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills through academic projects, practical laboratory work, and competitive examinations.',
    tags: ['Mathematics', 'Physics', 'Chemistry', 'Computer Science','English'],
  },
];

/* ── theme tokens ── */
const dark = {
  sectionBg: '#060912',
  gridLine: 'rgba(99,102,241,0.05)',
  glow1: 'rgba(99,102,241,0.10)',
  glow2: 'rgba(168,85,247,0.08)',
  tagBg: 'rgba(99,102,241,0.10)',
  tagBorder: 'rgba(99,102,241,0.22)',
  tagText: '#a5b4fc',
  heading: '#ffffff',
  sub: '#64748b',
  cardBg: 'rgba(15,23,42,0.9)',
  instColor: '#ffffff',
  locColor: '#64748b',
  degreeColor: '#e2e8f0',
  subDegreeColor: '#64748b',
  descColor: '#94a3b8',
  pillTagBg: 'rgba(99,102,241,0.07)',
  pillTagBorder: 'rgba(99,102,241,0.15)',
  pillTagText: '#94a3b8',
  pillTagBgSchool: 'rgba(192,132,252,0.06)',
  pillTagBorderSchool: 'rgba(192,132,252,0.15)',
  gpaBg: 'rgba(34,197,94,0.10)',
  gpaBorder: 'rgba(34,197,94,0.20)',
  gpaText: '#4ade80',
};

const light = {
  sectionBg: '#f5f3ff',
  gridLine: 'rgba(99,102,241,0.05)',
  glow1: 'rgba(99,102,241,0.08)',
  glow2: 'rgba(168,85,247,0.06)',
  tagBg: 'rgba(99,102,241,0.07)',
  tagBorder: 'rgba(99,102,241,0.18)',
  tagText: '#4338ca',
  heading: '#1e1b4b',
  sub: '#64748b',
  cardBg: '#ffffff',
  instColor: '#1e1b4b',
  locColor: '#94a3b8',
  degreeColor: '#1e1b4b',
  subDegreeColor: '#94a3b8',
  descColor: '#475569',
  pillTagBg: 'rgba(99,102,241,0.06)',
  pillTagBorder: 'rgba(99,102,241,0.14)',
  pillTagText: '#4338ca',
  pillTagBgSchool: 'rgba(192,132,252,0.06)',
  pillTagBorderSchool: 'rgba(192,132,252,0.15)',
  gpaBg: 'rgba(34,197,94,0.08)',
  gpaBorder: 'rgba(34,197,94,0.18)',
  gpaText: '#16a34a',
};

const typeStyles = {
  college: {
    typeBg: 'rgba(99,102,241,0.12)',
    typeBorder: 'rgba(99,102,241,0.25)',
    typeText: '#a5b4fc',
    logoBg: 'linear-gradient(135deg,rgba(99,102,241,0.18),rgba(129,140,248,0.08))',
    logoBorder: 'rgba(99,102,241,0.22)',
    accentBar: '#6366f1',
    durBg: 'rgba(99,102,241,0.08)',
    durBorder: 'rgba(99,102,241,0.18)',
    durText: '#a5b4fc',
    hoverBorder: 'rgba(99,102,241,0.50)',
    edgeBg: 'linear-gradient(to bottom,rgba(30,27,75,0.8),transparent)',
  },
  school: {
    typeBg: 'rgba(192,132,252,0.10)',
    typeBorder: 'rgba(192,132,252,0.22)',
    typeText: '#c084fc',
    logoBg: 'linear-gradient(135deg,rgba(192,132,252,0.15),rgba(216,180,254,0.06))',
    logoBorder: 'rgba(192,132,252,0.22)',
    accentBar: '#c084fc',
    durBg: 'rgba(192,132,252,0.08)',
    durBorder: 'rgba(192,132,252,0.18)',
    durText: '#c084fc',
    hoverBorder: 'rgba(192,132,252,0.50)',
    edgeBg: 'linear-gradient(to bottom,rgba(30,14,60,0.8),transparent)',
  },
};

const EduBlock = ({ block, t, isDarkMode }) => {
  const ref = useRef(null);
  const ts = typeStyles[block.type];
  const isCollege = block.type === 'college';

  const onMove = (e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    el.style.transform = `perspective(900px) rotateX(${-dy * 5}deg) rotateY(${dx * 6}deg) translateZ(10px) scale(1.02)`;
    el.style.borderColor = ts.hoverBorder;
    el.style.boxShadow = isDarkMode
      ? '10px 20px 48px rgba(0,0,0,0.5),0 0 40px rgba(99,102,241,0.08)'
      : '8px 16px 40px rgba(99,102,241,0.12)';
  };
  const onLeave = () => {
    const el = ref.current; if (!el) return;
    el.style.transform = '';
    el.style.borderColor = isDarkMode ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.15)';
    el.style.boxShadow = isDarkMode ? 'none' : '0 2px 12px rgba(99,102,241,0.06)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        borderRadius: 28, padding: 36,
        background: t.cardBg,
        border: `1px solid rgba(99,102,241,0.15)`,
        borderLeft: `3px solid ${ts.accentBar}`,
        position: 'relative', overflow: 'hidden',
        transition: 'transform 0.35s cubic-bezier(.22,.68,0,1.2), border-color 0.25s, box-shadow 0.3s, background 0.3s',
        cursor: 'default',
        boxShadow: isDarkMode ? 'none' : '0 2px 12px rgba(99,102,241,0.06)',
      }}
    >
      {/* Shine */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.03),transparent)', pointerEvents:'none', borderRadius:28 }} />
      {/* Bottom edge slab */}
      <div style={{ position:'absolute', bottom:-14, left:20, right:20, height:14, borderRadius:'0 0 8px 8px', background:ts.edgeBg, pointerEvents:'none' }} />

      {/* Type badge */}
      <div style={{
        display:'inline-flex', alignItems:'center', gap:6,
        fontSize:11, fontWeight:600, padding:'4px 12px', borderRadius:100,
        letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:24,
        background: ts.typeBg, border:`1px solid ${ts.typeBorder}`, color:ts.typeText,
      }}>
        {block.typeLabel}
      </div>

      {/* Logo + institution */}
      <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:20 }}>
        <div style={{
          width:60, height:60, borderRadius:18, flexShrink:0,
          background: ts.logoBg, border:`1px solid ${ts.logoBorder}`,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:28,
        }}>
          {block.icon}
        </div>
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, color:t.instColor, marginBottom:3, transition:'color 0.3s' }}>
            {block.institution}
          </div>
          <div style={{ fontSize:12, color:t.locColor, display:'flex', alignItems:'center', gap:4, transition:'color 0.3s' }}>
            📍 {block.location}
          </div>
        </div>
      </div>

      {/* Degree */}
      <div style={{ fontSize:14, fontWeight:500, color:t.degreeColor, lineHeight:1.55, marginBottom:16, transition:'color 0.3s' }}>
        {block.degree}
        <br />
        <span style={{ fontSize:12, color:t.subDegreeColor, fontWeight:400, transition:'color 0.3s' }}>
          {block.subDegree}
        </span>
      </div>

      {/* Badges */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:16 }}>
        <span style={{
          display:'inline-flex', alignItems:'center', fontSize:11, fontWeight:500,
          padding:'4px 12px', borderRadius:100,
          background:t.gpaBg, border:`1px solid ${t.gpaBorder}`, color:t.gpaText,
          transition:'all 0.3s',
        }}>
          {block.grade}
        </span>
        <span style={{
          display:'inline-flex', alignItems:'center', gap:5, fontSize:11, fontWeight:500,
          padding:'4px 12px', borderRadius:100,
          background:ts.durBg, border:`1px solid ${ts.durBorder}`, color:ts.durText,
        }}>
          📅 {block.duration}
        </span>
      </div>

      {/* Description */}
      <p style={{ fontSize:13, color:t.descColor, lineHeight:1.7, transition:'color 0.3s' }}>
        {block.description}
      </p>

      {/* Tag pills */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginTop:18 }}>
        {block.tags.map((tag) => (
          <span key={tag} style={{
            fontSize:11, padding:'3px 10px', borderRadius:100,
            background: isCollege ? t.pillTagBg : t.pillTagBgSchool,
            border: `1px solid ${isCollege ? t.pillTagBorder : t.pillTagBorderSchool}`,
            color: isCollege ? t.pillTagText : '#c084fc',
            transition:'all 0.3s',
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;

  return (
    <section
      id="education"
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
        <span style={{
          display:'inline-flex', alignItems:'center', gap:8,
          fontSize:12, fontWeight:500, padding:'5px 14px', borderRadius:100,
          background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText,
          letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:16,
        }}>Education</span>
        <h2 style={{
          fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,4.5vw,50px)',
          fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1,
          transition:'color 0.35s',
        }}>
          <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Education
          </span>{' '}& Learning
        </h2>
        <p style={{ fontSize:15, color:t.sub, marginTop:10, transition:'color 0.3s' }}>
          My academic journey and where it all began
        </p>
      </div>

      {/* Two blocks */}
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap:28,
        maxWidth:900, margin:'0 auto', position:'relative', zIndex:1,
      }}>
        {blocks.map((block) => (
          <EduBlock key={block.type} block={block} t={t} isDarkMode={isDarkMode} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @media(max-width:640px){
          .ed-two-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;