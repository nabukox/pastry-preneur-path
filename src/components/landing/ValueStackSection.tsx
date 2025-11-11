import { Check, Gift, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ValueStackSection = () => {
  return (
    <section id="value-stack" className="py-20 px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
          Esto es todo lo que recibirás HOY para construir tu negocio:
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-xl p-8 shadow-strong border-2 border-border">
            <h3 className="text-2xl font-bold mb-2 text-card-foreground">
              E-book: Brownies Estilo New York Para Emprender
            </h3>
            <p className="text-muted-foreground mb-6">Valor: <span className="line-through">$29.99 USD</span></p>
            
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-card-foreground">Receta Maestra Infalible</p>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-card-foreground">Módulo de Variaciones Avanzadas (Vegano, Gluten-Free, etc.)</p>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-card-foreground">Módulo de Negocios (Costos, Precios, Redes Sociales)</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-8 shadow-strong border-2 border-accent relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <Gift className="w-12 h-12 text-accent opacity-20" />
            </div>
            <div className="mb-2 inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
              BONO POR TIEMPO LIMITADO
            </div>
            <h3 className="text-2xl font-bold mb-2 text-foreground">
              E-book: El Arte de Vender... Pasteles
            </h3>
            <p className="text-muted-foreground mb-6">Valor: <span className="line-through">$49.99 USD</span></p>
            
            <div className="space-y-3">
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">Taller de Fotografía con Celular</p>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">Plantillas de Guiones de Venta por WhatsApp</p>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">Guía para Manejar Objeciones de Precio</p>
              </div>
              <div className="flex gap-2 items-start">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground font-medium">Técnicas de Cierre de Venta y Up-selling</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center shadow-strong">
          <p className="text-xl text-muted-foreground mb-2">Valor Total:</p>
          <p className="text-3xl text-muted-foreground line-through mb-4">$79.98 USD</p>
          
          <p className="text-2xl md:text-3xl text-foreground font-semibold mb-4">
            Consíguelo todo hoy por un solo pago de:
          </p>
          
          <p className="text-6xl md:text-7xl font-bold text-accent mb-8">
            $4.99 USD
          </p>
          
          <Button 
            variant="cta" 
            size="xl"
            className="mb-6"
            onClick={() => window.open("https://pay.hotmart.com/M102756072H", "_blank")}
          >
            ¡SÍ, QUIERO EL PACK <br />COMPLETO AHORA!
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Lock className="w-5 h-5" />
              <span>Pago 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-5 h-5" />
              <span>Garantía de 7 Días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
