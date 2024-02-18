import { Poppins } from "next/font/google";
import "./globals.css";
import AuthContextProvider from "../contexts/authContext";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Task Flow",
  description: "Task Flow Administrator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
