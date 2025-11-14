import { Card, CardContent } from "@/components/ui/card";
import bonusRecetas from "@/assets/bonus-recetas.jpg";
import bonusHelados from "@/assets/bonus-helados.jpg";
import bonusPostresFrios from "@/assets/bonus-postres-frios.jpg";
import bonusPostresSaludables from "@/assets/bonus-postres-saludables.jpg";
import bonusPostresVeganos from "@/assets/bonus-postres-veganos.jpg";

const bonuses = [
  {
    id: 1,
    image: bonusRecetas,
    title: "BONO 1: Más de 200 Exclusivas Recetas",
    value: "$20.00",
    description: "Domina el brownie... y luego domina todo lo demás. Este recetario digital es tu biblioteca personal para nunca quedarte sin ideas. Sorprende a tus clientes y familia con pasteles, galletas, flanes y tartas para toda ocasión."
  },
  {
    id: 2,
    image: bonusHelados,
    title: "BONO 2: Helados Saludables",
    value: "$15.00",
    description: "Aprende a crear helados cremosos, deliciosos y 100% saludables. Ideal para vender un producto refrescante y \"libre de culpa\" que tus clientes amarán. Perfecto para complementar tus brownies con una bola de helado casero."
  },
  {
    id: 3,
    image: bonusPostresFrios,
    title: "BONO 3: Postres Fríos",
    value: "$10.00",
    description: "No todo requiere un horno. Descubre el mundo de los cheesecakes sin horneado, mousses, gelatinas gourmet y panna cottas. Estos postres son fáciles de preparar, muy rentables y perfectos para vender en temporadas de calor."
  },
  {
    id: 4,
    image: bonusPostresSaludables,
    title: "BONO 4: Postres Saludables",
    value: "$15.00",
    description: "El mercado 'fit' y saludable está creciendo. Aprende a sustituir ingredientes para crear postres bajos en azúcar, sin harinas refinadas y con super-ingredientes. Un recetario esencial para captar al público que quiere cuidarse sin sacrificar el sabor."
  },
  {
    id: 5,
    image: bonusPostresVeganos,
    title: "BONO 5: Postres Veganos",
    value: "$15.00",
    description: "El veganismo no es una moda, es un mercado millonario. Con este recetario, aprenderás a crear postres premium sin huevo, leche ni mantequilla que saben incluso mejor que los tradicionales. (¡Perfecto para adaptar tus brownies y duplicar tu público!)"
  }
];

export const BonusesSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            ¡Llévate la Receta Maestra... Y TODO este Paquete de Bonos GRATIS!
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-accent">
            Valor Total de Bonos: $75.00 - ¡Hoy Gratis con tu Compra!
          </p>
        </div>

        <div className="space-y-8">
          {bonuses.map((bonus) => (
            <Card key={bonus.id} className="overflow-hidden shadow-strong border-border/50 hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-[40%_60%] gap-6 items-center">
                  <div className="relative aspect-square md:aspect-auto md:h-full overflow-hidden">
                    <img 
                      src={bonus.image} 
                      alt={bonus.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6 md:pr-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                      {bonus.title}
                    </h3>
                    <p className="text-xl font-semibold text-value-highlight mb-4">
                      Valor: {bonus.value}
                    </p>
                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                      {bonus.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
