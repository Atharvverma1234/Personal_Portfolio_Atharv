import React from 'react';

const experiences = [
  {
    id: 1,
    year: "Jan 2026 - Mar 2026",
    company: "Social Winter of Code",
    role: "Open Source Developer",
    location: "Remote, Bangalore, India",
    description: "Contributed to Proofolio, TourEase, Nutrivigil, ShareBite, and GroqTales by developing features and improving UI/UX.",
    achievements: [
      "Recognized as Winner & Top Contributor in SWOC for impactful open-source contributions.",
      "Implemented testimonial sections, multilingual support, and responsive components across projects.",
      "Enhanced UI/UX for better user engagement and accessibility.",
      "Collaborated with maintainers through pull requests, code reviews, and feedback-driven development.",
    ],
    skills: ["React", "Node.js", "TypeScript", "MySQL", "JSON"],
    icon: "🔍",
    current: true,
  },
  {
    id: 2,
    year: "Nov 2025 - Dec 2025",
    company: "CODEXINTERN",
    role: "Frontend Engineer",
    location: "Remote, Bangalore, India",
    description: "Developed user interfaces for enterprise applications and improved performance.",
    achievements: [
      "Built React components for 5M+ active users",
      "Optimized bundle size by 45%",
      "Reduced bug reports by 70%",
      "Implemented comprehensive testing",
    ],
    skills: ["TypeScript", "React", "Node.js", "CSS", "HTML"],
    icon: "🪟",
    current: false,
  },
  {
    id: 3,
    year: "Feb 2025 - Mar 2025",
    company: "Zidio Development",
    role: "Java Full Stack Intern",
    location: "Remote, Bangalore, India",
    description: "Completed a Full-Stack Developer Internship Task at Algo Root, delivering a Task Management Web Application within a 2-day deadline.",
    achievements: [
      "Built a RESTful backend using Node.js and Express with complete CRUD functionality for task management.",
      "Developed a responsive frontend interface for creating, updating, tracking, and completing tasks.",
      "Implemented structured APIs, error handling, and maintainable code following best development practices.",
      "Documented API endpoints, setup procedures, and testing workflows for seamless project deployment.",
    ],
    skills: ["Express.js", "Node.js", "MongoDB", "REST API", "Git"],
    icon: "📦",
    current: false,
  },
  {
    id: 4,
    year: "Dec 2024 - Feb 2025",
    company: "Karagpur Open Source Society",
    role: "Open Source Developer",
    location: "Remote, Bangalore, India",
    description: "Contributed as an Open Source Developer in Kharagpur Winter of Code (KWOC), collaborating on real-world open-source projects.",
    achievements: [
      "Made impactful contributions to Travel_Website, CalcDiverse, and Beautiify through feature development and UI enhancements.",
      "Resolved issues, optimized code quality, and incorporated maintainer feedback through pull request reviews.",
      "Successfully delivered multiple merged contributions while following industry-standard Git workflows and open-source practices",
      "Collaborated with maintainers and fellow contributors to enhance project functionality and user experience.",
    ],
    skills: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind"],
    icon: "💼",
    current: false,
  },
];

const stats = [
  { value: "2+", label: "Years experience" },
  { value: "15+", label: "Projects completed" },
  { value: "100%", label: "Client satisfaction" },
  { value: "100+", label: "Users impacted" },
];

const Card = ({ exp, flip }) => (
  <div
    className="group relative rounded-3xl p-8 cursor-pointer transition-all duration-300"
    style={{
      background: "rgba(15,23,42,0.9)",
      backdropFilter: "blur(20px)",
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
  style={{
    background: "transparent",
    fontFamily: "'DM Sans', sans-serif"
  }}
>
    

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
            style={{
  background: "rgba(15,23,42,0.45)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(99,102,241,0.15)"
}}
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