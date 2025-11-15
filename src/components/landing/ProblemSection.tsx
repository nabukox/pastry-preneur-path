import { Calculator, Store, Frown } from "lucide-react";

export const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-8 text-foreground">
          Ser un "repostero apasionado" no paga las facturas.
        </h2>
        
        <p className="text-lg md:text-xl text-center mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Seamos honestos: dominas el ganache y tu buttercream es sedosa. Has dedicado años a perfeccionar tu arte. Pero un día, miras tu vitrina llena y descubres el ingrediente que no te enseñaron: <span className="font-bold text-foreground">la venta</span>.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex gap-4 items-start p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <Store className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-lg text-card-foreground">
              ¿Tus postres son increíbles pero solo te compran tus familiares?
            </p>
          </div>
          
          <div className="flex gap-4 items-start p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <Frown className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-lg text-card-foreground">
              ¿Te da pánico la palabra "vender" porque no quieres sonar insistente?
            </p>
          </div>
          
          <div className="flex gap-4 items-start p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <Calculator className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-lg text-card-foreground">
              ¿No tienes idea de cómo calcular tus precios y terminas "pagando por trabajar"?
            </p>
          </div>
          
          <div className="flex gap-4 items-start p-6 bg-card rounded-lg shadow-soft">
            <div className="flex-shrink-0">
              <Frown className="w-8 h-8 text-muted-foreground" />
            </div>
            <p className="text-lg text-card-foreground">
              ¿Sientes que tienes un hobby muy caro, en lugar de un negocio?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
