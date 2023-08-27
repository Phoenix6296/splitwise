import { Navbar } from "@/components/Block/LandingPage";
import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Splitwise :: Login/Signup",
  description: "Split expenses with friends and family",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar />
      {children}
    </div>
  );
}
