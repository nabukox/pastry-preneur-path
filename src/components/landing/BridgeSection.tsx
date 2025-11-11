import { Sparkles } from "lucide-react";
import heroBrownies from "@/assets/hero-brownies.jpg";

export const BridgeSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroBrownies})`,
          filter: 'brightness(0.3)'
        }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      <div className="container max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold text-white">
              ¿Te identificas con eso? Tranquila, no es tu culpa.
            </p>
            
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px w-20 bg-accent/30"></div>
              <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              <div className="h-px w-20 bg-accent/30"></div>
            </div>
            
            <p className="text-2xl md:text-3xl font-bold text-accent">
              Ahora, imagina esto...
            </p>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-strong border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
              <p className="text-lg md:text-xl text-foreground font-medium">
                ¿Si pudieras generar ingresos extras desde casa con un talento que ya tienes?
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-strong border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
              <p className="text-lg md:text-xl text-foreground font-medium">
                ¿Si tuvieras el paso a paso exacto y garantizado para crear deliciosos (y rentables) Brownies Estilo New York?
              </p>
            </div>
            
            <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-strong border border-accent/20 hover:border-accent/40 transition-all duration-300 hover:scale-105">
              <p className="text-lg md:text-xl text-foreground font-medium">
                ¿Y si pudieras aprenderlo todo en menos de 7 días y tener las herramientas para lanzar tu propio negocio?
              </p>
            </div>
          </div>
          
          <div className="pt-8">
            <p className="text-2xl md:text-3xl font-bold text-white">
              La solución es empezar con <span className="text-accent">UN producto perfecto</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
