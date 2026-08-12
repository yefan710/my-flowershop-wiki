type IconProps = {
  name: "book-open" | "badge-check" | "external-link" | "route" | "sparkles" | "clock-3" | "chevron-right" | "menu";
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  return (
    <Image
      aria-hidden="true"
      alt=""
      className={className}
      height={size}
      src={`/icons/${name}.svg`}
      width={size}
    />
  );
}
import Image from "next/image";
