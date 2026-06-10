export type HeaderMenuItem = {
  id: string;
  label: string;
  labelEn: string;
  to: string;
  children?: HeaderMenuItem[];
};

export const headerMenu: HeaderMenuItem[] = [
  {
    id: "home",
    label: "خانه",
    labelEn: "خانه",
    to: "/",
  },
  {
    id: "about",
    label: "درباره من",
    labelEn: "درباره من",
    to: "/about",
  },
  {
    id: "services",
    label: "خدمات",
    labelEn: "درباره من",
    to: "/services",
  },
  {
    id: "approach",
    label: "رویکرد درمانی",
    labelEn: "درباره من",
    to: "/approach",
  },
  {
    id: "articles",
    label: "مقالات",
    labelEn: "درباره من",
    to: "/articles",
  },
  {
    id: "contact",
    label: "تماس با من",
    labelEn: "درباره من",
    to: "/contact",
  },
  // {
  //   id: "services",
  //   label: "خدمات",
  //   labelEn: "خدمات",
  //   to: "/services",
  //   children: [
  //     {
  //       id: "individual-therapy",
  //       label: "درمان فردی",
  //       labelEn: "درمان فردی",
  //       to: "/services/individual-therapy",
  //     },
  //     {
  //       id: "couple-therapy",
  //       label: "درمان فردی",
  //       labelEn: "زوج درمانی",
  //       to: "/services/couple-therapy",
  //     },
  //     {
  //       id: "family-therapy",
  //       label: "درمان فردی",
  //       labelEn: "خانواده درمانی",
  //       to: "/services/family-therapy",
  //     },
  //     {
  //       id: "online-therapy",
  //       label: "درمان فردی",
  //       labelEn: "مشاوره آنلاین",
  //       to: "/services/online-therapy",
  //     },
  //   ],
  // },
];