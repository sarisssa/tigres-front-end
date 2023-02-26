import Link from "next/link";
import { useRouter } from "next/router";

interface LinkProps {
  children: string;
  href: string;
  className?: string;
}

export const LinkButton = ({ children, href }: LinkProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`dark:text-white text-black px-4 py-2 my-1 font-medium rounded-xl hover:bg-link-hover transition duration-[250ms] ${
          router.pathname === href
            ? ""
            : "!text-tigres-gray !dark:text-dark-tigres-gray"
        }`}
      >
        {children}
      </a>
    </Link>
  );
};
