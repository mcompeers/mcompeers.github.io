import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Card from "./Card";

export default function SkillCard({ skill }) {
  const iconSize = "h-5 w-5";

  return (
    <Card shiny>
      <div className="flex flex-col items-center gap-4">
        <div className="text-lg font-bold">{skill.name}</div>
        <div className="flex opacity-50 transition-opacity group-hover:opacity-100">
          {[
            ...Array(5)
              .fill(1)
              .map((_, i) =>
                i + 1 <= skill.rating ? (
                  <StarIconSolid
                    key={i}
                    className={`text-white group-hover:text-yellow-400 ${iconSize}`}
                  />
                ) : (
                  <StarIcon key={i} className={`text-white ${iconSize}`} />
                )
              ),
          ]}
        </div>
        <div className="text-xs text-slate-500">{skill.tags.join(" - ")}</div>
      </div>
    </Card>
  );
}
