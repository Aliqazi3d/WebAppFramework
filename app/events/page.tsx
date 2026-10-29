import Link from "next/link";
import { events } from "@/lib/data";

export const metadata = { title: "Events – Alder Brook" };
const audiences = ["Adults", "Families", "Kids"];

export default function Events() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Events</h1>
      {audiences.map((aud) => (
        <section key={aud} className="mb-8">
          <h2 className="text-2xl font-bold mb-3">{aud}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {events.filter((e) => e.audience === aud).map((e) => (
              <article key={e.id} className="card">
                <h3 className="text-lg font-bold">{e.title}</h3>
                <p className="text-sm opacity-80">{e.date} at {e.time}</p>
                <Link href={`/events/${e.id}`} className="btn-primary inline-block mt-3">Details</Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
