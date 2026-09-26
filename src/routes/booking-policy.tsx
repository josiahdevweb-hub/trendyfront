import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/booking-policy")({
  head: () => ({
    meta: [
      { title: "Booking Policy — Trendylocs" },
      {
        name: "description",
        content:
          "Trendylocs booking, payment, cancellation, late arrival and hair preparation policies. Please read before securing your appointment.",
      },
      { property: "og:title", content: "Booking Policy — Trendylocs" },
      {
        property: "og:description",
        content: "Your Time. Your Experience. Our Standard. Read our booking and salon policies.",
      },
    ],
  }),
  component: BookingPolicy,
});

const cancellationRows = [
  {
    notice: "More than 48 hours",
    outcome: "Credit or refund",
    details:
      "Transferred as credit toward a future appointment, or refunded. Stripe processing fees are deducted from any cash refund.",
    tone: "text-emerald-700",
  },
  {
    notice: "Between 48 & 12 hours",
    outcome: "50% cancellation fee",
    details: "The remaining 50% may be refunded or retained as credit, less any applicable Stripe fees.",
    tone: "text-amber-700",
  },
  {
    notice: "Less than 12 hours",
    outcome: "Treated as a no-show",
    details: "Full appointment payment is forfeited. No refund or credit will be issued.",
    tone: "text-red-700",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] pb-3 mb-5 border-b border-gold/40">
      {children}
    </h2>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 border-l-4 border-dark bg-secondary/40 px-5 py-4 text-sm leading-relaxed text-foreground/80">
      {children}
    </div>
  );
}

function BookingPolicy() {
  return (
    <>
      <section className="bg-dark text-primary-foreground py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <p className="uppercase tracking-[0.3em] text-xs text-gold mb-4">Trendylocs</p>
          <h1 className="font-serif text-4xl md:text-5xl mb-4">Booking Policy</h1>
          <p className="italic text-primary-foreground/80 mb-6">Your Time. Your Experience. Our Standard.</p>
          <div className="h-0.5 w-20 bg-gold mb-6" />
          <p className="text-sm md:text-base text-primary-foreground/75 leading-relaxed max-w-2xl">
            Thank you for choosing Trendylocs. We are committed to creating an exceptional loc-care experience where
            every appointment is approached with precision, care, and attention to detail. Please familiarise yourself
            with our booking and salon policies before securing your appointment.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-16 space-y-14 text-foreground/85 leading-relaxed">
        <section>
          <SectionHeading>Booking &amp; Payment</SectionHeading>
          <p>
            To reserve your appointment, full payment is required at the time of booking. Appointments are only
            considered confirmed once payment has been received. Payments can be made securely via bank transfer or
            through our online booking platform.
          </p>
        </section>

        <section>
          <SectionHeading>Cancellations &amp; Rescheduling</SectionHeading>
          <p className="mb-6">
            We understand that plans can change. For this reason, we kindly require a minimum of{" "}
            <strong>48 hours' notice</strong> for any cancellation or request to reschedule.
          </p>

          {/* Table on sm+, stacked cards on mobile */}
          <div className="hidden sm:block overflow-hidden rounded-md border border-border">
            <table className="w-full text-sm">
              <thead className="bg-dark text-primary-foreground text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Notice Given</th>
                  <th className="px-4 py-3 font-semibold">Outcome</th>
                  <th className="px-4 py-3 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody>
                {cancellationRows.map((r, i) => (
                  <tr key={r.notice} className={i % 2 === 0 ? "bg-secondary/40" : "bg-background"}>
                    <td className={`px-4 py-4 align-top font-semibold ${r.tone}`}>{r.notice}</td>
                    <td className="px-4 py-4 align-top">{r.outcome}</td>
                    <td className="px-4 py-4 align-top text-foreground/75">{r.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="sm:hidden space-y-3">
            {cancellationRows.map((r) => (
              <div key={r.notice} className="rounded-md border border-border bg-secondary/40 p-4 text-sm">
                <div className={`font-semibold ${r.tone}`}>{r.notice}</div>
                <div className="mt-1 font-medium">{r.outcome}</div>
                <p className="mt-2 text-foreground/75">{r.details}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading>Changes to Your Booked Service</SectionHeading>
          <p>
            We understand that your service requirements may change. If you wish to reduce or downgrade the service
            you have booked, please notify us at least <strong>48 hours before</strong> your appointment.
          </p>
          <Note>
            <strong>Please note:</strong> changes made with less than 48 hours' notice will not qualify for a refund or
            credit for any unused appointment time, as that time has been reserved exclusively for you.
          </Note>
        </section>

        <section>
          <SectionHeading>Late Arrivals</SectionHeading>
          <p>
            We appreciate that unforeseen circumstances can occasionally cause delays. A{" "}
            <strong>15-minute grace period</strong> is provided for late arrivals. Arriving more than 15 minutes after
            your scheduled time may affect the service we are able to provide, as we must respect the appointments
            scheduled after yours.
          </p>
          <Note>
            Depending on the circumstances, your service may need to be shortened or cancelled. If your appointment is
            cancelled due to lateness, it will be treated as a last-minute cancellation and the full payment will be
            forfeited.
          </Note>
        </section>

        <section>
          <SectionHeading>Your Locs, Prepared for Your Appointment</SectionHeading>
          <p className="mb-4">
            At Trendylocs, we specialise exclusively in interlocking and are dedicated to maintaining the health,
            integrity, and beauty of your locs. Please note that we currently do <strong>not</strong> offer a
            hair-washing service.
          </p>
          <p>
            To ensure your appointment can be carried out to our professional standard, your locs must be washed within{" "}
            <strong>24 hours prior</strong> to your appointment. Hair must be completely clean and free from
            conditioner, oils, creams, and heavy product buildup.
          </p>
          <Note>
            We are unable to work on locs that are dirty, oily, unwashed, or contain excessive product buildup. If your
            locs are not suitably prepared on arrival, we reserve the right to cancel the appointment — the full
            payment will be forfeited.
          </Note>
        </section>
      </div>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <p className="italic font-serif text-lg leading-relaxed text-foreground/80">
            By securing an appointment with Trendylocs, you acknowledge that you have read, understood, and agreed to
            our booking, cancellation, and service policies. Thank you for trusting Trendylocs with your loc journey —
            we look forward to delivering an experience that is every bit as exceptional as you deserve.
          </p>
          <Link
            to="/book"
            className="mt-8 inline-flex bg-gold text-gold-foreground px-7 py-3.5 rounded-md hover:opacity-90"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
