import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { PageIntro } from "@/components/site-sections";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Контакти — Порше Центр Львів" }, { name: "description", content: "Адреса, телефони та години роботи Порше Центр Львів." },
    { property: "og:title", content: "Зв’язатися з Порше Центр Львів" }, { property: "og:description", content: "м. Львів, вул. Дж. Вашингтона, 8." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ContactPage,
});

function ContactPage() { return <main><PageIntro eyebrow="Зв’язок" title="Раді вас бачити." text="Зателефонуйте, напишіть або завітайте до нас. Команда Порше Центр Львів допоможе з вибором автомобіля чи сервісом."/><section className="content-wrap grid gap-10 pb-24 lg:grid-cols-[1.15fr_.85fr]"><div className="map-panel"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-road road-three"/><div className="map-pin"><MapPin/></div><span className="map-label">Порше Центр Львів</span></div><div className="bg-foreground p-8 text-background md:p-10"><h2 className="text-3xl font-medium">Зв’яжіться з нами</h2><div className="mt-8 space-y-6"><a href="tel:0322560356" className="contact-row"><Phone/>0322 560 356</a><a href="tel:0322560911" className="contact-row"><Phone/>Сервіс: 0322 560 911</a><a href="mailto:info@porsche.lviv.ua" className="contact-row"><Mail/>info@porsche.lviv.ua</a><a href="https://maps.google.com/?q=Порше+Центр+Львів" className="contact-row" target="_blank" rel="noreferrer"><MapPin/>м. Львів, вул. Дж. Вашингтона, 8</a></div><a href="mailto:info@porsche.lviv.ua?subject=Запит на пропозицію" className={buttonVariants({ variant: "secondary", className: "mt-9" })}>Запит на пропозицію</a></div></section><section className="content-wrap grid gap-10 border-t border-border py-20 md:grid-cols-3"><Info title="Автосалон" lines={["Пн–Пт 10:00–19:00","Субота 10:00–15:00","Неділя — зачинено"]}/><Info title="Сервіс" lines={["Пн–Пт 09:00–18:00","Субота 09:00–15:00","Неділя — зачинено"]}/><Info title="Адреса" lines={["Порше Центр Львів","вул. Дж. Вашингтона, 8","Львів, Україна"]}/></section></main>; }
function Info({title,lines}:{title:string;lines:string[]}) { return <div><h2 className="text-2xl font-medium">{title}</h2>{lines.map((line) => <p key={line} className="mt-3 text-muted-foreground">{line}</p>)}</div>; }