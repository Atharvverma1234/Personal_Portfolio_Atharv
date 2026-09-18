import React, { useRef, useState } from 'react';
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
    grade: 'CGPA 8.38 / 10',
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

const EduBlock = ({ block, t, isDarkMode, isTouch }) => {
  const ref = useRef(null);
  const ts = typeStyles[block.type];
  const isCollege = block.type === 'college';

  const onMove = (e) => {
    if (isTouch) return;
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
    if (isTouch) return;
    const el = ref.current; if (!el) return;
    el.style.transform = '';
    el.style.borderColor = isDarkMode ? 'rgba(99,102,241,0.15)' : 'rgba(99,102,241,0.15)';
    el.style.boxShadow = isDarkMode ? 'none' : '0 2px 12px rgba(99,102,241,0.06)';
  };

  return (
    <div
      ref={ref}
      className="edu-block"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        borderRadius: 28,
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
      <div className="edu-block-edge" style={{ position:'absolute', bottom:-14, left:20, right:20, height:14, borderRadius:'0 0 8px 8px', background:ts.edgeBg, pointerEvents:'none' }} />

      {/* Type badge */}
      <div className="edu-type-badge" style={{
        display:'inline-flex', alignItems:'center', gap:6,
        fontWeight:600, borderRadius:100,
        letterSpacing:'0.08em', textTransform:'uppercase',
        background: ts.typeBg, border:`1px solid ${ts.typeBorder}`, color:ts.typeText,
      }}>
        {block.typeLabel}
      </div>

      {/* Logo + institution */}
      <div className="edu-inst-row" style={{ display:'flex', alignItems:'center' }}>
        <div className="edu-logo" style={{
          borderRadius:18, flexShrink:0,
          background: ts.logoBg, border:`1px solid ${ts.logoBorder}`,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          {block.icon}
        </div>
        <div style={{ minWidth:0 }}>
          <div className="edu-inst-name" style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, color:t.instColor, transition:'color 0.3s' }}>
            {block.institution}
          </div>
          <div className="edu-loc" style={{ color:t.locColor, display:'flex', alignItems:'center', gap:4, transition:'color 0.3s' }}>
            📍 {block.location}
          </div>
        </div>
      </div>

      {/* Degree */}
      <div className="edu-degree" style={{ fontWeight:500, color:t.degreeColor, lineHeight:1.55, transition:'color 0.3s' }}>
        {block.degree}
        <br />
        <span className="edu-subdegree" style={{ color:t.subDegreeColor, fontWeight:400, transition:'color 0.3s' }}>
          {block.subDegree}
        </span>
      </div>

      {/* Badges */}
      <div className="edu-badges" style={{ display:'flex', flexWrap:'wrap' }}>
        <span className="edu-gpa-badge" style={{
          display:'inline-flex', alignItems:'center', fontWeight:500,
          borderRadius:100,
          background:t.gpaBg, border:`1px solid ${t.gpaBorder}`, color:t.gpaText,
          transition:'all 0.3s',
        }}>
          {block.grade}
        </span>
        <span className="edu-dur-badge" style={{
          display:'inline-flex', alignItems:'center', gap:5, fontWeight:500,
          borderRadius:100,
          background:ts.durBg, border:`1px solid ${ts.durBorder}`, color:ts.durText,
        }}>
          📅 {block.duration}
        </span>
      </div>

      {/* Description */}
      <p className="edu-desc" style={{ color:t.descColor, lineHeight:1.7, transition:'color 0.3s' }}>
        {block.description}
      </p>

      {/* Tag pills */}
      <div className="edu-tags" style={{ display:'flex', flexWrap:'wrap' }}>
        {block.tags.map((tag) => (
          <span key={tag} className="edu-tag-pill" style={{
            borderRadius:100,
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
  const [isTouch] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(hover: none), (max-width: 768px)').matches
  );

  return (
    <section
      id="education"
      className="edu-section"
      style={{
        background: 'transparent',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden', position: 'relative',
        transition: 'background 0.35s',
      }}
    >

      {/* Header */}
      <div className="edu-header" style={{ textAlign:'center', position:'relative', zIndex:1 }}>
        <span className="edu-tag" style={{
          display:'inline-flex', alignItems:'center', gap:8,
          fontWeight:500, borderRadius:100,
          background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText,
          letterSpacing:'0.08em', textTransform:'uppercase',
        }}>Education</span>
        <h2 className="edu-heading" style={{
          fontFamily:"'Syne',sans-serif",
          fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1,
          transition:'color 0.35s',
        }}>
          <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Education
          </span>{' '}& Learning
        </h2>
        <p className="edu-sub" style={{ color:t.sub, transition:'color 0.3s' }}>
          My academic journey and where it all began
        </p>
      </div>

      {/* Two blocks */}
      <div className="edu-grid" style={{
        display:'grid', margin:'0 auto', position:'relative', zIndex:1,
      }}>
        {blocks.map((block) => (
          <EduBlock key={block.type} block={block} t={t} isDarkMode={isDarkMode} isTouch={isTouch} />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');

        .edu-section { padding: 80px 32px; }

        .edu-header { margin-bottom: 56px; }
        .edu-tag { font-size: 12px; padding: 5px 14px; margin-bottom: 16px; }
        .edu-heading { font-size: clamp(30px, 6vw, 50px); }
        .edu-sub { font-size: 15px; margin-top: 10px; }

        .edu-grid { grid-template-columns: 1fr 1fr; gap: 28px; max-width: 900px; }

        .edu-block { padding: 36px; }
        .edu-type-badge { font-size: 11px; padding: 4px 12px; margin-bottom: 24px; }
        .edu-inst-row { gap: 16px; margin-bottom: 20px; }
        .edu-logo { width: 60px; height: 60px; font-size: 28px; }
        .edu-inst-name { font-size: 18px; margin-bottom: 3px; }
        .edu-loc { font-size: 12px; }
        .edu-degree { font-size: 14px; margin-bottom: 16px; }
        .edu-subdegree { font-size: 12px; }
        .edu-badges { gap: 8px; margin-bottom: 16px; }
        .edu-gpa-badge, .edu-dur-badge { font-size: 11px; padding: 4px 12px; }
        .edu-desc { font-size: 13px; }
        .edu-tags { gap: 6px; margin-top: 18px; }
        .edu-tag-pill { font-size: 11px; padding: 3px 10px; }

        /* Tilt only where hover + a real pointer exist; touch gets a tap-scale instead */
        @media (hover: none), (pointer: coarse) {
          .edu-block:active { transform: scale(0.98) !important; transition: transform 0.15s; }
        }

        @media (max-width: 900px) {
          .edu-section { padding: 64px 24px; }
          .edu-header { margin-bottom: 40px; }
          .edu-grid { grid-template-columns: 1fr; gap: 20px; max-width: 560px; }
          .edu-block { padding: 28px; }
        }

        @media (max-width: 480px) {
          .edu-header { margin-bottom: 32px; }
          .edu-tag { font-size: 11px; padding: 4px 12px; margin-bottom: 12px; }
          .edu-sub { font-size: 13.5px; padding: 0 8px; }

          .edu-block { padding: 20px; border-radius: 22px; }
          .edu-block-edge { left: 14px; right: 14px; }
          .edu-type-badge { font-size: 10px; padding: 3px 10px; margin-bottom: 18px; }
          .edu-inst-row { gap: 12px; margin-bottom: 16px; }
          .edu-logo { width: 48px; height: 48px; font-size: 22px; border-radius: 14px; }
          .edu-inst-name { font-size: 15.5px; }
          .edu-loc { font-size: 11px; }
          .edu-degree { font-size: 13px; margin-bottom: 14px; }
          .edu-subdegree { font-size: 11px; }
          .edu-badges { gap: 6px; margin-bottom: 14px; }
          .edu-gpa-badge, .edu-dur-badge { font-size: 10.5px; padding: 3px 10px; }
          .edu-desc { font-size: 12.5px; line-height: 1.6; }
          .edu-tags { gap: 5px; margin-top: 14px; }
          .edu-tag-pill { font-size: 10.5px; padding: 3px 9px; }
        }

        @media (max-width: 340px) {
          .edu-inst-row { flex-direction: column; align-items: flex-start; gap: 10px; }
        }
      `}</style>
    </section>
  );
};

export default Education;