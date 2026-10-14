
import { Link } from "react-router-dom";

const skills = [
  {
    title: "MERN Stack",
    items: "MongoDB, Express.js, React.js, Node.js",
  },
  {
    title: "Programming & Web",
    items: "JavaScript, HTML5, CSS3",
  },
  {
    title: "APIs & Tools",
    items: "REST APIs, Git, GitHub",
  },
  {
    title: "Other",
    items: "DSA, Cloud Computing, Networking",
  },
];

const education = [
  {
    institution: "Khalsa College of Engineering and Technology",
    location: "Amritsar, Punjab",
    course: "B.Tech in Computer Science and Engineering",
    year: "2023 – 2027",
    result: "SGPA: 7.21",
  },
  {
    institution: "Anugrah Memorial College",
    location: "Gaya, Bihar",
    course: "Class XII — Bihar School Examination Board",
    year: "2023",
    result: "63%",
  },
  {
    institution: "Subhash International School",
    location: "Gaya, Bihar",
    course: "Class X — Central Board of Secondary Education",
    year: "2021",
    result: "84%",
  },
];

const projects = [
  "Built a full-stack rental platform with authentication, profile management, product listings, categories, and search.",
  "Developed a rental request workflow with owner-side accept and reject functionality.",
  "Integrated REST APIs with MongoDB for user, product, and rental data management.",
];

const coursework = [
  "Data Structures and Algorithms",
  "Database Management Systems",
  "Operating Systems",
  "Computer Networks",
];

const projectTechnologies = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
];

function SectionLabel({ number, label }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="text-sm font-black">{number}</span>
      <span className="h-px w-8 bg-black/40" />
      <span className="ml-auto rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider sm:text-xs">
        {label}
      </span>
    </div>
  );
}

