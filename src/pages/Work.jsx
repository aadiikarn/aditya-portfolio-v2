import { Link } from "react-router-dom";

const projects = [
  {
    name: "Nexora",
    category: "Business Website",
    description:
      "A technology-focused landing page featuring digital services, company benefits, a step-by-step process, contact form validation, and Gmail integration.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    color: "bg-[#4035ff] text-white",
    layout: "md:col-span-2",
    symbol: "✳",
    liveUrl: "https://nexorawebog.vercel.app/",
    githubUrl:
      "https://github.com/aadiikarn/nexora-business-landing-page",
  },
  {
    name: "CodeFlow",
    category: "CSS Showcase",
    description:
      "An interactive frontend showcase demonstrating Flexbox, CSS Grid, responsive layouts, animations, transitions, and dark/light themes.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    color: "bg-[#d8f54a] text-[#17171d]",
    layout: "",
    symbol: "</>",
    liveUrl: "https://codeflowconnect.vercel.app/",
    githubUrl: "https://github.com/aadiikarn/codeflow-css-challenge",
  },
  {
    name: "Authora",
    category: "Authentication System",
    description:
      "A full-stack authentication system featuring registration, login validation, password hashing, JWT-protected routes, a user dashboard, and logout.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    color: "bg-[#ff9fc8] text-[#17171d]",
    layout: "",
    symbol: "Aa",
    liveUrl: "https://authoraweb.vercel.app/login",
    githubUrl: "https://github.com/aadiikarn/AUTHORA",
  },
  {
    name: "Aarvika",
    category: "Employee Management",
    description:
      "An employee management dashboard to add, view, edit, search, sort, and delete employee records with validation and database storage.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    color: "bg-[#c8c4ff] text-[#17171d]",
    layout: "",
    symbol: "✳",
    liveUrl: "https://aarvikaweb.vercel.app/",
    githubUrl: "https://github.com/aadiikarn/AARVIKA",
  },
  {
    name: "Aurevia",
    category: "Digital Studio Website",
    description:
      "A responsive four-page company website featuring Home, About, Services, and Contact pages, mobile navigation, and a contact form interface.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    color: "bg-[#e2e0d8] text-[#17171d]",
    layout: "",
    symbol: "✦",
    liveUrl: "https://aureviaweb.vercel.app/",
    githubUrl: "https://github.com/aadiikarn/AUREVIA",
  },
  {
    name: "Rentify",
    category: "Rental Marketplace",
    description:
      "A rental marketplace concept connecting product owners and renters through listings, rental requests, rental management, and real-time communication.",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Socket.io",
    ],
    color: "bg-[#17171d] text-white",
    layout: "md:col-span-2",
    symbol: "↗",
    liveUrl: null,
    githubUrl: "https://github.com/aadiikarn/Rentify",
  },
];

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.2 3.27.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Work() {
  return (
    <main className="min-w-0 py-12 sm:py-16 lg:py-24">
      {/* PAGE INTRO */}
      <section className="pb-12 sm:pb-16 lg:pb-20 md:grid md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 lg:gap-14">
        <div className="min-w-0">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:mb-8 sm:text-sm sm:tracking-[0.2em]">
          Selected projects · My work
        </p>

        <h1 className="max-w-6xl text-[clamp(3.1rem,11vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] sm:text-[clamp(4rem,9vw,8.5rem)]">
          Ideas into
          <br />
          experiences<span className="text-[#4035ff]">.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:mt-8 sm:text-2xl sm:leading-relaxed">
          From frontend experiments to full-stack applications,
          these projects reflect what I have been learning and building.
        </p>
        </div>

        <aside className="mt-10 hidden md:block" aria-label="Featured project preview">
          <div className="overflow-hidden rounded-[2rem] bg-[#17171d] p-5 text-white shadow-[10px_10px_0_#d8f54a] lg:p-7">
            <div className="flex items-center gap-2 border-b border-white/15 pb-4"><span className="h-2.5 w-2.5 rounded-full bg-[#ff9fc8]"/><span className="h-2.5 w-2.5 rounded-full bg-[#d8f54a]"/><span className="h-2.5 w-2.5 rounded-full bg-[#c8c4ff]"/><span className="ml-auto text-xs font-semibold text-white/50">FEATURED BUILD</span></div>
            <div className="mt-6 rounded-2xl bg-[#c8c4ff] p-5 text-[#17171d] lg:p-6">
              <div className="flex items-start justify-between gap-3"><span className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-bold">MERN STACK</span><span className="text-2xl">↗</span></div>
              <h2 className="mt-7 text-3xl font-black tracking-tight lg:text-4xl">Rentify<span className="text-[#4035ff]">.</span></h2>
              <p className="mt-2 max-w-xs text-sm leading-6 text-black/70">A rental marketplace concept with listings, user profiles, and rental request workflows.</p>
              <div className="mt-5 flex flex-wrap gap-2">{['React','Node.js','Express','MongoDB'].map((tech) => <span key={tech} className="rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold">{tech}</span>)}</div>
            </div>
            <div className="mt-5 flex items-center justify-between gap-3 text-sm"><span className="font-semibold">Building end-to-end experiences</span><span className="text-[#d8f54a]">01 / 06</span></div>
          </div>
        </aside>
      </section>

      {/* PROJECT CARDS */}
      <section className="grid min-w-0 grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className={`group relative isolate flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] p-6 transition duration-300 hover:-translate-y-1.5 sm:rounded-[2rem] sm:p-8 lg:p-9 ${
              project.color
            } ${project.layout}`}
          >
            {/* DECORATIVE SYMBOL */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-5 top-16 -z-10 flex h-20 w-20 items-center justify-center rounded-full border border-current/10 text-3xl font-extrabold opacity-20 transition-transform duration-500 group-hover:rotate-12 sm:right-7 sm:top-16 sm:h-28 sm:w-28 sm:text-4xl"
            >
              {project.symbol}
            </div>

            {/* CATEGORY */}
            <div className="flex items-start justify-between gap-4">
              <p className="max-w-[85%] text-xs font-semibold uppercase leading-5 tracking-[0.14em] opacity-75 sm:text-sm">
                {project.category}
              </p>

              <span
                aria-hidden="true"
                className="shrink-0 text-lg font-semibold opacity-60"
              >
                ↗
              </span>
            </div>

            {/* PROJECT DETAILS */}
            <div className="mt-9 flex-1 sm:mt-10">
              <h2 className="break-words text-4xl font-extrabold leading-[1] tracking-[-0.055em] sm:text-4xl lg:text-5xl">
                {project.name}
                <span className="opacity-50">.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 opacity-85 sm:mt-5 sm:text-base sm:leading-8">
                {project.description}
              </p>

              {/* TECHNOLOGIES */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="inline-flex min-h-10 max-w-full items-center rounded-full border border-current/20 px-3.5 py-2 text-xs font-medium leading-4 sm:min-h-10 sm:px-4 sm:text-sm"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* PROJECT LINKS */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-current/20 pt-5 sm:mt-9 sm:gap-4">
              <span className="text-sm font-semibold">
                {project.name}
              </span>

              <div className="flex flex-wrap items-center gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-65 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  >
                    Live Demo ↗
                  </a>
                ) : (
                  <span className="inline-flex min-h-11 items-center text-sm font-medium opacity-65">
                    In Development
                  </span>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                  title={`View ${project.name} on GitHub`}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* PROJECT DISCLAIMER */}
      <section className="mt-8 rounded-[1.5rem] border border-black/10 bg-white/50 p-6 sm:mt-12 sm:rounded-2xl sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4035ff] sm:text-sm">
          A quick note
        </p>

        <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
          These are self-directed practice projects and demos that I built
          to learn, experiment, and improve my development skills. They are
          not commissioned client projects.
        </p>
      </section>

      {/* CONTACT CTA */}
      <section className="my-14 border-t border-black/10 pt-10 sm:my-20 sm:pt-12 lg:my-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-sm">
          Have an idea?
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:mt-6 sm:text-5xl lg:text-6xl">
          Let's make something
          <span className="text-[#4035ff]"> happen.</span>
        </h2>

        <Link
          to="/contact"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#4035ff] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-black sm:mt-8 sm:px-7 sm:py-4 sm:text-base"
        >
          Get in touch ↗
        </Link>
      </section>
    </main>
  );
}