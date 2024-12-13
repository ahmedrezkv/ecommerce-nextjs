import Logo from "@/components/logo";
import { commonContent } from "@/content/common";
import { paths } from "@/paths";
import { Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Info() {
  return (
    <div className="max-w-md">
      <Logo color="white" classes="mb-6" />
      <div className="mb-6 flex flex-col items-start gap-4 text-sm text-white">
        <p>{commonContent.layout.footer.text.para1}</p>
        <p>{commonContent.layout.footer.text.para2}</p>
      </div>
      <div className="mb-4 flex items-center gap-4">
        <Link
          href={paths.socialMedia.facebook}
          target="_blank"
          className="inline-block rounded-full border-2 border-solid border-white p-2 transition hover:bg-primary"
        >
          <span className="sr-only">
            {commonContent.layout.footer.socialMedia.facebook.label}
          </span>
          <Facebook size={14} className="stroke-white" />
        </Link>
        <Link
          href={paths.socialMedia.instagram}
          target="_blank"
          className="inline-block rounded-full border-2 border-solid border-white p-2 transition hover:bg-primary"
        >
          <span className="sr-only">
            {commonContent.layout.footer.socialMedia.instagram.label}
          </span>
          <Instagram size={14} className="stroke-white" />
        </Link>
      </div>
      <Image
        src="/assets/media/layouts/awards.webp"
        alt={commonContent.layout.footer.awards}
        width={684}
        height={229}
        className="max-w-72"
      />
    </div>
  );
}
