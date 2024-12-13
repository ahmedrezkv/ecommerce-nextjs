import { commonContent } from "@/content/common";
import { paths } from "@/paths";
import Image from "next/image";
import Link from "next/link";

export default function Legal() {
  return (
    <div className="flex items-center gap-8 border-b border-t border-solid border-white/50 py-6 text-sm text-white">
      <p className="whitespace-nowrap">
        {commonContent.layout.footer.legal.rights}
      </p>
      <ul className="flex items-center gap-4">
        {commonContent.layout.footer.legal.links.map((link) => (
          <li key={link.id}>
            <Link
              href={paths.legal[link.id as keyof typeof paths.legal]}
              className="whitespace-nowrap transition hover:text-primary-200"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Image
        src="/assets/media/layouts/payment-options.svg"
        alt={commonContent.layout.footer.paymentOptions}
        width={194}
        height={20}
        className="ms-auto"
      />
    </div>
  );
}
