import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarCheck, Settings, ShieldCheck } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ContactBand, PageIntro } from "@/components/site-sections";
import coupe from "@/assets/porsche-coupe.jpg";

export const Route = createFileRoute("/service")({
  head: () => ({ meta: [
    { title: "Сервіс Porsche — Порше Центр Львів" }, { name: "description", content: "Сертифікований сервіс, діагностика та оригінальні запчастини Porsche у Львові." },
    { property: "og:title", content: "Сервіс Porsche у Львові" }, { property: "og:description", content: "Професійний догляд за вашим Porsche." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ServicePage,
});

const services = [{icon: Settings, title:"Технічне обслуговування", text:"Регламентні роботи та діагностика за стандартами виробника."},{icon: ShieldCheck,title:"Оригінальні запчастини",text:"Компоненти Porsche з гарантією якості та точного підбору."},{icon: CalendarCheck,title:"Зручний запис",text:"Оберіть час, а персональний консультант підтвердить ваш візит."}];
function ServicePage() { return <main><PageIntro eyebrow="Porsche Service" title="Точність у кожній деталі." text="Команда сертифікованих фахівців подбає про динаміку, безпеку й довговічність вашого автомобіля."/><section className="content-wrap grid gap-12 pb-24 lg:grid-cols-2 lg:items-center"><img src={coupe} alt="Porsche на гірській дорозі" className="aspect-[4/3] w-full rounded-sm object-cover" width={1536} height={1024}/><div className="space-y-8">{services.map(({icon:Icon,title,text}) => <div key={title} className="flex gap-5"><Icon className="mt-1 size-6 shrink-0"/><div><h2 className="text-xl font-medium">{title}</h2><p className="mt-2 text-muted-foreground">{text}</p></div></div>)}<Link to="/contact" className={buttonVariants({ size: "lg" })}>Записатися на сервіс <ArrowRight/></Link></div></section><ContactBand/></main>; }