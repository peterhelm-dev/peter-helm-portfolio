import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const ghlShots = [
  {
    src: "/case-studies/ghl/01-stage-changes-scorecard.webp",
    caption: "Stage changes write to the scorecard",
    alt: "Workflow builder with one branch per pipeline stage: estimate sent, won, declined, job scheduled, complete and paid, each adding a row to a Google Sheet.",
  },
  {
    src: "/case-studies/ghl/03-meeting-booked-workflow.webp",
    caption: "Meeting booked workflow",
    alt: "Zoomed-out workflow builder showing the meeting booked automation with branches, owner assignment, a two-hour wait, and a sticky note labeled Education Piece.",
  },
  {
    src: "/case-studies/ghl/04-one-contact-start-to-finish.webp",
    caption: "One contact, start to finish",
    alt: "A test contact record showing an opportunity created at Job Scheduled, a booking link text, a rescheduled appointment text, and an education email in the conversation thread.",
  },
  {
    src: "/case-studies/ghl/05-calendar-sync.webp",
    caption: "Calendar sync",
    alt: "Linked Calendar dialog showing system appointments syncing in both directions with a connected Google Calendar.",
  },
  {
    src: "/case-studies/ghl/06-housecall-pro-to-ghl.webp",
    caption: "Housecall Pro to GoHighLevel",
    alt: "Large workflow canvas with five webhook branches for job events, each finding an opportunity and then updating it or creating it.",
  },
  {
    src: "/case-studies/ghl/07-smart-lists.webp",
    caption: "Smart lists",
    alt: "Contacts view with smart list tabs by industry and a dropdown of per-owner lists split by high, medium and low priority.",
  },
];

export default function GhlGallery() {
  const [open, setOpen] = useState<number | null>(null);
  const shot = open === null ? null : ghlShots[open];

  return (
    <>
      <div className="grid sm:grid-cols-2 gap-8">
        {ghlShots.map((s, i) => (
          <figure key={s.src} className="card-minimal">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="block w-full pixel-frame bg-muted"
              aria-label={`Enlarge: ${s.caption}`}
            >
              <img src={s.src} alt={s.alt} className="w-full h-auto" loading="lazy" />
            </button>
            <figcaption className="mt-4 text-base font-bold">{s.caption}</figcaption>
          </figure>
        ))}
      </div>
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-5xl p-3">
          <DialogTitle className="text-sm">{shot?.caption}</DialogTitle>
          <DialogDescription className="sr-only">{shot?.alt}</DialogDescription>
          {shot && <img src={shot.src} alt={shot.alt} className="w-full h-auto max-h-[80vh] object-contain" />}
        </DialogContent>
      </Dialog>
    </>
  );
}
