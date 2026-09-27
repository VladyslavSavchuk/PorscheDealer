import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Gauge, Zap } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { ContactBand, PageIntro } from "@/components/site-sections";
import { inventory } from "@/lib/dealer-data";
import hero from "@/assets/porsche-hero.jpg";

export const Route = createFileRoute("/inventory")({
  head: () => ({ meta: [
    { title: "Автомобілі в наявності — Порше Центр Львів" }, { name: "description", content: "Нові та перевірені автомобілі Porsche в наявності у Львові." },
    { property: "og:title", content: "Porsche в наявності у Львові" }, { property: "og:description", content: "Оберіть доступний автомобіль та запишіться на консультацію." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: InventoryPage,
});

function InventoryPage() { return <main><PageIntro eyebrow="Негайна готовність" title="Автомобілі в наявності" text="Добірка нових автомобілів та Porsche з пробігом. Актуальну комплектацію і вартість уточнюйте у консультанта."/><section className="content-wrap pb-24"><div className="mb-8 flex flex-wrap gap-2"><Button variant="default">Усі</Button><Button variant="outline">Нові</Button><Button variant="outline">З пробігом</Button><Button variant="outline">Електричні</Button></div><div className="grid gap-8 md:grid-cols-2">{inventory.map((car) => <article key={car.name} className="border-b border-border pb-8"><img src={car.image === "hero" ? hero : car.image} alt={car.name} className="aspect-[16/10] w-full rounded-sm object-cover" loading="lazy" width={1536} height={1024}/><p className="mt-5 text-sm text-muted-foreground">{car.detail}</p><h2 className="mt-1 text-2xl font-medium">{car.name}</h2><div className="mt-4 flex gap-6 text-sm"><span className="flex items-center gap-2"><Gauge className="size-4"/>0 км</span><span className="flex items-center gap-2"><Zap className="size-4"/>{car.power}</span></div><Link to="/contact" className={buttonVariants({ className: "mt-6" })}>Дізнатися більше <ArrowRight/></Link></article>)}</div></section><ContactBand/></main>; }