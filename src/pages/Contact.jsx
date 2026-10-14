import { Link } from "react-router-dom";

function Contact() {
  const email = "adityakaran973@gmail.com";

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/aadiikarn",
      label: "Visit my GitHub profile",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.63 1.2 3.27.92.1-.72.39-1.2.71-1.48-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.24-5.1 5.51.4.35.75 1.03.75 2.08v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/adityakaran18/",
      label: "Visit my LinkedIn profile",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.74H4.97V9.2h2.96v9.54ZM6.45 7.9a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.29 10.84h-2.96V14.1c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.77 1.2-1.77 2.43v4.72H9.52V9.2h2.84v1.3h.04c.4-.75 1.36-1.53 2.8-1.53 3 0 3.54 1.97 3.54 4.53v5.24Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/aadii.karn/",
      label: "Visit my Instagram profile",
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle
            cx="17.5"
            cy="6.5"
            r="1"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      ),
    },
  ];

  const socialButtonClass =
    "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-black transition-all duration-300 hover:-translate-y-1 hover:border-[#00bcd4] hover:bg-[#00bcd4] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4035ff] sm:h-[70px] sm:w-[70px]";

  return (
    <main className="min-w-0 py-12 sm:py-16 lg:py-24">
      {/* PAGE INTRO */}
      <section className="pb-12 sm:pb-16 lg:pb-20 md:grid md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-8 lg:gap-14">
        <div className="min-w-0">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:mb-8 sm:text-sm sm:tracking-[0.2em]">
          04 / Say hello
        </p>

        <h1 className="max-w-6xl text-[clamp(3.1rem,11vw,5.5rem)] font-extrabold leading-[0.96] tracking-[-0.065em] sm:text-[clamp(4rem,9vw,8.5rem)]">
          Let&apos;s talk
          <br />
          about it<span className="text-[#4035ff]">.</span>
        </h1>

        <p className="mt-7 max-w-2xl text-lg leading-8 text-neutral-600 sm:mt-8 sm:text-2xl sm:leading-relaxed">
          Have a project idea, an opportunity, or just want to connect?
          I&apos;d love to hear from you.
        </p>
        </div>

        <aside className="mt-10 hidden rounded-[2rem] bg-[#d8f54a] p-6 md:block lg:p-8" aria-label="Contact details">
          <div className="flex items-start justify-between gap-4"><p className="text-xs font-black uppercase tracking-[0.18em] text-black/60">Open to conversations</p><span className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-xl text-white">↗</span></div>
          <h2 className="mt-8 text-3xl font-black leading-tight tracking-[-0.04em] lg:text-4xl">Have something<br/>in mind?</h2>
          <p className="mt-4 text-base leading-7 text-black/70">Projects, collaborations, opportunities, or a simple hello — let's connect.</p>
          <a href={`mailto:${email}`} className="mt-6 flex items-center justify-between gap-3 rounded-2xl bg-white p-4 text-sm font-bold transition hover:bg-[#4035ff] hover:text-white"><span className="break-all">{email}</span><span className="shrink-0 text-lg">↗</span></a>
          <div className="mt-5 flex items-center gap-2 text-sm font-semibold"><span className="h-2.5 w-2.5 rounded-full bg-[#4035ff]"/> Usually happy to hear from you</div>
        </aside>
      </section>

      {/* CONTACT CARDS */}
      <section className="grid min-w-0 grid-cols-1 gap-5 sm:gap-6 md:grid-cols-5">
        {/* MAIN CONTACT CARD */}
        <div className="flex min-w-0 flex-col justify-between rounded-[1.5rem] bg-[#4035ff] p-6 text-white transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8 lg:p-10 md:col-span-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-sm sm:tracking-[0.18em]">
              Have something in mind?
            </p>

            <h2 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.045em] sm:mt-8 sm:text-5xl lg:text-6xl">
              Let&apos;s make something meaningful.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
              Whether it&apos;s a development idea, a collaboration, or
              an opportunity to learn and build together, feel free to
              reach out.
            </p>
          </div>

          <a
            href={`mailto:${email}?subject=${encodeURIComponent(
              "Hello from your portfolio"
            )}`}
            className="mt-8 inline-flex min-h-12 w-fit max-w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#4035ff] transition duration-300 hover:-translate-y-1 hover:bg-[#d8f54a] hover:text-[#17171d] sm:mt-12 sm:px-7 sm:py-4 sm:text-base"
          >
            Send me an email <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* EMAIL DETAILS CARD */}
        <div className="flex min-w-0 flex-col justify-between rounded-[1.5rem] bg-[#d8f54a] p-6 text-[#17171d] transition duration-300 hover:-translate-y-1 sm:rounded-[2rem] sm:p-8 lg:p-10 md:col-span-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-65 sm:text-sm sm:tracking-[0.18em]">
              Get in touch
            </p>

            <h2 className="mt-7 text-3xl font-extrabold tracking-[-0.04em] sm:mt-8 sm:text-4xl">
              Contact details<span className="text-[#4035ff]">.</span>
            </h2>
          </div>

          <div className="mt-9 sm:mt-12">
            <p className="text-xs font-semibold uppercase tracking-wider opacity-60 sm:text-sm">
              Email address
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-3 block break-all text-lg font-semibold underline decoration-current/30 underline-offset-4 transition-colors hover:text-[#4035ff] sm:text-xl"
            >
              {email}
            </a>

            <p className="mt-5 text-sm leading-7 opacity-70 sm:text-base">
              Click the email address to start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA */}
      <section className="mt-14 sm:mt-20 lg:mt-28">
        <div className="mb-8 sm:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-sm">
            Find me online
          </p>

          <h2 className="mt-4 text-4xl font-extrabold uppercase leading-[0.98] tracking-[-0.06em] sm:mt-5 sm:text-6xl">
            Let&apos;s
            <br />
            connect<span className="text-[#00bcd4]">.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-5">
          {/* EMAIL */}
          <a
            href={`mailto:${email}`}
            aria-label="Send me an email"
            title="Email"
            className={socialButtonClass}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Zm1.7-.7 6.7 5.1a1 1 0 0 0 1.2 0l6.7-5.1H4.7ZM19 8.2l-6.1 4.6a1.5 1.5 0 0 1-1.8 0L5 8.2v9.3c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5V8.2Z" />
            </svg>
          </a>

          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              title={social.name}
              className={socialButtonClass}
            >
              <span className="h-6 w-6 sm:h-7 sm:w-7">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CLOSING MESSAGE */}
      <section className="my-14 border-t border-black/10 pt-10 sm:my-20 sm:pt-12 lg:my-28">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500 sm:text-sm">
          Thanks for stopping by
        </p>

        <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:mt-6 sm:text-5xl lg:text-6xl">
          Every great idea starts with a
          <span className="text-[#00bcd4]"> conversation.</span>
        </h2>

        <Link
          to="/"
          className="mt-7 inline-flex min-h-11 items-center text-base font-semibold text-neutral-600 transition-colors hover:text-[#4035ff]"
        >
          ← Back to home
        </Link>
      </section>
    </main>
  );
}

export default Contact;