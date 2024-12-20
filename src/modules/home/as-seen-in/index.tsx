import { homeContent } from "@/content/home";
import Image from "next/image";

export default function AsSeenIn() {
  const images = [
    { file: "seen-in-1.svg", width: 65, height: 32 },
    { file: "seen-in-2.svg", width: 166, height: 20 },
    { file: "seen-in-3.svg", width: 93, height: 32 },
    { file: "seen-in-4.svg", width: 126, height: 32 },
    { file: "seen-in-5.svg", width: 132, height: 32 },
  ];

  return (
    <section>
      <div className="content-container py-10">
        <div className="flex overflow-hidden rounded-xl bg-primary-50 [&>ul]:hover:[animation-play-state:paused]">
          <div className="relative z-[1] flex items-center justify-center bg-primary-50 px-8 after:absolute after:-end-full after:z-[1] after:h-full after:w-full after:bg-gradient-to-r after:from-primary-50">
            <h2 className="whitespace-nowrap text-xl font-semibold">
              {homeContent.asSeenIn.asSeenIn}
            </h2>
          </div>
          <ul className="flex animate-scroll-infinite py-12">
            {images.map((image) => (
              <li key={image.file} className="px-20">
                <Image
                  src={`/assets/media/home/seen-in/${image.file}`}
                  alt={homeContent.asSeenIn.seenInCompany}
                  width={image.width}
                  height={image.height}
                  className="max-w-56"
                />
              </li>
            ))}
          </ul>
          <ul aria-hidden="true" className="flex animate-scroll-infinite py-12">
            {images.map((image) => (
              <li key={image.file} className="px-20">
                <Image
                  src={`/assets/media/home/seen-in/${image.file}`}
                  alt={homeContent.asSeenIn.seenInCompany}
                  width={image.width}
                  height={image.height}
                  className="max-w-56"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
