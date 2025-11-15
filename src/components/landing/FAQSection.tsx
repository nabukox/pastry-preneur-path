import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl text-center mb-12 text-foreground">
          Preguntas Frecuentes de Futuros Empresarios
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              ¿No puedo encontrar recetas gratis en internet?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              ¡Claro! Pero este no es un libro de recetas, es un <span className="font-semibold text-foreground">plan de negocios</span>. Las recetas gratis no te enseñan a calcular costos, ni a tomar fotos que vendan, ni a manejar la objeción "es muy caro". Esto es un atajo profesional.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="bg-card rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              ¿Y si no sé nada de negocios?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              ¡Perfecto! Ambas guías están diseñadas para <span className="font-semibold text-foreground">reposteros, no para financistas</span>. Hablamos en tu idioma, con ejemplos de cocina y pastelería.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="bg-card rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              ¿Qué pasa si no me gusta?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Tienes una <span className="font-semibold text-foreground">garantía de satisfacción de 7 días</span>. Si sientes que este sistema no es para ti, te devolvemos tu dinero. Sin preguntas.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="bg-card rounded-lg px-6 border border-border">
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              ¿Cómo recibiré los e-books?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              Inmediatamente después de tu pago, recibirás un <span className="font-semibold text-foreground">correo electrónico con los enlaces de descarga directa</span> para ambos e-books en formato PDF.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
