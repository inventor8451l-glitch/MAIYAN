import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "MAIYAN | A Blessing in Laikipia",
  description: "A considered escape at the foothills of Mt Kenya. Discover MAIYAN in Laikipia, Kenya.",
  metadataBase: new URL("https://maiyan.example"),
  openGraph: { title: "MAIYAN | A Blessing in Laikipia", description: "God's blessing, at the foot of Mt Kenya", type: "website" }
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}