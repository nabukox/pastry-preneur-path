import { Brain, Camera, MessageCircle, Shield, TrendingUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const BookContentSection = () => {
  const sections = [
    {
      id: "parte-1",
      icon: Brain,
      title: 'PARTE 1: EL "MISE EN PLACE" MENTAL',
      content: (
        <>
          Deja de temer a la palabra "vender". En esta sección, cambiarás tu mentalidad de{" "}
          <span className="font-semibold text-foreground">artista a empresario</span>. Entenderás la psicología de tus clientes{" "}
          <span className="font-semibold text-foreground">(¿compran estatus, confort o celebración?)</span> y usarás "disparadores mentales" como la escasez y la anticipación para crear un{" "}
          <span className="font-semibold text-foreground">antojo irresistible antes de que el producto siquiera salga del horno</span>.
        </>
      ),
    },
    {
      id: "parte-2",
      icon: Camera,
      title: "PARTE 2: LA VITRINA DIGITAL (CÓMO VENDER SIN HABLAR)",
      content: (
        <>
          En redes sociales, la gente "come con los ojos primero". Aquí tienes un{" "}
          <span className="font-semibold text-foreground">taller práctico para tomar fotos "Food Porn"</span> que provoquen deseo visceral e inmediato. Aprenderás a dominar la luz natural de tu ventana y los ángulos de tu celular para mostrar{" "}
          <span className="font-semibold text-foreground">texturas cremosas, cortes jugosos y migas perfectas</span>.
        </>
      ),
    },
    {
      id: "parte-3",
      icon: MessageCircle,
      title: "PARTE 3: LA CONVERSACIÓN QUE CIERRA EL PEDIDO",
      content: (
        <>
          Transforma el temido "¿Precio?" en{" "}
          <span className="font-semibold text-foreground">una venta cerrada</span>. Te daremos los{" "}
          <span className="font-semibold text-foreground">guiones exactos para usar en WhatsApp Business</span> y la fórmula para calcular tu precio justo (que incluye tu tiempo, costos fijos y ganancia). Además, incluye{" "}
          <span className="font-semibold text-foreground">plantillas para crear cotizaciones profesionales</span> (especial para bodas) que justifiquen tu arte.
        </>
      ),
    },
    {
      id: "parte-4",
      icon: Shield,
      title: "PARTE 4: EL MOMENTO DE LA VERDAD (MANEJO DE OBJECIONES)",
      content: (
        <>
          Domina la objeción más difícil:{" "}
          <span className="font-semibold text-foreground">"Es muy caro"</span>. Te enseñaremos a responder con valor y diferenciarte de la competencia industrial, sin bajar tu precio. También aprenderás a manejar{" "}
          <span className="font-semibold text-foreground">clientes difíciles (los enojados, los indecisos, los que piden imposibles)</span> y a aplicar técnicas de cierre para confirmar el pedido.
        </>
      ),
    },
    {
      id: "parte-5",
      icon: TrendingUp,
      title: "PARTE 5: LA CEREZA DEL PASTEL (AUMENTA TU RENTABILIDAD)",
      content: (
        <>
          La venta no termina con el "sí". Aprende cómo{" "}
          <span className="font-semibold text-foreground">aumentar el valor de CADA pedido</span>. Te enseñamos las técnicas de{" "}
          <span className="font-semibold text-foreground">Up-selling (ofrecer una versión mejor o más grande)</span> y{" "}
          <span className="font-semibold text-foreground">Cross-selling (vender el complemento perfecto</span>, como las galletas a juego con el pastel o el café para el croissant). Esto es pura rentabilidad.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Un Vistazo al Interior: ¿Qué Aprenderás?
          </h2>
          <p className="text-xl text-muted-foreground">
            Tu Transformación, Capítulo a Capítulo
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="parte-1" className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border-2 border-border rounded-xl bg-card overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
              >
                <AccordionTrigger className="px-6 py-5 hover:no-underline group">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="pl-16 pt-2">
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};
