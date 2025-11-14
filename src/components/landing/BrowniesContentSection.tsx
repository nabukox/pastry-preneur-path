import { Cookie, Soup, Flame, ChefHat, HelpCircle, DollarSign } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const BrowniesContentSection = () => {
  const sections = [
    {
      id: "modulo-1",
      icon: Cookie,
      title: 'MÓDULO 1: LA INTRODUCCIÓN AL PRODUCTO ESTRELLA',
      content: (
        <>
          Entiende por qué estos brownies no son como los demás. Aprenderás qué los hace tan deseados{" "}
          <span className="font-semibold text-foreground">(textura densa, interior fudgy y corteza crujiente)</span> y por qué son el producto perfecto para emprender:{" "}
          <span className="font-semibold text-foreground">alta demanda y bajo costo de producción</span>.
        </>
      ),
    },
    {
      id: "modulo-2",
      icon: Soup,
      title: "MÓDULO 2: INGREDIENTES Y HERRAMIENTAS ESENCIALES",
      content: (
        <>
          Domina la base de un producto premium. Te daremos la{" "}
          <span className="font-semibold text-foreground">lista exacta de ingredientes clave</span> (como el chocolate de alta calidad y la mezcla de azúcares) y las herramientas esenciales. Aprenderás a{" "}
          <span className="font-semibold text-foreground">elegir los mejores ingredientes y a gestionar proveedores</span>.
        </>
      ),
    },
    {
      id: "modulo-3",
      icon: Flame,
      title: "MÓDULO 3: PREPARACIÓN PASO A PASO (LA RECETA)",
      content: (
        <>
          ¡La receta completa está aquí! Te guiaremos paso a paso para conseguir la{" "}
          <span className="font-semibold text-foreground">mezcla perfecta, la técnica de mezclado para una textura fudgy</span> (sin sobrebatir) y el{" "}
          <span className="font-semibold text-foreground">horneado exacto para lograr el punto perfecto</span>. Incluye consejos para decorar y presentar tus brownies de forma irresistible.
        </>
      ),
    },
    {
      id: "modulo-4",
      icon: ChefHat,
      title: "MÓDULO 4: CONSEJOS AVANZADOS Y VARIACIONES",
      content: (
        <>
          Multiplica tu menú y tus ventas. Aprende a crear variaciones de la receta base para atraer a más clientes:{" "}
          <span className="font-semibold text-foreground">brownies con nueces, veganos, sin gluten, con caramelo o frambuesas</span>. También cubrimos{" "}
          <span className="font-semibold text-foreground">técnicas de conservación y embalaje</span> para que tu producto se mantenga fresco.
        </>
      ),
    },
    {
      id: "modulo-5",
      icon: HelpCircle,
      title: "MÓDULO 5: SOLUCIÓN DE PROBLEMAS (FAQ)",
      content: (
        <>
          Te ahorramos dinero y tiempo en pruebas fallidas. Respondemos las dudas más comunes:{" "}
          <span className="font-semibold text-foreground">¿Puedo usar margarina en lugar de mantequilla? ¿Cómo sé si está perfectamente cocido? ¿El cacao debe ser amargo o dulce? ¿Puedo reducir el azúcar?</span>
        </>
      ),
    },
    {
      id: "modulo-6",
      icon: DollarSign,
      title: "MÓDULO 6: EMPRENDE CON BROWNIES (EL NEGOCIO)",
      content: (
        <>
          Aquí es donde la receta se convierte en dinero. Aprende a{" "}
          <span className="font-semibold text-foreground">calcular el precio correcto de tus brownies para ser rentable</span> (costos + margen de ganancia). Te damos{" "}
          <span className="font-semibold text-foreground">estrategias probadas para vender tus primeras tandas</span> a conocidos y familiares y cómo usar Instagram y Facebook para atraer clientes.
        </>
      ),
    },
  ];

  return (
    <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            El Menú Completo: De la Mezcla a la Venta
          </h2>
          <p className="text-xl text-muted-foreground">
            Brownies Estilo New York Para Emprender
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="modulo-1" className="space-y-4">
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
