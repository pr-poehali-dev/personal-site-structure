import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionCards from "@/components/SectionCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SectionCards />

      {/* Футер */}
      <footer className="bg-gray-50 border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600 font-open-sans">
            © 2024 Алина Девликамова. Студентка факультета психологии и
            дефектологии МГПУ им. Евсеева
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
