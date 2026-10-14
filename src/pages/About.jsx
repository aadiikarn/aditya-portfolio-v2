import { Link } from "react-router-dom";

export default function About() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <main className="min-w-0 py-12 sm:py-16 lg:py-24">
      {/* PAGE INTRO */}
      <section className="pb-14 sm:pb-20 lg:pb-28 md:grid md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 lg:gap-14">
        <div className="min-w-0">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:mb-8 sm:text-sm sm:tracking-[0.2em]">
          A little about me
        </p>

        <h1 className="max-w-6xl text-[clamp(3.1rem,11vw,5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] sm:text-[clamp(4rem,9vw,8rem)]">
          Curious by
          <br />
          nature<span className="text-[#4035ff]">.</span>
          <br />
          Developer by
          <br />
          practice<span className="text-[#4035ff]">.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:mt-10 sm:text-xl sm:leading-relaxed lg:text-2xl">
          I'm Aditya, a computer science student interested
          in web development, technology, and building
          digital experiences that are genuinely useful.
        </p>
        </div>

        <aside className="relative mx-auto mt-12 hidden w-full max-w-md md:block lg:mt-0" aria-label="Profile highlights">
          <div className="absolute -right-3 top-7 h-20 w-20 rounded-full bg-[#d8f54a] lg:-right-5 lg:h-24 lg:w-24" />
          <div className="absolute -left-4 bottom-24 h-14 w-14 rounded-full bg-[#ff9fc8]" />
          <div className="relative overflow-hidden rounded-[2rem] border-[5px] border-white bg-[#c8c4ff] shadow-[10px_10px_0_#d8f54a]">
            <img src="/aditya-portrait.png" alt="Aditya Kumar Karan" className="aspect-[4/4.2] w-full object-contain object-bottom" />
          </div>
          <div className="relative ml-auto -mt-7 mr-3 max-w-[85%] rounded-2xl bg-white p-5 shadow-lg lg:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">Currently focused on</p>
            <p className="mt-2 text-xl font-extrabold tracking-tight">Full-stack development<span className="text-[#4035ff]">.</span></p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['React', 'Node.js', 'MongoDB'].map((item) => <span key={item} className="rounded-full bg-[#eeede8] px-3 py-1.5 text-xs font-semibold">{item}</span>)}
            </div>
          </div>
        </aside>
      </section>

      {/* BACKGROUND */}
      <section className="grid gap-6 border-t border-black/10 py-10 sm:gap-8 sm:py-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-sm">
            Background
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Learning by making.
          </h2>

          <div className="mt-5 space-y-5 text-base leading-8 text-neutral-600 sm:mt-6 sm:space-y-5 sm:text-lg">
            <p>
              I'm exploring how modern websites work, from
              creating interfaces in React to building the
              backend systems that power applications.
            </p>

            <p>
              I believe the best way to learn development
              is to build real projects, experiment with
              ideas, and keep improving through practice.
            </p>

            <p>
              This portfolio is where I share that journey:
              what I'm learning, what I'm building, and
              where I want to go next.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="grid gap-6 border-t border-black/10 py-10 sm:gap-8 sm:py-12 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-sm">
            Current toolkit
          </p>
        </div>

        <div className="min-w-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tools I'm exploring.
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            My toolkit is growing as I work on projects
            and learn more about full-stack development.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-8 sm:gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex min-h-11 items-center rounded-full border border-black/15 px-4 py-2.5 text-sm font-medium transition duration-200 hover:border-[#4035ff] hover:bg-[#4035ff] hover:text-white sm:min-h-11 sm:px-5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT FOCUS */}
      <section className="my-10 rounded-[1.5rem] bg-[#ff9fc8] p-6 sm:my-12 sm:rounded-[2rem] sm:p-10 md:p-16">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] sm:text-sm">
          What's next
        </p>

        <h2 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:mt-8 sm:text-5xl lg:text-6xl">
          More building.
          <br />
          Less just watching.
        </h2>

        <p className="mt-5 max-w-xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8">
          My goal is to strengthen my full-stack skills,
          build complete applications, and learn by solving
          real problems one project at a time.
        </p>

        <Link
          to="/work"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#4035ff] sm:mt-8 sm:px-7 sm:py-4 sm:text-base"
        >
          Explore my work ↗
        </Link>
      </section>
    </main>
  );
}