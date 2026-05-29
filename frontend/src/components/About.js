import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const stats = [
  { value: "3+",   label: "Years experience"   },
  { value: "50+",  label: "Projects completed"  },
  { value: "100%", label: "Client satisfaction" },
  { value: "24/7", label: "Availability"        },
];

const skills = ["React", "Node.js", "TypeScript", "AWS", "GraphQL"];

/* ─── theme token maps ─────────────────────────────────────────── */
const dark = {
  sectionBg:     "#060912",
  gridLine:      "rgba(99,102,241,0.06)",
  glow1:         "rgba(99,102,241,0.12)",
  glow2:         "rgba(168,85,247,0.10)",
  glowRing:      "linear-gradient(135deg,#6366f1,#8b5cf6,#d946ef)",
  cardBg:        "linear-gradient(150deg,rgba(30,27,75,0.95) 0%,rgba(15,23,42,0.98) 60%,rgba(20,14,50,0.95) 100%)",
  cardBorder:    "rgba(99,102,241,0.22)",
  imgFrameBg:    "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(168,85,247,0.10))",
  imgFrameBorder:"rgba(99,102,241,0.18)",
  edgeRBg:       "linear-gradient(to right,rgba(30,27,75,0.9),rgba(15,23,42,0.6))",
  edgeBBg:       "linear-gradient(to bottom,rgba(30,27,75,0.9),rgba(15,23,42,0.4))",
  badgeBg:       "rgba(10,8,30,0.9)",
  badgeBorder:   "rgba(99,102,241,0.25)",
  badgeText:     "#e2e8f0",
  nameColor:     "#ffffff",
  roleColor:     "#a5b4fc",
  pillBg:        "rgba(99,102,241,0.07)",
  pillBorder:    "rgba(99,102,241,0.18)",
  pillText:      "#a5b4fc",
  tagBg:         "rgba(99,102,241,0.10)",
  tagBorder:     "rgba(99,102,241,0.22)",
  tagText:       "#a5b4fc",
  heading:       "#ffffff",
  body:          "#94a3b8",
  body2:         "#64748b",
  statBg:        "rgba(15,23,42,0.85)",
  statBorder:    "rgba(99,102,241,0.14)",
  statLabel:     "#64748b",
  btnOBorder:    "rgba(148,163,184,0.25)",
  btnOText:      "#94a3b8",
};

const light = {
  sectionBg:     "#f5f3ff",
  gridLine:      "rgba(99,102,241,0.05)",
  glow1:         "rgba(99,102,241,0.08)",
  glow2:         "rgba(168,85,247,0.07)",
  glowRing:      "linear-gradient(135deg,#6366f1,#8b5cf6,#d946ef)",
  cardBg:        "linear-gradient(150deg,#ede9fe 0%,#f5f3ff 60%,#faf5ff 100%)",
  cardBorder:    "rgba(99,102,241,0.28)",
  imgFrameBg:    "linear-gradient(135deg,rgba(99,102,241,0.10),rgba(168,85,247,0.07))",
  imgFrameBorder:"rgba(99,102,241,0.20)",
  edgeRBg:       "linear-gradient(to right,rgba(167,139,250,0.3),transparent)",
  edgeBBg:       "linear-gradient(to bottom,rgba(167,139,250,0.3),transparent)",
  badgeBg:       "#ffffff",
  badgeBorder:   "rgba(99,102,241,0.20)",
  badgeText:     "#3730a3",
  nameColor:     "#1e1b4b",
  roleColor:     "#7c3aed",
  pillBg:        "rgba(99,102,241,0.07)",
  pillBorder:    "rgba(99,102,241,0.18)",
  pillText:      "#4338ca",
  tagBg:         "rgba(99,102,241,0.07)",
  tagBorder:     "rgba(99,102,241,0.18)",
  tagText:       "#4338ca",
  heading:       "#1e1b4b",
  body:          "#475569",
  body2:         "#64748b",
  statBg:        "#ffffff",
  statBorder:    "rgba(99,102,241,0.15)",
  statLabel:     "#94a3b8",
  btnOBorder:    "rgba(100,116,139,0.35)",
  btnOText:      "#475569",
};

