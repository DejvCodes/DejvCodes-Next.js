// components/TechIconGrid.tsx
import Image from "next/image";
import Link from "next/link";
import { FrameworkCard } from "./FrameWorkCard";


export type TechItem = {
  name: string;
  href?: string;
  iconSrc: string; // např. "/tech/react.svg" (v public/)
  glow: string; // např. "#61DAFB"
};

const DEFAULT_ITEMS: TechItem[] = [
  { name: "Vite", href: "https://vite.dev", iconSrc: "/tech/vite.svg", glow: "#A855F7" },
  { name: "React", href: "https://react.dev", iconSrc: "/tech/react.svg", glow: "#61DAFB" },
  { name: "Next.js", href: "https://nextjs.org", iconSrc: "/tech/nextjs.svg", glow: "#ffffff" },
  { name: "Vue", href: "https://vuejs.org", iconSrc: "/tech/vue.svg", glow: "#42B883" },
  { name: "Svelte", href: "https://svelte.dev", iconSrc: "/tech/svelte.svg", glow: "#FF3E00" },
  { name: "Angular", href: "https://angular.dev", iconSrc: "/tech/angular.svg", glow: "#DD0031" },
  { name: "Tailwind", href: "https://tailwindcss.com", iconSrc: "/tech/tailwind.svg", glow: "#38BDF8" },
  { name: "TypeScript", href: "https://www.typescriptlang.org", iconSrc: "/tech/typescript.svg", glow: "#3178C6" },
];

function TechIconGrid({
  items = DEFAULT_ITEMS,
  className = "",
}: {
  items?: TechItem[];
  className?: string;
}) {
  return (
    <div
      className={[
        "grid grid-cols-4 gap-6 sm:grid-cols-6 lg:grid-cols-8",
        className,
      ].join(" ")}
    >
      {items.map((item) => (
        <TechTile key={item.name} item={item} />
      ))}
    </div>
  );
}

function TechTile({ item }: { item: TechItem }) {
  const Comp = item.href ? Link : "div";

  return (
    <Comp
      {...(item.href ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
      aria-label={item.name}
      title={item.name}
      // CSS proměnná pro barvu glow
      style={{ ["--glow" as any]: item.glow } as React.CSSProperties}
className={[
  "group relative flex h-20 w-20 items-center justify-center rounded-2xl",
  "bg-white/[0.04] ring-1 ring-white/10 backdrop-blur",

  // ✅ asymetrie: hover-in 1s, hover-out 5s
  "transition-[box-shadow,transform,ring-color] ease-out duration-[4000ms] hover:duration-[100ms]",

  "hover:-translate-y-0.5 hover:ring-white/20",
  "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_0_28px_var(--glow)]",

  "before:content-[''] before:absolute before:inset-0 before:rounded-2xl",
  "before:bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.10),transparent_60%)]",
  "before:opacity-70 before:pointer-events-none",

  // ✅ glow overlay (opacity) taky 1s in / 5s out
  "after:content-[''] after:absolute after:inset-0 after:rounded-2xl",
  "after:opacity-0 after:pointer-events-none",
  "after:transition-opacity after:ease-out after:duration-[4000ms] group-hover:after:duration-[100ms]",
  "group-hover:after:opacity-100",
  "after:bg-[radial-gradient(60%_60%_at_50%_50%,var(--glow),transparent_70%)]",
  "after:blur-2xl",
].join(" ")}

    >
      {/* <Image
        src={item.iconSrc}
        alt={item.name}
        width={40}
        height={40}
        className="h-10 w-10 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
      /> */}
            <FrameworkCard name="React" iconSrc="/tech/react.svg" glowColor="rgba(97,218,251,0.9)" />

      
    </Comp>
  );
}

export default TechIconGrid;