import React, { useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

/* ─── Data ────────────────────────────────────────────────────────
   Add more certs to this array — the grid and filters update automatically.
───────────────────────────────────────────────────────────────── */
const ALL_CERTS = [
  {
    id: 1,
    title: 'Google AI Essentials',
    issuer: 'Coursera',
    date: 'Jun 2026',
    cat: 'ai',
    icon: '🤖',
    credId: 'GAI-001',
    link: '#',
    skills: ['Artificial Intelligence', 'Generative AI', 'Prompting', 'Machine Learning', 'AI Ethics']
  },

  {
    id: 2,
    title: 'Google Prompting Essentials',
    issuer: 'Coursera',
    date: 'Jun 2026',
    cat: 'ai',
    icon: '💬',
    credId: 'GPE-002',
    link: '#',
    skills: ['Prompt Engineering', 'LLMs', 'AI Tools', 'Content Generation', 'Problem Solving']
  },

  {
    id: 3,
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    issuer: 'NPTEL',
    date: 'May 2026',
    cat: 'iot',
    icon: '🏭',
    credId: 'NPTEL-IOT-003',
    link: '#',
    skills: ['Industry 4.0', 'Industrial IoT', 'Automation', 'Smart Manufacturing', 'Cyber-Physical Systems']
  },

  {
    id: 4,
    title: 'AWS Certification',
    issuer: 'Dayananda Sagar College of Engineering',
    date: 'Oct 2025',
    cat: 'cloud',
    icon: '☁️',
    credId: 'AWS-5678',
    link: '#',
    skills: ['AWS Cloud', 'EC2', 'S3', 'IAM', 'Cloud Computing']
  },

  {
    id: 5,
    title: 'Energy Literacy Training',
    issuer: 'Energy Swaraj Foundation',
    date: 'Jun 2024',
    cat: 'productivity',
    icon: '🌱',
    credId: 'ELT-005',
    link: '#',
    skills: ['Renewable Energy', 'Solar Energy', 'Energy Conservation', 'Sustainability', 'Climate Awareness']
  },

  {
    id: 6,
    title: 'Gemini Certified University Student',
    issuer: 'Google',
    date: 'Nov 2025',
    cat: 'ai',
    icon: '✨',
    credId: 'GEM-US-006',
    link: '#',
    skills: ['Gemini AI', 'Generative AI', 'Prompt Engineering', 'AI Productivity', 'Google AI Tools']
  },

  {
    id: 7,
    title: 'Gemini Certified Educator',
    issuer: 'Google',
    date: 'Nov 2025',
    cat: 'ai',
    icon: '🎓',
    credId: 'GEM-ED-007',
    link: '#',
    skills: ['AI in Education', 'Gemini AI', 'Content Creation', 'Learning Tools', 'Digital Education']
  },

  {
    id: 8,
    title: 'Deloitte Australia - Data Analytics Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2025',
    cat: 'data',
    icon: '📊',
    credId: 'DEL-008',
    link: '#',
    skills: ['Data Analytics', 'Excel', 'Data Visualization', 'Business Insights', 'Data Interpretation']
  },

  {
    id: 9,
    title: 'Skyscanner - Front-End Software Engineering Job Simulation',
    issuer: 'Forage',
    date: 'Mar 2025',
    cat: 'programming',
    icon: '⚛️',
    credId: 'SKY-009',
    link: '#',
    skills: ['Frontend Development', 'JavaScript', 'React', 'UI Design', 'Web Development']
  },

  {
    id: 10,
    title: 'Goldman Sachs - Software Engineering Job Simulation',
    issuer: 'Forage',
    date: 'Feb 2025',
    cat: 'programming',
    icon: '🛡️',
    credId: 'GS-010',
    link: '#',
    skills: ['Cybersecurity', 'Password Security', 'Risk Assessment', 'Authentication', 'Security Practices']
  },

  {
    id: 11,
    title: 'C Programming Course',
    issuer: 'Infosys Springboard',
    date: 'Dec 2023',
    cat: 'programming',
    icon: '💻',
    credId: 'C-011',
    link: '#',
    skills: ['C Programming', 'Data Structures', 'Pointers', 'Memory Management', 'Problem Solving']
  },

  {
    id: 12,
    title: 'C++ Course: Learn the Essentials',
    issuer: 'Scaler',
    date: 'Jun 2024',
    cat: 'programming',
    icon: '⚙️',
    credId: 'CPP-012',
    link: '#',
    skills: ['C++', 'OOP', 'STL', 'Algorithms', 'Problem Solving']
  },

  {
    id: 13,
    title: 'Getting Started with Microsoft Excel',
    issuer: 'Coursera',
    date: 'Mar 2024',
    cat: 'data',
    icon: '📈',
    credId: 'EXCEL-013',
    link: '#',
    skills: ['Microsoft Excel', 'Spreadsheets', 'Data Analysis', 'Formulas', 'Data Management']
  }
];

const FILTERS = [
  'All',
  'AI',
  'Programming',
  'Cloud',
  'Data',
  'IoT',
  'Productivity'
];

const catMeta = {
  ai: {
    label: 'AI',
    dark: {
      bg: 'rgba(168,85,247,0.14)',
      text: '#d8b4fe',
      ibg: 'rgba(168,85,247,0.10)'
    },
    light: {
      bg: 'rgba(168,85,247,0.10)',
      text: '#7c3aed',
      ibg: 'rgba(168,85,247,0.08)'
    }
  },

  programming: {
    label: 'Programming',
    dark: {
      bg: 'rgba(34,197,94,0.12)',
      text: '#86efac',
      ibg: 'rgba(34,197,94,0.10)'
    },
    light: {
      bg: 'rgba(34,197,94,0.10)',
      text: '#15803d',
      ibg: 'rgba(34,197,94,0.08)'
    }
  },

  cloud: {
    label: 'Cloud',
    dark: {
      bg: 'rgba(59,130,246,0.12)',
      text: '#93c5fd',
      ibg: 'rgba(59,130,246,0.10)'
    },
    light: {
      bg: 'rgba(59,130,246,0.10)',
      text: '#1d4ed8',
      ibg: 'rgba(59,130,246,0.08)'
    }
  },

  data: {
    label: 'Data',
    dark: {
      bg: 'rgba(239,68,68,0.12)',
      text: '#fca5a5',
      ibg: 'rgba(239,68,68,0.10)'
    },
    light: {
      bg: 'rgba(239,68,68,0.10)',
      text: '#b91c1c',
      ibg: 'rgba(239,68,68,0.08)'
    }
  },

  iot: {
    label: 'IoT',
    dark: {
      bg: 'rgba(251,191,36,0.12)',
      text: '#fcd34d',
      ibg: 'rgba(251,191,36,0.10)'
    },
    light: {
      bg: 'rgba(251,191,36,0.10)',
      text: '#b45309',
      ibg: 'rgba(251,191,36,0.08)'
    }
  },

  productivity: {
    label: 'Productivity',
    dark: {
      bg: 'rgba(20,184,166,0.12)',
      text: '#5eead4',
      ibg: 'rgba(20,184,166,0.10)'
    },
    light: {
      bg: 'rgba(20,184,166,0.10)',
      text: '#0f766e',
      ibg: 'rgba(20,184,166,0.08)'
    }
  }
};

/* ── theme tokens ── */
const dark = {
  sectionBg: '#060912', gridLine: 'rgba(99,102,241,0.05)',
  glow1: 'rgba(99,102,241,0.10)', glow2: 'rgba(168,85,247,0.08)',
  tagBg: 'rgba(99,102,241,0.10)', tagBorder: 'rgba(99,102,241,0.22)', tagText: '#a5b4fc',
  heading: '#ffffff', sub: '#64748b',
  filterBg: 'rgba(15,23,42,0.7)', filterBorder: 'rgba(99,102,241,0.18)', filterText: '#64748b',
  filterActiveBg: 'rgba(99,102,241,0.15)', filterActiveText: '#a5b4fc', filterActiveBorder: 'rgba(99,102,241,0.40)',
  cardBg: 'rgba(15,23,42,0.85)', cardBorder: 'rgba(99,102,241,0.14)', cardHover: 'rgba(99,102,241,0.30)',
  titleColor: '#ffffff', issuerColor: '#94a3b8', dateColor: '#475569',
  statBg: 'rgba(15,23,42,0.8)', statBorder: 'rgba(99,102,241,0.12)', statVal: '#ffffff', statLbl: '#64748b',
  modalBg: 'rgba(10,12,28,0.97)', modalBorder: 'rgba(99,102,241,0.22)',
  modalTitle: '#ffffff', modalMeta: '#94a3b8', modalLabel: '#64748b',
  closeBg: 'rgba(99,102,241,0.10)', closeBorder: 'rgba(99,102,241,0.20)', closeIcon: '#94a3b8',
  pillBg: 'rgba(99,102,241,0.08)', pillBorder: 'rgba(99,102,241,0.18)', pillText: '#94a3b8',
  btnBg: 'rgba(99,102,241,0.10)', btnBorder: 'rgba(99,102,241,0.25)', btnText: '#a5b4fc',
};

const light = {
  sectionBg: '#f5f3ff', gridLine: 'rgba(99,102,241,0.05)',
  glow1: 'rgba(99,102,241,0.08)', glow2: 'rgba(168,85,247,0.06)',
  tagBg: 'rgba(99,102,241,0.07)', tagBorder: 'rgba(99,102,241,0.18)', tagText: '#4338ca',
  heading: '#1e1b4b', sub: '#64748b',
  filterBg: '#ffffff', filterBorder: 'rgba(99,102,241,0.15)', filterText: '#94a3b8',
  filterActiveBg: 'rgba(99,102,241,0.10)', filterActiveText: '#4338ca', filterActiveBorder: 'rgba(99,102,241,0.35)',
  cardBg: '#ffffff', cardBorder: 'rgba(99,102,241,0.12)', cardHover: 'rgba(99,102,241,0.25)',
  titleColor: '#1e1b4b', issuerColor: '#475569', dateColor: '#94a3b8',
  statBg: '#ffffff', statBorder: 'rgba(99,102,241,0.12)', statVal: '#1e1b4b', statLbl: '#94a3b8',
  modalBg: '#ffffff', modalBorder: 'rgba(99,102,241,0.18)',
  modalTitle: '#1e1b4b', modalMeta: '#475569', modalLabel: '#94a3b8',
  closeBg: '#f5f3ff', closeBorder: 'rgba(99,102,241,0.15)', closeIcon: '#64748b',
  pillBg: 'rgba(99,102,241,0.06)', pillBorder: 'rgba(99,102,241,0.14)', pillText: '#4338ca',
  btnBg: 'rgba(99,102,241,0.08)', btnBorder: 'rgba(99,102,241,0.22)', btnText: '#4338ca',
};

/* ── Cert card ── */
const CertCard = ({ cert, t, isDarkMode, onClick }) => {
  const m = catMeta[cert.cat];
  const mc = isDarkMode ? m.dark : m.light;

  return (
    <div
      onClick={() => onClick(cert)}
      style={{
        borderRadius: 20, padding: '18px 16px',
        background: t.cardBg,
        border: `1px solid ${t.cardBorder}`,
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s',
        boxShadow: isDarkMode ? 'none' : '0 1px 8px rgba(99,102,241,0.06)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = t.cardHover;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = isDarkMode
          ? '0 8px 28px rgba(0,0,0,0.4)' : '0 6px 20px rgba(99,102,241,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = t.cardBorder;
        e.currentTarget.style.transform = '';
        e.currentTarget.style.boxShadow = isDarkMode ? 'none' : '0 1px 8px rgba(99,102,241,0.06)';
      }}
    >
      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:12 }}>
        <div style={{
          width:36, height:36, borderRadius:10,
          background: mc.ibg,
          display:'flex', alignItems:'center', justifyContent:'center', fontSize:18,
        }}>
          {cert.icon}
        </div>
        <span style={{
          fontSize:11, fontWeight:500, padding:'3px 8px', borderRadius:100,
          background: mc.bg, color: mc.text,
        }}>
          {m.label}
        </span>
      </div>
      <div style={{ fontSize:13, fontWeight:500, color:t.titleColor, lineHeight:1.4, marginBottom:4, transition:'color 0.3s' }}>
        {cert.title}
      </div>
      <div style={{ fontSize:12, color:t.issuerColor, marginBottom:8, transition:'color 0.3s' }}>
        {cert.issuer}
      </div>
      <div style={{ fontSize:11, color:t.dateColor, display:'flex', alignItems:'center', gap:4, transition:'color 0.3s' }}>
        <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" strokeWidth={2}/><path d="M16 2v4M8 2v4M3 10h18" strokeWidth={2}/></svg>
        {cert.date}
      </div>
    </div>
  );
};

