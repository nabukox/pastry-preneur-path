import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-brownies.jpg";
import ebookBrownies from "@/assets/ebook-brownies-mockup.jpg";
import ebookVentas from "@/assets/ebook-ventas-mockup.jpg";

export const FinalCTASection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
      
      <div className="container max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
          No vendas solo postres. Vende celebraciones, antojos y momentos de felicidad.
        </h2>
        
        <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
          Hoy puedes decidir seguir teniendo un hobby caro o empezar a construir el negocio de tus sueños. Te estamos dando el <span className="font-bold">Producto</span> (los Brownies) y el <span className="font-bold">Sistema de Ventas</span> (El Arte de Vender). El único ingrediente que falta eres <span className="font-bold">tú</span>.
        </p>
        
        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-primary-foreground/20">
          <p className="text-xl text-primary-foreground mb-6 font-semibold">Recordatorio de la Oferta:</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <Card className="bg-primary-foreground/5 border-primary-foreground/20 p-4 flex items-center gap-4">
              <img 
                src={ebookBrownies} 
                alt="Guía de Brownies Para Emprender" 
                className="w-20 h-24 object-cover rounded shadow-lg"
              />
              <div className="flex-1">
                <p className="text-primary-foreground font-medium">Guía de Brownies Para Emprender</p>
                <p className="text-primary-foreground/80 text-sm">Valor $29.99</p>
              </div>
            </Card>
            
            <Card className="bg-primary-foreground/5 border-primary-foreground/20 p-4 flex items-center gap-4">
              <img 
                src={ebookVentas} 
                alt='Guía El Arte de Vender... Pasteles' 
                className="w-20 h-24 object-cover rounded shadow-lg"
              />
              <div className="flex-1">
                <p className="text-primary-foreground font-medium">Guía "El Arte de Vender... Pasteles"</p>
                <p className="text-primary-foreground/80 text-sm">Valor $49.99</p>
              </div>
            </Card>
          </div>
          
          <p className="text-3xl font-bold text-value-highlight mb-2">
            Llévate todo por solo $4.99
          </p>
          <p className="text-sm text-primary-foreground/80">
            (El bono GRATIS es por tiempo limitado)
          </p>
        </div>
        
        <Button 
          variant="cta" 
          size="xl"
          onClick={() => window.open("https://pay.hotmart.com/M102756072H", "_blank")}
        >
          SÍ, QUIERO MI NEGOCIO<br /> DE BROWNIES
        </Button>
      </div>
    </section>
  );
};
