import { collections } from "@/data/collections";
import { paths } from "@/paths";
import { ChevronDown } from "lucide-react";
import NextLink from "next/link";

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
    <NextLink
      href={href}
      className="group inline-flex items-center justify-center gap-1 px-2 py-6 font-medium transition hover:text-primary"
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
    </NextLink>
  );
}

type NavigationLinksProps = {
  setMenu: React.Dispatch<
    React.SetStateAction<{ isVisible: boolean; activeLink: string }>
  >;
};

export default function NavigationLinks({ setMenu }: NavigationLinksProps) {
  return (
    <nav className="flex items-center justify-center gap-2">
      {Object.entries(collections).map(([key, value]) => {
        const hasSubCollections = value.subCollections.length > 0;
        return (
          <NavLink
            key={key}
            href={`${paths.collections.index}/${value.id}`}
            {...(hasSubCollections && {
              isIconVisible: true,
              onMouseEnter: () =>
                setMenu({ isVisible: true, activeLink: value.id }),
              onMouseLeave: () =>
                setMenu((prevState) => ({ ...prevState, isVisible: false })),
            })}
          >
            {value.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
