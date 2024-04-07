// css
import Style from "./contact.module.css";

// metadata
export const metadata = {
  title: "Contact Us Page",
  description: "Contact Us Page",
};

const AboutLayout = ({ children }) => {
  return (
    <main>
      {children}
    </main>
  );
}

export default AboutLayout
