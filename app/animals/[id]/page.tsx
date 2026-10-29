import Link from "next/link";
import { getAnimal, getAnimals } from "@/lib/data";

export function generateStaticParams() { return getAnimals().map((a) => ({ id: a.id })); }

export default async function AnimalDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const animal = getAnimal(id);
  if (!animal) return <p>Animal not found. <Link href="/animals" className="underline">Back to animals</Link></p>;
  return (
    <article className="card max-w-2xl mx-auto">
      <Link href="/animals" className="underline text-sm">← All animals</Link>
      <div className="text-8xl mt-4" aria-hidden="true">{animal.emoji}</div>
      <h1 className="text-3xl font-bold mt-2">{animal.name}</h1>
      <p className="italic text-emerald-700 dark:text-emerald-400">{animal.species}</p>
      <p className="mt-2"><strong>Status:</strong> {animal.status}</p>
      <p><strong>Habitat:</strong> {animal.habitat}</p>
      <p className="mt-3">{animal.description}</p>
    </article>
  );
}
