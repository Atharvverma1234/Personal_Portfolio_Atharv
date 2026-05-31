import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const quickLinks = [
  { name: 'Home',       href: '#home'       },
  { name: 'About',      href: '#about'      },
  { name: 'Projects',   href: '#projects'   },
  { name: 'Skills',     href: '#skills'     },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact',    href: '#contact'    },
];

const socials = [
  { label: 'Gh', name: 'GitHub',    href: 'https://github.com'    },
  { label: 'in', name: 'LinkedIn',  href: 'https://linkedin.com'  },
  { label: '𝕏',  name: 'Twitter',   href: 'https://twitter.com'   },
  { label: 'ig', name: 'Instagram', href: 'https://instagram.com' },
];

/* ── theme tokens ── */
const dark = {
  footerBg:      '#060912',
  topBorder:     'rgba(99,102,241,0.12)',
  gridLine:      'rgba(99,102,241,0.04)',
  glow1:         'rgba(99,102,241,0.07)',
  glow2:         'rgba(168,85,247,0.06)',
  bio:           '#64748b',
  colHead:       '#ffffff',
  navLink:       '#64748b',
  navHover:      '#a5b4fc',
  socBg:         'rgba(99,102,241,0.08)',
  socBorder:     'rgba(99,102,241,0.18)',
  socText:       '#94a3b8',
  socHoverBg:    'rgba(99,102,241,0.20)',
  socHoverBorder:'rgba(99,102,241,0.40)',
  socHoverText:  '#e2e8f0',
  nlSub:         '#64748b',
  nlRowBorder:   'rgba(99,102,241,0.20)',
  nlInputBg:     'rgba(99,102,241,0.07)',
  nlInputText:   '#e2e8f0',
  nlPlaceholder: '#475569',
  divider:       'rgba(99,102,241,0.10)',
  copy:          '#475569',
  copyAccent:    '#a5b4fc',
  botLink:       '#475569',
  botHover:      '#a5b4fc',
  made:          '#334155',
  madeAccent:    '#6366f1',
};

const light = {
  footerBg:      '#f5f3ff',
  topBorder:     'rgba(99,102,241,0.12)',
  gridLine:      'rgba(99,102,241,0.04)',
  glow1:         'rgba(99,102,241,0.06)',
  glow2:         'rgba(168,85,247,0.04)',
  bio:           '#64748b',
  colHead:       '#1e1b4b',
  navLink:       '#64748b',
  navHover:      '#4338ca',
  socBg:         'rgba(99,102,241,0.06)',
  socBorder:     'rgba(99,102,241,0.14)',
  socText:       '#64748b',
  socHoverBg:    'rgba(99,102,241,0.12)',
  socHoverBorder:'rgba(99,102,241,0.30)',
  socHoverText:  '#4338ca',
  nlSub:         '#64748b',
  nlRowBorder:   'rgba(99,102,241,0.18)',
  nlInputBg:     'rgba(99,102,241,0.05)',
  nlInputText:   '#1e1b4b',
  nlPlaceholder: '#94a3b8',
  divider:       'rgba(99,102,241,0.10)',
  copy:          '#94a3b8',
  copyAccent:    '#4338ca',
  botLink:       '#94a3b8',
  botHover:      '#4338ca',
  made:          '#94a3b8',
  madeAccent:    '#6366f1',
};

