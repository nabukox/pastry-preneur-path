import { Check } from "lucide-react";
import ebookBrownies from "@/assets/ebook-brownies-mockup.png";

export const SolutionSection = () => {
  return (
    <section className="py-20 px-6 bg-section-alt">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              La Solución: Un Producto Estrella. Rentable y Adictivo.
            </h2>
            
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              Para empezar un negocio, no necesitas un menú de 50 productos. Necesitas <span className="font-bold text-foreground">UNO que sea perfecto</span>. Te presento el e-book <span className="font-bold text-foreground">"Brownies Estilo New York Para Emprender"</span>.
            </p>
            
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              No es solo una receta; es un <span className="font-bold text-foreground">plan de negocios completo</span> enfocado en un solo producto de altísima demanda, bajo costo de producción y un gran margen de ganancia.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  La receta paso a paso para la textura <span className="font-semibold">fudgy</span> (jugosa y cremosa) con la corteza crujiente que los hace únicos.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  <span className="font-semibold">Variaciones Avanzadas:</span> Aprende a crear versiones con nueces, caramelo, veganos y sin gluten.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  <span className="font-semibold">El Módulo de Negocios:</span> Cómo calcular tus costos, poner precios justos, y vender en redes sociales.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={ebookBrownies} 
              alt="E-book Brownies Estilo New York Para Emprender"
              className="max-w-md w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
