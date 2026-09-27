import coupe from "@/assets/porsche-coupe.jpg";
import electric from "@/assets/porsche-electric.jpg";
import suv from "@/assets/porsche-suv.jpg";
import macan from "@/assets/porsche-macan.jpg";
import panamera from "@/assets/porsche-panamera.jpg";
import gt3rs from "@/assets/porsche-gt3rs.jpg";
import spyder918 from "@/assets/porsche-918.jpg";

export const models = [
  { name: "911", type: "Спортивний автомобіль", image: coupe, note: "Автомобіль, непідвладний часу." },
  { name: "911 GT3 RS", type: "Трековий спорткар", image: gt3rs, note: "Створений для перемог на треку." },
  { name: "918 Spyder", type: "Гібридний суперкар", image: spyder918, note: "Легенда обмеженої серії." },
  { name: "Taycan", type: "Електричний спорткар", image: electric, note: "Почуття інтенсифіковані." },
  { name: "Panamera", type: "Спортивний седан", image: panamera, note: "Сміливість обирати власний шлях." },
  { name: "Macan Electric", type: "Електричний SUV", image: macan, note: "Бути вірним собі." },
  { name: "Cayenne", type: "Преміальний SUV", image: suv, note: "Час діяти. Керуйте вже зараз." },
] as const;

export const inventory = [
  { name: "2026 Porsche 911 GT3 RS", detail: "Новий автомобіль", power: "525 к.с.", image: gt3rs },
  { name: "Porsche 918 Spyder", detail: "Колекційний автомобіль", power: "887 к.с.", image: spyder918 },
  { name: "2026 Porsche Cayenne", detail: "Новий автомобіль", power: "442 к.с.", image: suv },
  { name: "2026 Porsche Macan 4 Electric", detail: "Новий автомобіль", power: "408 к.с.", image: macan },
  { name: "2025 Porsche 911 Carrera", detail: "Автомобіль з пробігом", power: "394 к.с.", image: coupe },
  { name: "2026 Porsche Panamera 4", detail: "Новий автомобіль", power: "353 к.с.", image: panamera },
] as const;
