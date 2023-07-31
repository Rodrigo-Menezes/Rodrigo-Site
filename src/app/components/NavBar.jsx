"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} group relative text-light `}>
      {title}
      <span
        className={`h-px inline-block bg-primary absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
export default function NavBar() {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <div className="w-full flex justify-between items-center lg:hidden">
        <div className="w-28">
          <h1 className="text-light font-bold text-3xl">RM</h1>
         
          <h2 className="text-primary text-3xl font-bold">Dev</h2>
        </div>
        <nav>
          <CustomLink href="/" title="Início" className="mr-4" />
          <CustomLink href="/sobre" title="Sobre" className="mx-4" />
          <CustomLink href="/projetos" title="Projetos" className="mx-4" />
        </nav>
      </div>
    </header>
  );
}
