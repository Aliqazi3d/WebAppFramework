import Link from "next/link";
import type { Animal } from "@/lib/data";

export default function AnimalCard({ animal }: { animal: Animal }) {
  return (
    <article className="card">
      <div className="text-5xl" aria-hidden="true">{animal.emoji}</div>
      <h2 className="text-xl font-bold mt-2">{animal.name}</h2>
      <p className="text-sm opacity-80">{animal.habitat}</p>
      <Link href={`/animals/${animal.id}`} className="btn-primary inline-block mt-3">View {animal.name}</Link>
    </article>
  );
}