const Footer = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [nlMsg, setNlMsg] = useState(null); // { ok, text }

  const handleSubscribe = () => {
    if (!email.trim() || !email.includes('@')) {
      setNlMsg({ ok: false, text: 'Please enter a valid email.' });
      return;
    }
    setNlMsg({ ok: true, text: "✓ You're subscribed!" });
    setEmail('');
  };

  return (
    <footer
      style={{
        background: t.footerBg,
        padding: '64px 32px 32px',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${t.topBorder}`,
        transition: 'background 0.35s',
      }}
    >
      {/* Grid bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`, backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse 100% 60% at 50% 0%,black 20%,transparent 100%)' }} />
      {/* Glows */}
      <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(110px)', pointerEvents:'none', width:300, height:300, top:-100, left:-60, background:t.glow1, transition:'background 0.35s' }} />
      <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(110px)', pointerEvents:'none', width:260, height:260, top:-80, right:-40, background:t.glow2, transition:'background 0.35s' }} />

      {/* ── Top grid ── */}
      <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr', gap:48, maxWidth:1040, margin:'0 auto 48px', position:'relative', zIndex:1 }}>

        {/* Brand */}
        <div>
          <a href="#home" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none', marginBottom:14 }}>
            <div style={{ width:34, height:34, borderRadius:10, background:'linear-gradient(135deg,#6366f1,#8b5cf6)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Syne',sans-serif", fontSize:16, fontWeight:800, color:'#fff' }}>
              G
            </div>
            <span style={{ fontFamily:"'Syne',sans-serif", fontSize:18, fontWeight:800, background:'linear-gradient(135deg,#818cf8,#c084fc)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Gypsy Danger
            </span>
          </a>
          <p style={{ fontSize:13, color:t.bio, lineHeight:1.7, marginBottom:20, maxWidth:280, transition:'color 0.3s' }}>
            Full Stack Developer passionate about building immersive digital experiences with modern technologies and clean, scalable code.
          </p>
          <div style={{ display:'flex', gap:8 }}>
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                style={{ width:34, height:34, borderRadius:9, background:t.socBg, border:`1px solid ${t.socBorder}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:13, fontWeight:600, color:t.socText, textDecoration:'none', transition:'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background=t.socHoverBg; e.currentTarget.style.borderColor=t.socHoverBorder; e.currentTarget.style.color=t.socHoverText; e.currentTarget.style.transform='translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background=t.socBg; e.currentTarget.style.borderColor=t.socBorder; e.currentTarget.style.color=t.socText; e.currentTarget.style.transform=''; }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700, color:t.colHead, letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:16, transition:'color 0.3s' }}>
            Quick Links
          </div>
          <nav style={{ display:'flex', flexDirection:'column', gap:9 }}>
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{ fontSize:13, color:t.navLink, textDecoration:'none', display:'flex', alignItems:'center', gap:6, transition:'all 0.18s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color=t.navHover; e.currentTarget.style.transform='translateX(4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color=t.navLink; e.currentTarget.style.transform=''; }}
              >
                <span style={{ width:4, height:4, borderRadius:'50%', background:'#6366f1', flexShrink:0 }} />
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Newsletter */}
        <div>
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:13, fontWeight:700, color:t.colHead, letterSpacing:'0.06em', textTransform:'uppercase', marginBottom:16, transition:'color 0.3s' }}>
            Stay Updated
          </div>
          <p style={{ fontSize:13, color:t.nlSub, lineHeight:1.65, marginBottom:14, transition:'color 0.3s' }}>
            Subscribe for the latest projects and tech articles — no spam, ever.
          </p>
          <div style={{ display:'flex', borderRadius:12, overflow:'hidden', border:`1px solid ${t.nlRowBorder}`, transition:'border-color 0.3s' }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
              style={{
                flex:1, background:t.nlInputBg, color:t.nlInputText,
                fontSize:13, fontFamily:"'DM Sans',sans-serif",
                padding:'11px 14px', border:'none', outline:'none',
                transition:'background 0.3s, color 0.3s',
              }}
            />
            <button
              onClick={handleSubscribe}
              style={{
                padding:'11px 16px',
                background:'linear-gradient(135deg,#6366f1,#8b5cf6)',
                color:'#fff', fontSize:13, fontWeight:500,
                fontFamily:"'DM Sans',sans-serif", border:'none',
                cursor:'pointer', whiteSpace:'nowrap', transition:'opacity 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity='0.88'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity='1'; }}
            >
              Subscribe
            </button>
          </div>
          {nlMsg && (
            <div style={{ fontSize:12, marginTop:8, color: nlMsg.ok ? '#4ade80' : '#f87171', transition:'color 0.3s' }}>
              {nlMsg.text}
            </div>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={{ height:1, background:t.divider, maxWidth:1040, margin:'0 auto 24px', position:'relative', zIndex:1, transition:'background 0.3s' }} />

      {/* Bottom bar */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:12, maxWidth:1040, margin:'0 auto', position:'relative', zIndex:1 }}>
        <p style={{ fontSize:12, color:t.copy, transition:'color 0.3s' }}>
          © {year}{' '}
          <span style={{ color:t.copyAccent }}>Gypsy Danger</span>
          . All rights reserved.
        </p>
        <div style={{ display:'flex', gap:20 }}>
          {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
            <a
              key={item}
              href="/"
              style={{ fontSize:12, color:t.botLink, textDecoration:'none', transition:'color 0.18s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color=t.botHover; }}
              onMouseLeave={(e) => { e.currentTarget.style.color=t.botLink; }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Made with */}
      <p style={{ fontSize:11, color:t.made, textAlign:'center', marginTop:20, position:'relative', zIndex:1, transition:'color 0.3s' }}>
        Crafted with{' '}
        <span style={{ color:t.madeAccent }}>♥</span>
        {' '}using React & Tailwind CSS
      </p>

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        style={{
          position:'fixed', bottom:24, right:24,
          width:44, height:44, borderRadius:'50%',
          background:'linear-gradient(135deg,#6366f1,#8b5cf6)',
          border:'none', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 0 20px rgba(99,102,241,0.40)',
          transition:'transform 0.2s, box-shadow 0.2s',
          zIndex:99,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform='translateY(-3px) scale(1.08)'; e.currentTarget.style.boxShadow='0 0 32px rgba(99,102,241,0.60)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 0 20px rgba(99,102,241,0.40)'; }}
      >
        <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @media(max-width:700px) {
          .ft-top { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        input[type=email]::placeholder { color: #475569; }
      `}</style>
    </footer>
  );
};

export default Footer;