import Link from "next/link";
import { events, getEvent } from "@/lib/data";

export function generateStaticParams() { return events.map((e) => ({ id: e.id })); }

export default async function EventDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const event = getEvent(id);
  if (!event) return <p>Event not found. <Link href="/events" className="underline">Back to events</Link></p>;
  return (
    <article className="card max-w-2xl mx-auto">
      <Link href="/events" className="underline text-sm">← All events</Link>
      <h1 className="text-3xl font-bold mt-3">{event.title}</h1>
      <p className="mt-1 font-semibold text-emerald-700 dark:text-emerald-400">{event.audience} · {event.date} at {event.time}</p>
      <p className="mt-3">{event.description}</p>
    </article>
  );
}
