import Link from "next/link";

export default function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="rounded-md bg-gradient-to-t from-indigo-900 to-indigo-800 px-3 py-2 ring-offset-2 hover:ring-1"
    >
      {children}
    </Link>
  );
}
