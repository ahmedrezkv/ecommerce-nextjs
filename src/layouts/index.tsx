import { euclidCircularAFont } from "@/helpers/fonts";
import Header from "./header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={euclidCircularAFont.variable}>
      <body className="font-main antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
