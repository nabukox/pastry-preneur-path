import { Button } from "@/components/ui/button";
import { Clock, Zap } from "lucide-react";

export const QuickTimelineSection = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary-foreground rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container max-w-5xl mx-auto relative z-10 text-center">
        {/* Animated icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Clock className="w-20 h-20 text-primary-foreground animate-pulse" />
            <Zap className="w-10 h-10 text-value-highlight absolute -top-2 -right-2 animate-bounce" />
          </div>
        </div>

        {/* Main headline */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-primary-foreground leading-tight">
          Todo en menos de{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-value-highlight animate-pulse">
              7 días
            </span>
            <span className="absolute inset-0 blur-xl bg-value-highlight/50 animate-pulse" />
          </span>
        </h2>

        {/* Supporting text */}
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto">
          Desde que recibes las guías hasta que haces tu primera venta. 
          <span className="block mt-2 font-semibold">¿Estás list@ para empezar?</span>
        </p>

        {/* Animated CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="xl"
            className="group relative overflow-hidden"
          >
            <span className="relative z-10">
              COMIENZA AHORA
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          </Button>
        </div>

        {/* Urgency indicator */}
        <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full border border-primary-foreground/20">
          <div className="w-2 h-2 bg-value-highlight rounded-full animate-pulse" />
          <p className="text-sm text-primary-foreground/80">
            Oferta por tiempo limitado
          </p>
        </div>
      </div>
    </section>
  );
};
