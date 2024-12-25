import { PageLink } from "@/components/Header";

const isProd = process.env.NODE_ENV === "production";

export const BASE_PATH = isProd? "/intuit" : "";

export const PAGE_LINKS: Array<PageLink> = [
  {
    pageName: "Home",
    endpoint: "/"
  }, 
  {
    pageName: "Blog",
    endpoint: "/blog"
  }, 
  {
    pageName: "About",
    endpoint: "/about"
  }
];