/* ── Modal ── */
const Modal = ({ cert, t, isDarkMode, onClose }) => {
  if (!cert) return null;
  const m = catMeta[cert.cat];
  const mc = isDarkMode ? m.dark : m.light;

  return (
    <div
      onClick={onClose}
      style={{
        position:'fixed', inset:0, background:'rgba(0,0,0,0.5)',
        display:'flex', alignItems:'center', justifyContent:'center',
        zIndex:100, padding:16,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: t.modalBg,
          border: `1px solid ${t.modalBorder}`,
          borderRadius:24, padding:28,
          width:'100%', maxWidth:420,
          transition:'background 0.3s',
        }}
      >
        {/* Header */}
        <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12, marginBottom:16 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <div style={{ width:44, height:44, borderRadius:14, background:mc.ibg, display:'flex', alignItems:'center', justifyContent:'center', fontSize:22, flexShrink:0 }}>
              {cert.icon}
            </div>
            <div>
              <div style={{ fontSize:15, fontWeight:500, color:t.modalTitle, lineHeight:1.35, marginBottom:3, transition:'color 0.3s' }}>
                {cert.title}
              </div>
              <div style={{ fontSize:13, color:t.modalMeta, transition:'color 0.3s' }}>{cert.issuer}</div>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              background:t.closeBg, border:`1px solid ${t.closeBorder}`,
              borderRadius:10, width:30, height:30,
              display:'flex', alignItems:'center', justifyContent:'center',
              cursor:'pointer', flexShrink:0,
              transition:'all 0.2s',
            }}
          >
            <svg width="14" height="14" fill="none" stroke={t.closeIcon} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        {/* Meta rows */}
        {[
          { icon:'📅', text: cert.date },
          { icon:'🏷️', text: m.label },
          { icon:'🪪', text: `ID: ${cert.credId}` },
        ].map(({ icon, text }) => (
          <div key={text} style={{ display:'flex', gap:8, fontSize:13, color:t.modalMeta, marginBottom:8, alignItems:'center', transition:'color 0.3s' }}>
            <span style={{ fontSize:14 }}>{icon}</span>{text}
          </div>
        ))}

        {/* Skills */}
        <div style={{ fontSize:12, fontWeight:500, color:t.modalLabel, margin:'14px 0 8px', transition:'color 0.3s' }}>
          Skills validated
        </div>
        <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
          {cert.skills.map((s) => (
            <span key={s} style={{
              fontSize:12, padding:'3px 10px', borderRadius:100,
              background:t.pillBg, border:`1px solid ${t.pillBorder}`, color:t.pillText,
              transition:'all 0.3s',
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* CTA */}
        <a
          href={cert.link}
          target="_blank"
          rel="noreferrer"
          style={{
            display:'flex', alignItems:'center', justifyContent:'center', gap:6,
            width:'100%', marginTop:16, padding:'10px',
            borderRadius:12, border:`1px solid ${t.btnBorder}`,
            background:t.btnBg, color:t.btnText,
            fontSize:13, fontWeight:500, textDecoration:'none',
            transition:'all 0.2s',
          }}
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"/></svg>
          View certificate
        </a>
      </div>
    </div>
  );
};

/* ── Main ── */
const Certifications = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => (
    activeFilter === 'All'
      ? ALL_CERTS
      : ALL_CERTS.filter(c => catMeta[c.cat].label === activeFilter)
  ), [activeFilter]);

  const providers = useMemo(() => new Set(ALL_CERTS.map(c => c.issuer)).size, []);

  return (
    <section
      id="certifications"
      style={{
        background: 'transparent',
        padding: '80px 32px',
        fontFamily: "'DM Sans', sans-serif",
        overflow: 'hidden', position: 'relative',
        transition: 'background 0.35s',
      }}
    >
      
      <div style={{ maxWidth:1040, margin:'0 auto', position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:48 }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:12, fontWeight:500, padding:'5px 14px', borderRadius:100, background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:16 }}>
            Certifications
          </span>
          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,4.5vw,50px)', fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1, transition:'color 0.35s' }}>
            Professional{' '}
            <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Certifications
            </span>
          </h2>
          <p style={{ fontSize:15, color:t.sub, marginTop:10, transition:'color 0.3s' }}>
            Validated expertise through industry-recognised certifications
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display:'flex', flexWrap:'wrap', gap:8, marginBottom:24 }}>
          {FILTERS.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  fontSize:13, padding:'6px 16px', borderRadius:100, border:`1px solid ${isActive ? t.filterActiveBorder : t.filterBorder}`,
                  background: isActive ? t.filterActiveBg : t.filterBg,
                  color: isActive ? t.filterActiveText : t.filterText,
                  cursor:'pointer', fontFamily:"'DM Sans',sans-serif",
                  transition:'all 0.18s',
                }}
              >
                {f}{f === 'All' && <span style={{ marginLeft:5, fontSize:11 }}>({ALL_CERTS.length})</span>}
              </button>
            );
          })}
        </div>

        {/* Grid — auto-fill so adding more certs just works */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(190px, 1fr))', gap:14 }}>
          {filtered.map((cert) => (
            <CertCard key={cert.id} cert={cert} t={t} isDarkMode={isDarkMode} onClick={setSelected} />
          ))}
        </div>

        {/* Stats */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:14, marginTop:32 }}>
          {[
            { val: ALL_CERTS.length, lbl: 'Certifications' },
            { val: '100%',           lbl: 'Pass rate'      },
            { val: providers,        lbl: 'Providers'      },
            { val: '3',              lbl: 'Years active'   },
          ].map(({ val, lbl }) => (
            <div key={lbl} style={{ borderRadius:18, padding:'18px 14px', textAlign:'center', background:t.statBg, border:`1px solid ${t.statBorder}`, transition:'background 0.3s' }}>
              <div style={{ fontFamily:"'Syne',sans-serif", fontSize:26, fontWeight:800, background:'linear-gradient(135deg,#818cf8,#c084fc)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                {val}
              </div>
              <div style={{ fontSize:12, color:t.statLbl, marginTop:4, transition:'color 0.3s' }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <Modal cert={selected} t={t} isDarkMode={isDarkMode} onClose={() => setSelected(null)} />

      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');`}</style>
    </section>
  );
};

export default Certifications;