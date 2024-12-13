import Info from "./info";
import Legal from "./legal";
import Navigation from "./navigation";

export default function Footer() {
  return (
    <footer className="bg-primary-900">
      <div className="content-container py-14">
        <div className="mb-10 flex justify-between gap-20">
          <Info />
          <Navigation />
        </div>
        <Legal />
      </div>
    </footer>
  );
}
