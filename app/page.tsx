import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { ContactCard } from "@/components/ContactCard";
import { caseStudies, profile, testimonials } from "@/data/profile";

export default function Page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 py-16 sm:px-10 lg:px-12">
      <Hero />

      <section id="about" className="grid gap-16 lg:grid-cols-[1.4fr,1fr] lg:items-start">
        <div className="space-y-8">
          <SectionHeading
            eyebrow="About"
            title="SEO leader who balances experimentation with operational rigor"
            description={profile.summary}
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {profile.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-3xl border border-white/5 bg-white/5 p-5 text-center text-slate-200"
              >
                <p className="text-2xl font-semibold text-white">{highlight.value}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">{highlight.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 text-slate-200">
            <p className="text-sm uppercase tracking-[0.35em] text-primary-200/80">Operating principles</p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
              <li>
                • Start with the commercial model: align SEO roadmaps with revenue intelligence and sales velocity.
              </li>
              <li>• Build source-of-truth dashboards before scaling campaigns to keep GTM feedback loops tight.</li>
              <li>• Pair technical hygiene with content velocity so growth doesn’t stall after quick wins.</li>
              <li>• Educate stakeholders to embed SEO rituals inside product, content, and RevOps.</li>
            </ul>
          </div>
          <ContactCard />
        </div>
      </section>

      <section id="skills" className="space-y-12">
        <SectionHeading
          eyebrow="Capabilities"
          title="Full-funnel expertise across technical, content, and leadership tracks"
          description="I build systems that unlock predictable organic growth while raising the maturity of internal teams."
        />
        <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="grid gap-6 sm:grid-cols-3">
            {profile.skills.pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-3xl border border-white/5 bg-white/5 p-6 text-slate-200"
              >
                <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {pillar.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="rounded-3xl border border-white/5 bg-slate-900/70 p-6 text-slate-200">
            <h3 className="text-lg font-semibold text-white">Tools I depend on</h3>
            <p className="mt-2 text-sm text-slate-300">
              Selecting the right stack for each engagement keeps execution fast and reporting trusted.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {profile.skills.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="space-y-12">
        <SectionHeading
          eyebrow="Case Studies"
          title="Compounding revenue impact"
          description="Targeted playbooks across SaaS, retail, and logistics demonstrate how sustainable growth compounds over time."
        />
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.company} index={index} {...study} />
          ))}
        </div>
      </section>

      <section id="testimonials" className="space-y-12">
        <SectionHeading
          eyebrow="Testimonials"
          title="Leaders trust Rushabh to make SEO predictable"
          description="Partners call out the clarity, pace, and revenue focus that underpin each engagement."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.author} index={index} {...testimonial} />
          ))}
        </div>
      </section>

      <section id="cta" className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary-500/15 via-primary-500/5 to-slate-900/90 p-12 text-center text-slate-100">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Ready to make organic your top-performing channel?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
          I’ll audit your acquisition, uncover the untapped opportunities, and co-create a roadmap your GTM team
          wants to own.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:hello@rushabhsanghavi.com"
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-600"
          >
            Email Rushabh
          </a>
          <a
            href="https://calendly.com/rushabhsanghavi/30min"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white transition hover:border-primary-400 hover:bg-white/5"
          >
            Book a call
          </a>
        </div>
      </section>

      <footer className="flex flex-col items-center gap-3 border-t border-white/5 pt-8 text-center text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Rushabh Sanghavi. All rights reserved.</p>
        <p>Rajkot | Gujarat | India</p>
      </footer>
    </main>
  );
}
