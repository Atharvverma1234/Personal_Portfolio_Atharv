import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const contactInfo = [
  { icon: '📧', title: 'Email',    value: 'atharvverma2905@gmail.com', link: 'mailto:atharvverma2905@gmail.com' },
  { icon: '📱', title: 'Phone',    value: '+91 84708 62596',           link: 'tel:+918470862596' },
  { icon: '📍', title: 'Location', value: 'Lucknow, Uttar Pradesh, India', link: '#' },
];

const socials = [
  { label: 'Gh', name: 'GitHub',    href: '#' },
  { label: 'in', name: 'LinkedIn',  href: '#' },
  { label: '𝕏',  name: 'Twitter',   href: '#' },
  { label: 'ig', name: 'Instagram', href: '#' },
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
  panelBg:       'rgba(15,23,42,0.9)',
  panelBorder:   'rgba(99,102,241,0.14)',
  panelTitle:    '#ffffff',
  rowBg:         'rgba(99,102,241,0.06)',
  rowBorder:     'rgba(99,102,241,0.13)',
  rowHoverBg:    'rgba(99,102,241,0.12)',
  rowHoverBorder:'rgba(99,102,241,0.30)',
  iconBg:        'rgba(99,102,241,0.12)',
  iconBorder:    'rgba(99,102,241,0.20)',
  infoTitle:     '#64748b',
  infoVal:       '#e2e8f0',
  divider:       'rgba(99,102,241,0.12)',
  socialLbl:     '#64748b',
  socBg:         'rgba(99,102,241,0.08)',
  socBorder:     'rgba(99,102,241,0.18)',
  socText:       '#94a3b8',
  socHoverBg:    'rgba(99,102,241,0.20)',
  socHoverBorder:'rgba(99,102,241,0.40)',
  socHoverText:  '#e2e8f0',
  availBg:       'linear-gradient(135deg,rgba(30,27,75,0.95),rgba(45,22,105,0.90))',
  availBorder:   'rgba(99,102,241,0.25)',
  availTitle:    '#ffffff',
  availSub:      '#94a3b8',
  label:         '#64748b',
  inputBg:       'rgba(99,102,241,0.06)',
  inputBorder:   'rgba(99,102,241,0.18)',
  inputFocusBorder:'rgba(99,102,241,0.45)',
  inputFocusBg:  'rgba(99,102,241,0.10)',
  inputText:     '#e2e8f0',
  inputPlaceholder:'#475569',
  okBg:          'rgba(34,197,94,0.10)',
  okBorder:      'rgba(34,197,94,0.22)',
  okText:        '#4ade80',
  errBg:         'rgba(239,68,68,0.10)',
  errBorder:     'rgba(239,68,68,0.22)',
  errText:       '#f87171',
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
  panelBg:       '#ffffff',
  panelBorder:   'rgba(99,102,241,0.12)',
  panelTitle:    '#1e1b4b',
  rowBg:         'rgba(99,102,241,0.04)',
  rowBorder:     'rgba(99,102,241,0.10)',
  rowHoverBg:    'rgba(99,102,241,0.08)',
  rowHoverBorder:'rgba(99,102,241,0.25)',
  iconBg:        'rgba(99,102,241,0.08)',
  iconBorder:    'rgba(99,102,241,0.15)',
  infoTitle:     '#94a3b8',
  infoVal:       '#1e1b4b',
  divider:       'rgba(99,102,241,0.10)',
  socialLbl:     '#94a3b8',
  socBg:         'rgba(99,102,241,0.06)',
  socBorder:     'rgba(99,102,241,0.14)',
  socText:       '#64748b',
  socHoverBg:    'rgba(99,102,241,0.12)',
  socHoverBorder:'rgba(99,102,241,0.30)',
  socHoverText:  '#4338ca',
  availBg:       'linear-gradient(135deg,#ede9fe,#ddd6fe)',
  availBorder:   'rgba(99,102,241,0.25)',
  availTitle:    '#1e1b4b',
  availSub:      '#64748b',
  label:         '#64748b',
  inputBg:       'rgba(99,102,241,0.04)',
  inputBorder:   'rgba(99,102,241,0.15)',
  inputFocusBorder:'rgba(99,102,241,0.40)',
  inputFocusBg:  'rgba(99,102,241,0.07)',
  inputText:     '#1e1b4b',
  inputPlaceholder:'#94a3b8',
  okBg:          'rgba(34,197,94,0.08)',
  okBorder:      'rgba(34,197,94,0.20)',
  okText:        '#15803d',
  errBg:         'rgba(239,68,68,0.08)',
  errBorder:     'rgba(239,68,68,0.20)',
  errText:       '#b91c1c',
};

/* ── Field ── */
const Field = ({ label, children }) => (
  <div style={{ marginBottom: 16 }}>
    <label style={{ display:'block', fontSize:12, fontWeight:500, letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:7 }}>
      {label}
    </label>
    {children}
  </div>
);

