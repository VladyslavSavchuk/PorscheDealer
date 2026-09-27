import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { models } from "@/lib/dealer-data";
import hero from "@/assets/porsche-hero.jpg";

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="page-intro"><div className="content-wrap"><p className="eyebrow">{eyebrow}</p><h1 className="page-title">{title}</h1><p className="page-lede">{text}</p></div></section>;
}

export function ModelGrid({ limit }: { limit?: number }) {
  return <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">{models.slice(0, limit).map((model) => {
    const image = model.image === "hero" ? hero : model.image;
    return <article key={model.name} className="group"><img src={image} alt={`${model.name} на дорозі`} className="aspect-[4/3] w-full rounded-sm object-cover transition duration-500 group-hover:scale-[1.01]" loading="lazy" width={1536} height={1024}/><p className="mt-5 text-xs uppercase text-muted-foreground">{model.type}</p><h2 className="mt-1 text-3xl font-medium">{model.name}</h2><p className="mt-2 text-sm text-muted-foreground">{model.note}</p><Link to="/contact" className={buttonVariants({ variant: "secondary", className: "mt-5" })}>Переглянути <ArrowRight /></Link></article>;
  })}</div>;
}

export function ContactBand() {
  return <section className="bg-foreground text-background"><div className="content-wrap grid gap-8 py-16 md:grid-cols-[1.5fr_1fr] md:items-end"><div><p className="eyebrow text-background/60">Порше Центр Львів</p><h2 className="section-title max-w-3xl">Ваш наступний маршрут починається тут.</h2></div><Link to="/contact" className={buttonVariants({ variant: "secondary", size: "lg" })}>Зв’язатися з нами <ArrowRight /></Link></div></section>;
}