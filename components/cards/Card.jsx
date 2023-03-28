export default function Card({ children, clickable, className, special }) {
  return (
    <div
      className={`
      inline-block 
      h-full 
      w-full
      rounded-lg
      bg-slate-200
      from-pink-500
      via-red-500
      to-yellow-500
      p-0.5 dark:bg-zinc-800
      ${special ? "bg-gradient-to-br" : ""}
      `}
    >
      <div
        className={`group h-full rounded-lg bg-slate-50 p-4 shadow-sm dark:bg-zinc-900 ${
          clickable
            ? "cursor-pointer transition-all hover:bg-opacity-50 active:shadow-inner"
            : ""
        }${className ?? ""}`}
      >
        {children}
      </div>
    </div>
  );
}
