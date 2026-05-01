export type NavItem = {
  href: string;
  label: string;
};

export type OfficeLocation = {
  slug: string;
  label: string;
  region: string;
  address: string;
};

export const SITE_URL = "https://www.threemates.tech";

export const COMPANY_NAME = "Threemates";
export const COMPANY_EMAIL = "info@threemates.tech";
export const COMPANY_PHONE = "+91 93480 32632";
export const COMPANY_WEBSITE = "www.threemates.tech";
export const COMPANY_WEBSITE_URL = SITE_URL;

export const COMPANY_SUMMARY =
  "Threemates builds ERP systems, SaaS products, web platforms, mobile apps, and AI skilling programs for institutions and growth-stage businesses.";

export const NAV_ITEMS: NavItem[] = [
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Products" },
  { href: "/ai-training", label: "AI Training" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const FOOTER_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  ...NAV_ITEMS,
];

export const COMPANY_LOCATIONS: OfficeLocation[] = [
  {
    slug: "maharashtra",
    label: "HQ",
    region: "Maharashtra",
    address:
      "Wework Zenia, 4th Floor, Zenia Building, Arcadia Cir, Hiranandani Estate, Thane West, Maharashtra 400607",
  },
  {
    slug: "odisha",
    label: "Regional",
    region: "Odisha",
    address:
      "Shreehari Vihar, H No 3, Street No 390, Jatni, Khordha, Odisha 752050",
  },
];
