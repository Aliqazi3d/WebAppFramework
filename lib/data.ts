import animals from "@/public/animals.json";
export type Animal = (typeof animals)[number];
export const getAnimals = () => animals;
export const getAnimal = (id: string) => animals.find((a) => a.id === id);

export const events = [
  { id: "hedgehog-night", title: "Hedgehog Night Walk", audience: "Adults", date: "2026-11-14", time: "18:30", description: "A guided evening walk with thermal cameras to spot hedgehogs foraging. Wrap up warm." },
  { id: "family-feed", title: "Family Feeding Day", audience: "Families", date: "2026-11-21", time: "11:00", description: "Help our keepers prepare meals for the otters, owls and squirrels. Suitable for all ages." },
  { id: "mini-rangers", title: "Mini Rangers Club", audience: "Kids", date: "2026-11-28", time: "10:00", description: "Ages 5–11 build bug hotels, make bird feeders and earn a Mini Ranger badge." },
  { id: "owl-talk", title: "Barn Owl Evening Talk", audience: "Adults", date: "2026-12-05", time: "19:00", description: "Our rehabilitation team explains how injured owls are cared for and released." },
];
export const getEvent = (id: string) => events.find((e) => e.id === id);
