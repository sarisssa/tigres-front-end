import Link from "next/link";

interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

export const LinkButton = ({ children, href, className }: LinkProps) => {
  return (
    <Link href={href}>
      <a
        className={`dark:text-white text-black px-4 py-2 my-1 font-medium rounded-xl hover:bg-link-hover transition duration-[250ms] ${className}`}
      >
        {children}
      </a>
    </Link>
  );
};
