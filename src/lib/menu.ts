export type MenuItem = {
  name: string;
  price: string;
  detail?: string;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Kebabs",
    items: [
      { name: "Kebab", price: "8 €" },
      { name: "Maxi kebab", price: "12 €" },
      { name: "Kebab frites", price: "10 €" },
      { name: "Maxi kebab frites", price: "14 €" },
      { name: "Kebab berlinois", price: "12 €" },
      { name: "Barquette viande kebab", price: "4 €" },
    ],
  },
  {
    title: "Sandwichs",
    items: [
      { name: "Hamburger", price: "7 €" },
      { name: "Américain", price: "9 €" },
      { name: "Paysan", price: "9 €" },
      { name: "Cheese", price: "9 €" },
    ],
  },
  {
    title: "Frites",
    items: [
      { name: "Petite portion frites", price: "2,50 €" },
      { name: "Grande portion frites", price: "4 €" },
      { name: "Frites gourmandes", price: "4 €" },
    ],
  },
  {
    title: "Tacos",
    items: [
      { name: "Tacos 1 viande", price: "8 €" },
      { name: "Tacos 2 viandes", price: "10 €" },
      { name: "Tacos 3 viandes", price: "13,50 €" },
      { name: "Option cordon bleu", price: "+1 €" },
    ],
  },
  {
    title: "Paninis",
    items: [
      { name: "Panini kebab emmental", price: "7 €" },
      { name: "Panini hamburger emmental oignons", price: "7 €" },
      { name: "Panini fromage emmental / feta / cheddar", price: "6 €" },
      { name: "Panini Nutella", price: "4 €" },
    ],
  },
  {
    title: "Suppléments",
    items: [
      { name: "Galette de pomme de terre ou frites", price: "2 €" },
      { name: "Viande", price: "3 €" },
      { name: "Cheddar / emmental", price: "1,50 €" },
      { name: "Sauce", price: "1 €" },
    ],
  },
  {
    title: "Menu enfant",
    items: [
      {
        name: "Menu enfant",
        price: "7 €",
        detail: "Viande kebab ou nuggets, frites, 1 Capri-Sun",
      },
    ],
  },
];

export const sauces = [
  "Blanche maison",
  "Mayonnaise",
  "Ketchup",
  "Samouraï",
  "Algérienne",
  "Harissa",
];
