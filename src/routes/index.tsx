import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroStudent from "@/assets/hero-student.jpg";
import tutorPortrait from "@/assets/tutor-portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function CTAButton({ children, large = false }: { children: React.ReactNode; large?: boolean }) {
  return (
    <button
      className={`group inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground font-medium ring-1 ring-primary ring-offset-2 ring-offset-background hover:bg-primary-dark transition-all hover:-translate-y-0.5 active:translate-y-0 ${
        large ? "py-4 px-8 text-lg" : "py-3 pr-5 pl-3 text-base"
      }`}
    >
      <span className="flex size-5 items-center justify-center shrink-0">
        <span className="size-2 rounded-full bg-primary-foreground" />
      </span>
      {children}
    </button>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-foreground/5 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-primary">
            LearnVantage
          </span>
          <span className="hidden sm:inline font-display italic text-foreground/40 text-sm">
            · Español
          </span>
        </a>
        <div className="hidden md:flex gap-7 text-sm font-medium text-foreground/70">
          <a href="#results" className="hover:text-primary transition-colors">Results</a>
          <a href="#method" className="hover:text-primary transition-colors">The Method</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
        </div>
        <a href="#book"><CTAButton>Book Strategy Call</CTAButton></a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden">
      <div className="absolute -top-20 -right-32 size-[520px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="absolute top-40 -left-32 size-[420px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_460px] items-center">
          <div className="flex flex-col animate-reveal">
            <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 font-display italic text-primary text-sm">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              ¡Logrado! · Grade 9 Specialists
            </span>
            <h1 className="max-w-[18ch] font-display text-5xl md:text-7xl font-medium leading-[0.95] tracking-tight text-balance">
              Secure the <em className="italic text-primary">Grade 9</em> your child deserves.
            </h1>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-foreground/70 text-pretty">
              Spanish GCSE success isn't about memorising vocab lists. It's a proven system that turns
              exam anxiety into confidence — and predicted 5s into Grade 9s. Trusted by ambitious UK
              parents preparing their children for top sixth forms.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a href="#book"><CTAButton large>Book Your Free Strategy Call</CTAButton></a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-orange-200 to-orange-400" />
                  <div className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-amber-200 to-amber-400" />
                  <div className="size-9 rounded-full border-2 border-background bg-gradient-to-br from-rose-200 to-rose-400" />
                </div>
                <span className="text-sm font-medium text-foreground/60">
                  Trusted by 140+ UK families
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-reveal [animation-delay:200ms]">
            <div className="absolute -top-8 -right-6 font-display italic text-[180px] leading-none text-primary/10 select-none pointer-events-none">
              ¡Sí!
            </div>
            <img
              src={heroStudent}
              alt="GCSE Spanish student studying with a textbook"
              className="relative z-10 w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl shadow-foreground/10 ring-1 ring-foreground/5"
              loading="eager"
            />
            <div className="absolute -bottom-6 -left-6 z-20 rounded-2xl bg-card p-5 shadow-xl ring-1 ring-foreground/5">
              <div className="font-display text-4xl font-medium text-primary">98%</div>
              <div className="text-xs font-medium uppercase tracking-wider text-foreground/50 mt-1">
                Grade 8–9 Rate
              </div>
            </div>
            <div className="absolute -top-4 -left-4 z-20 rounded-2xl bg-foreground text-background p-4 shadow-xl rotate-[-4deg]">
              <div className="font-display text-2xl font-medium">+3</div>
              <div className="text-[10px] font-medium uppercase tracking-widest opacity-70">
                Average grade jump
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "AQA Specialist", "Edexcel Examiner", "DBS Enhanced", "Oxford Educated",
    "TES Accredited", "BBC Bitesize Featured",
  ];
  return (
    <div className="border-y border-foreground/5 bg-foreground text-background py-6 overflow-hidden">
      <div className="flex animate-marquee gap-16 whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="font-display text-xl tracking-tight inline-flex items-center gap-16">
            {item}
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function PainPoints() {
  const items = [
    {
      n: "01",
      title: "Stuck at a Grade 5 or 6",
      text: "Your child is bright, but classroom Spanish has hit a ceiling. They need the high-level vocabulary and structures examiners reward at Grade 9.",
    },
    {
      n: "02",
      title: "Speaking exam dread",
      text: "The oral terrifies them. We turn fear into a rehearsed, confident performance — with phrases that examiners physically tick on the markscheme.",
    },
    {
      n: "03",
      title: "Generic online tutors",
      text: "Most tutors teach Spanish. We teach the GCSE Spanish exam — the difference between a polite 7 and an emphatic 9.",
    },
  ];

  return (
    <section className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-[420px_1fr] gap-16">
          <div>
            <p className="font-display italic text-primary text-lg mb-3">El problema</p>
            <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
              Why bright students still <em className="italic text-primary">miss</em> the top grade.
            </h2>
            <p className="mt-6 text-foreground/60 text-pretty">
              Schools teach to the middle. The new GCSE markscheme rewards nuance, idioms and complex
              tenses — things 30-pupil classrooms can't deliver.
            </p>
          </div>
          <div className="space-y-10">
            {items.map((item) => (
              <div key={item.n} className="flex gap-6 border-t border-foreground/10 pt-8">
                <div className="font-display text-3xl text-primary shrink-0 w-12">{item.n}</div>
                <div>
                  <h4 className="font-display text-2xl font-medium mb-2">{item.title}</h4>
                  <p className="text-foreground/60 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Method() {
  const steps = [
    {
      n: "01",
      title: "Diagnostic & Blueprint",
      text: "We assess every weakness against the markscheme, then build a personal path to Grade 9 — tailored to AQA or Edexcel.",
      dark: false,
    },
    {
      n: "02",
      title: "The Oral Edge",
      text: "Specialist coaching for the speaking exam. High-scoring vocabulary strings, role-play hacks, and natural accent training.",
      dark: true,
    },
    {
      n: "03",
      title: "Exam Board Hacking",
      text: "Live past-paper deconstruction. We learn the exact phrases that trigger Grade 9 marks in writing and listening.",
      dark: false,
    },
  ];

  return (
    <section id="method" className="py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <p className="font-display italic text-primary text-lg mb-3">El método</p>
          <h2 className="max-w-[24ch] font-display text-4xl md:text-5xl font-medium text-balance leading-tight">
            El Sistema de Éxito.
          </h2>
          <p className="mt-5 max-w-[58ch] text-foreground/60 text-pretty">
            A three-step framework that bypasses generic classroom teaching and targets the exact
            markers exam boards reward.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className={`group relative overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                step.dark
                  ? "bg-primary text-primary-foreground"
                  : "bg-card ring-1 ring-foreground/5"
              }`}
            >
              <div className="absolute top-4 right-5">
                <span
                  className={`font-display text-7xl font-medium ${
                    step.dark ? "text-primary-foreground/20" : "text-primary/15"
                  }`}
                >
                  {step.n}
                </span>
              </div>
              <div className="relative z-10 pt-12">
                <h3 className="font-display text-2xl font-medium">{step.title}</h3>
                <p
                  className={`mt-4 text-sm leading-relaxed ${
                    step.dark ? "text-primary-foreground/85" : "text-foreground/65"
                  }`}
                >
                  {step.text}
                </p>
              </div>
              <div
                className={`mt-10 h-14 w-full rounded-xl azulejo-pattern ${
                  step.dark ? "opacity-30 invert" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const stats = [
    { v: "98%", l: "Grade 8–9 rate" },
    { v: "+3", l: "Avg. grade uplift" },
    { v: "140+", l: "Families served" },
    { v: "10yr", l: "Tutoring experience" },
  ];

  return (
    <section id="results" className="bg-foreground py-32 text-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="font-display italic text-primary text-lg mb-3">Resultados reales</p>
            <h2 className="max-w-[18ch] font-display text-5xl md:text-6xl leading-[1.0] font-medium text-balance">
              Real results for real families.
            </h2>
            <p className="mt-6 max-w-md text-background/60 text-pretty">
              These are messages we receive every August — straight from parents on results day.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-10 gap-y-8 max-w-md">
              {stats.map((s) => (
                <div key={s.l}>
                  <div className="font-display text-5xl font-medium text-primary">{s.v}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-widest text-background/50">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp testimonials */}
          <div className="space-y-5">
            {[
              {
                from: "Sarah M.",
                loc: "South Kensington",
                msg: "Anthony — we just got the results. A GRADE 9!! Thomas is over the moon. He was predicted a 6 in January. We can't thank you enough. 🎉",
                time: "Today, 09:14",
              },
              {
                from: "James W.",
                loc: "Richmond",
                msg: "Just to say — the confidence boost has been even more important than the grade itself. She actually enjoys speaking Spanish now. Thank you.",
                time: "Yesterday, 18:42",
              },
              {
                from: "Joanne T.",
                loc: "Oxford",
                msg: "Highest mark in his year group for the mocks!! The listening exam techniques were the absolute game-changer. THANK YOU.",
                time: "Mon, 22 Aug",
              },
            ].map((t) => (
              <div
                key={t.from}
                className="rounded-2xl bg-background/[0.04] backdrop-blur-sm p-6 border border-background/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center font-display font-medium text-primary">
                    {t.from[0]}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-sm">{t.from}</div>
                    <div className="text-[11px] uppercase tracking-widest text-background/40">
                      {t.loc}
                    </div>
                  </div>
                  <div className="text-[11px] text-background/40">{t.time}</div>
                </div>
                <div className="rounded-xl rounded-tl-sm bg-background/[0.06] p-4 text-[15px] leading-relaxed text-background/90">
                  {t.msg}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-32 bg-background">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[400px_1fr] gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-4 azulejo-tile rounded-3xl" />
          <img
            src={tutorPortrait}
            alt="Anthony, Spanish GCSE tutor"
            className="relative w-full aspect-square object-cover rounded-3xl shadow-xl ring-1 ring-foreground/5"
          />
        </div>
        <div>
          <p className="font-display italic text-primary text-lg mb-3">El profesor</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-[1.05] text-balance">
            Hola, I'm Anthony.
          </h2>
          <p className="mt-6 text-foreground/70 text-lg leading-relaxed text-pretty">
            I've spent the last decade obsessing over one question: what does it actually take to
            score a Grade 9 in Spanish GCSE? I've reverse-engineered every markscheme, examined for
            major boards, and built a system that's now helped 140+ UK students hit the top grade.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
            {[
              "Oxford-educated linguist",
              "Former AQA examiner",
              "10+ years 1-to-1 tutoring",
              "DBS Enhanced",
              "Grade 9 across all 4 papers",
              "100+ Grade 9 students",
            ].map((c) => (
              <li key={c} className="flex items-center gap-3 text-foreground/80">
                <span className="size-1.5 rounded-full bg-primary" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "How is this different from a normal Spanish tutor?",
    a: "Normal tutors teach Spanish. We teach the GCSE Spanish exam — every session is built around the markscheme and the specific phrases, structures and exam tactics that move a student from a 6/7 to a 9.",
  },
  {
    q: "What if my child's predicted grade is below a 7?",
    a: "Most of our Grade 9 students started with predicted 5s and 6s. Our diagnostic call identifies exactly what's holding them back and whether our approach is the right fit.",
  },
  {
    q: "Are sessions online or in person?",
    a: "Online via Zoom — UK-wide. We provide all materials, recordings and a parent dashboard tracking weekly progress against the markscheme.",
  },
  {
    q: "How long until we see results?",
    a: "Most students see a grade improvement within 6–8 weeks. Full transformations to Grade 9 typically take 3–6 months of weekly sessions.",
  },
  {
    q: "What does the free Strategy Call involve?",
    a: "A 15-minute Zoom call where we diagnose your child's specific gap, share a tailored Grade 9 plan, and answer your questions. No pressure, no commitment.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-32 bg-cream">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <p className="font-display italic text-primary text-lg mb-3">Preguntas</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight">
            Questions parents ask.
          </h2>
        </div>
        <div className="divide-y divide-foreground/10 border-y border-foreground/10">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left py-6 group"
              >
                <div className="flex items-center justify-between gap-6">
                  <h3 className="font-display text-xl font-medium group-hover:text-primary transition-colors">
                    {item.q}
                  </h3>
                  <span
                    className={`shrink-0 size-8 rounded-full border border-foreground/20 flex items-center justify-center transition-transform ${
                      isOpen ? "rotate-45 bg-primary border-primary text-primary-foreground" : ""
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] mt-4" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-foreground/65 leading-relaxed text-pretty pr-12">
                      {item.a}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="book" className="relative py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 azulejo-pattern opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-medium uppercase tracking-widest mb-8">
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Only 3 spots left this term
        </div>
        <h2 className="font-display text-5xl md:text-6xl font-medium leading-[1.05] text-balance">
          Your child's <em className="italic text-primary">Grade 9</em> starts with one call.
        </h2>
        <p className="mt-6 text-lg text-foreground/65 text-pretty max-w-xl mx-auto">
          We only take 15 students per term. Book your free 15-minute Strategy Call today — we'll
          diagnose your child's gap and share a tailored Grade 9 plan.
        </p>
        <div className="mt-12 flex flex-col items-center gap-4">
          <CTAButton large>Book My Free Strategy Call</CTAButton>
          <p className="text-sm text-foreground/45 font-medium">
            No commitment · 15 minutes · Just a plan for success
          </p>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto text-left">
          {[
            { v: "15min", l: "Diagnostic" },
            { v: "Free", l: "No charge" },
            { v: "100%", l: "Tailored" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-card p-4 ring-1 ring-foreground/5">
              <div className="font-display text-2xl text-primary">{s.v}</div>
              <div className="text-[11px] uppercase tracking-widest text-foreground/50 mt-1">
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-12 bg-background">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-primary">
            LearnVantage
          </span>
          <span className="font-display italic text-foreground/40 text-sm">· Español</span>
        </div>
        <div className="flex gap-8 text-sm text-foreground/50">
          <span>UK-wide · Online</span>
          <span>Grade 9 Specialist</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}

function StickyMobileCTA() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 md:hidden">
      <a href="#book" className="block">
        <button className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 px-5 text-base font-semibold text-primary-foreground shadow-2xl shadow-primary/40 ring-1 ring-primary ring-offset-2 ring-offset-background">
          <span className="flex size-5 items-center justify-center">
            <span className="size-2 rounded-full bg-primary-foreground" />
          </span>
          Book Your Free Call
        </button>
      </a>
    </div>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustBar />
      <PainPoints />
      <Method />
      <Results />
      <About />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
