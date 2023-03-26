import { useRouter } from "next/router";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import IconButton from "./buttons/IconButton";

export default function TitleBar({ children }) {
  const router = useRouter();
  let backButton = false;

  if (router.pathname.split("/").length > 2) backButton = true;

  return (
    <section className="my-4 flex h-12 items-center gap-4">
      {backButton && (
        <IconButton onClick={router.back}>
          <ChevronLeftIcon />
        </IconButton>
      )}
      <div className="flex flex-grow items-center justify-between">
        {children}
      </div>
    </section>
  );
}
