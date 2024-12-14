import { PageLink } from "@/components/Header";

const isProd = process.env.NODE_ENV === "production";

export const BASE_PATH = isProd? "/intuit-blog" : "";

export const PAGE_LINKS: Array<PageLink> = [
  {pageName: "Home"}, 
  {pageName: "Blog"}, 
  {pageName: "About"}
];