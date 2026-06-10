import { buildBreadcrumbJsonLd, type BreadcrumbItem } from '@/lib/seo/breadcrumbs';

type BreadcrumbJsonLdProps = {
  items: BreadcrumbItem[];
};

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildBreadcrumbJsonLd(items)),
      }}
    />
  );
}
