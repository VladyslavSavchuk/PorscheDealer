import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, ModelGrid, PageIntro } from "@/components/site-sections";

export const Route = createFileRoute("/models")({
  head: () => ({ meta: [
    { title: "Моделі Porsche — Порше Центр Львів" }, { name: "description", content: "Модельний ряд Porsche: 911, Taycan, Panamera, Macan і Cayenne." },
    { property: "og:title", content: "Моделі Porsche у Львові" }, { property: "og:description", content: "Оберіть модель Porsche, що відповідає вашому характеру." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: ModelsPage,
});

function ModelsPage() { return <main><PageIntro eyebrow="Модельний ряд" title="Кожен Porsche має власний характер." text="Від культового 911 до повністю електричного Macan — знайдіть автомобіль, створений для вашої дороги."/><section className="content-wrap pb-24"><ModelGrid/></section><ContactBand/></main>; }