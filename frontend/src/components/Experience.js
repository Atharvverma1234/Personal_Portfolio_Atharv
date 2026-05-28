import React from 'react';

const experiences = [
  {
    id: 1,
    year: "2022 - Present",
    company: "Google",
    role: "Senior Full Stack Developer",
    location: "Mountain View, CA",
    description: "Leading development of scalable web applications and mentoring junior developers.",
    achievements: [
      "Led microservices architecture serving 10M+ users",
      "Reduced page load time by 60% through optimization",
      "Mentored 5 junior developers",
      "Improved deployment pipeline efficiency",
    ],
    skills: ["React", "Node.js", "Kubernetes", "GraphQL", "TypeScript"],
    icon: "🔍",
    current: true,
  },
  {
    id: 2,
    year: "2020 - 2022",
    company: "Microsoft",
    role: "Frontend Engineer",
    location: "Redmond, WA",
    description: "Developed user interfaces for enterprise applications and improved performance.",
    achievements: [
      "Built React components for 5M+ active users",
      "Optimized bundle size by 45%",
      "Reduced bug reports by 70%",
      "Implemented comprehensive testing",
    ],
    skills: ["TypeScript", "React", "Azure", "Jest", "Webpack"],
    icon: "🪟",
    current: false,
  },
  {
    id: 3,
    year: "2018 - 2020",
    company: "Amazon",
    role: "Software Engineer",
    location: "Seattle, WA",
    description: "Built backend systems and implemented real-time features for e-commerce.",
    achievements: [
      "Handled 1M+ daily requests",
      "Reduced server costs by 30%",
      "Built real-time notification system",
      "Improved system reliability",
    ],
    skills: ["AWS", "Node.js", "MongoDB", "Docker", "Redis"],
    icon: "📦",
    current: false,
  },
  {
    id: 4,
    year: "2017 - Present",
    company: "Freelance",
    role: "Full Stack Developer",
    location: "Remote",
    description: "Working with various clients to build custom web solutions and applications.",
    achievements: [
      "30+ projects completed",
      "100% client satisfaction",
      "International clients",
      "Diverse industry experience",
    ],
    skills: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
    icon: "💼",
    current: false,
  },
];

const stats = [
  { value: "5+", label: "Years experience" },
  { value: "50+", label: "Projects completed" },
  { value: "100%", label: "Client satisfaction" },
  { value: "10M+", label: "Users impacted" },
];

