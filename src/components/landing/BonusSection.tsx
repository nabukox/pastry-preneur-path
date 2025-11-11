import { Flame, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import ebookVentas from "@/assets/ebook-ventas-mockup.jpg";

export const BonusSection = () => {
  const handleCTA = () => {
    document.getElementById("value-stack")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 px-6 bg-primary/5">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Pero una gran receta no es suficiente. Por eso, hoy te REGALAMOS el "ingrediente secreto"...
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            El verdadero problema nunca fue tu sazón. Es el miedo a vender. Por eso, al comprar la guía de Brownies, recibirás <span className="font-bold text-accent">GRATIS</span> el e-book valorado en <span className="font-bold text-foreground">$49.99</span>: <span className="italic font-bold text-foreground">"El Arte de Vender... Pasteles: De Repostero Apasionado a Emprendedor Exitoso"</span>.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={ebookVentas} 
                alt="E-book El Arte de Vender Pasteles - Regalo"
                className="max-w-md w-full drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-value-highlight text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg transform rotate-12 shadow-strong">
                REGALO
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Por qué este Bono es la Clave:
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <Flame className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Aprenderás a vender como un <span className="font-semibold">"Chef Consultor"</span>, no como un despachador.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Flame className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Dominarás el <span className="font-semibold">Taller de Fotografía "Food Porn"</span> para tomar fotos que antojan solo con tu celular.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Flame className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Tendrás los <span className="font-semibold">guiones exactos de WhatsApp</span> para cerrar pedidos sin sonar insistente.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <Flame className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="text-base text-foreground">
                  Sabrás cómo responder a la objeción <span className="font-semibold">"Es muy caro"</span> sin tener que bajar tu precio.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl"
            onClick={handleCTA}
          >
            OBTENER LOS DOS LIBROS AHORA
          </Button>
        </div>
      </div>
    </section>
  );
};
