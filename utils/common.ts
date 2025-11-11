export type BreadcrumbItem = { label: string; href?: string }

export function buildProductBreadcrumbs(productName: string, category?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }]
  if (category) items.push({ label: category, href: `/category/${encodeURIComponent(category)}` })
  items.push({ label: productName })
  return items
}