import { Check, Gift, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import bonusRecetas from "@/assets/bonus-recetas.jpg";
import bonusHelados from "@/assets/bonus-helados.jpg";
import bonusPostresFrios from "@/assets/bonus-postres-frios.jpg";
import bonusPostresSaludables from "@/assets/bonus-postres-saludables.jpg";
import bonusPostresVeganos from "@/assets/bonus-postres-veganos.jpg";

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

        {/* Bonos Adicionales */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
            + Estos 5 Recetarios Premium (¡GRATIS!)
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Bono 1 */}
            <div className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-md overflow-hidden mb-3">
                <img src={bonusRecetas} alt="Más de 200 Exclusivas Recetas" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-card-foreground">Más de 200 Exclusivas Recetas</h4>
              <p className="text-xs text-accent font-semibold mb-2">Valor: $20.00</p>
              <p className="text-xs text-muted-foreground">Pasteles, galletas, flanes y tartas para toda ocasión.</p>
            </div>

            {/* Bono 2 */}
            <div className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-md overflow-hidden mb-3">
                <img src={bonusHelados} alt="Helados Saludables" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-card-foreground">Helados Saludables</h4>
              <p className="text-xs text-accent font-semibold mb-2">Valor: $15.00</p>
              <p className="text-xs text-muted-foreground">Helados cremosos, deliciosos y 100% saludables.</p>
            </div>

            {/* Bono 3 */}
            <div className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-md overflow-hidden mb-3">
                <img src={bonusPostresFrios} alt="Postres Fríos" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-card-foreground">Postres Fríos</h4>
              <p className="text-xs text-accent font-semibold mb-2">Valor: $10.00</p>
              <p className="text-xs text-muted-foreground">Cheesecakes, mousses, gelatinas y panna cottas.</p>
            </div>

            {/* Bono 4 */}
            <div className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-md overflow-hidden mb-3">
                <img src={bonusPostresSaludables} alt="Postres Saludables" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-card-foreground">Postres Saludables</h4>
              <p className="text-xs text-accent font-semibold mb-2">Valor: $15.00</p>
              <p className="text-xs text-muted-foreground">Bajos en azúcar, sin harinas refinadas, con super-ingredientes.</p>
            </div>

            {/* Bono 5 */}
            <div className="bg-card rounded-lg p-4 shadow-md border border-border hover:shadow-lg transition-shadow">
              <div className="aspect-square rounded-md overflow-hidden mb-3">
                <img src={bonusPostresVeganos} alt="Postres Veganos" className="w-full h-full object-cover" />
              </div>
              <h4 className="font-bold text-sm mb-1 text-card-foreground">Postres Veganos</h4>
              <p className="text-xs text-accent font-semibold mb-2">Valor: $15.00</p>
              <p className="text-xs text-muted-foreground">Sin huevo, leche ni mantequilla. Premium plant-based.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center shadow-strong">
          <p className="text-xl text-muted-foreground mb-2">Valor Total:</p>
          <p className="text-3xl text-muted-foreground line-through mb-4">$154.98 USD</p>
          
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
