// components/FrameworkCard.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  iconSrc: string;   // "/tech/react.svg"
  glowColor: string; // "rgba(97,218,251,0.9)" nebo "#61DAFB"
  href?: string;
};

export function FrameworkCard({ name, iconSrc, glowColor, href }: Props) {
  const Comp = href ? Link : "div";

  return (
    <Comp
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="framework-card"
      style={{ ["--glow-color" as any]: glowColor } as React.CSSProperties}
      aria-label={name}
      title={name}
    >
      <Image src={iconSrc} alt={name} width={40} height={40} draggable={false} />
    </Comp>
  );
}
