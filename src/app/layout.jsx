// css
import "./globals.css";

// fonts
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ['100', '300', '400', '500', '700', '900'],
});

// sections
import Header from "@/sections/Header/Header";
import Footer from "@/sections/Footer/Footer";

// metadata
export const metadata = {
  title: "Home Page",
  description: "Home Page",
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout
