import { commonContent } from "@/content/common";
import NextLink from "next/link";

type HeaderProps = {
  heading: string;
  allPageHref: string;
};

export default function Header({ heading, allPageHref }: HeaderProps) {
  return (
    <header className="flex items-center justify-between gap-4">
      <h2 className="text-4xl font-semibold">{heading}</h2>
      <NextLink
        href={allPageHref}
        className="border-b-2 border-b-current transition hover:text-primary"
      >
        {commonContent.components.productsSwiper.seeAll}
      </NextLink>
    </header>
  );
}