/* ── Main ── */
const Contact = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;

  const [form, setForm]             = useState({ name:'', email:'', subject:'', message:'' });
  const [isSubmitting, setSubmitting] = useState(false);
  const [result, setResult]           = useState(null); // { ok: bool, text: string }

  const inputStyle = {
    width:'100%', padding:'12px 14px', borderRadius:12,
    border:`1px solid ${t.inputBorder}`,
    background: t.inputBg,
    color: t.inputText,
    fontSize:14, fontFamily:"'DM Sans',sans-serif",
    outline:'none', transition:'border-color 0.2s, background 0.2s',
    resize:'none',
  };

  const handleChange = (e) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleFocus = (e) => {
    e.target.style.borderColor = t.inputFocusBorder;
    e.target.style.background  = t.inputFocusBg;
  };
  const handleBlur = (e) => {
    e.target.style.borderColor = t.inputBorder;
    e.target.style.background  = t.inputBg;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setResult({ ok: false, text: 'Please fill in all required fields.' });
      return;
    }
    setSubmitting(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      setResult({ ok: true, text: "✓ Message sent! I'll get back to you within 24 hours." });
      setForm({ name:'', email:'', subject:'', message:'' });
    } catch {
      setResult({ ok: false, text: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  const sharedPanel = {
    borderRadius: 24, padding: 32,
    background: t.panelBg,
    border: `1px solid ${t.panelBorder}`,
    position: 'relative', overflow: 'hidden',
    transition: 'background 0.3s, border-color 0.3s',
    boxShadow: isDarkMode ? 'none' : '0 2px 14px rgba(99,102,241,0.07)',
  };

  return (
    <section
      id="contact"
      style={{ background:t.sectionBg, padding:'80px 32px', fontFamily:"'DM Sans',sans-serif", overflow:'hidden', position:'relative', transition:'background 0.35s' }}
    >
      {/* Grid bg */}
      <div style={{ position:'absolute', inset:0, backgroundImage:`linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`, backgroundSize:'60px 60px', maskImage:'radial-gradient(ellipse 100% 80% at 50% 50%,black 30%,transparent 100%)' }} />
      <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(110px)', pointerEvents:'none', width:380, height:380, top:-80, left:-60, background:t.glow1, transition:'background 0.35s' }} />
      <div style={{ position:'absolute', borderRadius:'50%', filter:'blur(110px)', pointerEvents:'none', width:320, height:320, bottom:-60, right:-40, background:t.glow2, transition:'background 0.35s' }} />

      {/* Header */}
      <div style={{ textAlign:'center', marginBottom:56, position:'relative', zIndex:1 }}>
        <span style={{ display:'inline-flex', alignItems:'center', gap:8, fontSize:12, fontWeight:500, padding:'5px 14px', borderRadius:100, background:t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText, letterSpacing:'0.08em', textTransform:'uppercase', marginBottom:16, transition:'all 0.3s' }}>
          Contact
        </span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:'clamp(32px,4.5vw,50px)', fontWeight:800, color:t.heading, letterSpacing:'-.02em', lineHeight:1.1, transition:'color 0.35s' }}>
          Get In{' '}
          <span style={{ background:'linear-gradient(135deg,#818cf8,#c084fc,#f472b6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
            Touch
          </span>
        </h2>
        <p style={{ fontSize:15, color:t.sub, marginTop:10, transition:'color 0.3s' }}>
          Have a project in mind? Let's discuss how we can work together.
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:28, maxWidth:1000, margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* ── LEFT: Info ── */}
        <div>
          <div style={sharedPanel}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.03),transparent)', pointerEvents:'none', borderRadius:24 }} />
            <div style={{ fontFamily:"'Syne',sans-serif", fontSize:17, fontWeight:700, color:t.panelTitle, marginBottom:20, transition:'color 0.3s' }}>
              Contact Information
            </div>

            {/* Info rows */}
            <div style={{ display:'flex', flexDirection:'column', gap:10, marginBottom:24 }}>
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.link}
                  style={{
                    display:'flex', alignItems:'center', gap:14, padding:14,
                    borderRadius:16, background:t.rowBg, border:`1px solid ${t.rowBorder}`,
                    textDecoration:'none', transition:'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background=t.rowHoverBg; e.currentTarget.style.borderColor=t.rowHoverBorder; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background=t.rowBg; e.currentTarget.style.borderColor=t.rowBorder; }}
                >
                  <div style={{ width:40, height:40, borderRadius:12, flexShrink:0, background:t.iconBg, border:`1px solid ${t.iconBorder}`, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, transition:'all 0.3s' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize:11, color:t.infoTitle, letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:2, transition:'color 0.3s' }}>
                      {info.title}
                    </div>
                    <div style={{ fontSize:13, color:t.infoVal, fontWeight:500, transition:'color 0.3s' }}>
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Divider */}
            <div style={{ height:1, background:t.divider, margin:'20px 0', transition:'background 0.3s' }} />

            {/* Socials */}
            <div style={{ fontSize:12, color:t.socialLbl, letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:12, transition:'color 0.3s' }}>
              Connect with me
            </div>
            <div style={{ display:'flex', gap:8 }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  title={s.name}
                  style={{
                    width:36, height:36, borderRadius:10,
                    background:t.socBg, border:`1px solid ${t.socBorder}`,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    fontSize:13, fontWeight:600, color:t.socText,
                    textDecoration:'none', transition:'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background=t.socHoverBg; e.currentTarget.style.borderColor=t.socHoverBorder; e.currentTarget.style.color=t.socHoverText; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background=t.socBg; e.currentTarget.style.borderColor=t.socBorder; e.currentTarget.style.color=t.socText; }}
                >
                  {s.label}
                </a>
              ))}
            </div>

            {/* Availability */}
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop:16, borderRadius:16, padding:'14px 18px', background:t.availBg, border:`1px solid ${t.availBorder}`, transition:'all 0.3s' }}>
              <div>
                <div style={{ fontSize:13, fontWeight:600, color:t.availTitle, marginBottom:2, transition:'color 0.3s' }}>
                  Available for opportunities
                </div>
                <div style={{ fontSize:12, color:t.availSub, transition:'color 0.3s' }}>
                  Response within 24 hours
                </div>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:6, fontSize:12, color:'#4ade80', fontWeight:500 }}>
                <span style={{ width:7, height:7, borderRadius:'50%', background:'#22c55e', display:'inline-block', animation:'availDot 2s ease-in-out infinite' }} />
                Online
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Form ── */}
        <div style={sharedPanel}>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(255,255,255,0.03),transparent)', pointerEvents:'none', borderRadius:24 }} />
          <div style={{ fontFamily:"'Syne',sans-serif", fontSize:17, fontWeight:700, color:t.panelTitle, marginBottom:20, transition:'color 0.3s' }}>
            Send a Message
          </div>

          <form onSubmit={handleSubmit} noValidate>
            <Field label="Name *">
              <input
                name="name" type="text" placeholder="Your name"
                value={form.name} onChange={handleChange}
                onFocus={handleFocus} onBlur={handleBlur}
                style={inputStyle}
              />
            </Field>
            <Field label="Email *">
              <input
                name="email" type="email" placeholder="your.email@example.com"
                value={form.email} onChange={handleChange}
                onFocus={handleFocus} onBlur={handleBlur}
                style={inputStyle}
              />
            </Field>
            <Field label="Subject">
              <input
                name="subject" type="text" placeholder="Project enquiry..."
                value={form.subject} onChange={handleChange}
                onFocus={handleFocus} onBlur={handleBlur}
                style={inputStyle}
              />
            </Field>
            <Field label="Message *">
              <textarea
                name="message" rows={5} placeholder="Tell me about your project..."
                value={form.message} onChange={handleChange}
                onFocus={handleFocus} onBlur={handleBlur}
                style={inputStyle}
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width:'100%', padding:13, borderRadius:12,
                background:'linear-gradient(135deg,#6366f1,#8b5cf6)',
                color:'#fff', border:'none', fontSize:14, fontWeight:500,
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                fontFamily:"'DM Sans',sans-serif",
                boxShadow:'0 0 24px rgba(99,102,241,0.30)',
                opacity: isSubmitting ? 0.6 : 1,
                transition:'transform 0.2s, box-shadow 0.2s, opacity 0.2s',
                marginTop:4,
              }}
              onMouseEnter={(e) => { if (!isSubmitting) { e.currentTarget.style.transform='translateY(-2px)'; e.currentTarget.style.boxShadow='0 0 36px rgba(99,102,241,0.50)'; } }}
              onMouseLeave={(e) => { e.currentTarget.style.transform=''; e.currentTarget.style.boxShadow='0 0 24px rgba(99,102,241,0.30)'; }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message →'}
            </button>

            {result && (
              <div style={{
                marginTop:12, padding:'12px 14px', borderRadius:12, fontSize:13,
                background: result.ok ? t.okBg  : t.errBg,
                border:    `1px solid ${result.ok ? t.okBorder : t.errBorder}`,
                color:      result.ok ? t.okText : t.errText,
                transition:'all 0.3s',
              }}>
                {result.text}
              </div>
            )}
          </form>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes availDot { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,0.4)} 50%{opacity:.6;box-shadow:0 0 0 4px rgba(34,197,94,0)} }
        input::placeholder, textarea::placeholder { color: #475569; }
        @media(max-width:680px){ .ct-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </section>
  );
};

export default Contact;