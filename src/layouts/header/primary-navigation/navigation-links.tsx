import { collections } from "@/data/collections";
import { paths } from "@/paths";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  isIconVisible?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  children: React.ReactNode;
};

function NavLink({
  href,
  isIconVisible,
  onMouseEnter,
  onMouseLeave,
  children,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-center gap-1 whitespace-nowrap px-2 py-6 font-medium transition hover:text-primary"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span>{children}</span>
      {isIconVisible && (
        <ChevronDown
          size={16}
          className="pt-0.5 transition group-hover:rotate-180 group-hover:stroke-primary"
        />
      )}
    </Link>
  );
}

type NavigationLinksProps = {
  setMenu: React.Dispatch<
    React.SetStateAction<{ isVisible: boolean; activeLink: string }>
  >;
};

export default function NavigationLinks({ setMenu }: NavigationLinksProps) {
  return (
    <nav>
      <ul className="flex items-center justify-center gap-2">
        {Object.entries(collections).map(([key, value]) => {
          const hasSubCollections = value.subCollections.length > 0;
          return (
            <li key={key}>
              <NavLink
                href={`${paths.collections.index}/${value.id}`}
                {...(hasSubCollections && {
                  isIconVisible: true,
                  onMouseEnter: () =>
                    setMenu({ isVisible: true, activeLink: value.id }),
                  onMouseLeave: () =>
                    setMenu((prevState) => ({
                      ...prevState,
                      isVisible: false,
                    })),
                })}
              >
                {value.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
