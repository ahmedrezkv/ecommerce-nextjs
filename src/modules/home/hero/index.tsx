import { homeContent } from "@/content/home";
import { CalendarDays, ShieldCheck, Truck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative">
      <video className="" muted autoPlay loop>
        <source src="/assets/media/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute start-0 top-1/2 w-full -translate-y-1/2">
        <div className="content-container flex flex-col items-start gap-6">
          <h2 className="text-6xl font-bold text-white">
            {homeContent.hero.heading}
          </h2>
          <p className="text-2xl font-semibold text-white">
            {homeContent.hero.para}
          </p>
          <button className="mt-2 w-full max-w-64 rounded-full bg-white p-4 font-semibold uppercase transition hover:bg-primary-100">
            {homeContent.hero.button}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 bg-primary-50 py-4 text-sm">
        <div className="flex items-center gap-2">
          <Truck size={20} />
          <span>{homeContent.hero.features.delivery}</span>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays size={20} />
          <span>{homeContent.hero.features.trial}</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck size={20} />
          <span>{homeContent.hero.features.warranty}</span>
        </div>
      </div>
    </section>
  );
}
