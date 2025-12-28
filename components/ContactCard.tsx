import { ArrowUpRightIcon } from "./icons";

const contacts = [
  {
    label: "Email",
    value: "hello@rushabhsanghavi.com",
    href: "mailto:hello@rushabhsanghavi.com",
  },
  {
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    label: "Calendar",
    value: "Book a 30-min discovery call",
    href: "https://calendly.com/rushabhsanghavi/30min",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rushabhsanghavi",
    href: "https://www.linkedin.com/in/rushabhsanghavi",
  },
];

export function ContactCard() {
  return (
    <div className="gradient-ring flex flex-col gap-4 rounded-3xl border border-white/10 bg-primary-500/10 p-8 text-slate-100 backdrop-blur">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-primary-100/80">Let’s build your roadmap</p>
        <h3 className="mt-2 text-2xl font-semibold text-white">Get in touch</h3>
        <p className="mt-4 text-base text-slate-100/80">
          Share your growth targets and current blockers. I’ll reply within one business day with the next steps.
        </p>
      </div>
      <ul className="space-y-3 text-sm">
        {contacts.map((contact) => (
          <li key={contact.label}>
            <a
              href={contact.href}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-left font-medium text-slate-100 hover:border-primary-400 hover:text-primary-100"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.3em] text-primary-100/70">{contact.label}</span>
                <span className="block text-base">{contact.value}</span>
              </span>
              <ArrowUpRightIcon className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
