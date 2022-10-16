import Link from "next/link";

interface LinkProps {
  children: string;
  href: string;
  color?: string;
}

export const LinkButton = ({
  children,
  href,
  color = "#ffffff",
}: LinkProps) => {
  return (
    <Link href={href}>
      <a
        className="px-4 py-2 my-1 font-medium rounded-xl hover:bg-link-hover transition duration-[250ms]"
        style={{ color }}
      >
        {children}
      </a>
    </Link>
  );
};
