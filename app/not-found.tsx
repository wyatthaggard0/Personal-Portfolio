import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="font-display text-3xl leading-tight">Not found</h1>
      <p className="mt-4">There&rsquo;s nothing at this address.</p>
      <p className="mt-6">
        <Link href="/" className="meta text-ink hover:underline">
          ← Back to the index
        </Link>
      </p>
    </div>
  );
}
