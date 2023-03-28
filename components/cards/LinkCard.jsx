import Link from "next/link";
import Card from "./Card";

export default function LinkCard({ children, href, className }) {
  return (
    <Link href={href}>
      <Card clickable className={className}>
        {children}
      </Card>
    </Link>
  );
}
