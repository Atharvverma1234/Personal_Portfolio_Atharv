import React, { useState, useEffect } from 'react';

const mainNavItems = [
  { name: 'Home',       href: '#home' },
  { name: 'About',      href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills',     href: '#skills' },
  { name: 'Projects',   href: '#projects' },
  { name: 'Contact',    href: '#contact' },
];

const secondaryNavItems = [
  { name: 'Education',      href: '#education',      icon: '🎓' },
  { name: 'Certifications', href: '#certifications', icon: '📜' },
  { name: 'Volunteering',   href: '#volunteering',   icon: '🤝' },
  { name: 'Achievements',   href: '#achievements',   icon: '🏆' },
];
const dropDividerAfter = ['Certifications'];

const ChevronDown = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        fontFamily: "'DM Sans', sans-serif",
        transition: 'all 0.3s',
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled ? 'rgba(6,9,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(99,102,241,0.12)' : 'none',
      }}
    >
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24,
        
      }}>

        {/* Logo */}
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: 40, height: 32, borderRadius: 10,
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, fontWeight: 800, color: '#fff',
            fontFamily: "'Syne', sans-serif",
          }}>AV</div>
          <span style={{
            fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800,
            background: 'linear-gradient(135deg,#818cf8,#c084fc)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>Atharv Verma</span>
        </a>

        {/* Desktop pill nav */}
        <nav className="hidden md:flex" style={{
          alignItems: 'center', gap: 2,
          background: 'rgba(15,23,42,0.8)',
          border: '1px solid rgba(99,102,241,0.18)',
          borderRadius: 100, padding: 5,
        }}>
          {mainNavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveItem(item.name)}
              style={{
                fontSize: 13, fontWeight: 500, padding: '7px 13px',
                borderRadius: 100, textDecoration: 'none',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
                ...(activeItem === item.name
                  ? { background: 'linear-gradient(135deg,#6366f1,#8b5cf6)', color: '#fff', boxShadow: '0 0 16px rgba(99,102,241,0.35)' }
                  : { color: '#94a3b8' }),
              }}
              onMouseEnter={(e) => { if (activeItem !== item.name) { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.background = 'rgba(99,102,241,0.12)'; } }}
              onMouseLeave={(e) => { if (activeItem !== item.name) { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; } }}
            >{item.name}</a>
          ))}

          {/* More dropdown */}
          <div style={{ position: 'relative' }} className="group">
            <button style={{
              fontSize: 13, fontWeight: 500, color: '#94a3b8',
              background: 'transparent', border: 'none', cursor: 'pointer',
              padding: '7px 14px', borderRadius: 100,
              display: 'flex', alignItems: 'center', gap: 5,
              fontFamily: "'DM Sans', sans-serif", transition: 'all 0.2s',
            }}>
              More <ChevronDown />
            </button>
            <div className="group-hover:opacity-100 group-hover:visible group-hover:translate-y-0" style={{
              position: 'absolute', top: 'calc(100% + 10px)', right: -8,
              background: 'rgba(10,12,28,0.97)',
              border: '1px solid rgba(99,102,241,0.20)',
              borderRadius: 18, padding: 8, minWidth: 200,
              opacity: 0, visibility: 'hidden',
              transform: 'translateY(-6px)',
              transition: 'all 0.2s',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
            }}>
              {secondaryNavItems.map((item) => (
                <React.Fragment key={item.name}>
                  <a href={item.href} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '9px 14px', borderRadius: 12,
                    fontSize: 13, color: '#94a3b8',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.12)'; e.currentTarget.style.color = '#e2e8f0'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}>
                    <span style={{
                      width: 26, height: 26, borderRadius: 8,
                      background: 'rgba(99,102,241,0.10)',
                      border: '1px solid rgba(99,102,241,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, flexShrink: 0,
                    }}>{item.icon}</span>
                    {item.name}
                  </a>
                  {dropDividerAfter.includes(item.name) && (
                    <div style={{ height: 1, background: 'rgba(99,102,241,0.10)', margin: '6px 0' }} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          {/* Available badge */}
          <div className="hidden md:flex" style={{
            alignItems: 'center', gap: 6,
            fontSize: 12, color: '#4ade80', fontWeight: 500,
            padding: '6px 12px', borderRadius: 100,
            background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.18)',
          }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e', display: 'inline-block',
              animation: 'availDot 2s ease-in-out infinite',
            }} />
            Available
          </div>

          {/* CV button */}
          <button className="hidden md:block" style={{
            fontSize: 13, fontWeight: 500, padding: '9px 22px',
            borderRadius: 100,
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            color: '#fff', border: 'none', cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif",
            boxShadow: '0 0 20px rgba(99,102,241,0.30)',
            transition: 'all 0.2s', whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 0 28px rgba(99,102,241,0.50)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.30)'; }}>
            Download CV
          </button>

          {/* Mobile hamburger */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{
            background: 'rgba(15,23,42,0.8)',
            border: '1px solid rgba(99,102,241,0.18)',
            borderRadius: 10, padding: 8,
            cursor: 'pointer', color: '#94a3b8', display: 'flex',
          }}>
            {isMenuOpen
              ? <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              : <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div style={{
          margin: '12px 32px 0',
          background: 'rgba(10,12,28,0.97)',
          border: '1px solid rgba(99,102,241,0.18)',
          borderRadius: 20, padding: 16,
          backdropFilter: 'blur(20px)',
        }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>Main</p>
          {mainNavItems.map((item) => (
            <a key={item.name} href={item.href}
              onClick={() => { setActiveItem(item.name); setIsMenuOpen(false); }}
              style={{ display: 'block', padding: '9px 12px', fontSize: 14, color: '#94a3b8', textDecoration: 'none', borderRadius: 10, transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.10)'; e.currentTarget.style.color = '#e2e8f0'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
            >{item.name}</a>
          ))}
          <div style={{ height: 1, background: 'rgba(99,102,241,0.10)', margin: '12px 0' }} />
          <p style={{ fontSize: 11, fontWeight: 500, color: '#475569', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>More sections</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4 }}>
            {secondaryNavItems.map((item) => (
              <a key={item.name} href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ display: 'block', padding: '9px 12px', fontSize: 13, color: '#94a3b8', textDecoration: 'none', borderRadius: 10, transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(99,102,241,0.10)'; e.currentTarget.style.color = '#e2e8f0'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
              >{item.icon} {item.name}</a>
            ))}
          </div>
          <button style={{
            width: '100%', marginTop: 14, padding: 12, borderRadius: 12,
            background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
            color: '#fff', border: 'none', fontSize: 14, fontWeight: 500,
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            boxShadow: '0 0 20px rgba(99,102,241,0.30)',
          }}>Download CV</button>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes availDot {
          0%,100% { opacity:1; box-shadow:0 0 0 0 rgba(34,197,94,0.4); }
          50%      { opacity:.6; box-shadow:0 0 0 4px rgba(34,197,94,0); }
        }
        .group:hover > div {
          opacity:1 !important; visibility:visible !important; transform:translateY(0) !important;
        }
        .group:hover > button { color:#e2e8f0 !important; background:rgba(99,102,241,0.12) !important; }
      `}</style>
    </header>
  );
};

export default Header;