import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-brownies.jpg";

export const HeroSection = () => {
  const handleCTA = () => {
    document.getElementById("value-stack")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-hero-gradient-start/95 to-hero-gradient-end/90" />
      </div>
      
      <div className="container relative z-10 px-6 py-20 text-center">
        <p className="text-primary-foreground/90 text-sm md:text-base font-semibold tracking-widest uppercase mb-4">
          Para Reposteros Apasionados Que Quieren Emprender
        </p>
        
        <h1 className="text-primary-foreground text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          ¿Amas hornear pero no sabes vender?
        </h1>
        
        <p className="text-primary-foreground text-4xl md:text-5xl mb-6">
          Transforma tu pasión en un negocio rentable.
        </p>
        
        <p className="text-primary-foreground/95 text-xl md:text-2xl mb-10 max-w-4xl mx-auto">
          Descubre la receta exacta del <span className="font-bold">Brownie Estilo New York</span> que se vende solo y llévate <span className="font-bold text-value-highlight">GRATIS</span> la guía maestra <span className="italic">"El Arte de Vender... Pasteles"</span>.
        </p>
        
        <Button 
          variant="cta" 
          size="xl"
          onClick={handleCTA}
          className="animate-pulse hover:animate-none"
        >
          SÍ, QUIERO MI NEGOCIO <br /> DE BROWNIES
        </Button>
      </div>
    </section>
  );
};
