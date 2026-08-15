import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

const SITE_ORIGIN = "https://www.maqsadalhramein.com";

function setMeta(selector: string, attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export function Seo({
  title,
  description,
  path,
  schema,
}: {
  title: string;
  description: string;
  path: string;
  schema?: JsonLd;
}) {
  useEffect(() => {
    const canonicalUrl = `${SITE_ORIGIN}${path}`;
    document.title = title;
    document.documentElement.lang = "ar";
    document.documentElement.dir = "rtl";

    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const previousSchema = document.getElementById("route-jsonld");
    if (previousSchema) previousSchema.remove();
    if (schema) {
      const script = document.createElement("script");
      script.id = "route-jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById("route-jsonld")?.remove();
  }, [title, description, path, schema]);

  return null;
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.path}`,
    })),
  };
}

export const travelAgencySchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "مقصد الحرمين للعمرة والزيارة",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/maqsad-logo_2fe7c87d.png`,
  image: `${SITE_ORIGIN}/maqsad-hero-makkah_72ae596d.jpg`,
  telephone: "+966541739626",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+966541739626",
      contactType: "customer service",
      availableLanguage: "ar",
    },
  ],
  areaServed: ["الرياض", "مكة المكرمة", "المدينة المنورة"],
  description: "تنظيم رحلات عمرة من الرياض بخيارات للإقامة الفندقية والنقل بالحافلات.",
};
