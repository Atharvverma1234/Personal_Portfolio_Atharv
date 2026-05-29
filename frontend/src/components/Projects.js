import React, { useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const projects = [
  {
    id: 1,
    number: '01',
    category: 'E-Commerce',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB. Includes cart, payments, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    icon: '🛍️',
    accent: '#818cf8',
    accentGlow: 'rgba(129,140,248,0.6)',
    bannerDark: 'linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#1e1b4b 100%)',
    bannerLight: 'linear-gradient(135deg,#ede9fe 0%,#ddd6fe 50%,#ede9fe 100%)',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    number: '02',
    category: 'Productivity',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates, drag-and-drop boards, and team notifications.',
    tags: ['React', 'Express', 'Socket.io', 'MongoDB'],
    icon: '✅',
    accent: '#38bdf8',
    accentGlow: 'rgba(56,189,248,0.6)',
    bannerDark: 'linear-gradient(135deg,#0c1a2e 0%,#0f3460 50%,#0c1a2e 100%)',
    bannerLight: 'linear-gradient(135deg,#e0f2fe 0%,#bae6fd 50%,#e0f2fe 100%)',
    github: '#',
    live: '#',
  },
  {
    id: 3,
    number: '03',
    category: 'Analytics',
    title: 'AI Analytics Dashboard',
    description: 'Data visualisation dashboard powered by OpenAI, with real-time charts, filters, and exportable reports.',
    tags: ['Next.js', 'OpenAI', 'D3.js', 'Tailwind'],
    icon: '📊',
    accent: '#c084fc',
    accentGlow: 'rgba(192,132,252,0.6)',
    bannerDark: 'linear-gradient(135deg,#1a0a2e 0%,#2d1b69 50%,#1a0a2e 100%)',
    bannerLight: 'linear-gradient(135deg,#faf5ff 0%,#ede9fe 50%,#faf5ff 100%)',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    number: '04',
    category: 'Communication',
    title: 'Real-Time Chat App',
    description: 'Scalable messaging platform with rooms, file sharing, emoji reactions, and end-to-end encryption.',
    tags: ['React', 'Socket.io', 'Redis', 'AWS'],
    icon: '💬',
    accent: '#34d399',
    accentGlow: 'rgba(52,211,153,0.6)',
    bannerDark: 'linear-gradient(135deg,#0a1a1a 0%,#0d3d3d 50%,#0a1a1a 100%)',
    bannerLight: 'linear-gradient(135deg,#ecfdf5 0%,#a7f3d0 50%,#ecfdf5 100%)',
    github: '#',
    live: '#',
  },
];

const dark = {
  sectionBg:    '#060912',
  gridLine:     'rgba(99,102,241,0.05)',
  tagBg:        'rgba(99,102,241,0.10)',
  tagBorder:    'rgba(99,102,241,0.22)',
  tagText:      '#a5b4fc',
  heading:      '#ffffff',
  sub:          '#64748b',
  cardBg:       'rgba(15,23,42,0.9)',
  cardBorder:   'rgba(99,102,241,0.15)',
  cardBorderHover: 'rgba(99,102,241,0.40)',
  edgeBg:       'linear-gradient(to right,rgba(30,27,75,0.9),rgba(15,23,42,0.5))',
  edgeBgFlip:   'linear-gradient(to left,rgba(30,27,75,0.9),rgba(15,23,42,0.5))',
  edgeBorder:   'rgba(99,102,241,0.10)',
  numText:      'rgba(255,255,255,0.25)',
  titleColor:   '#ffffff',
  descColor:    '#94a3b8',
  pillBg:       'rgba(99,102,241,0.08)',
  pillBorder:   'rgba(99,102,241,0.20)',
  pillText:     '#a5b4fc',
  btnGhBorder:  'rgba(148,163,184,0.20)',
  btnGhText:    '#94a3b8',
  btnGhHoverBorder: 'rgba(99,102,241,0.45)',
  btnGhHoverText:   '#a5b4fc',
  viewBtnBorder: 'rgba(148,163,184,0.25)',
  viewBtnText:   '#94a3b8',
};

const light = {
  sectionBg:    '#f5f3ff',
  gridLine:     'rgba(99,102,241,0.05)',
  tagBg:        'rgba(99,102,241,0.07)',
  tagBorder:    'rgba(99,102,241,0.18)',
  tagText:      '#4338ca',
  heading:      '#1e1b4b',
  sub:          '#64748b',
  cardBg:       '#ffffff',
  cardBorder:   'rgba(99,102,241,0.15)',
  cardBorderHover: 'rgba(99,102,241,0.35)',
  edgeBg:       'linear-gradient(to right,rgba(99,102,241,0.10),transparent)',
  edgeBgFlip:   'linear-gradient(to left,rgba(99,102,241,0.10),transparent)',
  edgeBorder:   'rgba(99,102,241,0.12)',
  numText:      'rgba(30,27,75,0.25)',
  titleColor:   '#1e1b4b',
  descColor:    '#475569',
  pillBg:       'rgba(99,102,241,0.06)',
  pillBorder:   'rgba(99,102,241,0.15)',
  pillText:     '#4338ca',
  btnGhBorder:  'rgba(100,116,139,0.30)',
  btnGhText:    '#475569',
  btnGhHoverBorder: 'rgba(99,102,241,0.40)',
  btnGhHoverText:   '#4338ca',
  viewBtnBorder: 'rgba(100,116,139,0.30)',
  viewBtnText:   '#475569',
};

const ProjectCard = ({ project, index, t, isDarkMode }) => {
  const cardRef = useRef(null);
  const flipY = index % 2 !== 0;

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    const ry = flipY ? dx * 7 : -dx * 7;
    card.style.transform = `rotateY(${ry}deg) rotateX(${-dy * 4}deg) translateZ(10px) scale(1.02)`;
    card.style.borderColor = t.cardBorderHover;
    card.style.boxShadow = isDarkMode
      ? '12px 24px 48px rgba(0,0,0,0.55),0 0 48px rgba(99,102,241,0.08)'
      : '8px 16px 40px rgba(99,102,241,0.12),0 0 32px rgba(99,102,241,0.06)';
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = '';
    card.style.borderColor = t.cardBorder;
    card.style.boxShadow = '';
  };

  return (
    <div style={{ perspective: 900 }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          borderRadius: 24,
          overflow: 'hidden',
          background: t.cardBg,
          border: `1px solid ${t.cardBorder}`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.35s cubic-bezier(.22,.68,0,1.2), border-color 0.25s, box-shadow 0.35s, background 0.3s',
          position: 'relative',
          cursor: 'pointer',
          boxShadow: isDarkMode ? 'none' : '0 2px 16px rgba(99,102,241,0.06)',
        }}
      >
        {/* Banner */}
        <div style={{
          height: 160,
          background: isDarkMode ? project.bannerDark : project.bannerLight,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
          <span style={{ fontSize: 56, opacity: isDarkMode ? 0.18 : 0.25 }}>{project.icon}</span>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(255,255,255,0.04) 0%,transparent 60%)' }} />
          {/* Accent dot */}
          <div style={{
            position: 'absolute', top: 14, right: 14,
            width: 8, height: 8, borderRadius: '50%',
            background: project.accent,
            boxShadow: `0 0 10px ${project.accentGlow}`,
          }} />
          {/* Number label */}
          <span style={{
            position: 'absolute', bottom: 12, left: 16,
            fontFamily: "'Syne', sans-serif",
            fontSize: 11, fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: t.numText,
          }}>
            {project.number} — {project.category}
          </span>
        </div>

        {/* Body */}
        <div style={{ padding: 24 }}>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 17, fontWeight: 700,
            color: t.titleColor, marginBottom: 6,
            transition: 'color 0.3s',
          }}>
            {project.title}
          </h3>
          <p style={{ fontSize: 13, color: t.descColor, lineHeight: 1.65, marginBottom: 16, transition: 'color 0.3s' }}>
            {project.description}
          </p>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{
                fontSize: 11, padding: '3px 10px', borderRadius: 100,
                background: t.pillBg,
                border: `1px solid ${t.pillBorder}`,
                color: t.pillText,
                transition: 'all 0.3s',
              }}>
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: 10 }}>
            <a
              href={project.github}
              style={{
                flex: 1, textAlign: 'center',
                fontSize: 13, fontWeight: 500,
                padding: '9px 0', borderRadius: 10,
                border: `1px solid ${t.btnGhBorder}`,
                color: t.btnGhText,
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = t.btnGhHoverBorder; e.currentTarget.style.color = t.btnGhHoverText; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.btnGhBorder; e.currentTarget.style.color = t.btnGhText; }}
            >
              GitHub
            </a>
            <a
              href={project.live}
              style={{
                flex: 1, textAlign: 'center',
                fontSize: 13, fontWeight: 500,
                padding: '9px 0', borderRadius: 10,
                background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
                color: '#fff',
                textDecoration: 'none',
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: '0 0 18px rgba(99,102,241,0.30)',
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
            >
              Live Demo
            </a>
          </div>
        </div>

        {/* 3D depth edge */}
        <div style={{
          position: 'absolute',
          [flipY ? 'left' : 'right']: -13,
          top: 16, bottom: 16, width: 13,
          borderRadius: flipY ? '8px 0 0 8px' : '0 8px 8px 0',
          background: flipY ? t.edgeBgFlip : t.edgeBg,
          [flipY ? 'borderLeft' : 'borderRight']: `1px solid ${t.edgeBorder}`,
          pointerEvents: 'none',
          transition: 'background 0.3s',
        }} />
      </div>
    </div>
  );
};

