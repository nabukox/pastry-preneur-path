import { Check } from "lucide-react";
import ebookBrownies from "@/assets/portada-mockup.jpg";

export const SolutionSection = () => {
  return (
    <section className="py-20 px-6 bg-section-alt">
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Un Producto Estrella. Rentable y Adictivo.
            </h2>
            
            <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
              No necesitas un menú de 50 productos. Necesitas <span className="font-bold text-foreground">UNO que sea perfecto</span>. Te presento el e-book <span className="font-bold text-foreground">"Brownies Estilo New York Para Emprender"</span>.
            </p>
            
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
              No es solo una receta; es un <span className="font-bold text-foreground">plan de negocios completo</span> enfocado en un solo producto de altísima demanda y gran margen de ganancia.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Con este libro conocerás los secretos para crear tu negocio de brownies desde casa, <span className="font-semibold">ahorrándote entre $300 y $500 dólares</span> que cuesta un curso presencial.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Aprenderás <span className="font-semibold">a tu propio ritmo</span>, sin presiones y de una forma fácil y garantizada.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Podrás descargar el libro a tu celular o computador, para que lo <span className="font-semibold">estudies en cualquier parte</span> y a cualquier hora del día.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Al terminar de leerlo, tendrás el conocimiento para generar ganancias de <span className="font-semibold">$100 a $500 dólares semanales</span> elaborando Brownies de altísima calidad.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src={ebookBrownies} 
              alt="E-book Brownies Estilo New York Para Emprender"
              className="max-w-md w-full drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
