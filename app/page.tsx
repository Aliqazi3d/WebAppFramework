import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-brand text-white rounded-2xl p-6 md:p-10">
        <h1 className="font-display text-3xl md:text-5xl font-bold">Alder Brook Wildlife Centre</h1>
        <p className="mt-3 max-w-prose">We rescue, rehabilitate and release injured British wildlife, and help people share their gardens with it.</p>
        <Link href="/events" className="btn-primary inline-block mt-5">See upcoming events</Link>
      </section>
      <section className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card"><h2 className="text-xl font-bold">Our mission</h2><p className="mt-2">Visitor tickets and donations pay for food, treatment and release of thousands of animals every year.</p></div>
        <div className="card"><h2 className="text-xl font-bold">Conservation</h2><p className="mt-2">We protect habitats, run nest-box schemes and teach schools how to help local wildlife.</p></div>
      </section>
    </>
  );
}
