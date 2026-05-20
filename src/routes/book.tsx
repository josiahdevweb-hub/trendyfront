import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Check, ChevronLeft, Clock, CalendarDays, User, PartyPopper } from "lucide-react";

type BookSearch = { service?: string };

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Trendylocs" },
      { name: "description", content: "Reserve your appointment with Trendylocs in Manchester in just a few taps." },
    ],
  }),
  validateSearch: (raw: Record<string, unknown>): BookSearch => ({
    service: typeof raw.service === "string" ? raw.service : undefined,
  }),
  component: BookPage,
});

const SERVICES = [
  { slug: "sisterlocks", title: "Sisterlocks", price: "From £350", time: "8–12 hrs" },
  { slug: "microlocs", title: "Microlocs", price: "From £280", time: "6–10 hrs" },
  { slug: "traditional-locs", title: "Traditional Locs", price: "From £180", time: "4–8 hrs" },
  { slug: "retightening", title: "Retightening", price: "From £85", time: "2–4 hrs" },
  { slug: "starter-locs", title: "Starter Locs", price: "From £150", time: "3–6 hrs" },
  { slug: "loc-styling", title: "Loc Styling", price: "From £45", time: "1–2 hrs" },
  { slug: "loc-colour", title: "Loc Colour", price: "From £120", time: "3–5 hrs" },
  { slug: "consultation", title: "Free Consultation", price: "Free", time: "30–45 min" },
];

const TIMES = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];

function getNextDays(n: number) {
  const out: Date[] = [];
  const today = new Date();
  for (let i = 0; i < n; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    // Salon closed Mon (1) & Sun (0)
    if (d.getDay() === 0 || d.getDay() === 1) continue;
    out.push(d);
    if (out.length >= 10) break;
  }
  return out;
}

