import { commonContent } from "@/content/common";
import { collections } from "@/data/collections";
import { paths } from "@/paths";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="whitespace-nowrap transition hover:text-primary-200"
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="flex gap-20 text-white">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">
          {commonContent.layout.footer.navigation.help.label}
        </h2>
        <ul className="flex flex-col gap-4">
          {commonContent.layout.footer.navigation.help.links.map((link) => (
            <li key={link.id}>
              <NavLink href={paths.help[link.id as keyof typeof paths.help]}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">
          {commonContent.layout.footer.navigation.about.label}
        </h2>
        <ul className="flex flex-col gap-4">
          {commonContent.layout.footer.navigation.about.links.map((link) =>
            link.id == "careers" ? (
              <li key={link.id}>
                <NavLink href={paths.careers.index}>{link.label}</NavLink>
              </li>
            ) : (
              <li key={link.id}>
                <NavLink
                  href={paths.about[link.id as keyof typeof paths.about]}
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">
          {commonContent.layout.footer.navigation.resources.label}
        </h2>
        <ul className="flex flex-col gap-4">
          {commonContent.layout.footer.navigation.resources.links.map(
            (link) => (
              <li key={link.id}>
                <NavLink
                  href={
                    paths.resources[link.id as keyof typeof paths.resources]
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ),
          )}
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold">
          {commonContent.layout.footer.navigation.shop.label}
        </h2>
        <ul className="flex flex-col gap-4">
          {collections.map((link) => (
            <li key={link.id}>
              <NavLink href={`${paths.collections.index}/${link.id}`}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
