import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Sidebar } from "./";
import { Provider } from "@/app/Components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Miku Anime",
  description:
    "Explore a world of anime with personalized recommendations and connect with fellow fans. Our platform combines anime discovery with social interaction, bringing you the latest titles, trending series, and community reviews—all in one place.",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          <div className="flex h-screen">
            <aside className="hidden md:block md:w-1/6">
              <Sidebar />
            </aside>
            <main className="flex-1">{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