function BookPage() {
  const { service: preselected } = Route.useSearch();
  const navigate = useNavigate();
  const days = useMemo(() => getNextDays(21), []);

  const initialService = SERVICES.find((s) => s.slug === preselected)?.slug ?? "";
  const [step, setStep] = useState(initialService ? 2 : 1);
  const [serviceSlug, setServiceSlug] = useState(initialService);
  const [date, setDate] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const selectedService = SERVICES.find((s) => s.slug === serviceSlug);

  function pickService(slug: string) {
    setServiceSlug(slug);
    navigate({ to: "/book", search: { service: slug }, replace: true });
    setStep(2);
  }

  function confirm(e: React.FormEvent) {
    e.preventDefault();
    setConfirmed(true);
  }

  if (confirmed) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-md w-full text-center bg-card border border-border rounded-lg p-10">
          <div className="mx-auto h-14 w-14 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-5">
            <PartyPopper className="h-6 w-6" />
          </div>
          <h1 className="text-2xl mb-2">Request received</h1>
          <p className="text-sm text-muted-foreground mb-6">
            Thanks {name.split(" ")[0] || "there"} — we'll confirm your <span className="text-foreground">{selectedService?.title}</span> appointment on{" "}
            <span className="text-foreground">{date}</span> at <span className="text-foreground">{time}</span> by email within 24 hours.
          </p>
          <div className="flex gap-3 justify-center">
            <Link to="/" className="px-5 py-2.5 rounded-md text-sm border border-border hover:border-gold">Back home</Link>
            <Link to="/services" className="px-5 py-2.5 rounded-md text-sm bg-dark text-primary-foreground hover:bg-dark/90">Browse services</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Compact hero */}
      <section className="bg-dark text-primary-foreground py-8">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-2">Book in 3 quick steps</p>
          <h1 className="text-3xl md:text-4xl">Reserve Your Appointment</h1>
        </div>
      </section>

      {/* Stepper */}
      <div className="mx-auto max-w-3xl px-6 pt-8">
        <ol className="flex items-center justify-between text-xs uppercase tracking-wider">
          {[
            { n: 1, label: "Service" },
            { n: 2, label: "Date & Time" },
            { n: 3, label: "Details" },
          ].map((s, i) => (
            <li key={s.n} className="flex items-center gap-2 flex-1">
              <button
                type="button"
                onClick={() => s.n < step && setStep(s.n)}
                className={`h-7 w-7 rounded-full flex items-center justify-center text-[11px] border ${
                  step >= s.n
                    ? "bg-gold text-gold-foreground border-gold"
                    : "border-border text-muted-foreground"
                }`}
              >
                {step > s.n ? <Check className="h-3.5 w-3.5" /> : s.n}
              </button>
              <span className={step >= s.n ? "text-foreground" : "text-muted-foreground"}>{s.label}</span>
              {i < 2 && <span className="flex-1 h-px bg-border mx-2" />}
            </li>
          ))}
        </ol>
      </div>

      <section className="mx-auto max-w-3xl px-6 py-10">
        {/* STEP 1 — Service */}
        {step === 1 && (
          <div>
            <h2 className="text-xl mb-1 flex items-center gap-2"><User className="h-4 w-4 text-gold" /> Choose a service</h2>
            <p className="text-sm text-muted-foreground mb-6">Tap to continue — no extra clicks needed.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES.map((s) => (
                <button
                  key={s.slug}
                  onClick={() => pickService(s.slug)}
                  className="text-left p-4 rounded-md border border-border bg-card hover:border-gold transition-colors group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base mb-1 group-hover:text-gold transition-colors">{s.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Clock className="h-3 w-3" /> {s.time}
                      </p>
                    </div>
                    <span className="text-sm text-gold whitespace-nowrap">{s.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2 — Date & Time */}
        {step === 2 && (
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xl flex items-center gap-2"><CalendarDays className="h-4 w-4 text-gold" /> Pick a date & time</h2>
              <button onClick={() => setStep(1)} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                <ChevronLeft className="h-3 w-3" /> Change service
              </button>
            </div>
            {selectedService && (
              <p className="text-sm text-muted-foreground mb-6">
                <span className="text-foreground">{selectedService.title}</span> · {selectedService.price} · {selectedService.time}
              </p>
            )}

            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Available days</p>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-8">
              {days.map((d) => {
                const label = d.toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" });
                const isActive = date === label;
                return (
                  <button
                    key={label}
                    onClick={() => setDate(label)}
                    className={`p-3 rounded-md border text-xs ${
                      isActive
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-border bg-card hover:border-gold/60"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Available times</p>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-8">
              {TIMES.map((t) => {
                const isActive = time === t;
                return (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    disabled={!date}
                    className={`p-3 rounded-md border text-sm disabled:opacity-40 disabled:cursor-not-allowed ${
                      isActive
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-border bg-card hover:border-gold/60"
                    }`}
                  >
                    {t}
                  </button>
                );
              })}
            </div>

            <button
              disabled={!date || !time}
              onClick={() => setStep(3)}
              className="w-full bg-dark text-primary-foreground py-3 rounded-md text-sm hover:bg-dark/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </button>
          </div>
        )}

        {/* STEP 3 — Details */}
        {step === 3 && (
          <form onSubmit={confirm}>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-xl flex items-center gap-2"><User className="h-4 w-4 text-gold" /> Your details</h2>
              <button type="button" onClick={() => setStep(2)} className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">
                <ChevronLeft className="h-3 w-3" /> Change date
              </button>
            </div>

            <div className="rounded-md border border-border bg-card p-4 mb-6 text-sm">
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-muted-foreground">
                <span>{selectedService?.title}</span>
                <span>·</span>
                <span>{date}</span>
                <span>·</span>
                <span>{time}</span>
                <span>·</span>
                <span className="text-gold">{selectedService?.price}</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Full name *</label>
                <input required value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold text-sm" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Phone *</label>
                <input required value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold text-sm" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Email *</label>
              <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold text-sm" />
            </div>
            <div className="mb-6">
              <label className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">Notes (optional)</label>
              <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} className="w-full px-3 py-2.5 rounded-md bg-background border border-border focus:outline-none focus:border-gold text-sm" />
            </div>

            <button type="submit" className="w-full bg-gold text-gold-foreground py-3 rounded-md text-sm font-medium hover:opacity-90">
              Confirm Booking
            </button>
            <p className="text-xs text-muted-foreground text-center mt-3">We'll email you to confirm within 24 hours.</p>
          </form>
        )}
      </section>
    </>
  );
}