/* ─── Stat card with 3D tilt ───────────────────────────────────── */
const StatCard = ({ value, label, t }) => (
  <motion.div
    whileHover={{
      rotateX: 8, rotateY: -6,
      z: 8, scale: 1.04,
      borderColor: "rgba(99,102,241,0.40)",
      boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 0 24px rgba(99,102,241,0.10)",
    }}
    transition={{ type: "spring", stiffness: 180, damping: 18 }}
    style={{
      borderRadius: 18,
      padding: "18px 12px",
      textAlign: "center",
      background: t.statBg,
      border: `1px solid ${t.statBorder}`,
      transformStyle: "preserve-3d",
      cursor: "default",
      transition: "background 0.3s, border-color 0.3s",
    }}
  >
    <div style={{
      fontFamily: "'Syne', sans-serif",
      fontSize: 24, fontWeight: 800,
      background: "linear-gradient(135deg,#818cf8,#c084fc)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }}>
      {value}
    </div>
    <div style={{ fontSize: 11, color: t.statLabel, marginTop: 4, letterSpacing: "0.04em" }}>
      {label}
    </div>
  </motion.div>
);

/* ─── Floating badge ───────────────────────────────────────────── */
const FloatBadge = ({ style, delay = 0, children, t }) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{ repeat: Infinity, duration: 5, delay, ease: "easeInOut" }}
    style={{
      position: "absolute",
      borderRadius: 14,
      padding: "10px 14px",
      border: `1px solid ${t.badgeBorder}`,
      background: t.badgeBg,
      boxShadow: "0 16px 32px rgba(0,0,0,0.4)",
      display: "flex", alignItems: "center", gap: 8,
      fontSize: 13, fontWeight: 500, color: t.badgeText,
      whiteSpace: "nowrap",
      backdropFilter: "blur(8px)",
      transition: "background 0.3s, border-color 0.3s, color 0.3s",
      ...style,
    }}
  >
    {children}
  </motion.div>
);

