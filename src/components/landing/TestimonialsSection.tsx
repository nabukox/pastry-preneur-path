import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-section-alt">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-12 text-foreground">
          Ellos ya están horneando y vendiendo:
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-value-highlight text-value-highlight" />
              ))}
            </div>
            
            <p className="text-card-foreground mb-4 leading-relaxed">
              "¡La receta es infalible! La corteza crujiente y el interior fudgy son exactamente como los describe. ¡Vendí mi primera tanda en una hora en un mercado local!"
            </p>
            
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-card-foreground">María P.</p>
              <p className="text-sm text-muted-foreground">@DeliciasDeMaria</p>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-value-highlight text-value-highlight" />
              ))}
            </div>
            
            <p className="text-card-foreground mb-4 leading-relaxed">
              "Estaba aterrada de poner precios. El Módulo 6 de la guía de brownies y la plantilla de cotización de la guía de ventas me salvaron. ¡Por fin sé cuánto gano!"
            </p>
            
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-card-foreground">Javier G.</p>
              <p className="text-sm text-muted-foreground">Sabor Casero</p>
            </div>
          </div>
          
          <div className="bg-card rounded-xl p-8 shadow-soft">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-value-highlight text-value-highlight" />
              ))}
            </div>
            
            <p className="text-card-foreground mb-4 leading-relaxed">
              "Tenía un hobby. Ahora tengo un negocio. La guía de ventas fue la pieza que me faltaba. Entender que 'vender es servir' me cambió la mentalidad. Dejé de tener miedo."
            </p>
            
            <div className="border-t border-border pt-4">
              <p className="font-semibold text-card-foreground">Sofía R.</p>
              <p className="text-sm text-muted-foreground">Pastelería Sofi</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