const Card = ({ exp, flip }) => (
  <div
    className="group relative rounded-3xl p-8 cursor-pointer transition-all duration-300"
    style={{
      background: "rgba(15,23,42,0.9)",
      border: "1px solid rgba(99,102,241,0.15)",
      transformStyle: "preserve-3d",
      perspective: 800,
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = flip
        ? "perspective(800px) rotateY(8deg) rotateX(3deg) translateZ(12px) scale(1.02)"
        : "perspective(800px) rotateY(-8deg) rotateX(3deg) translateZ(12px) scale(1.02)";
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.4)";
      e.currentTarget.style.boxShadow = `${flip ? "-" : ""}8px 16px 40px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.08)`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "";
      e.currentTarget.style.borderColor = "rgba(99,102,241,0.15)";
      e.currentTarget.style.boxShadow = "";
    }}
  >
    {/* 3D depth edge */}
    <div
      className="absolute top-4 bottom-4 w-3 rounded-r-lg pointer-events-none"
      style={{
        [flip ? "left" : "right"]: -12,
        background: flip
          ? "linear-gradient(to left, rgba(99,102,241,0.12), transparent)"
          : "linear-gradient(to right, rgba(99,102,241,0.12), transparent)",
        borderRadius: flip ? "8px 0 0 8px" : "0 8px 8px 0",
      }}
    />

    <span
      className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full mb-4 tracking-wide"
      style={
        exp.current
          ? { background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }
          : { background: "rgba(99,102,241,0.1)", color: "#a5b4fc", border: "1px solid rgba(99,102,241,0.2)" }
      }
    >
      {exp.year}
    </span>

    <div className="font-bold text-white text-lg mb-1.5" style={{ fontFamily: "'Syne', sans-serif" }}>
      {exp.role}
    </div>
    <div className="text-sm mb-1.5">
      <span style={{ color: "#818cf8" }}>{exp.company}</span>
      <span style={{ color: "#334155", margin: "0 6px" }}>·</span>
      <span style={{ color: "#475569" }}>{exp.location}</span>
    </div>

    <p className="text-sm leading-relaxed mb-4" style={{ color: "#94a3b8" }}>
      {exp.description}
    </p>

    <p className="text-xs font-medium tracking-widest uppercase mb-2.5" style={{ color: "#64748b" }}>Key achievements</p>
    <ul className="mb-5 space-y-2">
      {exp.achievements.map((a, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "#94a3b8" }}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0 mt-2" />
          {a}
        </li>
      ))}
    </ul>

    <p className="text-xs font-medium tracking-widest uppercase mb-2.5" style={{ color: "#64748b" }}>Technologies</p>
    <div className="flex flex-wrap gap-2">
      {exp.skills.map((s) => (
        <span
          key={s}
          className="text-xs px-3 py-1 rounded-full"
          style={{
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            color: "#a5b4fc",
          }}
        >
          {s}
        </span>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <section
    id="experience"
    className="py-20 overflow-hidden relative"
    style={{ background: "#060912", fontFamily: "'DM Sans', sans-serif" }}
  >
    {/* Grid bg */}
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(rgba(99,102,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "radial-gradient(ellipse 100% 80% at 50% 50%, black 30%, transparent 100%)",
      }}
    />

    <div className="container mx-auto px-6 relative z-10">
      {/* Header */}
      <div className="text-center mb-16">
        <span
          className="inline-flex items-center gap-2 text-xs font-medium px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase"
          style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}
        >
          Experience
        </span>
        <h2
          className="font-extrabold leading-tight tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(36px,5vw,54px)", color: "#fff" }}
        >
          Career{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#818cf8,#c084fc,#f472b6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Journey
          </span>
        </h2>
        <p className="mt-3 text-sm" style={{ color: "#64748b" }}>
          Professional timeline and key accomplishments
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-20">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
            style={{ background: "rgba(15,23,42,0.8)", border: "1px solid rgba(99,102,241,0.15)" }}
          >
            <div
              className="font-extrabold text-3xl"
              style={{
                fontFamily: "'Syne', sans-serif",
                background: "linear-gradient(135deg,#818cf8,#c084fc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {s.value}
            </div>
            <div className="text-xs mt-1 tracking-wide" style={{ color: "#64748b" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto relative">
        {/* Spine */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block rounded-full"
          style={{ background: "linear-gradient(to bottom, #6366f1, #8b5cf6, #d946ef)" }}
        />

        {experiences.map((exp, i) => {
          const isLeft = i % 2 !== 0;
          return (
            <div
              key={exp.id}
              className="relative grid md:grid-cols-[1fr_60px_1fr] items-start mb-12 last:mb-0"
            >
              {/* Left slot */}
              <div className={`md:pr-7 ${isLeft ? "" : "opacity-0 pointer-events-none hidden md:block"}`}>
                {isLeft && <Card exp={exp} flip={true} />}
              </div>

              {/* Node */}
              <div className="hidden md:flex justify-center pt-5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-lg z-10 relative transition-transform duration-300 hover:scale-110"
                  style={{
                    background: "#0f172a",
                    border: "2px solid rgba(99,102,241,0.4)",
                    boxShadow: "0 0 0 6px rgba(99,102,241,0.06)",
                  }}
                >
                  {exp.icon}
                </div>
              </div>

              {/* Right slot */}
              <div className={`md:pl-7 ${isLeft ? "opacity-0 pointer-events-none hidden md:block" : ""}`}>
                {!isLeft && <Card exp={exp} flip={false} />}
              </div>

              {/* Mobile — always show */}
              <div className="md:hidden col-span-3">
                <Card exp={exp} flip={false} />
              </div>
            </div>
          );
        })}
      </div>
    </div>

    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
    `}</style>
  </section>
);

export default Experience;