/* ─── Main component ───────────────────────────────────────────── */
const About = () => {
  const { isDarkMode } = useTheme();
  const t = isDarkMode ? dark : light;
  const cardWrapRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = sceneRef.current;
    const card = cardWrapRef.current;
    if (!scene || !card) return;

    const onMove = (e) => {
      const r = scene.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      card.style.animation = "none";
      card.style.transform = `rotateY(${-12 + dx * 18}deg) rotateX(${6 - dy * 10}deg)`;
    };
    const onLeave = () => {
      card.style.animation = "";
      card.style.transform = "";
    };

    scene.addEventListener("mousemove", onMove);
    scene.addEventListener("mouseleave", onLeave);
    return () => {
      scene.removeEventListener("mousemove", onMove);
      scene.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="about"
      style={{
        background: t.sectionBg,
        fontFamily: "'DM Sans', sans-serif",
        padding: "72px 32px",
        overflow: "hidden",
        position: "relative",
        transition: "background 0.35s",
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: `linear-gradient(${t.gridLine} 1px,transparent 1px),linear-gradient(90deg,${t.gridLine} 1px,transparent 1px)`,
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%,black 30%,transparent 100%)",
      }} />

      {/* Ambient glows */}
      <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(100px)", pointerEvents:"none", width:420, height:420, top:-60, left:-60, background:t.glow1, transition:"background 0.35s" }} />
      <div style={{ position:"absolute", borderRadius:"50%", filter:"blur(100px)", pointerEvents:"none", width:380, height:380, bottom:-40, right:-40, background:t.glow2, transition:"background 0.35s" }} />

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:56, alignItems:"center", maxWidth:1040, margin:"0 auto", position:"relative", zIndex:1 }}>

        {/* ── LEFT: 3D card ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, rotateY: -20, y: 40 }}
          whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display:"flex", alignItems:"center", justifyContent:"center" }}
        >
          <div
            ref={sceneRef}
            style={{ perspective: 1000, width: 300, height: 400, position: "relative", cursor: "pointer" }}
          >
            {/* Glow ring */}
            <motion.div
              animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              style={{
                position: "absolute", inset: -12, borderRadius: 28,
                background: t.glowRing,
                filter: "blur(20px)",
              }}
            />

            {/* Card wrapper */}
            <div
              ref={cardWrapRef}
              style={{
                position: "absolute", inset: 0,
                transformStyle: "preserve-3d",
                animation: "aboutCardfloat 7s ease-in-out infinite",
                transition: "transform 0.12s ease-out",
              }}
            >
              {/* Main card face */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: 26, padding: 20,
                display: "flex", flexDirection: "column", gap: 14,
                background: t.cardBg,
                border: `1px solid ${t.cardBorder}`,
                boxShadow: isDarkMode
                  ? "0 0 0 1px rgba(255,255,255,0.04) inset,0 40px 80px rgba(0,0,0,0.7),0 0 60px rgba(99,102,241,0.10)"
                  : "0 0 0 1px rgba(255,255,255,0.8) inset,0 20px 60px rgba(99,102,241,0.15)",
                backfaceVisibility: "hidden",
                transition: "background 0.35s, border-color 0.35s",
              }}>
                {/* Image frame */}
                <div style={{
                  flex: 1, borderRadius: 18,
                  background: t.imgFrameBg,
                  border: `1px solid ${t.imgFrameBorder}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                  transition: "background 0.35s",
                }}>
                  <img src="/profile.jpeg" alt="Profile" style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:18 }} />
                </div>

                {/* Footer */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div>
                    <div style={{ fontFamily:"'Syne',sans-serif", fontSize:15, fontWeight:700, color:t.nameColor, transition:"color 0.35s" }}>
                      Gypsy Danger
                    </div>
                    <div style={{ fontSize:12, color:t.roleColor, letterSpacing:"0.06em", textTransform:"uppercase", transition:"color 0.35s" }}>
                      Full Stack Dev
                    </div>
                  </div>
                  <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", boxShadow:"0 0 8px rgba(34,197,94,0.6)" }}
                    />
                    <span style={{ fontSize:12, color:"#4ade80" }}>Available</span>
                  </div>
                </div>

                {/* Skill pills */}
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {skills.map((s) => (
                    <span key={s} style={{
                      fontSize:12, padding:"4px 12px", borderRadius:100,
                      background: t.pillBg,
                      border: `1px solid ${t.pillBorder}`,
                      color: t.pillText,
                      transition: "all 0.35s",
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* 3D edges */}
                <div style={{ position:"absolute", right:-16, top:20, bottom:20, width:16, borderRadius:"0 10px 10px 0", background:t.edgeRBg, borderRight:`1px solid ${isDarkMode?"rgba(99,102,241,0.1)":"rgba(99,102,241,0.12)"}`, transition:"background 0.35s" }} />
                <div style={{ position:"absolute", bottom:-16, left:20, right:20, height:16, borderRadius:"0 0 10px 10px", background:t.edgeBBg, borderBottom:`1px solid ${isDarkMode?"rgba(99,102,241,0.1)":"rgba(99,102,241,0.12)"}`, transition:"background 0.35s" }} />
              </div>

              {/* Floating badges */}
              <FloatBadge t={t} delay={0} style={{ top:-24, right:-40 }}>
                <div>
                  <div style={{ fontFamily:"'Syne',sans-serif", fontSize:20, fontWeight:800, background:"linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", lineHeight:1 }}>3+</div>
                  <div style={{ fontSize:11, color:"#94a3b8", marginTop:1 }}>Years Exp</div>
                </div>
              </FloatBadge>

              <FloatBadge t={t} delay={1.2} style={{ bottom:30, left:-52 }}>
                <span style={{ width:28, height:28, borderRadius:8, background:"rgba(99,102,241,0.15)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>⚛️</span>
                <span>React Dev</span>
              </FloatBadge>

              <FloatBadge t={t} delay={0.6} style={{ top:"44%", right:-60 }}>
                <span style={{ width:28, height:28, borderRadius:8, background:"rgba(34,197,94,0.12)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>💼</span>
                <span>Open to hire</span>
              </FloatBadge>

            </div>
          </div>
        </motion.div>

        {/* ── RIGHT: Bio ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ display:"flex", flexDirection:"column", gap:20 }}
        >
          <span style={{
            display:"inline-flex", alignItems:"center", gap:8,
            fontSize:12, fontWeight:500, padding:"5px 14px",
            borderRadius:100, width:"fit-content",
            background: t.tagBg, border:`1px solid ${t.tagBorder}`, color:t.tagText,
            letterSpacing:"0.07em", textTransform:"uppercase",
            transition:"all 0.35s",
          }}>
            About me
          </span>

          <h2 style={{
            fontFamily:"'Syne',sans-serif",
            fontSize:"clamp(34px,4.5vw,52px)",
            fontWeight:800, color:t.heading,
            lineHeight:1.05, letterSpacing:"-0.02em",
            transition:"color 0.35s",
          }}>
            About{" "}
            <span style={{ background:"linear-gradient(135deg,#818cf8,#c084fc,#f472b6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
              Me
            </span>
          </h2>

          <p style={{ fontSize:15, color:t.body, lineHeight:1.75, maxWidth:440, transition:"color 0.35s" }}>
            I'm a passionate Full Stack Developer focused on building immersive digital experiences with modern technologies. I love crafting visually stunning interfaces combined with scalable backend systems.
          </p>

          <p style={{ fontSize:14, color:t.body2, lineHeight:1.75, maxWidth:440, transition:"color 0.35s" }}>
            From frontend animations to backend architecture, I enjoy transforming complex ideas into elegant products that users genuinely enjoy interacting with.
          </p>

          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:10 }}>
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} t={t} />
            ))}
          </div>

          <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
                color:"#fff", border:"none",
                padding:"12px 26px", borderRadius:100,
                fontSize:14, fontWeight:500, cursor:"pointer",
                fontFamily:"'DM Sans',sans-serif",
                boxShadow:"0 0 24px rgba(99,102,241,0.35)",
              }}
            >
              Download CV
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background:"transparent",
                color:t.btnOText,
                border:`1px solid ${t.btnOBorder}`,
                padding:"12px 26px", borderRadius:100,
                fontSize:14, fontWeight:500, cursor:"pointer",
                fontFamily:"'DM Sans',sans-serif",
                transition:"all 0.2s",
              }}
            >
              View Skills
            </motion.button>
          </div>
        </motion.div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        @keyframes aboutCardfloat {
          0%,100% { transform: rotateY(-12deg) rotateX(6deg) translateY(0); }
          50%      { transform: rotateY(-7deg)  rotateX(3deg) translateY(-14px); }
        }
      `}</style>
    </section>
  );
};

export default About;