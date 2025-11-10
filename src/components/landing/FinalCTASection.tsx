import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-brownies.jpg";

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
          <p className="text-xl text-primary-foreground mb-4 font-semibold">Recordatorio de la Oferta:</p>
          
          <div className="space-y-2 mb-6 text-primary-foreground/90">
            <p>✓ Guía de Brownies Para Emprender (Valor $29.99)</p>
            <p>✓ Guía "El Arte de Vender... Pasteles" (Valor $49.99)</p>
          </div>
          
          <p className="text-3xl font-bold text-value-highlight mb-2">
            Llévate todo por solo $19.99
          </p>
          <p className="text-sm text-primary-foreground/80">
            (El bono GRATIS es por tiempo limitado)
          </p>
        </div>
        
        <Button 
          variant="cta" 
          size="xl"
        >
          SÍ, QUIERO MI NEGOCIO<br /> DE BROWNIES
        </Button>
      </div>
    </section>
  );
};
