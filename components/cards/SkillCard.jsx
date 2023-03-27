import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import Card from "./Card";

export default function SkillCard({ skill }) {
  return (
    <Card shiny>
      <div className="flex flex-col items-center gap-4">
        <div className="text-lg font-bold">{skill.name}</div>
        <div className="flex transition-opacity">
          {[
            ...Array(5)
              .fill(1)
              .map((_, i) =>
                i + 1 <= skill.rating ? (
                  <StarIconSolid key={i} className="icon text-yellow-500" />
                ) : (
                  <StarIcon key={i} className="icon" />
                )
              ),
          ]}
        </div>
        <div className="text-xs font-bold opacity-30">
          {skill.tags.join(" - ")}
        </div>
      </div>
    </Card>
  );
}
