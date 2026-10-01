import { Link } from "@tanstack/react-router";
import { CarFront, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Моделі", to: "/models" as const },
  { label: "Автомобілі в наявності", to: "/inventory" as const },
  { label: "Сервіс", to: "/service" as const },
  { label: "Про нас", to: "/about" as const },
  { label: "Контакти", to: "/contact" as const },
];

export function DealerShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Button variant="ghost" className="px-2 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Відкрити меню">
            {open ? <X /> : <Menu />}
          </Button>
          <Link to="/" className="brand-wordmark" aria-label="Porsche Center Lviv">PORSCHE</Link>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Основна навігація">
            {nav.map((item) => (
              <Link key={item.to} to={item.to} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>
            ))}
          </nav>
          <Link to="/contact" className="flex items-center gap-2 text-sm font-medium"><MapPin className="size-4" /><span className="hidden sm:inline">Порше Центр Львів</span></Link>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Мобільна навігація">
            {nav.map((item) => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-lg">{item.label}</Link>)}
          </nav>
        )}
      </header>
      {children}
      <UtilityBar />
      <Developers />
      <Footer />
    </div>
  );
}

export function UtilityBar() {
  return (
    <section className="bg-utility text-utility-foreground">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-4 py-5 md:grid-cols-4">
        <a className="utility-link" href="tel:0322560356"><Phone />0322 560 356</a>
        <a className="utility-link" href="mailto:info@porsche.lviv.ua"><Mail />Запит на пропозицію</a>
        <Link className="utility-link" to="/contact"><CarFront />Тест-драйв</Link>
        <Link className="utility-link" to="/contact"><MapPin />Місцезнаходження</Link>
      </div>
    </section>
  );
}

function Developers() {
  const developers = [
    { name: "Vladyslav Savchuk", role: "Architect / Team Lead" },
    { name: "Oleksandr Koval", role: "Developer" },
    { name: "Yulian Nosovych", role: "Developer" },
    { name: "Taras Lychyk", role: "Expert" },
    { name: "Roman Sydoruk", role: "QC Engineer / Closer" },
    { name: "Kyryl Skliar", role: "Analyst, Developer" },
    { name: "Artem Baraniuk", role: "Idea Generator / Expert" },
    { name: "Oleh Cholivskiy", role: "Coordinator" },
  ];

  return (
    <section className="border-t border-border bg-background" aria-labelledby="developers-title">
      <div className="content-wrap py-10">
        <h2 id="developers-title" className="text-xl font-medium">Developers</h2>
        <ul className="mt-5 grid gap-x-10 md:grid-cols-2">
          {developers.map((developer) => (
            <li key={developer.name} className="flex flex-col gap-1 border-t border-border py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span className="font-medium">{developer.name}</span>
              <span className="text-sm text-muted-foreground">{developer.role}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><div className="brand-wordmark brand-wordmark-light">PORSCHE</div><p className="mt-5 max-w-md text-sm text-footer-muted">Офіційний дилерський центр Porsche у Західному регіоні. Продаж, сервіс і оригінальні аксесуари.</p></div>
        <div><h2 className="footer-title">Контакти</h2><a href="tel:0322560356" className="footer-link">0322 560 356</a><a href="mailto:info@porsche.lviv.ua" className="footer-link">info@porsche.lviv.ua</a><p className="footer-link">м. Львів, вул. Дж. Вашингтона, 8</p></div>
        <div><h2 className="footer-title">Навігація</h2>{nav.slice(0,4).map((item) => <Link key={item.to} to={item.to} className="footer-link">{item.label}</Link>)}</div>
      </div>
      <div className="border-t border-footer-border px-5 py-6 text-center text-xs text-footer-muted">Порше Центр Львів © 2026 · Інформація на сайті має ознайомчий характер.</div>
    </footer>
  );
}