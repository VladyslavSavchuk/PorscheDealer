import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactBand, PageIntro } from "@/components/site-sections";
import hero from "@/assets/porsche-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Про Порше Центр Львів" }, { name: "description", content: "Знайомство з Порше Центр Львів — офіційним дилером Porsche у Західній Україні." },
    { property: "og:title", content: "Про Порше Центр Львів" }, { property: "og:description", content: "Місце, де пристрасть до спортивних автомобілів стає особистим досвідом." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: AboutPage,
});

function AboutPage() { return <main><PageIntro eyebrow="Про нас" title="Пристрасть, що рухає Львів." text="Ми створюємо персональний досвід володіння Porsche — від першого знайомства до кожного наступного кілометра."/><section className="content-wrap pb-24"><img src={hero} alt="Спортивний автомобіль у європейському місті" className="aspect-[16/7] w-full rounded-sm object-cover" width={1920} height={1080}/><div className="mt-12 grid gap-10 md:grid-cols-3"><Stat value="Офіційний" label="дилер Porsche у регіоні"/><Stat value="360°" label="продаж, сервіс і підтримка"/><Stat value="Особисто" label="консультація для кожного клієнта"/></div><div className="mt-16 grid gap-8 border-t border-border pt-12 md:grid-cols-2"><h2 className="section-title">Більше, ніж автомобіль.</h2><div><p className="text-lg leading-8 text-muted-foreground">Порше Центр Львів об’єднує інженерну досконалість, турботу про деталі та живу автомобільну культуру. Ми допомагаємо обрати модель, сформувати комплектацію та підтримуємо ваш Porsche на всьому шляху.</p><Link to="/contact" className={buttonVariants({ className: "mt-7" })}>Відвідати центр <ArrowRight/></Link></div></div></section><ContactBand/></main>; }
function Stat({value,label}:{value:string;label:string}) { return <div><p className="text-4xl font-medium">{value}</p><p className="mt-2 text-muted-foreground">{label}</p></div>; }