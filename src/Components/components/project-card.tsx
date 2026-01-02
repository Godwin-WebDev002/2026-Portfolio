import { Badge } from "../ui/badge";
import { LuExternalLink, LuGithub } from "react-icons/lu";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

export function ProjectCard({
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  image,
}: ProjectProps) {
  return (
    <div className="glass glass-hover rounded-2xl overflow-hidden group">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className=" h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className=" hidden absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity sm:flex items-center justify-center gap-4 backdrop-blur-sm">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/50 rounded-full hover:bg-white/20 transition-colors"
          >
            <LuGithub className="w-6 h-6" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/50 rounded-full hover:bg-white/20 transition-colors"
          >
            <LuExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl text-white sm:text-violet-500 font-bold mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-white/5 text-[10px] font-medium border-white/10 uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className=" sm:hidden flex items-center justify-center gap-4 mt-5">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/50 rounded-full hover:bg-white/20 transition-colors"
          >
            <LuGithub className="w-4 h-4" />
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/50 rounded-full hover:bg-white/20 transition-colors"
          >
            <LuExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
