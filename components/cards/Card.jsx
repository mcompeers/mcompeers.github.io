export default function Card({ children, clickable, className }) {
  return (
    <div
      className={`group rounded-lg border border-slate-200 bg-opacity-30 p-4 dark:border-neutral-700 ${
        clickable ? "cursor-pointer transition-all hover:bg-opacity-50" : ""
      }${className ?? ""}`}
    >
      {children}
    </div>
  );
}
