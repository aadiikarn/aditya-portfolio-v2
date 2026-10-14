import { Link } from "react-router-dom";

function Skills() {
  const skillGroups = [
    {
      number: "01",
      title: "Web development",
      description: "Building the front end of digital experiences.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "bg-[#ff9fc8]",
    },
    {
      number: "02",
      title: "Tools and workflow",
      description: "Tools I use while learning and building projects.",
      skills: ["Git", "GitHub", "VS Code", "Responsive design"],
      color: "bg-[#d8f54a]",
    },
  ];

  return (
    <main className="min-w-0 py-12 sm:py-16 lg:py-24">
      {/* PAGE INTRO */}
      <section className="pb-12 sm:pb-16 lg:pb-20 md:grid md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 lg:gap-14">
        <div className="min-w-0">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:mb-8 sm:text-sm sm:tracking-[0.2em]">
          02 / THE TOOLKIT
        </p>

        <h1 className="max-w-5xl text-[clamp(3.1rem,11vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] sm:text-[clamp(4rem,9vw,7rem)]">
          Things I'm
          <br />
          <span className="text-[#4035ff]">
            learning to build.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:mt-8 sm:text-xl sm:leading-relaxed">
          The technologies and tools I'm exploring to turn
          ideas into working digital experiences.
        </p>
        </div>

        <aside className="mt-10 hidden rounded-[2rem] border border-black/10 bg-white/70 p-6 shadow-[10px_10px_0_#c8c4ff] md:block lg:p-8" aria-label="Technology stack overview">
          <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-5">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">My playground</p><h2 className="mt-2 text-2xl font-extrabold tracking-tight">The stack<span className="text-[#4035ff]">.</span></h2></div>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#d8f54a] text-2xl font-black">{`{ }`}</span>
          </div>
          <div className="mt-5 space-y-3">
            {[['01','Frontend','React · JavaScript · CSS'],['02','Backend','Node.js · Express'],['03','Data','MongoDB · REST APIs'],['04','Workflow','Git · GitHub · VS Code']].map(([num,title,detail]) => <div key={num} className="flex items-center gap-4 rounded-2xl bg-[#eeede8] p-4"><span className="text-xs font-black text-[#4035ff]">{num}</span><div className="min-w-0"><h3 className="font-bold">{title}</h3><p className="mt-1 text-sm leading-6 text-neutral-600">{detail}</p></div><span className="ml-auto text-lg">↗</span></div>)}
          </div>
          <p className="mt-5 text-sm leading-6 text-neutral-500">Learning by building, experimenting, and improving one project at a time.</p>
        </aside>
      </section>

      {/* SKILL GROUPS */}
      <section className="grid gap-5 border-t border-black/10 py-10 sm:gap-6 sm:py-12 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.number}
            className={`group flex min-w-0 flex-col rounded-[1.5rem] ${group.color} p-6 transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8 lg:p-10`}
          >
            <div className="flex items-start justify-between gap-4">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/60 sm:text-sm">
                {group.number} / SKILLS
              </p>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/20 text-base font-bold transition duration-300 group-hover:rotate-45 group-hover:bg-black group-hover:text-white sm:h-12 sm:w-12">
                ↗
              </span>
            </div>

            <h2 className="mt-8 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:mt-10 sm:text-4xl">
              {group.title}
            </h2>

            <p className="mt-3 max-w-sm text-base leading-7 text-black/70 sm:text-lg sm:leading-8">
              {group.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-9 sm:gap-3">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex min-h-11 items-center rounded-full border border-black/20 bg-white/40 px-4 py-2.5 text-sm font-semibold transition duration-200 hover:bg-black hover:text-white sm:min-h-12 sm:px-5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      {/* BOTTOM CTA */}
      <section className="mt-5 flex flex-col gap-6 border-t border-black/10 py-10 sm:mt-8 sm:gap-8 sm:py-12 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-sm">
            Always learning
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] sm:text-4xl">
            Skills grow with practice.
          </h2>
        </div>

        <Link
          to="/work"
          className="inline-flex min-h-12 w-fit shrink-0 items-center justify-center rounded-full bg-[#4035ff] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-black sm:px-7 sm:py-4 sm:text-base"
        >
          Explore my projects ↗
        </Link>
      </section>

      {/* BACK LINK */}
      <div className="border-t border-black/10 pt-6">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center text-base font-semibold text-neutral-600 transition-colors hover:text-[#4035ff]"
        >
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

export default Skills;