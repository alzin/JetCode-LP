import { GoogleAnalytics } from '@next/third-parties/google'

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
  title: "JetCode",
  description: "Accelerate Your Development with JetCode: The Future of Efficient Programming In the fast-paced world of technology, every second counts. Especially for engineering managers and programmers juggling multiple projects and tight deadlines. That's why we created JetCode, the tool that turns your system requirements into ready-to-use code with the click of a button",
  keywords: "JetCode,jet code,AI programming,Code generation,AI-powered coding,GPT-4 coding,Efficient programming,Automated coding,Coding tools,Programming assistance,AI coding tools,GPT-4 tools,Coding efficiency,Programming solutions,AI in programming,Coding assistance,AI for developers,GPT-4 for coding,Coding with AI,GPT-4 coding tools,Coding with GPT-4,Coding with AI,AI programming solutions,GPT-4 programming solutions,Coding with GPT-4,AI in programming,Programming with AI,GPT-4 programming,AI coding tools,GPT-4 coding tools,Coding with GPT-4,AI in coding,Programming with AI,GPT-4 programming,AI coding assistance,Coding with GPT-4,AI for developers,GPT-4 for coding,Coding with AI,AI programming tools,GPT-4 programming tools,Coding with GPT-4,AI in coding,Programming with AI,GPT-4 programming,AI coding assistance,Coding with GPT-4,AI for programmers,GPT-4 for programmers,Coding with AI,AI programming solutions,GPT-4 programming solutions,Coding with GPT-4,AI in programming,Programming with AI,GPT-4 programming,AI coding tools,GPT-4 coding tools,Coding with GPT-4,AI in coding,Programming with AI,GPT-4 programming,AI coding assistance,Coding with GPT-4,AI for developers",
  verification: {
    google: "6TCTJl5bNrPr6biaaehYnfrZMY6whJxqe5fzDcfnRKw",
  },
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-M0M6BDXRM5" />
    </html>
  );
}

export default RootLayout
