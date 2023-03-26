import Link from "next/link";
import Card from "./Card";

export default function LinkCard({ children, href }) {
  return (
    <Link href={href}>
      <Card clickable shiny>
        {children}
      </Card>
    </Link>
  );
}