function ResumeCard({
  number,
  label,
  title,
  children,
  className = "",
}) {
  return (
    <section
      className={`min-w-0 rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8 lg:p-9 ${className}`}
    >
      <SectionLabel number={number} label={label} />

      <h2 className="mb-5 text-3xl font-extrabold leading-tight tracking-[-0.045em] sm:mb-6 sm:text-4xl">
        {title}
      </h2>

      {children}
    </section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-base leading-7 text-black/75 sm:leading-8"
        >
          <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-[#4035ff]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Resume() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-24">
      {/* HERO */}
      <section className="mb-12 grid min-w-0 grid-cols-1 items-center gap-8 sm:mb-16 md:grid-cols-[1.05fr_0.95fr] md:gap-10 lg:gap-14">
        {/* LEFT: INTRODUCTION */}
        <div className="min-w-0">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.22em] text-neutral-500 sm:mb-8 sm:text-sm sm:tracking-[0.25em]">
            My Resume
          </p>

          <h1 className="text-[clamp(3.1rem,11vw,5.5rem)] font-black leading-[0.96] tracking-[-0.065em] sm:text-[clamp(4rem,8vw,6rem)]">
            A quick look
            <br />
            at my journey
            <span className="text-[#4035ff]">.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-black/70 sm:mt-8 sm:text-xl sm:leading-relaxed">
            Explore my education, technical skills, projects,
            certifications, and experience in full-stack web
            development.
          </p>

          <p className="mt-4 text-sm font-medium text-black/60 sm:text-base">
            Gaya, Bihar, India · Full Stack Developer
          </p>

          <a
            href="/Aditya-Kumar-Karan-Resume.pdf"
            download="Aditya-Kumar-Karan-Resume.pdf"
            className="mt-7 inline-flex min-h-14 w-fit shrink-0 items-center justify-center gap-3 rounded-full bg-[#4035ff] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#4035ff]/15 transition duration-300 hover:-translate-y-1 hover:bg-black sm:mt-8 sm:px-7 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <path d="m7 10 5 5 5-5" />
              <path d="M12 15V3" />
            </svg>
            Download Resume (PDF)
          </a>
        </div>

        {/* RIGHT: RESUME HIGHLIGHTS — DESKTOP ONLY */}
        <aside
          className="hidden min-w-0 rounded-[2rem] border border-black/5 bg-[#dcd9ff] p-6 shadow-sm transition duration-300 hover:-translate-y-1 md:block lg:p-9"
          aria-label="Resume highlights"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-black/60 sm:text-sm">
              At a glance
            </p>

            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d8f54a] text-2xl">
              ✳
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-0.05em] lg:text-5xl">
            Learning.
            <br />
            Building.
            <br />
            <span className="text-[#4035ff]">Growing.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-black/60 sm:text-base">
            A snapshot of my academic journey and full-stack
            development experience.
          </p>

          <div className="mt-7 space-y-3">
            {[
              ["2023–2027", "B.Tech · Computer Science"],
              ["MERN", "Full-stack development"],
              ["Rentify", "Featured full-stack project"],
              ["2025", "MERN training & IoT workshop"],
            ].map(([tag, detail]) => (
              <div
                key={tag}
                className="flex items-center gap-3 rounded-2xl bg-white/75 p-3.5"
              >
                <span className="min-w-[88px] rounded-full bg-[#d8f54a] px-3 py-2 text-center text-xs font-black">
                  {tag}
                </span>

                <span className="text-sm font-semibold leading-5 text-black/75">
                  {detail}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-black/10 pt-5">
            <span className="text-xs font-bold uppercase tracking-wider text-black/50">
              Developer journey
            </span>

            <span className="text-sm font-black text-[#4035ff]">
              In progress ↗
            </span>
          </div>
        </aside>
      </section>

      {/* RESUME GRID */}
      <div className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2">
        {/* 01 — SUMMARY */}
        <ResumeCard
          number="01"
          label="About Me"
          title="Professional Summary"
          className="bg-[#ff9fc8]"
        >
          <p className="text-base leading-8 text-black/80">
            B.Tech Computer Science and Engineering student
            focused on MERN Stack Development, with hands-on
            experience building full-stack web applications
            using MongoDB, Express.js, React.js, and Node.js.
            Skilled in responsive user interfaces, REST APIs,
            database management, and frontend-backend
            integration. Familiar with Git, GitHub, and DevOps
            practices.
          </p>
        </ResumeCard>

        {/* 02 — TECHNICAL SKILLS */}
        <ResumeCard
          number="02"
          label="Skills"
          title="Technical Skills"
          className="bg-[#d8f54a]"
        >
          <div className="divide-y divide-black/10">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="grid gap-2 py-4 sm:grid-cols-[140px_1fr] sm:gap-4"
              >
                <h3 className="text-sm font-bold sm:text-base">
                  {skill.title}
                </h3>

                <p className="text-base leading-7 text-black/75">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </ResumeCard>

        {/* 03 — COURSEWORK */}
        <ResumeCard
          number="03"
          label="Academic"
          title="Relevant Courseworks"
          className="bg-[#dcd9ff]"
        >
          <div className="flex flex-wrap gap-2.5">
            {coursework.map((item) => (
              <span
                key={item}
                className="inline-flex min-h-10 items-center rounded-full bg-white/70 px-4 py-2.5 text-sm font-medium leading-5 transition duration-200 hover:bg-black hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </ResumeCard>

        {/* 04 — EDUCATION */}
        <ResumeCard
          number="04"
          label="Education"
          title="Education"
          className="border border-black/10 bg-white/50"
        >
          <div className="space-y-7">
            {education.map((item) => (
              <div
                key={item.institution}
                className="relative border-l-2 border-[#4035ff]/30 pl-5"
              >
                <span className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#4035ff] bg-[#eeede8]" />

                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:gap-3">
                  <h3 className="text-base font-bold leading-snug sm:text-lg">
                    {item.institution}
                  </h3>

                  <span className="shrink-0 text-sm text-black/60">
                    {item.year}
                  </span>
                </div>

                <p className="mt-2 text-sm text-black/65 sm:text-base">
                  {item.location}
                </p>

                <p className="mt-2 text-sm leading-6 sm:text-base">
                  {item.course}
                </p>

                <p className="mt-2 text-sm font-bold text-[#4035ff] sm:text-base">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </ResumeCard>

        {/* 05 — PROJECTS */}
        <ResumeCard
          number="05"
          label="Featured"
          title="Projects"
          className="border border-black/10 bg-white/60 md:row-span-2"
        >
          <h3 className="text-xl font-extrabold leading-snug sm:text-2xl">
            Rentify
            <span className="font-medium text-black/60">
              {" "}
              | MERN Stack Rental Platform
            </span>
          </h3>

          <div className="my-5 flex flex-wrap gap-2">
            {projectTechnologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex min-h-9 items-center rounded-full bg-[#eeede8] px-3.5 py-2 text-xs font-semibold sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <BulletList items={projects} />

          <a
            href="https://github.com/aadiikarn/Rentify"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#17171d] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#4035ff]"
          >
            View on GitHub ↗
          </a>
        </ResumeCard>

        {/* 06 — CERTIFICATIONS */}
        <ResumeCard
          number="06"
          label="Certifications"
          title="Certifications & Training"
          className="bg-[#ffb5d4]"
        >
          <div className="space-y-7">
            <div>
              <h3 className="text-lg font-bold leading-snug">
                MERN Stack Development Training — INTERN Nexus
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-black/60 sm:text-sm">
                June – August 2025
              </p>

              <p className="mt-3 text-base leading-7 text-black/75">
                Completed a 45-day MERN Stack development
                training program, gaining practical experience
                in React.js, Node.js, Express.js, MongoDB,
                REST APIs, and full-stack web development.
              </p>
            </div>

            <div className="border-t border-black/15 pt-6">
              <h3 className="text-lg font-bold leading-snug">
                Advanced IoT Systems Workshop — IIT Ropar AWaDH CPS Lab
              </h3>

              <p className="mt-2 text-xs font-bold uppercase tracking-wider text-black/60 sm:text-sm">
                March 2025
              </p>

              <p className="mt-3 text-base leading-7 text-black/75">
                Successfully completed a two-day hands-on
                workshop on Advanced IoT Systems organized
                by IIT Ropar TIF AWaDH CPS Lab at Khalsa
                College of Engineering and Technology, Amritsar.
              </p>
            </div>
          </div>
        </ResumeCard>

        {/* 07 — EXPERIENCE */}
        <ResumeCard
          number="07"
          label="Experience"
          title="Internships / Experience"
          className="bg-[#dcd9ff]"
        >
          <h3 className="text-lg font-bold sm:text-xl">
            MERN Stack Development Intern
          </h3>

          <p className="mt-2 text-base text-black/70">
            WeIntern Pvt. Ltd. · Ongoing
          </p>

          <div className="mt-6">
            <BulletList
              items={[
                "Working on practical web-development tasks using modern development technologies.",
                "Gaining hands-on experience in real-world software development workflows.",
              ]}
            />
          </div>
        </ResumeCard>
      </div>

      {/* BOTTOM NAVIGATION */}
      <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-black/10 pt-7 sm:mt-14 sm:flex-row sm:items-center">
        <Link
          to="/work"
          className="inline-flex min-h-12 items-center font-bold transition-colors hover:text-[#4035ff]"
        >
          ← Back to Work
        </Link>

        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#4035ff] sm:px-7"
        >
          Let's Connect ↗
        </Link>
      </div>
    </main>
  );
}
