import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactBand, ModelGrid } from "@/components/site-sections";
import hero from "@/assets/porsche-hero.jpg";
import coupe from "@/assets/porsche-coupe.jpg";
import suv from "@/assets/porsche-suv.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Порше Центр Львів — офіційний дилер Porsche" },
    { name: "description", content: "Нові автомобілі Porsche, авто в наявності, сервіс і тест-драйв у Львові." },
    { property: "og:title", content: "Порше Центр Львів" },
    { property: "og:description", content: "Відкрийте світ Porsche у Львові." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="relative min-h-[72vh] overflow-hidden bg-foreground">
        <img src={hero} alt="Спортивний автомобіль у місті" className="absolute inset-0 h-full w-full object-cover" width={1920} height={1080}/>
        <div className="hero-shade absolute inset-0" />
        <div className="content-wrap relative flex min-h-[72vh] items-end pb-14 text-background md:pb-20">
          <div className="max-w-3xl"><p className="mb-4 text-sm font-semibold uppercase">Порше Центр Львів</p><h1 className="text-5xl font-medium md:text-7xl">Відчуйте Porsche.</h1><p className="mt-5 max-w-xl text-lg text-background/80">Спортивні автомобілі, індивідуальна консультація та сервіс, якому довіряють.</p><Link to="/models" className={buttonVariants({ variant: "secondary", size: "lg", className: "mt-7" })}>Відкрити моделі <ArrowRight /></Link></div>
        </div>
      </section>
      <section className="content-wrap py-20"><div className="section-heading"><div><p className="eyebrow">Конфігуратор Porsche</p><h2 className="section-title">Оберіть характер</h2></div><Link to="/models" className="text-link">Усі моделі <ArrowRight /></Link></div><ModelGrid limit={3}/></section>
      <section className="bg-secondary"><div className="content-wrap py-20"><p className="eyebrow">Автомобілі в наявності</p><h2 className="section-title mb-10">Знайдіть свій Porsche</h2><div className="grid gap-6 md:grid-cols-2"><Feature image={suv} title="Пошук нових авто" to="/inventory"/><Feature image={coupe} title="Авто з пробігом" to="/inventory"/></div></div></section>
      <ContactBand />
    </main>
  );
}

function Feature({ image, title, to }: { image: string; title: string; to: "/inventory" }) {
  return <Link to={to} className="group relative aspect-[4/3] overflow-hidden rounded-sm bg-foreground"><img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" width={1536} height={1024}/><div className="hero-shade absolute inset-0"/><div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-7 text-background"><h3 className="text-2xl font-medium">{title}</h3><ArrowRight className="size-6"/></div></Link>;
}
