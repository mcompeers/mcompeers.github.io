export default function Card({ children, clickable, className, shiny }) {
  return (
    <div
      className={`group rounded-md bg-slate-700 bg-opacity-30 p-4
        ${
          clickable &&
          "cursor-pointer transition-all hover:bg-opacity-50 active:scale-95 active:bg-opacity-20"
        }
        ${shiny && "shiny"}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