const Projects = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;

  return (
    <section
      id="projects"
      style={{
        background: t.sectionBg,
        padding: '80px 32px',
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
        maskImage: 'radial-gradient(ellipse 100% 80% at 50% 50%,black 30%,transparent 100%)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontSize: 12, fontWeight: 500, padding: '5px 14px',
            borderRadius: 100,
            background: t.tagBg, border: `1px solid ${t.tagBorder}`, color: t.tagText,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            marginBottom: 16, transition: 'all 0.3s',
          }}>
            Projects
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(32px,4.5vw,50px)',
            fontWeight: 800,
            color: t.heading,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            transition: 'color 0.35s',
          }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Projects
            </span>
          </h2>
          <p style={{ fontSize: 15, color: t.sub, marginTop: 10, transition: 'color 0.35s' }}>
            Some of my recent work that I'm proud of
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 28,
          maxWidth: 980,
          margin: '0 auto',
        }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              t={t}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>

        {/* View more */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <button
            style={{
              background: 'transparent',
              color: t.viewBtnText,
              border: `1px solid ${t.viewBtnBorder}`,
              padding: '12px 32px',
              borderRadius: 100,
              fontSize: 14, fontWeight: 500,
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(99,102,241,0.45)'; e.currentTarget.style.color = isDarkMode ? '#a5b4fc' : '#4338ca'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = t.viewBtnBorder; e.currentTarget.style.color = t.viewBtnText; }}
          >
            View All Projects
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
      `}</style>
    </section>
  );
};

export default Projects;