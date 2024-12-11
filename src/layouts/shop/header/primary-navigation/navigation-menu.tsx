import { commonContent } from "@/content/shop/common";
import { collections } from "@/data/collections";
import Image from "next/image";
import NextLink from "next/link";
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
      className={`flex flex-col overflow-hidden rounded-md ${inView ? "animate-fadeInUp" : ""}`}
    >
      <NextLink href={href}>
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={375}
          className="mb-4 max-w-56 bg-primary-50"
        />
        <p className="font-medium">{title}</p>
      </NextLink>
    </article>
  );
}

type NavigationMenuProps = {
  isVisible: boolean;
  activeLink: string;
};

export default function NavigationMenu({
  isVisible,
  activeLink,
}: NavigationMenuProps) {
  const { ref, inView } = useInView();
  const activeCollection = collections.find((c) => c.id === activeLink);

  return (
    <div
      className={`absolute w-full bg-white transition ${isVisible ? "" : "-translate-y-full"}`}
    >
      <section className="content-container py-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-2xl font-semibold">{activeCollection?.label}</p>
          <button
            ref={ref}
            className={`rounded-full bg-primary p-5 font-medium uppercase text-white ${inView ? "animate-fadeInUp" : ""}`}
          >
            {commonContent.layout.header.primaryNavigation.menu.shopAll}{" "}
            {activeCollection?.label}
          </button>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          {activeCollection?.subCollections.map((subCollection) => (
            <SubCollectionCard
              key={subCollection.id}
              title={subCollection.label}
              href={`/collections/${subCollection.id}`}
              imageSrc={`/assets/images/collections/${subCollection.image}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
