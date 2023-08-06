import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}
