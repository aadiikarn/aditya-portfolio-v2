
import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import PortfolioLoader from "./components/PortfolioLoader";
import ScrollAnimations from "./components/ScrollAnimations";
const email = "adityakaran973@gmail.com";

const navItems = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

const navClass = ({ isActive }) =>
  `inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition ${
    isActive
      ? "bg-[#4035ff] text-white"
      : "text-[#292832] hover:bg-[#e5e2ff] hover:text-[#4035ff]"
  }`;

function Logo({ footer = false }) {
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-black tracking-tight shadow-[4px_4px_0_#c8c4ff] ${
        footer
          ? "bg-[#17171d] text-white"
          : "bg-[#d8f54a] text-[#17171d]"
      }`}
    >
      AD
      <span className={footer ? "text-[#d8f54a]" : "text-[#17171d]"}>
        .
      </span>
    </span>
  );
}


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-black/10">
      <div className="flex min-h-[72px] items-center justify-between gap-3 py-3 sm:min-h-[80px] md:min-h-[88px] md:py-4">
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex min-w-0 items-center gap-3"
          aria-label="Aditya Kumar Karan home"
        >
          <Logo />
          <span className="truncate text-sm font-extrabold tracking-tight text-[#17171d] sm:text-base">
            Aditya Kumar Karan
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={navClass}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-[#17171d] transition hover:bg-[#e5e2ff] lg:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mb-4 rounded-3xl border border-black/10 bg-white p-3 shadow-lg lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <a
            href={`mailto:${email}`}
            className="mt-3 flex items-center justify-center rounded-2xl bg-[#d8f54a] px-4 py-3 text-sm font-bold text-[#17171d]"
          >
            Let's talk ↗
          </a>
        </nav>
      )}
    </header>
  );
}


function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[350px] sm:max-w-[390px] md:max-w-[460px]">
      <div className="absolute -right-1 top-5 h-14 w-14 rounded-full bg-[#d8f54a] sm:right-2 sm:h-20 sm:w-20" />

      <div className="absolute -left-2 top-1/3 h-10 w-10 rounded-full bg-[#ff9cbb] sm:-left-5 sm:h-16 sm:w-16" />

      <div className="absolute -bottom-3 right-7 h-14 w-14 rounded-full bg-[#4035ff] sm:right-10 sm:h-20 sm:w-20" />

      <div className="relative overflow-hidden rounded-[48%_48%_25%_25%/34%_34%_18%_18%] border-[5px] border-white bg-[#c8c4ff] shadow-[0_12px_0_#e1defe] sm:shadow-[0_16px_0_#e1defe]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#e9e7ff,transparent_45%)]" />

        <img
          src="/aditya-portrait.png"
          alt="Aditya Kumar Karan"
          className="relative z-10 mx-auto block aspect-[4/5] w-full object-contain object-bottom"
        />
      </div>

      <div className="absolute -top-4 left-5 z-20 flex h-10 w-10 rotate-12 items-center justify-center rounded-xl bg-[#d8f54a] text-lg font-black sm:left-8 sm:h-11 sm:w-11">
        ✳
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="grid items-center gap-10 pb-14 pt-10 sm:gap-12 sm:pb-20 sm:pt-14 md:grid-cols-2 md:gap-10 md:py-20 lg:gap-16 lg:py-24">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#4035ff]" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-[#4035ff] sm:text-xs sm:tracking-[0.15em]">
              Computer Science · Full Stack
            </span>
          </div>

          <h1 className="mt-6 text-[clamp(3.3rem,12.5vw,6.8rem)] font-black leading-[0.9] tracking-[-0.075em] text-[#17171d] sm:mt-7 md:text-[clamp(4rem,6.3vw,6.8rem)]">
            Hi, I'm
            <br />
            Aditya<span className="text-[#4035ff]">.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#64616d] sm:mt-7 sm:text-lg sm:leading-8">
            I'm a computer science student building web apps with the MERN
            stack. I enjoy turning ideas into useful digital experiences.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Link
              to="/work"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#4035ff] px-6 py-3 text-sm font-bold text-white shadow-[0_4px_0_#c8c4ff] transition hover:-translate-y-0.5 sm:min-h-14 sm:px-7 sm:py-4"
            >
              Explore my work
              <ArrowUpRight />
            </Link>

            <Link
              to="/about"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-black/15 bg-white px-6 py-3 text-sm font-bold text-[#17171d] transition hover:border-[#4035ff] hover:text-[#4035ff] sm:min-h-14 sm:px-7 sm:py-4"
            >
              More about me
              <ArrowUpRight />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-[#77747e] sm:mt-8">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#4035ff]" />
              Open to learning
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ff9cbb]" />
              Building projects
            </span>
          </div>
        </div>

        <div className="px-5 pb-3 pt-1 sm:px-10 sm:pb-5 md:px-4 md:py-8">
          <Portrait />
        </div>
      </section>

      <section className="pb-12 sm:pb-20">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4035ff]">
              A little snapshot
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              What I'm about.
            </h2>
          </div>
          <span className="pb-1 text-xl text-[#4035ff]">✳</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[28px] bg-[#d8f54a] p-6 sm:p-7">
            <span className="text-xs font-bold uppercase tracking-widest text-black/60">
              01 / Focus
            </span>
            <h3 className="mt-6 text-2xl font-black tracking-tight sm:mt-8">
              MERN Stack
            </h3>
            <p className="mt-2 text-sm leading-6 text-black/70">
              Learning and building with modern web technologies.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#c8c4ff] p-6 sm:p-7">
            <span className="text-xs font-bold uppercase tracking-widest text-black/60">
              02 / Create
            </span>
            <h3 className="mt-6 text-2xl font-black tracking-tight sm:mt-8">
              Real projects
            </h3>
            <p className="mt-2 text-sm leading-6 text-black/70">
              Turning ideas into practical digital experiences.
            </p>
          </div>

          <div className="rounded-[28px] bg-[#ffbfd2] p-6 sm:p-7">
            <span className="text-xs font-bold uppercase tracking-widest text-black/60">
              03 / Mindset
            </span>
            <h3 className="mt-6 text-2xl font-black tracking-tight sm:mt-8">
              Always learning
            </h3>
            <p className="mt-2 text-sm leading-6 text-black/70">
              Improving my skills, one project at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-2">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex min-h-[280px] flex-col justify-between rounded-[32px] bg-[#4035ff] p-6 text-white sm:min-h-[300px] sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                Selected projects
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight />
              </span>
            </div>

            <div className="mt-8 sm:mt-10">
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Things I've built<span className="text-[#d8f54a]">.</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-white/75">
                Things I've built, ideas I'm exploring, and projects in
                progress.
              </p>
              <Link
                to="/work"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#d8f54a] px-5 py-3 text-sm font-bold text-[#17171d] transition hover:bg-white sm:mt-6"
              >
                See all work <ArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="flex min-h-[180px] flex-col justify-between rounded-[32px] bg-[#ffbfd2] p-6 sm:min-h-[190px] sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-black/55">
                Get to know me
              </span>
              <div className="mt-5">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  A little about me.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-black/65">
                  My background, what I'm learning, and what keeps me curious.
                </p>
                <Link
                  to="/about"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#17171d] underline decoration-black/30 underline-offset-4 hover:text-[#4035ff] sm:mt-5"
                >
                  Read my story <ArrowUpRight />
                </Link>
              </div>
            </div>

            <div className="flex min-h-[180px] flex-col justify-between rounded-[32px] border border-black/10 bg-white p-6 sm:min-h-[190px] sm:p-8">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#4035ff]">
                Have something in mind?
              </span>
              <div className="mt-5">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Let's connect.
                </h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#64616d]">
                  Have an idea or opportunity? Let's start a conversation.
                </p>
                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-[#17171d] underline decoration-[#4035ff]/40 underline-offset-4 hover:text-[#4035ff] sm:mt-5"
                >
                  Get in touch <ArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Footer() {
  const socialLinks = [
    {
      label: "GitHub",
      href: "https://github.com/aadiikarn",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.65 2.34 3.08 1.77.1-.72.4-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.54.23 2.68.11 2.96.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.23-5.12 5.51.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/adityakaran18/",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
          <path d="M5.2 3a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.6h.05A4.1 4.1 0 0 1 16.7 8.7c3.9 0 4.6 2.56 4.6 5.9V21h-3.8v-5.68c0-1.36-.02-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3V21H9.4V9Z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/aadii.karn/",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
        </svg>
      ),
    },
  ];

  const footerLinks = [
    { label: "Home", to: "/" },
    { label: "Work", to: "/work" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Resume", to: "/resume" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <footer className="mt-12 rounded-t-[32px] bg-[#d8f54a] px-5 pb-5 pt-7 sm:mt-16 sm:rounded-t-[44px] sm:px-10 sm:pb-6 sm:pt-10 lg:mt-20 lg:px-14 lg:pt-12">
      <div className="grid gap-7 md:grid-cols-2 md:gap-10">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <Logo footer />
            <span className="text-lg font-black tracking-tight sm:text-xl">
              Aditya Kumar Karan.
            </span>
          </Link>

          <p className="mt-3 max-w-md text-sm leading-6 text-black/65 sm:mt-5 sm:leading-7">
            Computer Science student building useful digital experiences with
            the MERN stack.
          </p>

          <a
            href={`mailto:${email}`}
            className="mt-4 inline-flex items-center gap-2 break-all text-sm font-extrabold underline underline-offset-4 sm:mt-5"
          >
            {email} <ArrowUpRight />
          </a>
        </div>

        <div className="md:justify-self-end">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-black/55">
            Explore
          </p>

          <nav className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:mt-4 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-3">
            {footerLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-sm font-bold transition hover:text-[#4035ff]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-7">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition hover:bg-[#17171d] hover:text-white sm:h-11 sm:w-11"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 flex flex-col gap-2.5 border-t border-black/15 pt-4 text-xs font-medium text-black/60 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:pt-5">
        <p>
          © {new Date().getFullYear()} Aditya Kumar Karan. All rights reserved.
        </p>

        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="self-start font-bold text-black transition hover:text-[#4035ff] sm:self-auto"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}

function NotFound() {
  return (
    <main className="flex min-h-[50vh] flex-col items-start justify-center py-16">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#4035ff]">
        404 · Page not found
      </p>

      <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">
        Lost your way?
      </h1>

      <Link
        to="/"
        className="mt-6 inline-flex rounded-full bg-[#4035ff] px-6 py-3 font-bold text-white"
      >
        Back home ↗
      </Link>
    </main>
  );
}


export default function App() {
  return (
    <PortfolioLoader>
      <ScrollAnimations />

      <div className="mx-auto w-full max-w-[1600px] overflow-x-clip px-4 text-[#17171d] sm:px-6 md:px-10 lg:px-20">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </PortfolioLoader>
  );
}

