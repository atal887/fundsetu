import Header from "./Header";
import Hero from "./Hero";
import ProcessSteps from "./ProcessSteps";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <ProcessSteps />
      <Footer />
    </div>
  );
}
