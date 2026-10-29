import AnimalCard from "@/components/AnimalCard";
import { getAnimals } from "@/lib/data";

export const metadata = { title: "Animals – Alder Brook" };

export default function Animals() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">British animals</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {getAnimals().map((a) => <AnimalCard key={a.id} animal={a} />)}
      </div>
    </>
  );
}
