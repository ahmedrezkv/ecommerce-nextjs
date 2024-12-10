import { euclidCircularAFont } from "@/helpers/fonts";
import Header from "./header";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${euclidCircularAFont.className} antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
