"use client";
import { useState, FormEvent } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

const input = "block w-full rounded border p-2 text-black";

export default function VoucherPage() {
  // library hook keeps the logged-in user in sync with Firebase
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = async (e: FormEvent, mode: "login" | "register") => {
    e.preventDefault();
    setError("");
    try {
      const action = mode === "login" ? signInWithEmailAndPassword : createUserWithEmailAndPassword;
      await action(auth, email, password);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  if (loading) return <p>Loading…</p>;

  // Not logged in: show the form instead of the voucher
  if (!user) {
    return (
      <form className="card mx-auto max-w-md space-y-3" onSubmit={(e) => submit(e, "login")}>
        <h1 className="text-2xl font-bold">Subscribers only</h1>
        <p>Log in to claim your 20% admission voucher.</p>
        <label className="block">Email
          <input className={input} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label className="block">Password
          <input className={input} type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
        <div className="flex gap-3">
          <button className="btn-primary" type="submit">Log in</button>
          <button className="btn-primary" type="button" onClick={(e) => submit(e, "register")}>Subscribe</button>
        </div>
      </form>
    );
  }

  return (
    <div className="card mx-auto max-w-lg border-4 border-dashed border-emerald-600 text-center">
      <h1 className="text-3xl font-extrabold text-emerald-700 dark:text-emerald-400">Official discount voucher</h1>
      <p className="mt-2">20% off admission at Alder Brook Wildlife Centre.</p>
      <p className="mt-2 font-mono text-sm">Subscriber: {user.email}</p>
      <div className="no-print mt-4 flex justify-center gap-3">
        <button className="btn-primary" onClick={() => window.print()}>Print voucher</button>
        <button className="btn-primary" onClick={() => signOut(auth)}>Log out</button>
      </div>
    </div>
  );
}
