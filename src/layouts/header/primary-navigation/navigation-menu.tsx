import { commonContent } from "@/content/common";
import { collections } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type SubCollectionCardProps = {
  title: string;
  href: string;
  imageSrc: string;
};

function SubCollectionCard({ href, title, imageSrc }: SubCollectionCardProps) {
  const { ref, inView } = useInView();

  return (
    <article
      ref={ref}
      className={`group flex flex-col overflow-hidden rounded-lg ${inView ? "animate-fadeInUp" : ""}`}
    >
      <Link href={href}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={375}
          className="mb-4 max-w-56 bg-primary-50"
        />
        <p className="font-medium transition group-hover:text-primary">
          {title}
        </p>
      </Link>
    </article>
  );
}

type NavigationMenuProps = {
  menu: {
    isVisible: boolean;
    activeLink: string;
  };
  setMenu: React.Dispatch<
    React.SetStateAction<{ isVisible: boolean; activeLink: string }>
  >;
};

export default function NavigationMenu({ menu, setMenu }: NavigationMenuProps) {
  const { isVisible, activeLink } = menu;
  const { ref, inView } = useInView();
  const activeCollection = collections.find((c) => c.id === activeLink);

  useEffect(() => {
    function handleEscKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMenu({ isVisible: false, activeLink: "" });
      }
    }
    window.addEventListener("keydown", handleEscKeyDown);
    return () => window.removeEventListener("keydown", handleEscKeyDown);
  }, [setMenu]);

  return (
    <div
      className={`absolute w-full bg-white transition duration-500 ${isVisible ? "" : "-translate-y-full"}`}
      onMouseEnter={() =>
        setMenu((prevState) => ({ ...prevState, isVisible: true }))
      }
      onMouseLeave={() =>
        setMenu((prevState) => ({ ...prevState, isVisible: false }))
      }
    >
      <section className="content-container pb-10 pt-8">
        <div
          ref={ref}
          className={`mb-8 flex items-center justify-between ${inView ? "animate-fadeInUp" : ""}`}
        >
          <p className="text-2xl font-semibold">{activeCollection?.label}</p>
          {activeCollection?.label && (
            <button className="rounded-full bg-primary p-4 font-medium uppercase text-white transition hover:bg-primary-700">
              {commonContent.layout.header.primaryNavigation.menu.shopAll}{" "}
              {activeCollection.label}
            </button>
          )}
        </div>
        <ul className="flex w-full flex-wrap items-center gap-4">
          {activeCollection?.subCollections.map((subCollection) => (
            <li key={subCollection.id}>
              <SubCollectionCard
                title={subCollection.label}
                href={`/collections/${subCollection.id}`}
                imageSrc={`/assets/media/collections/${subCollection.image}`}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
